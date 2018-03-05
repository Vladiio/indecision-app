import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleDeleteOptions = () => {
    this.setState(prevState => ( {options: []} ));
  };

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomIndex];
    this.setState(() => ({ selectedOption }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'The option already exists';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option)} ));
  };

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return  optionToRemove !== option;
      })
    }));
  };

  componentDidMount() {
    try {
      
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(() => ({ options }));
      }

    } catch (error) {
      // do nothing
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }
  
  render() { 
    const subtitle = 'Put your live in the hands of a computer';
    return (
      <div> 
        <Header 
          subtitle={subtitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}    
          />
          <div className='widget'>
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOptionSingular={this.handleDeleteOptionSingular}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal 
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}/>
      </div>
    );
  }
}