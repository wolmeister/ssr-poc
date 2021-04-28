import express from 'express';
import path from 'path';
import got from 'got';

const app = express();

// Set EJS as render engine
app.set('view engine', 'ejs');

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'assets', 'static')));

// Index page
app.get('/', async (req, res) => {
  // Simulate a request to an external server
  const userResponse = await got('http://localhost:3000/api/users/me', { responseType: 'json' });
  const { body: user } = userResponse;

  // Render the page
  res.render(path.join(__dirname, 'assets', 'index.ejs'), { user });
});

// User API
app.get('/api/users/me', (req, res) => {
  res.send({
    name: 'Victor Wolmeister',
    avatarUrl: 'http://localhost:3000/static/avatar.jpg',
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Application running on http://localhost:3000');
});
