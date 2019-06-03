import React, { Component } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { css } from '@emotion/core'
import { RingLoader } from 'react-spinners'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

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

  handleSpinnerTimeout = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }

  handleScrollspy = () => {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {
        scrollOffset: 0
      });
    });
  }


  componentDidMount = () => {
    this.handleSpinnerTimeout();
    this.handleScrollspy();
  }

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
        <Contact />
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