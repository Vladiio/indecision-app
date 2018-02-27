console.log('app.js is running');


const app = {
    title: 'Indecision app',
    subtitle: 'Some info',
    options: ['one', 'two'],
};


const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
    }
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
        <ol>
            <li>Some item</li>
            <li>Some item</li>
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