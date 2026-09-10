
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const reply = document.getElementById('reply').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Anfrage über die Website');
  const body = encodeURIComponent(
    `Name: ${name}\nKontakt: ${reply}\n\nAnfrage:\n${message}`
  );

  window.location.href = `mailto:[DEINE E-MAIL]?subject=${subject}&body=${body}`;
  return false;
}
