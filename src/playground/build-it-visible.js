class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            details: 'hello word',
        }
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.visible = !newState.visible;
            return newState;
        });
    }
    render() { 
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visible ? 'Hide details' : 'Show detais'}
                </button>
                {this.state.visible && <p>{this.state.details}</p>}
            </div>
        );
    }
}
 

ReactDOM.render(
    <VisibilityToggle />,
    document.getElementById('root')
)