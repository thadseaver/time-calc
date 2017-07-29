(function() {

    var btn = document.getElementById('calc');

    btn.onclick = function(){

        var startHour = parseInt(document.getElementById('start-hour').value),
            startMinute = parseInt(document.getElementById('start-minute').value),
            startAmPm = document.querySelector('input[name = start-am-pm]:checked').value,
            endAmPm =document.querySelector('input[name = end-am-pm]:checked').value;
            endHour = parseInt(document.getElementById('end-hour').value),
            endMinute = parseInt(document.getElementById('end-minute').value),

            startToMinutes = ((startHour * 60) + startMinute),
            endToMinutes = ((endHour * 60) + endMinute),
            //convert to total minutes

            minutesDiff = (endToMinutes - startToMinutes),

            hourFinal = Math.floor(minutesDiff / 60),
            minuteFinal = (minutesDiff % 60),
            hourOutput = "",
            minuteOutput = "";

            if (hourFinal === 1) {
                hourOutput = "hour";
            } else {
                hourOutput = "hours";
            }

            if (minuteFinal === 1) {
                minuteOutput = "minute";
            } else {
                minuteOutput = "minutes";
            }

            

        console.log("Total time is " + hourFinal + " " + hourOutput + " and " + minuteFinal + " " + minuteOutput);

        return false;
    };

    var clr = document.getElementById('clear');

    clr.onclick = function(){

        window.location.reload();
        //removes empty field warnings
    };
    
})();