const moment = require('moment');

console.log(moment().format());

const timestamp = moment().unix();

const currentMoment = moment.unix(timestamp);


console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));