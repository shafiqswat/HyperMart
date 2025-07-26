import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TabsRoot } from './Tabs';
import { StacksRoot } from './Stack';

const AppRoutes = () => {
  const { user } = useAuth();
  return user ? <TabsRoot /> : <StacksRoot />;
};

export default AppRoutes;
