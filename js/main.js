(function() {
    "use strict";
    var btn = document.getElementById('calc');

    btn.onclick = function(e){

        var startHourField = document.getElementById('start-hour'),
            startHour = parseInt(document.getElementById('start-hour').value),

            startMinuteField = document.getElementById('start-minute'),
            startMinute = parseInt(document.getElementById('start-minute').value),

            startAm = document.getElementById('start-am'),
            startPm = document.getElementById('start-pm'),
            startAmPm = document.querySelector('input[name = start-am-pm]:checked').value,

            endHourField = document.getElementById('end-hour'),
            endHour = parseInt(document.getElementById('end-hour').value),

            endMinuteField = document.getElementById('end-minute'),
            endMinute = parseInt(document.getElementById('end-minute').value),

            endAm = document.getElementById('end-am'),
            endPm = document.getElementById('end-pm'),
            endAmPm = document.querySelector('input[name = end-am-pm]:checked').value,

            breakTaken = document.querySelector('input[name = break]:checked').value,
            breakYes = document.getElementById('break-yes'),
            breakNo = document.getElementById('break-no'),

            lunchTaken = document.querySelector('input[name = lunch]:checked').value,
            lunchYes = document.getElementById('lunch-yes'),
            lunchNo = document.getElementById('lunch-no'),

            validateHour = /^([1-9]|1[0-2])$/,
            validateMinute = /^[0-5]?[0-9]$/,

            hourError = '<p class="red-text">Please enter a number from 1 to 12.</p>',
            minuteError = '<p class="red-text">Please enter a number from 0 to 59.</p>',
            genericError = '<p class="red-text">Please enter a valid number.</p>',

            answer = document.getElementById('answer'),
            
            allTextInput = [startHourField, startMinuteField, endHourField, endMinuteField],
            allInputs = [startHourField, startMinuteField, endHourField, endMinuteField, 
                startAm, startPm, endAm, endPm],
            entireForm = [startHourField, startMinuteField, endHourField, endMinuteField, 
                startAm, startPm, endAm, endPm, breakYes, breakNo, lunchYes, lunchNo],

            errorCheck = true,
            startToMinutes,
            endToMinutes,
            minutesDiff,
            hourFinal,
            minuteFinal,
            hourOutput,
            minuteOutput;

            allInputs.forEach(function(i) {
                i.classList.remove('error');
            });

            // Validate start hour entered
            if (isNaN(startHour) || !validateHour.test(startHour)) {
                startHourField.classList.add('error');
                answer.innerHTML = hourError;
                errorCheck = false;
                return false;
            }

            // Validate end hour entered
            if (isNaN(endHour) || !validateHour.test(endHour)) {
                endHourField.classList.add('error');
                answer.innerHTML = hourError;
                errorCheck = false;
                return false;
            }

            // Validate start minute entered
            if (isNaN(startMinute) || !validateMinute.test(startMinute)) {
                startMinuteField.classList.add('error');
                answer.innerHTML = minuteError;
                errorCheck = false;
                return false;
            }

            // Validate end minute entered
            if (isNaN(endMinute) || !validateMinute.test(endMinute)) {
                endMinuteField.classList.add('error');
                answer.innerHTML = minuteError;
                errorCheck = false;
                return false;
            }

            // Allows for AM/PM calculation
            if ((startAmPm === 'pm' && startHour != 12) || (startAmPm === 'am' && startHour === 12)) {
                startHour += 12;
            }

            // Allows for AM/PM calculation
            if ((endAmPm === 'pm' && endHour != 12) || (endAmPm === 'am' && endHour === 12)) {                
                endHour += 12;
            }

            // Convert to total minutes
            startToMinutes = ((startHour * 60) + startMinute);
            endToMinutes = ((endHour * 60) + endMinute);

            // Check for end time that comes before start time
            if (startToMinutes > endToMinutes) {

                allInputs.forEach(function(i) {
                    i.classList.add('error');
                });

                answer.innerHTML = genericError;
                return false;
            }

            minutesDiff = (endToMinutes - startToMinutes);

            // Removes 30 minutes if lunch was taken
            if (lunchTaken === 'yes') {
                minutesDiff -= 30;
            }

            // Removes 15 minutes if break was taken
            if (breakTaken === 'yes') {
                minutesDiff -= 15;
            }
            
            hourFinal = Math.floor(minutesDiff / 60);
            minuteFinal = (minutesDiff % 60);

            // Check for negative final times
            if (minuteFinal < 0) {
                entireForm.forEach(function(i) {
                    i.classList.add('error');
                });
                answer.innerHTML = genericError;
                errorCheck = false;
                return false;
            }

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
            if (errorCheck === true) {
                if (hourFinal === 0) {
                    answer.innerHTML = '<p>Total time is ' + minuteFinal + ' ' + minuteOutput + '.' + '</p>';
                } else if (minuteFinal === 0) {
                    answer.innerHTML = '<p>Total time is ' + hourFinal + ' ' + hourOutput + '.' + '</p>';
                } else {
                    answer.innerHTML = '<p>Total time is ' + hourFinal + ' ' + hourOutput +
                ' and ' + minuteFinal + ' ' + minuteOutput + '.' + '</p>';
                }                
            } else {
                answer.innerHTML = genericError;
                return false;
            }

        e.preventDefault();
    };

    var clr = document.getElementById('clear');

    clr.onclick = function(){

        // Removes previous output
        window.location.reload();
    };
    
})();