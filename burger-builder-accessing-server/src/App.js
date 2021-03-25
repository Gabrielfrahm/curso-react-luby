import React from 'react';
import Layout from './hoc/Layout';
import BurgerBuilder from './containers/BurgerBuilder';


const App = () =>  {
  return (
    <div>
      <Layout>
       <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
