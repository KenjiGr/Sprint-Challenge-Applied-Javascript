// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const makeCard = response => {
    const newCard = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          img = document.createElement('div'),
          imgsrc = document.createElement('img'),
          by = document.createElement('span');
    
    newCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img.classList.add('img-container');
    
    newCard.append(headline);
    newCard.append(author);
    author.append(img);
    img.append(imgsrc);
    author.append(by);
    
    headline.textContent = response.headline;
    imgsrc.setAttribute('src', response.authorPhoto);
    by.textContent = `By ${response.authorName}`;
    
    return newCard;
}
axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    console.log(response);
    let cardContainer = document.querySelector('.cards-container');

})
.catch(error =>{
    console.log(error);
});