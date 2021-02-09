document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  const navItems = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-item"),
    0
  );

  if (navItems.length > 0) {
    navItems.forEach((el) => {
      if (
        window.location.href.toString().indexOf(el.getAttribute("href")) > -1
      ) {
        el.classList.toggle("is-active");
      }
    });
  }
});
