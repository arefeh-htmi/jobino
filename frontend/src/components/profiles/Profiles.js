import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/userprofileAction';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <h3>Profiles are loading..........</h3>;
    } else {
      if (profiles.length > 0) {
        
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found.....</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Job Seeker's profiles</h1>
              <p className="lead text-center">
                Explore and get in touch with a Job seeker for free!
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
