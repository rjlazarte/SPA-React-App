import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Clouds from "./video/clouds.mp4"

class App extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="App">
                <video autoPlay loop muted
                style={{
                  position: 'absolute',
                  width: '100%',
                  left: '50%',
                  top: '50%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '-1'
                }}
                >
                  <source src={Clouds} type="video/mp4" />
                </video>
                <Navbar color="transparent">
                <div className="container">
                    <NavbarBrand href="/"></NavbarBrand>
                </div>
                </Navbar>
            </div>
            <div style={{textAlign: 'center', height: '100px'}}>
            <h1 style={{color: 'white', position: 'relative', top: '5%', transform: 'translateY(-50%'}}>SHEPHERD'S PASTURE ASSEMBLY</h1>
          </div>
          </React.Fragment>
        );
    }
}

export default App;