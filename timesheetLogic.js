// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-cuJuAe1Nl5CSQ9Dxf8J7fxrjMLurrRM",
    authDomain: "employee-management-aa190.firebaseapp.com",
    databaseURL: "https://employee-management-aa190.firebaseio.com",
    projectId: "employee-management-aa190",
    storageBucket: "",
    messagingSenderId: "340739215875",
    appId: "1:340739215875:web:09a4a6133dca6a5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(database);

$("#add-employee-btn").on("submit", function (event) {
    event.preventDefault();

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