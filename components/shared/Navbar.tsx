import React from 'react';
import Mainnav from '../main-nav';
import { currentUser } from '@clerk/nextjs/server';
import { getUser } from '@/lib/controllers/user.controller';

const Navbar = async () => {
  const category = [
    { id: 1, name: 'Kids' },
    { id: 2, name: 'Tracksuits' },
    { id: 3, name: 'Tunics' },
    { id: 4, name: 'Basics' },
    { id: 5, name: 'Dresses' },
  ];
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await JSON.parse(JSON.stringify(await getUser(user.id)));

  return (
    <nav>
      <Mainnav userInfo={userInfo} category={category} />
    </nav>
  );
};

export default Navbar;
