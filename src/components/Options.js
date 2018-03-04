import React from 'react';

import Option from './Option';

const Options = (props) => {

  const optionsList = props.options.map((item, index) => (
    <Option 
      key={index} 
      optionText={item}
      handleDeleteOptionSingular={props.handleDeleteOptionSingular}
    />
  ));
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {optionsList}
    </div>
  );
}

export default Options;