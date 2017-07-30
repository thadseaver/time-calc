(function() {

    var btn = document.getElementById('calc');

    btn.onclick = function(){

        var startHour = parseInt(document.getElementById('start-hour').value),
            startMinute = parseInt(document.getElementById('start-minute').value),
            startAmPm = document.querySelector('input[name = start-am-pm]:checked').value,
            endAmPm =document.querySelector('input[name = end-am-pm]:checked').value;
            endHour = parseInt(document.getElementById('end-hour').value),
            endMinute = parseInt(document.getElementById('end-minute').value),

            // Convert to total misnute
            startToMinutes = ((startHour * 60) + startMinute),
            endToMinutes = ((endHour * 60) + endMinute),

            minutesDiff = (endToMinutes - startToMinutes),

            hourFinal = Math.floor(minutesDiff / 60),
            minuteFinal = (minutesDiff % 60),
            hourOutput = "",
            minuteOutput = "";

            // Allows for AM/PM calculation
            if (startAmPm === "pm") {
                startHour += 12;
            } else {
                startHour = startHour;
            };

            // Allows for AM/PM calculation
            if (endAmPm === "pm") {
                endHour += 12;
            } else {
                endHour = endHour;
            };

            // Determines proper output of hour/hours and minute/minutes
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

        //removes empty field warnings
        window.location.reload();
    };
    
})();