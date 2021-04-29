import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  return res.json({
    name: 'Victor Wolmeister',
    avatarUrl: 'http://localhost:3000/static/avatar.jpg',
  });
};
