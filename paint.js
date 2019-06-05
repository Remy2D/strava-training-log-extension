/**
 * Append style at the end of a document: use when Chrome has problems injecting CSS declaratively
 */
function injectStyles(rule) {
    $("<div />", {
        html: '&shy;<style>' + rule + '</style>'
    }).appendTo("body");
}

/**
 * Add cross-train circles
 */
let crossTrains = document.getElementsByClassName("xt-day");


let runningBlue = "#4D7EA8";
let cyclingOrange = "#E9724C";
let crosstrainGreen = "#354c26";

let circleAnchorHTML = "<g transform=\"translate(0, 30)\" class=\"leaf expanded\"><circle class=\"activity\" id=\"activity1\" r=\"15\" fill=\""
    + crosstrainGreen
    + "\"></circle></g>";


// Paint circles for cross-train activities:
for (let i = 0, l = crossTrains.length; i < l; i++) {
    crossTrains[i].parentElement.className = "day-wrap day-activities-completed day-activities-children-1";
    crossTrains[i].parentElement.innerHTML += circleAnchorHTML;
}

/**
 * Inject missing CSS
 */
injectStyles('.activity-sport-run, .activity-type-run {fill: var(--running-blue); stroke: var(--running-blue)}');
injectStyles('.activity-sport-ride, .activity-type-ride, .activity-type-ebikeride, .activity-type-virtualride {fill: var(--cycling-orange);stroke: var(--cycling-orange)}');
