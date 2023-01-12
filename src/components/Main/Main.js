import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import data from '../../data/data.json'
import './Main.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/row';

class Main extends React.Component {
  render() {

    // put JSON data into array
    let beastArray = data.map((beast) => {
      return (
        <HornedBeast
          beast={beast}
          key={beast._id}
          handleOpenModal={this.props.handleOpenModal}
        />
      )
    })

    let selectedBeasts = beastArray;

    // Filter beasts
    if (this.props.selectedHorns === 'All') {
      selectedBeasts = beastArray;
    } else
      selectedBeasts = beastArray.filter((element) => element.props.beast.horns === Number(this.props.selectedHorns));

    // Sort beasts
    if (this.props.hornSort === 'Name Ascending') {
      selectedBeasts = selectedBeasts.sort((a, b) => a.props.beast.title > b.props.beast.title ? 1 : -1)
    } else if (this.props.hornSort === 'Name Decending') {
      selectedBeasts = selectedBeasts.sort((a, b) => a.props.beast.title < b.props.beast.title ? 1 : -1)
    } else if (this.props.hornSort === 'Horns Acending') {
      selectedBeasts = selectedBeasts.sort((a, b) => a.props.beast.horns > b.props.beast.horns ? 1 : -1)
    } else if (this.props.hornSort === 'Horns Decending') {
      selectedBeasts = selectedBeasts.sort((a, b) => a.props.beast.horns < b.props.beast.horns ? 1 : -1)
    }



    return (
      <>
        <main>{selectedBeasts}</main>
      </>
    );
  }
}


export default Main;
