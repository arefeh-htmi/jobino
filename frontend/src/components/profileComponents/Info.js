import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/isEmpty';

class Info extends Component {
  render() {
    const { profile } = this.props;

   
    const fname = profile.user.name

    
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Summary</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>I am looking for a job which will help me utilize my skills for the growth of the organization</span>
              ) : (
                <span>{fname.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">My Skills</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Info;
