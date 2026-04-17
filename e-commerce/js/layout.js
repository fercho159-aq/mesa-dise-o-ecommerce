/* =========================================================
   Layout: header, footer, FAB de WhatsApp.
   Se inyectan en cada página para evitar duplicación.
   ========================================================= */

function renderHeader(activePage = '') {
  const links = [
    { href: 'index.html',         label: 'Inicio',          key: 'inicio' },
    { href: 'tienda.html',        label: 'Tienda',          key: 'tienda' },
    { href: 'personalizadas.html',label: 'A medida',        key: 'personalizadas' },
    { href: 'nosotros.html',      label: 'Nosotros',        key: 'nosotros' },
    { href: 'contacto.html',      label: 'Contacto',        key: 'contacto' }
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">RA<span>Í</span>Z</a>
        <nav class="nav" id="nav">
          ${navLinks}
        </nav>
        <div class="header-actions">
          <a href="carrito.html" class="cart-btn" aria-label="Carrito">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span class="cart-count" id="cart-count">0</span>
          </a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h5 style="font-size: 1.4rem; letter-spacing: 0.12em;">RA<span style="color: var(--secondary);">Í</span>Z</h5>
            <p>Mesas hechas a mano en México. Diseño que vive con la materia.</p>
            <div class="socials">
              <a href="${SITE.instagram}" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="${SITE.facebook}" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="${waLink('Hola, vengo del sitio web')}" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.1-1.4 0-.2-.2-.2-.5-.4z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Tienda</h5>
            <ul>
              <li><a href="tienda.html">Todas las mesas</a></li>
              <li><a href="tienda.html?cat=Comedor">Comedor</a></li>
              <li><a href="tienda.html?cat=Escritorio">Escritorios</a></li>
              <li><a href="tienda.html?cat=Centro">Centro</a></li>
            </ul>
          </div>
          <div>
            <h5>Marca</h5>
            <ul>
              <li><a href="nosotros.html">Nuestra historia</a></li>
              <li><a href="personalizadas.html">Mesas a medida</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li>${SITE.whatsappDisplay}</li>
              <li>${SITE.email}</li>
              <li>${SITE.address}</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          © ${new Date().getFullYear()} RAÍZ — Mesas de autor. Demo.
        </div>
      </div>
    </footer>
  `;
}

function renderFAB() {
  return `
    <a class="fab-wa" href="${waLink('Hola RAÍZ, me interesa una de sus mesas')}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.1-1.4 0-.2-.2-.2-.5-.4zM12 2.2C6.6 2.2 2.2 6.6 2.2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3.1 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2zm0 17.9c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3a8.1 8.1 0 1115 .1c-1.4 2.4-4 3.9-7.9 3.9z"/></svg>
    </a>
  `;
}

function mountLayout(activePage = '') {
  // Inject header
  const headerSlot = document.getElementById('header-slot');
  if (headerSlot) headerSlot.innerHTML = renderHeader(activePage);

  // Inject footer
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Inject FAB
  const fabSlot = document.getElementById('fab-slot');
  if (fabSlot) fabSlot.innerHTML = renderFAB();

  // Wire up nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Update cart count
  updateCartBadge();
}

function updateCartBadge() {
  const el = document.getElementById('cart-count');
  if (!el) return;
  const count = Cart.count();
  el.textContent = count;
  el.classList.toggle('has-items', count > 0);
}

function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// Reveal-on-scroll
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}
