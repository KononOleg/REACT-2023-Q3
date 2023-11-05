import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './layouts/layout';
import { MainPage } from './pages/main/main-page';

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default App;
