import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import './animate.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
    </Tooltip>
);




const Joinoperations = () => {
  return (
    <>
     
     <div class="container cbox">
                <div class="row rowbox">

                    <div class="col-md-3 col-sm-6 colbox ">
                        <div class="card classcard" >
                            <div class="card-header text-center">
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="card-title ">Developer</h4>
                                    </div>
                                    <div class="col-3">
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}>
                                           
                                           <FontAwesomeIcon icon={faCoffee} />
                                        </OverlayTrigger>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <a href="#" class="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 colbox ">
                        <div class="card classcard" >
                            <div class="card-header text-center">
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="card-title ">Developer</h4>
                                    </div>
                                    <div class="col-3">
                                    <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}>
                                           
                                           <FontAwesomeIcon icon={faCoffee} />
                                        </OverlayTrigger>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <a href="#" class="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 colbox ">
                        <div class="card classcard" >
                            <div class="card-header text-center">
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="card-title "> Developer</h4>
                                    </div>
                                    <div class="col-3">

                                    <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}>
                                           
                                           <FontAwesomeIcon icon={faCoffee} />
                                        </OverlayTrigger>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <a href="#" class="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 colbox ">
                        <div class="card classcard" >
                            <div class="card-header text-center">
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="card-title "> Developer</h4>
                                    </div>
                                    <div class="col-3">
                                    <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}>
                                           
                                           <FontAwesomeIcon icon={faCoffee} />
                                        </OverlayTrigger>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <a href="#" class="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
    </>
  );
}
export default Joinoperations;