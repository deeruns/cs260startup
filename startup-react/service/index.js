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
// new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      token: uuid.v4(),
    };
    users[newUser.email] = newUser;
    res.send({ token: newUser.token });
  }
});
// Login
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user && req.body.password === user.password) {
    user.token = uuid.v4();
    res.send({ token: user.token });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
// Logout
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

//get scores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// update scores
apiRouter.post('/score', (req, res) => {
  const { voter, votes } = req.body;

  if (!users[voter]) {
    res.status(400).send({ msg: 'Voter not recognized' });
    return;
  }

  scores = updateScores(votes, scores);
  res.send(scores);
});

// Fallback for unknown paths
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//update
function updateScores(votes, scores) {
  for (const vote of votes) {
    const scoreEntry = scores.find((s) => s.name === vote.name);
    if (scoreEntry) {
      scoreEntry.score += vote.score;
    }
  }
  return scores;
}