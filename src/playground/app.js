class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
  }

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
  
  handleDeleteOptions() {
    this.setState(prevState => ( {options: []} ));
  }

  handlePick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex])
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'The option already exists';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option)} ));
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return  optionToRemove !== option;
      })
    }));
  }

  render() { 
    const subtitle = 'Put your live in the hands of a computer';
    return (
      <div> 
        <Header 
          subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}    
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      <p>This is from Header</p>
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
          disabled={!props.hasOptions}>
        What should I do
      </button>
    </div>
  );
}  

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

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
        props.handleDeleteOptionSingular(props.optionText)}}>
        remove</button>
    </div>
  );
}

class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined,
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ( {error} ));

    if (!error) {
      event.target.elements.option.value = '';
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"/>
          <input type="submit" value='add'/>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));