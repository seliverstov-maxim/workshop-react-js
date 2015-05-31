import React from 'react';
import rb from 'react-bootstrap';
import NewItem from './new-item';
import Item from './item';

const ToDoApp = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  render() {
    return (
      <rb.Grid>
        <NewItem />
        <Item />
      </rb.Grid>
    );
  }
});

export default ToDoApp;