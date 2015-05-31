import React from 'react';
import rb from 'react-bootstrap';

const NewItem = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  render() {
    return (
      <rb.Row className='show-grid'>
        <rb.Col md={11}>
          <rb.Input type='text' />
        </rb.Col>
        <rb.Col md={1}>
          <rb.Button bsStyle='success'>add</rb.Button>
        </rb.Col>
      </rb.Row>
    );
  }
});

export default NewItem;