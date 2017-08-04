(function() {

    var btn = document.getElementById('calc');

    btn.onclick = function(e){

        var startHour = parseInt(document.getElementById('start-hour').value),
            startMinute = parseInt(document.getElementById('start-minute').value),
            startAmPm = document.querySelector('input[name = start-am-pm]:checked').value,
            endHour = parseInt(document.getElementById('end-hour').value),
            endMinute = parseInt(document.getElementById('end-minute').value),
            endAmPm = document.querySelector('input[name = end-am-pm]:checked').value,
            lunchTaken = document.querySelector('input[name = lunch]:checked').value,
            validateHour = /^([1-9]|1[0-2])$/,
            validateMinute = /^([01]?\d|59)$/,
            startToMinutes,
            endToMinutes,
            minutesDiff,
            hourFinal,
            minuteFinal,
            hourOutput,
            minuteOutput;

            // Allows for AM/PM calculation
            if (startAmPm === "pm" && startHour != 12) {
                startHour += 12;
            }

            // Allows for AM/PM calculation
            if (endAmPm === "pm" && endHour != 12) {
                endHour += 12;
            }

            // Convert to total minutes
            startToMinutes = ((startHour * 60) + startMinute);
            endToMinutes = ((endHour * 60) + endMinute);


            minutesDiff = (endToMinutes - startToMinutes);

            // Removes 30 minutes if lunch was taken
            if (lunchTaken === "yes") {
                minutesDiff -= 30;
            }
            
            hourFinal = Math.floor(minutesDiff / 60);
            minuteFinal = (minutesDiff % 60);

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

            var ans = document.getElementById("answer");
            ans.innerHTML = "<p>Total time is " + hourFinal + " " + hourOutput +
            " and " + minuteFinal + " " + minuteOutput + "." + "</p>";

        e.preventDefault();
    };

    var clr = document.getElementById('clear');

    clr.onclick = function(){

        // Removes previous output
        window.location.reload();
    };
    
})();