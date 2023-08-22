export default function setCurrentYear() {
  const span = document.getElementById('footer__cdate');
  const current = new Date();
  span.appendChild(document.createTextNode(current.getFullYear().toString()));
}