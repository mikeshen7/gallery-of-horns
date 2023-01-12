// 1. Import React
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ShowModal from '../Modal/Modal';
import BeastFilter from '../BeastFilter/BeastFilter';

// 2. Create class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeastTitle: '',
      selectedBeastDescription: '',
      selectedBeastImageUrl: '',
      selectedHorns: 'All',
      hornSort: 'Name Ascending'
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

  handleFilter = (horns, sort) => {
    this.setState({
      selectedHorns: horns,
      hornSort: sort
    })
  }

  render() {
    return (
      <>
        <Header />

        <BeastFilter 
          handleFilter={this.handleFilter}
        />

        <Main
          handleOpenModal={this.handleOpenModal}
          selectedHorns={this.state.selectedHorns}
          hornSort={this.state.hornSort}
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
