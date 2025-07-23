async function loadComponent(file, targetId) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(targetId).innerHTML += text;
}

async function loadAll() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="layout">
      <aside id="sidebar"></aside>
      <main id="main-content"></main>
    </div>
  `;

  await loadComponent('partials/sidebar.html', 'sidebar');
  await loadComponent('partials/hero.html', 'main-content');
  await loadComponent('partials/about.html', 'main-content');
  await loadComponent('partials/projects.html', 'main-content');
  await loadComponent('partials/tools.html', 'main-content');
  await loadComponent('partials/contact.html', 'main-content');
  await loadComponent('partials/footer.html', 'main-content');
}

loadAll();
