'use strict';              
const express = require('express');
const app = express(); 

app.get('/SCRAPER0', (req0, res0) => {
const rq = require('request');
const rp = require('request-promise');
//const url = require('url');
//var type = decodeURIComponent(url.format({ pathname: req.originalUrl })).split("☆")[1];
		

	//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS


const url = 'https://cima4u2.shop/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d8%ac%d9%86%d8%a8%d9%8a-movies7-english/page/2/';

rp(url)
  .then(function(html){
    //success!
    res0.header('Content-Type', 'application/json').send(html);
    //console.log(html);
  })
  .catch(function(err){
    //handle error
  });

});

//💔💙💚 Start the server
         
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
