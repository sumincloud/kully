import React, { Component } from 'react';
import Slide from '../product/Slide';
import BestItem from '../product/BestItem';
import Recommand from '../product/Recommand';
import Banner from '../product/Banner';
import Oneday from '../product/Oneday';


class Main extends Component {
  render() {
    return (
      <>
        <Slide />
        <BestItem />
        <Recommand />
        <Banner />
        <Oneday />
      </>
    );
  }
}

export default Main;