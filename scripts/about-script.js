// about-script.js
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".right-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document.querySelector('.select-trigger').addEventListener('click', function () {
  document.querySelector('.select-options').classList.toggle('open');
  document.querySelector('.select-options').style.display =
    document.querySelector('.select-options').classList.contains('open') ? 'block' : 'none';
});

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function () {
    document.querySelector('.select-trigger').textContent = this.textContent;
    document.querySelector('#location').value = this.dataset.value;
    document.querySelector('.select-options').style.display = 'none';
    document.querySelector('.select-options').classList.remove('open');
  });
});
