import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { HookFormPage } from './pages/hook-form';

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="form-hook" element={<HookFormPage />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
