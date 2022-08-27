import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupGellary = galleryItems
  .map(({ original, preview, description }) => {
    return `
  <div class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a></div>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markupGellary);

const galleryImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  close: false,
  overlayOpacity: 0.8,
  animationSpeed: 150,
  captionDelay: 300,
});
