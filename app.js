// require dependencies
const config = require('config')     // for config variables
const express = require('express')   // Express web framework
const helmet = require('helmet')     // HTTP security

// create an Express app
const app = express()

// use Helmet middleware to automatically set secure HTTP headers
app.use(helmet())

// Use hosting values if available, otherwise default 
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get("hostname")
const port = process.env.PORT || config.get("port");

// Use Express app.get() methods to configure endpoints

// declare your callback function the old way
app.get('/', function (req, res) {
  res.send('Welcome to the Node.js Http module page!  <br> <br>' +
    'Try going to different URIs by adding these at the end: <br> <br>' +
     '/The Built-in HTTP Module <br>' +
    '/Node.js as a WebServer <br>'+
    '/Add an HTTP Header <br>' +
    '/Read the Query String <br>'+
    '/Split the Query String <br>' +
    
    '<br> <br>' +
    'Fork the source code from <a href="https://github.com/Sravani537520/node-express-app">Repo-Link</a>'
  )
})

// or use the new arrow function syntax
// respond with text
app.get('/TheBuilt-inHTTPModule', (req, res) => {
  res.send('Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the HTTP. to include HTTP module,use require() method')
})

// or respond with html
app.get('/Node.jsasaWebServer', (req, res) => {
  res.send('Use the createServer() method to create an HTTP server:')
})

// or respond with JSON
app.get('/AddanHTTPHeader', (req, res) => {
  res.send('If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:')
})

// :name indicates a parameter at this location in the URI
app.get('/ReadtheQueryString', (req, res) => {
  res.send('The function passed into the http.createServer() has a req argument that represents the request from the client, as an object ')
})

// combine your skills and get creative
app.get('/SplittheQueryString', (req, res) => {
  res.send('There are built-in modules to easily split the query string into readable parts, such as the URL module.')
})


// Use middleware to handle all non-managed routes (e.g. /xyz)
// https://expressjs.com/en/api.html#req.originalUrl
app.use((req, res, next) => {
  res.status(404).send(`status 404 - ${req.originalUrl} was not found`);
})

// start listening and inform developers
app.listen(port, hostname, () => {
  console.log(`\n App listening at http://${hostname}:${port}/`)
  console.log(`\n Try going to different URIs:\n`)
  console.log(`   Try /The Built-in HTTP Module`)
  console.log(`   Try /Node.js as a WebServer`)
  console.log(`   Try /Add an HTTP Header`)
 
  console.log(`   Try /Read the Query String `)
  console.log(`   Try /Split the Query String`)
  
  console.log('\n Hit CTRL-C CTRL-C to stop\n')
})

// Utility to see if an object is empty or not

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

// generates a random value in [low,high) 
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}