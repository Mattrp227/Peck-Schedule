//Today's date
//variable to store the date and format
var now = moment().hour();
var currentDate = moment().format('DDDD, MMMM, Do, YYYY');
//link to html currentday
$("#currentDay").html(currentDate);
  



 
//save button
var saveButton = $('saveBtn');
saveButton.on('click', function() {
    //create variable to store the time of the entered data
    var hour = $(this).siblings(".timeColumn").val();
    //create variable to store the text in the text area
    var info = $(this).siblings(".columnText").text();
    //set local storage to the time and text
    localStorage.setItem(hour, info);
})

//keep saved items on the planner
//var test = $("#7 .columnText").text(localStorage.getItem('7'));
//console.log(test);
$("#7 .columnText").text(localStorage.getItem('7'));
$("#8 .columnText").text(localStorage.getItem('8'));
$("#9 .columnText").text(localStorage.getItem('9'));
$("#10 .columnText").text(localStorage.getItem('10'));
$("#11 .columnText").text(localStorage.getItem('11'));
$("#12 .columnText").text(localStorage.getItem('12'));
$("#1 .columnText").text(localStorage.getItem('1'));
$("#2 .columnText").text(localStorage.getItem('2'));
$("#3 .columnText").text(localStorage.getItem('3'));
$("#4 .columnText").text(localStorage.getItem('4'));

//try to get blocks to change color depending on the time
function blockColor() {

}

