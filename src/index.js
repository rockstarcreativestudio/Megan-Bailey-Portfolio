import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners'
import Footer from "./components/Footer";
import $ from 'jquery';

require('dotenv').config()

const loader = css`
  display: block;
  margin: 0 auto;

`

class App extends Component {
  constructor() {
    super();

    this.state={
      loading: true
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);

    $(document).ready(function(){
      $('.scrollspy').scrollSpy({
        scrollOffset: 0
      });
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <RingLoader
          sizeUnit={"px"}
          size={150}
          color={'#ff00c1'}
          loading={this.state.loading}
          />
        </div>
      )
    } else {
    return (
      <div>
        <Nav />
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    )
    }
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);