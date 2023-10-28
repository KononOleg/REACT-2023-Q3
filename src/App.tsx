import { Component } from 'react';

import { Layout } from './layouts/layout';
import { MainPage } from './pages/main';

class App extends Component {
  render() {
    return (
      <Layout>
        <MainPage />
      </Layout>
    );
  }
}
export default App;
