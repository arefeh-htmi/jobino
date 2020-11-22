import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Home extends Component {
  render() {
    return (
        <div className="home">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Welcome to JobINO!
                </h1>
                <p className="lead">This website connects Recruiters with Job seekers</p>
                <p className="lead">Job seekers can find job offers based on their skills and location</p>
                <p className="lead">Recruiters can post job offers, look for employees and contact them</p>

                <hr />
                <Link to="userprofile" className="btn btn-lg btn-info mr-2">For Employeers</Link>
                <Link to="login" className="btn btn-lg btn-light">For Job Seekers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
