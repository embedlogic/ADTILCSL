module.exports = date => date
    .toLocaleString('fr-CA', {timeZone: 'utc', year: 'numeric' , month: 'long', day: 'numeric'})
    .replace(/([0-9]{4}) (M[0-9]{2}) ([0-9]{1,2})/, '$3 $2 $1')
    .replace(/M01/, 'jan.')
    .replace(/M02/, 'févr.')
    .replace(/M03/, 'mars')
    .replace(/M04/, 'avr.')
    .replace(/M05/, 'mai')
    .replace(/M06/, 'juin')
    .replace(/M07/, 'juil.')
    .replace(/M08/, 'août')
    .replace(/M09/, 'sept.')
    .replace(/M10/, 'oct.')
    .replace(/M11/, 'nov.')
    .replace(/M12/, 'déc.');