// 1. Import React
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ShowModal from '../Modal/Modal';

// 2. Create class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeastTitle: 'Beast Title',
      selectedBeastDescription: 'Beast Description',
      selectedBeastImageUrl: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    }
  }

  handleOpenModal = (title, description, image) => {
    this.setState({
      showModal: true,
      selectedBeastTitle: title,
      selectedBeastDescription: description,
      selectedBeastImageUrl: image,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header />

        <Main
          handleOpenModal={this.handleOpenModal}
        />

        <ShowModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeastTitle={this.state.selectedBeastTitle}
          selectedBeastDescription={this.state.selectedBeastDescription}
          selectedBeastImageUrl={this.state.selectedBeastImageUrl}
        >
        </ShowModal>

        <Footer />
      </>
    );
  }
}

// 3. Export the component
export default App;
