const request = require('request')

//fetchBreedDescription(breedName, (error, desc) => {
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || (response && response.statusCode !== 200)) {
      callback(error, null)
      return
    }

    const data = JSON.parse(body)
  
    if (!data || data.length === 0) {
      callback('Cat not found', null)
      return
    }
  
    callback(null, data[0].description)
  })
}

module.exports = { fetchBreedDescription }
