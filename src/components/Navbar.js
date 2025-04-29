import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar(props) {   // we are passing props to use data/properties...
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}Us</Link>
            </li>

          </ul>         
          <div className={`form-check form-switch text-${props.mode ==='light'? 'dark' : 'light'}`}>  {/* // Switch Dark mode */}
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
          <form className="d-flex mx-3" role="search">
            <input className="form-control me-4 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string, // * PropTypes.string.isRequired * use for mandatatory to have any title 
  aboutText: PropTypes.string
} // It will handle props which should be only string otherwise we will get errors

Navbar.defaultProps = {     // ---- Not working, need to check ----- //
  title: 'React-Default',
  aboutText: 'About_Default'
}