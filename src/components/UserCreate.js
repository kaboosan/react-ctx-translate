import React from 'react';
import Fields from './Fields';
import Button from './Button';


class UserCreate extends React.Component {
  
    render(){
      return (
        <div className="ui form">
            <Fields />
            <Button />
        </div>
      )
    }
  }
  
  export default UserCreate;