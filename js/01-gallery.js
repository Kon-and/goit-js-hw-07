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

const modalImage = basicLightbox.create(
  `
        <img src="">
    `,
  {
    onShow: modalImage => {
      window.addEventListener('keydown', onModalEsc);
    },
    onclose: modalImage => {
      window.removeEventListener('keydown', onModalEsc);
    },
  }
);

gallery.insertAdjacentHTML('beforeend', markupGellary);
gallery.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;

  const imgSource = e.target.dataset.source;
  modalImage.element().querySelector('img').src = imgSource;
  modalImage.show();
}

function onModalEsc(e) {
  if (e.code === 'Escape') {
    modalImage.close();
  }
}
