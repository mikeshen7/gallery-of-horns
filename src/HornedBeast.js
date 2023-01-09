import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img
          src={this.props.imageUrl}
          alt={this.props.desciption}
          title={this.props.title}></img>
      </>
    )
  }
}

export default HornedBeast;
