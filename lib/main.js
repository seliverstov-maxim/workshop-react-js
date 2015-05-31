import React from 'react';
import 'bootstrap/css/bootstrap.css!';
import TodoApp from 'lib/templates/todo-app'

let mountNode = document.getElementById("mountNode");
React.render(<TodoApp />, mountNode);

