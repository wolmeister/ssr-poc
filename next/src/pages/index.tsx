import React from 'react';
import { GetServerSideProps } from 'next';
import got from 'got';

type User = { name: string; avatarUrl: string };

type ServerSideProps = {
  user: User;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async context => {
  // Simulate a request to an external server
  const userResponse = await got<User>('http://localhost:3000/api/users/me', {
    responseType: 'json',
  });
  const { body: user } = userResponse;

  return {
    props: {
      user,
    },
  };
};

export default function Index({ user }: ServerSideProps) {
  return (
    <div className="container">
      <img src={user.avatarUrl} alt="user-avatar" className="avatar" />
      <span>{user.name}</span>
    </div>
  );
}
