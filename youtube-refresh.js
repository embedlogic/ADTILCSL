const https = require('https');
const fs = require('fs');
const { pipeline } = require('stream');
require('dotenv').config();

//Creating Writable stream with a file target
const OUTPUT = fs.createWriteStream('./_src/_data/youtube.json');

https.get(`https://www.googleapis.com/youtube/v3/search?part=id&channelId=${process.env.YOUTUBE_CHANNELID}&type=video&maxResults=20&order=date&key=${process.env.YOUTUBE_KEY}`, res => {
    //Piping res (IncomingMessage: Readable) to OUTPUT (Writable)
    //The .pipe method wilL manage stream flow and errors!
    pipeline(res, OUTPUT, error => {
        if(error) {
            console.error(error.stack);
        } else {
            console.log('Tranfering YouTube data is done!');
        }
    });  
}).on('error', error => console.error(error.stack));