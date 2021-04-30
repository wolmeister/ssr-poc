import { ServerMiddleware } from '@nuxt/types';

const getUserMiddleware: ServerMiddleware = (req, res, next) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end();
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  return res.end(
    JSON.stringify({
      name: 'Victor Wolmeister',
      avatarUrl: 'http://localhost:3000/static/avatar.jpg',
    })
  );
};

export default getUserMiddleware;
