import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import AgentsPage from 'pages/AgentsPage';
import MapsPage from 'pages/MapsPage';
import WeaponsPage from 'pages/WeaponsPage';
import NotFoundPage from 'pages/NotFoundPage';
import GlobalStyle from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
