//  import { fetchUrlData } from './pixabay-api.js';
 
//  const refs = {
//  fetchImageForm = document.querySelector('.form'),
//  gallery = document.querySelector('.gallery'),
//  userInput = document.querySelector('input'),
//  container = document.querySelector('.container'),
//  };

//  refs.fetchImageForm.addEventListener('submit', onFormSubmit);

//  function onFormSubmit(e) {
//     e.preventDefault();

//  const query = e.target.elements.input.value.trim();

//  if (!query) {
//     alert('Empty input');
//     return;
//  }
 
//  fetchUrlData(query).then(result => {
//     renderUrlData(result.images);
//  });

//  e.target.reset();
//  }

//  function renderImages(images) {
//     const markup = markupsImage(images);
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
//  }
// //=========================================

// function markupImage(image) {
//     const {webformatURL, tags, likes, views, comments, downloads } = data;

//     return `<li class="gallery-item">
//     <a href="${data.webformatURL}">
//       <img class="gallery-image" src="${webformatURL}" alt="${tags}">
//     </a>
//     <div class="image-details">
//       <div class="image-text">
//       <p><b class="image-text-width">Likes: </b>${likes}</p>
//       <p><b class="image-text-width">Views: </b>${views}</p>
//       <p><b class="image-text-width">Comments: </b>${comments}</p>
//       <p><b class="image-text-width">Downloads: </b>${downloads}</p>
//       </div>
//     </div>
//   </li>`
// }

// function markupsImage(images) {
//     return images.map(markupImage).join('');
// }