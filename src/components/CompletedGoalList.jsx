import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions'; // as dispatcher
import { completedGoalRef } from '../firebase';

class CompletedGoalList extends Component {
  componentDidMount() {
    completedGoalRef.on('value', snap => {
      let completedGoalList = [];
      snap.forEach(completedGoal => {
        const { email, title } = completedGoal.val();
        completedGoalList.push({ email, title });
      })
      this.props.setCompleted(completedGoalList);
    })
  }

  clearAllCompleted() {
    completedGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completedGoals.map( (completedGoal, index) => {
            const { title, email } = completedGoal;
            return (
              <div
                key={index}
                style={{margin: '5px'}}
              >
                <strong>{ title }</strong>
                <span> completed by <em>{ email }</em></span>
              </div>
            )
          })
        }
        <br />
        <button
          className = 'btn btn-primary'
          onClick = {() => this.clearAllCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompletedGoalList);
