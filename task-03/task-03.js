const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListElem = document.querySelector('#gallery');
galleryListElem.classList.add('gallery_list')
const makeGalleryListItemMarcup = (imege) => {
   
    return `
      <li class="gallery_list_item">
        <img
          class="gallery_list_item_img"
          src=${imege.url}
          ait=${imege.alt}
        />
      </li>
`;
 }; 
const makeGalleryList = images.map(makeGalleryListItemMarcup).join('');
galleryListElem.insertAdjacentHTML('afterbegin', makeGalleryList)

console.log(makeGalleryList);






// const element = [];
    
// images.map(image => {
//     const galleryElem = document.createElement('li');
//     const imagesElem = document.createElement('img');
//     imagesElem.src = image.url;
//     imagesElem.alt = image.alt;
//     imagesElem.classList = 'gallery_list_imege';
//     imagesElem.width = 250;


//     galleryElem.appendChild( imagesElem);

//     element.push(galleryElem);

//     console.log(galleryElem);
// });

// console.log(element);

// const galleryElemList = document.querySelector('#gallery');
// galleryElemList.append(...element);