import React, { Component } from "react";
import DogList from "./DogList";

export default class DogsListContainer extends Component {
  state = { dogBreeds: null };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        //console.log(Object.keys(data.message))
        const breeds = Object.keys(data.message)
        this.updateBreeds(breeds)
        //console.log(breeds);
      })
      .catch(console.error);
  }


  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  render() {
    console.log(this.state.dogBreeds)
    return <DogList dogBreeds={this.state.dogBreeds} />
  }
}