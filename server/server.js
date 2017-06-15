const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all users
const initialLocations = [
  {
    id: 'id1',
    name: 'Denver',
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: 'id2',
    name: 'LA',
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 'id3',
    name: 'Boston',
    lat: 42.364506,
    lng: -71.038887,
  },
];

const initialCoordinates = []


app.locals.idIndex = 3;
let { idIndex } = app.locals;

app.locals.locations = initialLocations;
app.locals.dbCoordinates = initialCoordinates;

function removeDuplicate(dup) {
  let filteredDb = initialCoordinates.filter(obj => {
    return !(obj.lat === dup.lat && obj.lng === dup.lng)
  })
  return filteredDb
}

app.get('/locations', (request, response) => response.send({ locations: app.locals.locations }));
app.get('/coordinates', (request, response) => response.send({ coordinates: app.locals.dbCoordinates}))

app.post('/locations', (request, response) => {
  const { location } = request.body;
  const { locations } = app.locals;

  if (!location.name) {
    response.status(400).send({
      error: "Location not saved. You must enter a name."
    })
  } else if (!location.lat) {
    response.status(400).send({
      error: "Location not saved. You must enter a latitude coordinate."
    });
  } else if (!location.lng) {
    response.status(400).send({
      error: "Location was not saved. You must enter a longitude coordinate."
    });
  } else {
    idIndex = idIndex += 1;
    location.id = "id" + idIndex;
    locations.push(location);
    response.status(201).send(locations);
  }
})

app.post('/coordinates', (request, response) => {
  const { coordinates } = request.body;
  let { dbCoordinates } = app.locals;
  dbCoordinates.push(coordinates);
  response.status(201).send(dbCoordinates);
})

app.delete('/coordinates', (request, response) => {
  const { coordinates } = request.body;
  let { dbCoordinates } = app.locals;

  dbCoordinates = removeDuplicate(coordinates);
  response.status(200).send(dbCoordinates);
})

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});
