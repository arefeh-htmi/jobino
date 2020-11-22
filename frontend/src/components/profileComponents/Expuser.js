import React, { Component } from 'react';

class Expuser extends Component {
  render() {
    const { experience} = this.props;
    

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
        Position: {exp.title}
        </p>
        <p>
         Location: {exp.location}
        </p>
        <p>
         Description: {exp.description}
         </p>
         <p>
        Duration: {exp.from}-{exp.to}
       </p>
      </li>
    ));
    return (
        <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Experience</h3>
            <p className="lead">
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">I am new to workforce!</p>
          )}
          </p>
        </div>
      </div>
      </div>

    )
    
  }
}

export default Expuser;
