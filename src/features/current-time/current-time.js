let date = new Date();


let easternTimeHrs = date.getHours().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short"});
let easternTimeMinutes = date.getMinutes().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short"});


let hrs = document.querySelector('.hrs');
let minutes = document.querySelector('.minutes');
let meridiem = document.querySelector('.meridiem');

let currentHrs = easternTimeHrs;
let currentMins = easternTimeMinutes;

let divider = document.querySelector('.divider');



const changeTime = function() {
    if (easternTimeHrs > 12) {
        currentHrs = easternTimeHrs - 12;
        meridiem.innerHTML = 'PM';
    } else {
        meridiem.innerHTML = 'AM';
    }

    let chars = currentHrs.toString().split('');
    if (chars.length === 1) {
        chars.unshift('0');
        let newHrs = chars.join('');
        hrs.innerHTML = newHrs;
    } else {
        hrs.innerHTML = currentHrs;
    }

    let minChars = easternTimeMinutes.toString().split('');
    if (minChars.length === 1) {
        minChars.unshift('0');
        let newMins = minChars.join('');
        minutes.innerHTML = newMins;
    } else {
        minutes.innerHTML = currentMins;
    }

    // let script = document.querySelector('.current-time');

    // let timestamp = date.getTime().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short"} );

    // let scriptUrl = "./src/features/current-time/current-time.js?v=" + timestamp;

    // script.src = scriptUrl;

    return
}

const toggle = function() {
    let dividerClasses = divider.classList;

    dividerClasses.forEach(element => {
        if (element === 'active') {
            divider.classList.remove('active');
        } else {
            divider.classList.add('active');
        }
    })
}

window.addEventListener('load', changeTime());

setInterval(async () => {
    changeTime();
}, 500);

setInterval(async () => {
    toggle();
}, 800);


