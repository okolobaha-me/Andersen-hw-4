import { Routes, Route } from 'react-router';
import { Container } from './BaseStyles.styled';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/AboutUs/AboutUs';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'about-us'} element={<AboutUs />} />
        </Route>
      </Routes>
    </Container>
  );
};
