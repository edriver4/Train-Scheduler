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

var trainInfo = firebase.database();


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

  trainInfo.ref().on("child_added", function(childSnapshot, prevChildKey){


    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFrequency = childSnapshot.val().frequency;
    var tFirstTrainTime = childSnapshot.val().firstTrain;

    var timeArrival = tFirstTrainTime.split(":");
    var trainTime = moment().hours(timeArrival[0]).minutes(timeArrival[1]);
    var maxMoment = moment.max(moment(), trainTime);
    var tMinutes;
    var tArrival;

    if (maxMoment === trainTime) {
        tArrival = trainTime.format("hh:mm A");
        tMinutes = trainTime.diff(moment(), "minutes");
    } else {
        var differenceTimes = moment().diff(trainTime, "minutes");
        var tRemainder = differenceTimes % tFrequency;
        tMinutes = tFrequency - tRemainder;

        tArrival = moment().add(tMinutes, "m").format("hh:mm A");
    }

    $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
  });

