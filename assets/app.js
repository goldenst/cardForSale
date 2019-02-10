// console.log('from app.js');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-WQZm3k0j2a1XfZ_x6ANlqBfKDWuhwP4",
    authDomain: "carsforsale-1e0dd.firebaseapp.com",
    databaseURL: "https://carsforsale-1e0dd.firebaseio.com",
    projectId: "carsforsale-1e0dd",
    storageBucket: "",
    messagingSenderId: "86053927196"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// A $( document ).ready() block.
$( document ).ready(function() {
    // console.log( " app.js jquery ready!" );

    $('#add-car-btn').on('click', function (event) {
      event.preventDefault;

      function show_keys() {
        var selector = document.getElementById('#hasKeys');
        var value = selector[selector.selectedIndex].value;
    }

    function show_wrecked() {
      var selector = document.getElementById('#isWrecked');
      var value = selector[selector.selectedIndex].value;
  }
      // sets user input to varriable
      var carYear = $("#carYear").val().trim();
      var carMake = $("#carMake").val().toUpperCase().trim();
      var carModel = $("#carModel").val().toUpperCase().trim();
      var carVin = $("#carVin").val().toUpperCase().trim();
      var carPlate = $("#carPlate").val().toUpperCase().trim();
      var carExp = $("#carExp").val().toUpperCase().trim();
      var salePrice = $("#salePrice").val().trim();
      var hasKeys = $("#hasKeys").val().toUpperCase();
      var isWrecked = $("#isWrecked").val().toUpperCase();
      var lots = $("#lots").val();

          // pushes data to database
      database.ref().push({
      year: carYear,
      make: carMake,
      model: carModel,
      vin: carVin,
      plate: carPlate,
      expires: carExp,
      price: salePrice,
      keys: hasKeys,
      wrecked: isWrecked,
      lot: lots
      });
    console.log('Intervel : - ' + intervael);
    console.log(lot); 
  });
    
  database.ref().on(
    "child_added",
    function (db) {
      var dbObj = db.val();
 
    

  //console.log("Year: =" , carYear);
  //console.log('Make: =' , carMake)
  //console.log('Lot: =' , lot)



// puts data to dom 
var newRow = $('<tr>');
newRow.append($("<td>" + dbObj.year + "</td>"));
newRow.append($("<td>" + dbObj.make + "</td>"));
newRow.append($("<td>" + dbObj.model + "</td>"));
newRow.append($("<td>" + dbObj.vin + "</td>"));
newRow.append($('<td>' + dbObj.plate + "</td>"));
newRow.append($('<td>' + dbObj.expires+ "</td>"));
newRow.append($('<td>$' + dbObj.price+ "</td>"));
newRow.append($('<td>' + dbObj.keys+ "</td>"));
newRow.append($('<td>' + dbObj.wrecked+ "</td>"));
newRow.append($('<td>' + dbObj.lot+ "</td>"));

$('tbody').append(newRow);

 console.log('year2: ' , dbObj.lot)

},
function (error) {
  alert(error)
});

database.ref().on("child_added", function (childSnap) {
// console.log(childSnap.val());


});

database
.ref()
.orderByChild('intervel')
.limitToLast(3)
.on('child_added', function (ss) {
 // console.log(ss.val());
});

$('#print-button').on('click', function() {  
  window.print();  
  return false; // why false?
});

});

