import React from 'react';

import Option from './Option';

const Options = (props) => (

  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        onClick={props.handleDeleteOptions}
        className="button button--link">
        Remove all
      </button>
    </div>
    {
      props.options.length === 0 && <p className="widget__welcome-message">
        Please add an option to get started
      </p>
    }

    {
      props.options.map((item, index) => (
        <Option 
          key={index} 
          optionText={item}
          handleDeleteOptionSingular={props.handleDeleteOptionSingular}
        />
      ))
    }
  </div>
);

export default Options;