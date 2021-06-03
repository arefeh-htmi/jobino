import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './Header';
import Info from './Info';

import {getProfileByName} from '../../actions/userprofileAction';
import Expuser from './Expuser';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.profilename) {
      this.props.getProfileByName(this.props.match.params.profilename);
    }

  }

  

render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <h3>loading profile....</h3>;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/userprofile" className="btn btn-light mb-3 float-left">
                Go Back
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <Header profile={profile} />
          <Info profile={profile} />

          <Expuser experience={profile.experience}/>
         
          
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByName: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByName })(Profile);
