'use strict';              
const express = require('express');
const app = express(); 

app.get('/SCRAPER0', (req0, res0) => {
const rq = require('request');
const rp = require('request-promise');
//const url = require('url');
//var type = decodeURIComponent(url.format({ pathname: req.originalUrl })).split("☆")[1];
		

	//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS


const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

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
