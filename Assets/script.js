let timeclock = function() {
    var time = moment().format('[It is currently ] dddd MM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}

timeclock()
setInterval(timeclock, 1000)


$('.time-block').on('click', 'button', saveToLocal)

function saveToLocal(event) {
var element = event.target
var hour = $(element).siblings('.hour').attr('id')
var task = $(element).siblings('textarea').val()
console.log(element)
localStorage.setItem(hour, task)
console.log($(element).siblings('.hour').attr('id'))
}

function loadFromLocal() {
    var hourCount = 9
}



// while (hourCount <=17) {
// var taskText = localStorage.getItem(hourCount)
// console.log(taskText)
// hourCount ++;
// }


// var input=document.getElementById("saveText");
// localStorage.setItem("server", input.val());

// var storedValue = localStorage.getItem("server");

// function saveData() {
//     localStorage.saveText
// }

// var i = 0;
// function change() {
//   var doc = document.getElementById("timeBlock");
//   var color = ["#ff6961];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 15000);


// var now = moment(); // new Date().getTime();
// var then = moment().add(60, 'minutes'); // new Date(now + 60 * 1000);

// $(".now").text(moment(now).format("H"));
// $(".then").text(moment(then).format("H"));
// $(".duration").text(moment(now).to(then));
// (function timerLoop() {
  
//   $(".difference").text(moment().to(then));
//   $(".countdown").text(countdown(then).toString());
//   $(".hacked").animate("pwned");
//   requestAnimationFrame(timerLoop);
// })();























//reference the paragrpash for current day
//save button and class add eventListeners on all save buttons

//save task function
//store this value as a vairable, reference the textarea and grab the value 
//variable that sotres the time block
//event.target use 'this'
// us the sibling method to target the text area
//use parent to target the specific hour based on the id

//local storage set time as key and value as textarea text(setItem)


//funbtion for updating hour colors
//grab current hour with moment js moment().hours() military time
//Loop go through all th etime blocks and then run a conditional statement to compare current hour to each time block
//vairable that stores that blocks hour grab by the time blocks id in html military time (arse string to interger)
//if/else if

//if(timeblock< currentHour){
    //add past class grey
    //}else if (timeblock===currenthour) {
    //remove class past and add present
    // } else{
    //remove pas/present
    //add future
    //}


    //loading task from local storage
    //textarea (with a DOM reference) set the value to localstorage getItem('hour-9)....repeated over and over unless doing a loop


    //setInterval to run the hourcolor updating function every 15-30 seconds


//moment format with day and month day of moment(). format(dddd MM DD)

// remember for Jqueery use $('.saveBtn').on('click', function to save LS)