// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(database);

$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();
    var employeeName = $("#employee-name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#start-input").val().trim();
    var monthlyRate = $("#rate-input").val().trim();

    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

});



// PSEUDOCODE
// - Create event that adds user information to database (employee-name, role, start-date, monthly-rate) - USE PUSH
// - Create a way to get all user information from database and render it to the table. 
// - Use start-date and monthly-rate to calculate
//      - Months worked
//      - Total Billed

// Icing on the cake
// - Change styling
// - Add Bootstrap alerts