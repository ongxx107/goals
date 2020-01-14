import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "PASTE_YOUR_CONFIGURATION_HERE",
    authDomain: "PASTE_YOUR_CONFIGURATION_HERE",
    databaseURL: "PASTE_YOUR_CONFIGURATION_HERE",
    projectId: "PASTE_YOUR_CONFIGURATION_HERE",
    storageBucket: "PASTE_YOUR_CONFIGURATION_HERE",
    messagingSenderId: "PASTE_YOUR_CONFIGURATION_HERE",
    appId: "PASTE_YOUR_CONFIGURATION_HERE",
    measurementId: "PASTE_YOUR_CONFIGURATION_HERE"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const goalRef = firebase.database().ref('goals');

export const completedGoalRef = firebase.database().ref('completedGoal');
