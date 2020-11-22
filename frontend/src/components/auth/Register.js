import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import TextField from '../common/TextField';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    
    const { errors } = this.state;
    
    return (
      
        <div className="home">
        
    
      
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        
           
        <div className="row">
          <div className="col-md-12 text-center">
          
               <h1 className="display-4 text-center">Sign Up</h1>
               <p className="lead text-center">Create your Profile and start getting noticed by Employers!</p>
              
              <div className="form-group">
              <form onSubmit={this.onSubmit}>
              <TextField
                placeholder="What's your Name?"
                name="name" type="name" value={this.state.name} onChange={this.onChange} error={errors.name}/>
                    
                <TextField
                placeholder="What's your Email?"
                name="email" type="email" value={this.state.email} onChange={this.onChange} error={errors.email}/>
                
                <TextField
                placeholder="Password"
                name="password" type="password" value={this.state.password} onChange={this.onChange} error={errors.password}/>
                 
                 <TextField
                placeholder="Please confirm your Password"
                name="password2" type="password" value={this.state.password2} onChange={this.onChange} error={errors.password2}/>

                    <hr />
                    <input type="submit" className="btn btn-lg btn-success"/>
                    </form>

              
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    
  
      
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));