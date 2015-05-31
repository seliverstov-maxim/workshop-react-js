import React from 'react';
import rb from 'react-bootstrap';

const Item = React.createClass({
  render() {
    return (
      <rb.Row className='show-grid'>
        <rb.Col md={11}>
          Basic panel example
        </rb.Col>
        <rb.Col md={1}>
          <rb.Button bsStyle='danger'>remove</rb.Button>
        </rb.Col>
      </rb.Row>
    );
  }
});

export default Item;
