


var month = ['January','February','March','April','May','June','July','Augest','September','October','November','December'];
var inc = 0;
 var d = new Date();
 var str,str1;
     function meDatePicker(){

                str = "<table id = 'table1'>"
                str += "<tr>"
                str += "<td><font onclick = 'move(0)' id = 'cur'>  <  &nbsp;&nbsp; </font></td>"
                str += "<td id = 'sta'><font id = 'm1'>" + month[d.getMonth()] +" &nbsp;&nbsp; </font></td>"
                str += "<td><font onclick = 'move(1)' id = 'cur'>  >   </font></td>"
                str += "</tr>"
                str += "</table>";
                $("#table1").html(str);
                str1 = "<br /><table id = 'table2' border = '1'><tr>"
                str1 += "<th>Sun</th>"
                str1 += "<th>Mon</th>"
                str1 += "<th>Tue</th>"
                str1 += "<th>Wed</th>"
                str1 += "<th>Thu</th>"
                str1 += "<th>Fri</th>"
                str1 += "<th>Sat</th>"
                str1 += "</tr>"


      var q = 0;
      var p = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
      var d1=new Date();
       d1.setFullYear(d.getFullYear(),d.getMonth(),0);
       var first = d1.getDay();

          for( var x = 0; x < 6; x++){
              str1 += "<tr>"
                for(var y = 0; x < 7; y++){

                    if( first != 0){
                      str1 += "<td></td>"
                      first--;
                    }
                    else{
                      if(p === q)
                      {
                        break;
                      }
                      else{
                    str1 += "<td>" + (++q) + "</td>"
                  }
                }
              }
              str1 += "</tr>"
            }


                str += "</table>";

                $("#table2").html(str1);
            //    daysM(1);

              }
              var t = true;
                function move(val){

                  t ? move1(val,d.getMonth()) : move1(val,inc);
                  t = false;
                }
                function move1(val,inc){
                  console.log(t);
                 if(val === 0){
                   inc = inc - 1;
                   $("#m1").text(month[inc]);
                // daysM(inc+1);

                 }
                 else
                   if(val === 1){
                      inc = inc + 1;
                     $("#m1").text(month[inc]);
                  //   daysM(inc+1);
                   }
                 }
              //function daysM(inc){
                //console.log(inc);
                 //console.log( new Date(2015,inc,0).getDate());
                 //d.setFullYear(2015);
                 //d.setMonth(inc);
                   //var first_day = d.getDay();


            //  }


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
