  function burgerMenu() {
    const burger = document.getElementById("nav-bar");
    burger.classList.toggle("responsive");
  }

  const links = document.querySelectorAll(".nav__link");

  links.forEach(link => {
    link.onclick = () => {
      document.getElementById("nav-bar").classList.remove("responsive");
    };
  });