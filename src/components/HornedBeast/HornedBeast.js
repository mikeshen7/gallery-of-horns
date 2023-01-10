import React from "react";
import './HornedBeast.css'
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      beastly: false,
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }

  handleBeastly = () => {
    this.setState({
      beastly: true
    })
  }

  handleFriendly = () => {
    this.setState({
      beastly: false
    })
  }

  render() {
    return (
      <>
        <article className={this.state.beastly ? "beast beastly" : "beast"}>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p >♥{this.state.favorites} Favorites</p>

          <img
            src={this.props.imageUrl}
            alt={this.props.desciption}
            title={this.props.title}
            onClick={this.handleFavorites}></img>

          <div>
            <Button onClick={this.handleBeastly} variant="primary">Beastly</Button>
            <Button onClick={this.handleFriendly} variant="success">Friendly</Button>
          </div>
        </article>
      </>
    )
  }
}

export default HornedBeast;
