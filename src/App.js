import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    // debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => {dispatch(addItem())}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect second arg will also take an object
// if you pass it a functin you have to call dispatch like line 33 
// if pass it an object, just need a key value pair for each actioni creator

// export default connect(mapStateToProps, {addItem: addItem})(App);
// ES6
export default connect(mapStateToProps, {addItem})(App);

