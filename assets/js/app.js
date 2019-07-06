// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCW9_7VxmemvQ1Znm-uy6qD7_LTf2iz-3g",
    authDomain: "employee-data-management-7afbb.firebaseapp.com",
    databaseURL: "https://employee-data-management-7afbb.firebaseio.com",
    projectId: "employee-data-management-7afbb",
    storageBucket: "",
    messagingSenderId: "468777354917",
    appId: "1:468777354917:web:69bf1701aa1ecd60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Grab variables from form fields
var database = firebase.database();

var empName = $("#empName").val().trim();
console.log(empName);
var empRole = $("#empRole").val().trim();
var monthRate = $("#monthRate").val().trim();
var startDate = $("#startDate").val().trim();

//push values intot database  
database.ref().push({
    employee: empName,
    role: empRole,
    rate: monthRate,
    date: startDate,
});