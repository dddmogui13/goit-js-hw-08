// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
function createGalleryItems(galleryItems) {
    const list = document.querySelector('.gallery');
    list.style.listStyle = 'none';
  
    galleryItems.forEach(obj => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery__item');
  
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = obj.original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = obj.preview;
      image.alt = obj.description;
  
      link.appendChild(image);
      galleryItem.appendChild(link);
      list.appendChild(galleryItem);
    });
  }
  
  // Создаем элементы галереи
  createGalleryItems(galleryItems);
  
  // Инициализируем SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  
  console.log(lightbox);
console.log(galleryItems);
