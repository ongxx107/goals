import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebaseApp from '../firebase';

class Home extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    // const { authUser } = this.props;
    // if (!authUser) return <Redirect to='/signin' />

    return (
      <div>
        <h3>Goals</h3>
        <div>Add Goal</div>
        <div>Goal List</div>
        <button
          className = 'btn btn-danger'
          onClick = {() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default Home;
