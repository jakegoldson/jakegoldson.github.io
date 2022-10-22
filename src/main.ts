import './style.css'

const doc = document.documentElement;

document.addEventListener('mousemove', e => {
  doc.style.setProperty('--mouse-x', (e.clientX / window.innerWidth).toString());
  doc.style.setProperty('--mouse-y', (e.clientY / window.innerHeight).toString());
});
