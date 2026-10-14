(function () {
  var el = document.getElementById('site-header');
  if (!el) return;

  // Resolve root path from this script's own URL so subdirectory pages work too
  var src = (document.currentScript || {}).src || '';
  var root = src ? src.replace(/js\/header\.js.*$/, '') : '';
  if (!root) {
    var segs = window.location.pathname.replace(/\/[^/]*$/, '').split('/').filter(Boolean);
    root = segs.length ? '../'.repeat(segs.length) : '';
  }

  // data-active on the placeholder marks the current top-level item:
  // home | about | business | resources | products | careers | contact
  var active = el.getAttribute('data-active') || '';
  function cls(name, extra) {
    var c = [extra, active === name ? 'mil-active' : ''].filter(Boolean).join(' ');
    return c ? ' class="' + c + '"' : '';
  }

  el.outerHTML = `
<div class="mil-top-panel mil-dark-2">
  <div class="container">
    <a href="${root}index.html" class="mil-logo">
      <img src="${root}img/favicon.png" alt="Apel" width="73" height="73">
    </a>
    <nav class="mil-top-menu">
      <ul>
        <li${cls('home')}>
          <a href="${root}index.html">Home</a>
        </li>
        <li${cls('about', 'mil-has-children')}>
          <a>About Us</a>
          <ul>
            <li><a href="${root}about.html">About Apel</a></li>
            <li><a href="${root}our_team.html">Our Team</a></li>
            <li><a href="${root}about.html#ourCompanies">Our Companies</a></li>
          </ul>
        </li>
        <li${cls('business', 'mil-has-children')}>
          <a>Our Business</a>
          <ul>
            <li><a href="https://asset.apel.com.ng" target="_blank">Equities Trading</a></li>
            <li><a href="https://asset.apel.com.ng" target="_blank">Corporate Finance</a></li>
            <li><a href="https://trust.apel.com.ng" target="_blank">Trusteeship</a></li>
            <li><a href="https://wealth.apel.com.ng" target="_blank">Fund Management</a></li>
            <li><a href="https://registrars.apel.com.ng" target="_blank">Registrarship</a></li>
          </ul>
        </li>
        <li${cls('resources', 'mil-has-children')}>
          <a>Resources</a>
          <ul>
            <li><a href="${root}gallery.html">Photo Gallery</a></li>
            <li><a href="${root}market-activities.html">Market Activities</a></li>
            <li><a href="${root}blog.html">Blog/News</a></li>
          </ul>
        </li>
        <li${cls('products')}>
          <a href="${root}products.html">Products</a>
        </li>
        <li${cls('careers')}>
          <a href="${root}careers.html">Careers</a>
        </li>
        <li${cls('contact')}>
          <a href="${root}contact.html">Contact Us</a>
        </li>
      </ul>
    </nav>
    <div class="mil-menu-buttons">
      <div class="mil-menu-btn">
        <span></span>
      </div>
    </div>
  </div>
</div>`;
})();
