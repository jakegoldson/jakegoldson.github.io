const doc = document.documentElement;

document.addEventListener('mousemove', e => {
  doc.style.setProperty('--mouse-x', e.clientX / window.innerWidth);
  doc.style.setProperty('--mouse-y', e.clientY / window.innerHeight);
});
