import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { HookFormPage } from './pages/hook-form';
import { UncontrolledFormPage } from './pages/uncontrolled-form';

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="form-hook" element={<HookFormPage />} />
        <Route path="form-uncontrolled" element={<UncontrolledFormPage />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
