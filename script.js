'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  navigation.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
window.matchMedia('(min-width: 801px)').addEventListener('change', () => setMenu(false));

// Native details keeps the FAQ readable even when JavaScript is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.faq details').forEach(detail => {
  const summary = detail.querySelector('summary');
  const answer = detail.querySelector('.answer');
  let animation;
  let expanded = detail.open;
  summary.addEventListener('click', event => {
    event.preventDefault();
    expanded = !expanded;
    const startHeight = answer.getBoundingClientRect().height;
    if (animation) animation.cancel();
    if (reducedMotion.matches || !answer.animate) { detail.open = expanded; return; }
    detail.open = true;
    animation = answer.animate(
      [{ height: `${startHeight}px`, opacity: expanded ? 0.5 : 1 },
       { height: `${expanded ? answer.scrollHeight : 0}px`, opacity: expanded ? 1 : 0 }],
      { duration: 180, easing: 'ease-out' }
    );
    animation.onfinish = () => { detail.open = expanded; animation = null; };
  });
});
