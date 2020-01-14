import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletedGoalList from './CompletedGoalList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {

    return (
      <div className = 'form form-group' style = {{margin:'5%'}}>
        <h3>Goals App</h3>
        <AddGoal />
        <hr />
        <h4>Goal List</h4>
        <GoalList />
        <hr />
        <h4>Completed Goal List</h4>
        <CompletedGoalList />
        <hr />
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

export default connect(mapStateToProps, null)(App);
