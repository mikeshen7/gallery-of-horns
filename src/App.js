// 1. Import React
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// 2. Create class component
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

// 3. Export the component
export default App;
