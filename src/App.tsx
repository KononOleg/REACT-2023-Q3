import { FC } from 'react';

import { Layout } from './layouts/layout';
import { MainPage } from './pages/main/main-page';

const App: FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};
export default App;
