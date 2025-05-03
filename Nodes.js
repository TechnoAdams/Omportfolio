const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('sujan-portfolio-key.pem'),
  cert: fs.readFileSync('sujan-portfolio.pem')
};

app.use(express.static('path/to/your/website')); 

https.createServer(options, app).listen(5500, () => {
  console.log('HTTPS server running at https://sujan-portfolio:5500');
});
