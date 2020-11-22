import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import {withRouter} from 'react-router-dom';
import TextAreaField from '../common/TextAreaField';

import {createProfile} from '../../actions/userprofileAction';




class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            profilename:'',
            location:'',
            skills:'',
            interest:'',
            bio:'',
            errors:{}
            
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    onSubmit(e) {
        e.preventDefault();
    
        const profileData={
            profilename:this.state.profilename,
            location:this.state.location,
            skills:this.state.skills,
            interest:this.state.interest,
            bio:this.state.bio
        }
       
        this.props.createProfile(profileData, this.props.history);
      }
     onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
      const {errors}=this.state;
    return (
      <div className='createprofile'>
      <div className='container'>
      <div className="row">
      <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Create Your Profile</h1>
        <form onSubmit={this.onSubmit}>
        <TextField
        placeholder="Profile name"
        name="profilename"
        value={this.state.profilename}
        onChange={this.onChange}
        error={errors.profilename}
        info="Enter the Profilename you want to keep"/>
        <TextField
        placeholder="Location"
        name="location"
        value={this.state.location}
        onChange={this.onChange}
        error={errors.location}
        info="City (eg. Hamilton)"/>
        <TextField
        placeholder="Skills"
        name="skills"
        value={this.state.skills}
        onChange={this.onChange}
        error={errors.skills}
        info="Enter the skills seperated by Commas (eg. HTML,Management, Marketing, Customer Service)"/>
    
        <TextField
        placeholder="Interests"
        name="interest"
        value={this.state.interest}
        onChange={this.onChange}
        error={errors.interest}
        info="What are your interests? (eg. Blogging, Football, Cooking)"/>
         <TextAreaField
        placeholder="Bio"
        name="bio"
        value={this.state.bio}
        onChange={this.onChange}
        error={errors.bio}
        info="Introduce yourself briefly"/>
        <input
                  type="submit"
                  value="Create my PROFILE"
                  className="btn btn-info btn-block mt-4"
                />
        </form>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
CreateProfile.propTypes={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  })


export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
