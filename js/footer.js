(function () {
  var el = document.getElementById('site-footer');
  if (!el) return;

  // Resolve root path from this script's own URL so subdirectory pages work too
  var src = (document.currentScript || {}).src || '';
  var root = src ? src.replace(/js\/footer\.js.*$/, '') : '';
  if (!root) {
    var segs = window.location.pathname.replace(/\/[^/]*$/, '').split('/').filter(Boolean);
    root = segs.length ? '../'.repeat(segs.length) : '';
  }

  el.outerHTML = `
<footer class="footer">
  <div class="footer-inner">

    <div class="footer-top">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="${root}index.html" class="footer-logo">
          <img src="${root}img/favicon.png" alt="Apel Group">
        </a>
        <p class="footer-tagline">Nigeria's leading financial services group, delivering trusted solutions across capital markets, trusteeship, and wealth management.</p>
        <p class="footer-companies-label">Our Companies</p>
        <div class="footer-company-links">
          <a href="https://apel.com.ng">Home</a>
          <a href="https://asset.apel.com.ng">Apel Asset Limited</a>
          <a href="https://trust.apel.com.ng">Apel Capital &amp; Trust Limited</a>
          <a href="https://registrars.apel.com.ng/">Apel Capital Registrars Limited</a>
          <a href="https://wealth.apel.com.ng">Apel Wealth Management Limited</a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h6>Quick Links</h6>
        <ul>
          <li><a href="${root}our_team.html">Management</a></li>
          <li><a href="${root}our_team.html">Board of Directors</a></li>
          <li><a href="${root}about.html">About Us</a></li>
          <li><a href="${root}contact.html">Contact Us</a></li>
          <li><a href="${root}gallery.html">Gallery</a></li>
          <li><a href="${root}products.html">Products</a></li>
          <li><a href="${root}careers.html">Careers</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-col">
        <h6>Resources</h6>
        <ul>
          <li><a href="#">Downloads</a></li>
          <li><a href="${root}privacy-policy.html">Privacy Policy</a></li>
          <li><a href="${root}best-execution-policy.html">Best Execution Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>

      <!-- Contact + Newsletter -->
      <div class="footer-col">
        <h6>Contact</h6>
        <address>6 Alhaji Bashorun Street,<br>off Norman Williams Crescent,<br>South-West Ikoyi, Lagos</address>
        <div class="footer-contact-item">
          <i class="fa fa-phone"></i>
          <a href="tel:+2349048844011">+234 90 4884 4011, 02-013-301992</a>
        </div>
        <div class="footer-contact-item">
          <i class="fa fa-envelope"></i>
          <a href="mailto:info@apel.com.ng">info@apel.com.ng</a>
        </div>
        <h6 class="footer-newsletter-heading">Newsletter</h6>
        <form class="footer-newsletter-form"
              action="https://apel.us7.list-manage.com/subscribe/post?u=3df448c5e12a0c1bb03f6fbc6&amp;id=a9bbef17bd&amp;f_id=006081e4f0"
              method="post" target="_blank">
          <input type="email" name="EMAIL" placeholder="Your email address" required>
          <button type="submit">Subscribe</button>
          <div aria-hidden="true" style="position:absolute;left:-5000px;">
            <input type="text" name="b_3df448c5e12a0c1bb03f6fbc6_a9bbef17bd" tabindex="-1" value="">
          </div>
        </form>
      </div>

    </div><!-- /.footer-top -->

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="footer-trustmark">
        <img src="https://res.cloudinary.com/apelng/image/upload/v1784028017/APEL_ASSET_LIMITED_-_AUDIT_COMPLAINCE_TRUSTMARK_001_ghjq8y.jpg"
             alt="Audit Compliance Trustmark">
      </div>
      <div class="footer-bottom-center">
        <div class="footer-social">
          <a href="https://facebook.com/Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://youtube.com/@Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://instagram.com/Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://tiktok.com/@Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://linkedin.com/company/Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/Apelng" class="footer-social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="footer-legal">
          <p>APEL is registered and regulated by the Securities and Exchange Commission, Nigeria.</p>
          <p>&copy; 2025 All rights reserved &nbsp;|&nbsp; Member of NASD &nbsp;|&nbsp; Trading License Holder of The Nigerian Exchange</p>
        </div>
      </div>
    </div><!-- /.footer-bottom -->

  </div><!-- /.footer-inner -->
</footer>`;
})();
