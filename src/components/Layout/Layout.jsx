import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
