import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions= () => {
  return (
    <div className="btn-group mb-4" role="group">
    
                    <Link to="/editprofile" class="btn btn-info">
                       Edit Profile</Link>
                    <Link to="/addexp" class="btn btn-info">
                      
                      Add Experience</Link>
                  
    </div>
  )
}

export default ProfileActions;
