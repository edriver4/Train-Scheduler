// Initialize Firebase
var config = {
    apiKey: "AIzaSyCNNjVvV9LcD7K87ApkSz1ES3W7MQBfT6A",
    authDomain: "train-scheduler-36fef.firebaseapp.com",
    databaseURL: "https://train-scheduler-36fef.firebaseio.com",
    projectId: "train-scheduler-36fef",
    storageBucket: "train-scheduler-36fef.appspot.com",
    messagingSenderId: "542622033065"
  };
  firebase.initializeApp(config);

  $("#add-train-btn").on("click", function(event){
      event.preventDefault();
  })