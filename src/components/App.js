import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div>
      <div>
        <img src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/31beaf2c78895750c3a004c022a042ad/9cd10582-0b51-4e47-9136-4dab7668f732_rwc_0x0x200x40x200.png?h=4cd81569e9c324a7d0c07430409e5dc9' />
      </div>
      <h1>Let's Design Something Beautiful. Designer & Art Director working in visual, product and interactive design. Attending Iron Yard.</h1>
      <nav>
        <ul className='nav'>
          <li><a href='http://saratoftegaard.com/about'>ABOUT</a></li>
          <li><a href='http://saratoftegaard.com/work-snapshots'>DRIBBBLE</a></li>
          <li><a href='http://saratoftegaard.com/'>DESIGN</a></li>
        </ul>
        <ul className='social'>
          <li><a className='icons' href='https://github.com/satoftegaard'><i className='fa fa-github' aria-hidden='true' /></a></li>
          <li><a className='icons' href='https://www.linkedin.com/in/saratoftegaard'><i className='fa fa-linkedin' aria-hidden='true' /></a></li>
          <li><a className='icons' href='https://www.instagram.com/onapositivnote/'><i className='fa fa-instagram' aria-hidden='true' /></a></li>
        </ul>
      </nav>
      <main />
    </div>
  }
}

export default App
