$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyCxfdaUhAtbq5tx1unwGN-qtOaubweFNno",
        authDomain: "another-demo-for-the-ages.firebaseapp.com",
        databaseURL: "https://another-demo-for-the-ages.firebaseio.com",
        projectId: "another-demo-for-the-ages",
        storageBucket: "another-demo-for-the-ages.appspot.com",
        messagingSenderId: "909454384177"
      };
      firebase.initializeApp(config);
      
      
     var database = firebase.database();
    //   var trainName = "";
    //   var destination = "";
    //   var ftrainTime = moment();
    //   var arrivalTime = moment("0..59") + ftrainTime;
      

      $("#submit-button").on("click",function(event) {
        event.preventDefault();

        trainName = $("#tname").val().trim();
        destination = $("#tdestination").val().trim();
        initialTime = $("#tinitial-input").val().trim();
        occurence = $("#frequency").val().trim();
        // var ftrainTime = moment();
        // var arrivalTime = moment("0..59") + ftrainTime;


        var newInfo ={
            train : trainName,
            destination : destination,
             initialTime: initialTime,
            occurence: occurence,
          
        };
        // console.log(trainName);
        // console.log(destination);
        // console.log(ftrainTime);
        // console.log(arrivalTime);


        // $("#list1").append(trainName);
        database.ref().push(newInfo);


        $("#tname").val("");
        $("tdestination").val("");
        $("#initial-input").val("");
        $("#frequency").val("");

        return false;
        




      });
    //   console.log(trainName);
    //   console.log(destination);
    //   console.log(ftrainTime);
    // //   console.log(monthlyRate);

    // database.ref().on("child_added", function(snapshot) { 
    //     console.log(snapshot.val());
    //     var addRow = `
        
    //         ${snapshot.val().trainName} 
    //         ${snapshot.val().destination}   
    //         ${snapshot.val().initialTime}   
    //         ${snapshot.val().occurence} 

    //     `;
    //     $("#train-table").append(addRow);
    //     $("#train-table").text(addRow);

    // });
    
    
    
});