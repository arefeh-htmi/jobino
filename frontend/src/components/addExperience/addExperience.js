import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import TextField from '../common/TextField';
import TextAreaFieldGroup from '../common/TextAreaField';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addExp} from '../../actions/userprofileAction';


class addExperience extends Component {
    constructor(props){
        super(props);
        this.state={
            company:'',
            title:'',
            location:'',
            from:'',
            to:'',
            description:'',
            errors:{},
            
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    componentWillReceiveProps(nextProps)
{
    if(nextProps.errors){
        this.setState({errors:nextProps.errors});
    }
}
    onSubmit(e){
        e.preventDefault();
        const experienceData={
            company:this.state.company,
            title:this.state.title,
            location:this.state.location,
            from:this.state.from,
            to:this.state.to,
            description:this.state.description
        }
        this.props.addExp(experienceData,this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
  render() {
      const {errors}=this.state;
      
    return (
        <div className='addexperience'>
      <div className='container'>
      <div className="row">
      <div className="col-md-8 m-auto">
      <Link to="/dashboard" className="btn btn-light"> Back</Link>
        <h1 className="display-4 text-center">Add your experience</h1>
        <form onSubmit={this.onSubmit}>
        <TextField
        placeholder="Job Title"
        name="title"
        value={this.state.title}
        onChange={this.onChange}
        error={errors.title}
        info="Job title"/>
        <TextField
        placeholder="Company Name"
        name="company"
        value={this.state.company}
        onChange={this.onChange}
        error={errors.company}
        info="Enter the company name"/>
        <TextField
        placeholder="Location"
        name="location"
        value={this.state.location}
        onChange={this.onChange}
        error={errors.location}
        info="City (eg. Hamilton)"/>
        <TextField
        placeholder="Starting date"
        name="from"
        type="date"
        value={this.state.from}
        onChange={this.onChange}
        error={errors.from}
        info="Start date"/>
    
        <TextField
        placeholder="to"
        name="to"
        type="date"
        value={this.state.to}
        onChange={this.onChange}
        error={errors.to}
        info="End date"/>
         <TextAreaFieldGroup
        placeholder="Bio"
        name="bio"
        value={this.state.bio}
        onChange={this.onChange}
        error={errors.bio}
        info="What did you do there?"/>
        <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
        </form>
        </div>
      </div>
      </div>
      </div>
        
    )}
}

addExperience.propTypes={
    addExp:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    profile:state.profile,
    errors:state.errors
})
export default connect(mapStateToProps,{addExp})(withRouter(addExperience));
