import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'

require('dotenv').config()

class App extends Component {


  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);