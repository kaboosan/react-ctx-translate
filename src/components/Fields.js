import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Fields extends React.Component {
  
    //Si on a un seul context a utilisé on utilise contextType sinon on doit passer par un Comsumer (voir Button.js)
    static contextType = LanguageContext;

    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Nom'
      return (
        <div className="ui field">
            <label>{text}</label>
            <input />
        </div>
      )
    }
  }
  
  export default Fields;