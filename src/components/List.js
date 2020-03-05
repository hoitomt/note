import React, { Component } from 'react';

class List extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-container">
        List Component
      </div>
    );
  }
}

export default List;
