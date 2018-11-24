console.log('app.js is running');

var template = ReactDOM.createElement(
    'p',
    null,
    'Here is my first paragraph jsx template'
  );
  var appRoot = document.getElementById('app');
  
  ReactDOM.render(template, appRoot);