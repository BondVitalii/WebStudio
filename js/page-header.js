// скрипт для динамической высоты Header (Репета)
const { height: pageHeaderHeight } = document
  .querySelector('.page-header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
