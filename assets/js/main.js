// assets/js/main.js

function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("sidebar", "partials/sidebar.html");
loadHTML("hero", "partials/hero.html");
loadHTML("about", "partials/about.html");
loadHTML("projects", "partials/projects.html");
loadHTML("tools", "partials/tools.html");
loadHTML("contact", "partials/contact.html");
loadHTML("footer", "partials/footer.html");
