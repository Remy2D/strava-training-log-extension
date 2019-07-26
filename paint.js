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

let circleAnchorHTML = `
<g transform="translate(0, 50)" class="leaf expanded">
    <circle class="activity" id="activity1" r="15" fill=var(--crosstrain-green)></circle>
</g>
`;

// Paint circles for cross-train activities:
for (let i = 0, l = crossTrains.length; i < l; i++) {
    crossTrains[i].parentElement.className = "day-wrap day-activities-completed day-activities-children-1";
    crossTrains[i].parentElement.innerHTML += circleAnchorHTML;
}

/**
 * Inject missing CSS
 */
injectStyles('.activity-sport-run, .activity-type-run {fill: var(--running-blue-light); stroke: var(--running-blue-dark)}');
injectStyles('.activity-sport-ride, .activity-type-ride, .activity-type-ebikeride, .activity-type-virtualride {fill: var(--cycling-orange-light);stroke: var(--cycling-orange-dark)}');
