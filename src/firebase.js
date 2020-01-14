import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhoGG4MNlI5c3IGLbbre-UrkMLEQx_usw",
    authDomain: "goal-15ea4.firebaseapp.com",
    databaseURL: "https://goal-15ea4.firebaseio.com",
    projectId: "goal-15ea4",
    storageBucket: "goal-15ea4.appspot.com",
    messagingSenderId: "157170962405",
    appId: "1:157170962405:web:eed25090e95294a506e90c",
    measurementId: "G-5SQY32K7YC"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const goalRef = firebase.database().ref('goals');

export const completedGoalRef = firebase.database().ref('completedGoal');
