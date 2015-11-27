
var month = [
    { month: 'January'},
    { month: 'February'},
    { month: 'March'},
    { month: 'April'},
    { month: 'May'},
    { month: 'June'},
    { month: 'July'},
    { month: 'Augest'},
    { month: 'september'},
    { month: 'october'},
    { month: 'November'},
    { month: 'December'},

];
     function meDatePicker(){


              for( var i = 0; i < month.length; i++ ){
                var a = Object.keys(month[i]);
                console.log(month[i][a[0]]);
              }
            }
/*
       var fullDate = new Date()
console.log(fullDate);
//Thu May 19 2011 17:25:38 GMT+1000 {}

//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);

var currentDate = fullDate.getDate() + "/" + fullDate.getMonth() + "/" + fullDate.getFullYear();
console.log(currentDate);
var add = (function () {
var counter = 0;
return function () {
     return counter += 1;
   }
})();*/
