const request = require('request')

const args = process.argv.slice(2)

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  console.log('error:', error) // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
  console.log('body:', body) // Print the HTML for the Google homepage.

  if (error || (response && response.statusCode !== 200)) {
    console.log('Error fetching data')
    return
  }

  if (!body) {
    console.log('Cat not found')
    return
  }

  const data = JSON.parse(body)

  if (!data || data.length === 0) {
    console.log('Cat not found')
    return
  }

  console.log(`${data[0].name} - ${data[0].description}`)
})

