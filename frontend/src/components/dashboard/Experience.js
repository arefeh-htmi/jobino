import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
//import {withRouter} from 'react-router-dom';
import { deleteExperience } from '../../actions/userprofileAction';

class Experience extends Component {
 //to delete a field of exp
    onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
        
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger" >
            Remove
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience</h4>
        <table className="table table-bordered">
          <thead>
            <tr className="bg-primary">
              <th>Company</th>
              <th>Title</th>
              <th>Duration</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })((Experience));
