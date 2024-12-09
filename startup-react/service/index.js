const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(cookieParser());


app.use(express.static('public'));

app.set('trust proxy', true);

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

//authtoken created
apiRouter.post('/auth/create', async (req, res) => {
  const { email, password } = req.body;

  if (users[email]) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = {
      email,
      password: await bcrypt.hash(password, 10),
      token: uuid.v4(),
    };
    users[email] = user;

    setAuthCookie(res, user.token);
    res.send({ id: user.email });
  }
});

// get authtoken
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (user && await bcrypt.compare(password, user.password)) {
    user.token = uuid.v4();
    setAuthCookie(res, user.token);
    res.send({ id: user.email });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// DeleteAuth
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

//verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = Object.values(users).find(u => u.token === authToken);

  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetScores
secureApiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// submitScore
secureApiRouter.post('/score', (req, res) => {
  const { voter, votes } = req.body;

  if (!users[voter]) {
    res.status(400).send({ msg: 'Voter not recognized' });
    return;
  }

  scores = updateScores(votes, scores);
  res.send(scores);
});

// Default error handler
app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// update helper
function updateScores(votes, scores) {
  for (const vote of votes) {
    const scoreEntry = scores.find(s => s.name === vote.name);
    if (scoreEntry) {
      scoreEntry.score += vote.score;
    }
  }
  return scores;
}

// Start the server
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});