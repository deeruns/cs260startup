const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const DB = require('./database.js');

const app = express();
const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create new user
apiRouter.post('/auth/create', async (req, res) => {
  const { email, password } = req.body;

  if (await DB.getUser(email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(email, password);
    setAuthCookie(res, user.token);
    res.send({ id: user.email });
  }
});

// Login user
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await DB.getUser(email);

  if (user && await bcrypt.compare(password, user.password)) {
    user.token = uuid.v4();
    setAuthCookie(res, user.token);
    res.send({ id: user.email });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Logout user
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Secure API routes
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);

  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Get current scores
secureApiRouter.get('/scores', async (_req, res) => {
  const scores = await DB.getScores();
  res.send(scores);
});

// Submit votes
secureApiRouter.post('/score', async (req, res) => {
  const { voter, votes } = req.body;

  if (!await DB.getUser(voter)) {
    res.status(400).send({ msg: 'Voter not recognized' });
    return;
  }

  if (!Array.isArray(votes) || !isValidVote(votes)) {
    res.status(400).send({ msg: 'Invalid vote submission' });
    return;
  }

  for (const vote of votes) {
    await DB.updateScore(vote.name, vote.score);
  }

  const updatedScores = await DB.getScores();
  res.send(updatedScores);
});

// Default error handler
app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return default page
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Cookie setup
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Vote validation
function isValidVote(votes) {
  const allowedNames = ['Kenneth', 'Conner', 'James'];
  return votes.every(vote => 
    allowedNames.includes(vote.name) && 
    typeof vote.score === 'number' && vote.score > 0
  );
}

// Start the server
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
