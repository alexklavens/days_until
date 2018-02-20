//function get_date(year, month, day) {
//    "use strict";
//    var this_date;
//    this_date = new Date(year, month, day);
//    return this_date;
//}


//Converts Date Object to yyyy-mm-dd
function dateString(myDate){
    var today, zero, year, month, day, result;
    zero = "0";
    today = new Date();
    
    year = today.getFullYear();
    
    month = zero.concat(today.getMonth() + 1).slice(-2);
    day = zero.concat(today.getDate()).slice(-2);
    
    result = year + "-" + month + "-" + day;
    return result;
}

function dateNames(dayMonth) {
    "use strict";
    var outList;
    switch (dayMonth) {
    case "weekDay":
        outList = ["Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"];
        break;
    case "month":
        outList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        break;

    }
    return outList;
}

function getDateName(dayMonth, i) {
    "use strict";
    var resultList;
    resultList = dateNames(dayMonth);
//    console.log(resultList);
    return resultList[i];
}

function formatDateDisplay(inDate) {
    "use strict";
    var weekDay, date, month, year, displayOut;
    
    weekDay = inDate.getDay();
    weekDay = getDateName("weekDay", weekDay);
    
    month = inDate.getMonth();
    month = getDateName("month", month);
    
    date = inDate.getDate() + 1;
    
    year = inDate.getFullYear();
    
    displayOut = weekDay + " " + month + " " + date + " , " + year;
//    console.log(displayOut);
    return displayOut;
}

function dateDif(myDate) {
    "use strict";
    var today, result;
    today = new Date();
    result = myDate - today;
//    console.log("Result >>> " + result);
    return result;
}

function numDays(dateDif) {
    "use strict";
    var msTOdays, outDif, c;
    msTOdays = 1 / (60 * 60 * 24 * 1000);
    outDif = dateDif * msTOdays + 1;
    c = Math.ceil(outDif);
    return c;
}

function get_date_diff(in_date) {
    "use strict";
    var dif, num_days;
    dif = dateDif(in_date);
    num_days = numDays(dif);
    return num_days;
}

function getNumDays(in_date) {
    "use strict";
    var this_date, num_days;

    
    this_date = new Date(in_date);
    
    num_days = get_date_diff(this_date);
    return num_days;
   
}



function displayResult() {
    "use strict";
    var in_date, num_days;
    in_date = document.getElementById("in_date").value;
    //console.log("In_date.value >>> " + in_date);
    in_date = new Date(in_date);
    num_days = getNumDays(in_date);
//    document.getElementById("today").innerHTML = ("Today is " + Date());
    document.getElementById("result").innerHTML = num_days;
    document.getElementById("out_date").innerHTML = (" days until " + formatDateDisplay(in_date));
}


document.addEventListener("onload", function () {
//    document.getElementById("in_date").value = new Date().toISOString().slice(0,10);
    document.getElementById("in_date").value = "2018-12-31";
});


document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('button');
    checkPageButton.addEventListener("click", displayResult);
});


    


function fillCalendar(){
    var today;
    today = new Date().toISOString().slice(0, 10);
    console.log(today);
    document.getElementById("in_date").value = today;
}
