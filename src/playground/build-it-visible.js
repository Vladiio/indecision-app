const state = {
    visible: false,
    details: 'Lorem ipsum',
};


const onToggleVisiblility = () => {
    state.visible = !state.visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisiblility}>
                { state.visible ? 'Hide details' : 'Show details' }
            </button>
            <div>{state.visible && <p>{state.details}</p>}</div>
        </div>
    );
    ReactDOM.render(template, document.getElementById('root'));
};

render();