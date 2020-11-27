import React from 'react';
// import logo from '../component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import * as ReactNavbar from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Card from './Card';
import Jointabbar from './Jointabbar';



const Joinbar = () => {
    return (
        <>
        <div className="row crow">
                    <div className="col-md-10 cobox">
                        <h1 className="text2">Join Our Journey</h1>
                    </div>
         </div>
        <Jointabbar />
        
        </>
    );
};

export default Joinbar;