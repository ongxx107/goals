import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    // update the completed goal on the database
    // remove goal from database reference based on current signed in email
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completedGoalRef.push({ email, title });
  }

  render() {
    // console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{ title }</strong>
        <span> submitted by <em>{ email }</em></span>
        <button
          className = 'btn btn-sm btn-primary'
          style = {{margin: '5px'}}
          onClick = {() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) { // transfer the state data to this.props
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
