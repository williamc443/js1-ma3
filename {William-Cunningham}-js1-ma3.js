// Question 1

function substractb(a, b) {
  return a - b;
}

const sub = (a, b) => a - b;

// Question 2

const baseUrl = "https://api.rawg.io/api/games?genres=sports";
const gamesUrl = `${baseUrl}games`;

fetch(gamesUrl).then(function(response) {
  console.dir(response);
});

fetch(gamesUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.dir(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

// Question 3

<h1>These cats are outrageous.</h1>;

const genreHeading = document.querySelector("h1");

const formattedGenres = genres.replace(/cats/g, "giraffes");

genreHeading.innerText = formattedGenres;

// Question 4

<a class="btn details" href="https://my.site.com?userId=7">
  Details
</a>;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "third.html";
}

const baseUrl = "https://my.site.com?userId=7";
const gamesUrl = `${baseUrl}games/`;
const detailsUrl = `${gamesUrl}${id}`;

fetch(detailsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createDetails(json);
  })
  .catch(function(error) {
    console.dir(error);
  });
