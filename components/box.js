import React from 'react'

export default class Box extends React.Component {

    constructor(props){
        super(props)
    }


  render() {
    return (
        <div className='box'>
        <nav className="navbar navbar-expand navv">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link roboto" href="#">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link roboto" href="#">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link roboto" href="#">Papers</a>
            </li>
          </ul>

        </nav>
        </div>
    )
  }
}
