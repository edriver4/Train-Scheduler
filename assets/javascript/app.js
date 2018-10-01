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

var trainInfo = firebase.data();


  $("#add-train-btn").on("click", function(){

    var trainName = $("#trainInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = $("#firstTT").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    };

    trainInfo.ref().push(newTrain);

    // Alert the Train was added
    alert("The train you have entered has been successfully added.");

    // Clears all of the input fields.
    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#firstTT").val("");
    $("#frequency").val("");

    return false;

  });

