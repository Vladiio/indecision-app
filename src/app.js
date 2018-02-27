console.log('app.js is running');


const app = {
    title: 'Indecision app',
    subtitle: 'Some info',
    options: [],
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const renderApp = () => {
    const itemList = app.options.map((item, index) => {
        return <li key={index}>{item}</li>
    });
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
            {itemList}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <input type="submit" value="Add option"/>
            </form>
        </div>
    );
    
    ReactDOM.render(
        template,
        document.getElementById('root')
    );
}

renderApp();