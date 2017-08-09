(function() {
    "use strict";
    var btn = document.getElementById('calc');

    btn.onclick = function(e){

        var startHourField = document.getElementById('start-hour'),
            startHour = parseInt(document.getElementById('start-hour').value),

            startMinuteField = document.getElementById('start-minute'),
            startMinute = parseInt(document.getElementById('start-minute').value),

            startAmPm = document.querySelector('input[name = start-am-pm]:checked').value,

            endHourField = document.getElementById('end-hour'),
            endHour = parseInt(document.getElementById('end-hour').value),

            endMinuteField = document.getElementById('end-minute'),
            endMinute = parseInt(document.getElementById('end-minute').value),

            endAmPm = document.querySelector('input[name = end-am-pm]:checked').value,

            lunchTaken = document.querySelector('input[name = lunch]:checked').value,
            validateHour = /^([1-9]|1[0-2])$/,
            validateMinute = /^([01]?\d|59)$/,
            answer = document.getElementById('answer'),
            allTextInput = [startHourField, startMinuteField, endHourField, endMinuteField],
            errorCheck = true,
            startToMinutes,
            endToMinutes,
            minutesDiff,
            hourFinal,
            minuteFinal,
            hourOutput,
            minuteOutput;

            allTextInput.forEach(function(i) {
                i.classList.remove('error');
            });

            // Validate hour entered
            if (!validateHour.test(startHour)) {
                //var startHourField = document.getElementById("start-hour");
                startHourField.classList.add('error');
                answer.innerHTML = '<p class="red-text">Please enter a valid number.</p>';
                //startHourField.focus();
                errorCheck = false;
                return false;
            }

            // Allows for AM/PM calculation
            if (startAmPm === 'pm' && startHour != 12) {
                startHour += 12;
            }

            // Allows for AM/PM calculation
            if (endAmPm === 'pm' && endHour != 12) {
                endHour += 12;
            }

            // Convert to total minutes
            startToMinutes = ((startHour * 60) + startMinute);
            endToMinutes = ((endHour * 60) + endMinute);


            minutesDiff = (endToMinutes - startToMinutes);

            // Removes 30 minutes if lunch was taken
            if (lunchTaken === 'yes') {
                minutesDiff -= 30;
            }
            
            hourFinal = Math.floor(minutesDiff / 60);
            minuteFinal = (minutesDiff % 60);

            // Determines proper output of hour/hours and minute/minutes
            if (hourFinal === 1) {
                hourOutput = 'hour';
            } else {
                hourOutput = 'hours';
            }

            if (minuteFinal === 1) {
                minuteOutput = 'minute';
            } else {
                minuteOutput = 'minutes';
            }

            // Outputs final answer
            answer.innerHTML = '<p>Total time is ' + hourFinal + ' ' + hourOutput +
            ' and ' + minuteFinal + ' ' + minuteOutput + '.' + '</p>';
            //console.log(startHour);
            /*if (errorCheck === true) {
                allTextInput.classList.remove("error");
            }*/

            //allTextInput.classList.add("no-error");

        e.preventDefault();
    };

    var clr = document.getElementById('clear');

    clr.onclick = function(){

        // Removes previous output
        window.location.reload();
    };
    
})();