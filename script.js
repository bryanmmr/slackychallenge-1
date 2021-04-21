const request = new Request('https://quote-garden.herokuapp.com/api/v3/quotes/random');
const url = request.url;
const method = request.method;
const credentials = request.credentials;

const element = document.getElementById('res');

async function quote(){
  fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    var jsonFile = response.data;
    element.innerHTML = jsonFile[0]['quoteAuthor'] + '<br>';
    element.innerHTML += jsonFile[0]['quoteText'] + '<br>';
    element.innerHTML += jsonFile[0]['quoteGenre'];
    console.log(response.data);
    console.debug(response);
    return jsonFile[0];
    // ...
  }).catch(error => {
    console.error(error);
  });
}
//setInterval(quote(), 110000);
quote();