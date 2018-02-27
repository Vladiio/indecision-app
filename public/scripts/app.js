'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision app',
    subtitle: 'Some info',
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {
    var itemList = app.options.map(function (item, index) {
        return React.createElement(
            'li',
            { key: index },
            item
        );
    });
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            itemList
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement('input', { type: 'submit', value: 'Add option' })
        )
    );

    ReactDOM.render(template, document.getElementById('root'));
};

renderApp();
