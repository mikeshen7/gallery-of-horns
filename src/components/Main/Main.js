import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import data from '../../data/data.json'
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {data.map((beast) => {
            return <HornedBeast
              title={beast.title}
              description={beast.description}
              imageUrl={beast.image_url}
              key={beast._id}>
            </HornedBeast>
          })}
      </main>
      </>
    );
  }
}

export default Main;
