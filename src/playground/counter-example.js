class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.handleAddCount = this.handleAddCount.bind(this);
        this.handleSubstractCount = this.handleSubstractCount.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }

    componentDidMount() {
      const countString = localStorage.getItem('count');
      const count = parseInt(countString);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    }

    handleAddCount() {
        this.setState(prevState => {
            const newState = Object.assign({}, prevState);
            newState.count++;
            return newState;
        });
    }

    handleSubstractCount() {
        this.setState(prevState => {
            const newState = Object.assign({}, prevState);
            newState.count--;
            return newState;
        });
    }

    handleResetCount() {
        this.setState(prevState => {
            const newState = Object.assign({}, prevState);
            newState.count = 0;
            return newState;
        });
    }
    render() { 
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddCount}>+1</button>
                <button onClick={this.handleSubstractCount}>-1</button>
                <button onClick={this.handleResetCount}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)