// ========== VARIABLES GLOBALES ==========
let menuVisible = false;
let currentLang = 'es';
let contadoresAnimados = false;
let currentTestimonial = 0;
let translations = {};
let services = [];
let workflow = [];
let packages = [];
let testimonials = [];
let faqs = [];
let certifications = [];

// Placeholders SVG
const BLOG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e2326' width='400' height='300'/%3E%3Ctext fill='%231c90b6' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EBlog Image%3C/text%3E%3C/svg%3E";
const BLOG_PLACEHOLDER_LARGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%231e2326' width='800' height='400'/%3E%3Ctext fill='%231c90b6' font-family='Arial' font-size='32' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EBlog Image%3C/text%3E%3C/svg%3E";
const TESTIMONIAL_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle fill='%231e2326' cx='40' cy='40' r='40'/%3E%3Ctext fill='%231c90b6' font-family='Arial' font-size='36' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E%F0%9F%91%A4%3C/text%3E%3C/svg%3E";

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', async function() {
    // Cargar todos los datos JSON
    await Promise.all([
        loadTranslations(),
        loadServices(),
        loadWorkflow(),
        loadPackages(),
        loadTestimonials(),
        loadFAQ(),
        loadCertifications()
    ]);
    
    // Inicializar idioma
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);
    
    // Inicializar filtros de portfolio
    initializePortfolioFilters();
    
    // Renderizar proyectos
    renderProjects();
});

// ========== MENÚ ==========
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// ========== SKILLS ANIMATION ==========
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("vuejs");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("autodidacta");
    }
}

// ========== CONTADORES ANIMADOS ==========
function animarContadores() {
    if (contadoresAnimados) return;
    
    const stats = document.querySelector('.stats');
    if (!stats) return;
    
    const distancia_stats = window.innerHeight - stats.getBoundingClientRect().top;
    
    if (distancia_stats >= 200) {
        contadoresAnimados = true;
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = target > 999 ? Math.floor(current).toLocaleString() : Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target > 999 ? target.toLocaleString() : target;
                }
            };
            
            updateCounter();
        });
    }
}

// Event listener optimizado con passive para mejor rendimiento
window.addEventListener('scroll', function() {
    efectoHabilidades();
    animarContadores();
}, { passive: true });

// ========== MULTI-IDIOMA ==========
async function loadTranslations() {
    try {
        const response = await fetch('data/translations.json');
        translations = await response.json();
    } catch (error) {
        console.error('Error cargando traducciones:', error);
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Actualizar textos traducibles
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let value = translations[lang];
        
        for (let k of keys) {
            value = value?.[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Recargar contenido dinámico
    if (services.length > 0) renderServices();
    if (workflow.length > 0) renderWorkflow();
    if (packages.length > 0) renderPackages();
    if (testimonials.length > 0) renderTestimonials();
    if (faqs.length > 0) renderFAQ();
    
    // Event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
}

// ========== SERVICIOS ==========
async function loadServices() {
    try {
        const response = await fetch('data/services.json');
        const data = await response.json();
        services = data.services;
        renderServices();
    } catch (error) {
        console.error('Error cargando servicios:', error);
    }
}

function renderServices() {
    const grid = document.getElementById('servicios-grid');
    if (!grid) return;
    
    grid.innerHTML = services.map(service => `
        <div class="servicio-card" onclick="abrirModalServicio(${service.id})">
            <i class="${service.icon}"></i>
            <h3>${service.title[currentLang]}</h3>
            <p>${service.description[currentLang]}</p>
        </div>
    `).join('');
}

function abrirModalServicio(id) {
    const service = services.find(s => s.id === id);
    if (!service) return;
    
    const modal = document.getElementById('modalServicio');
    const body = document.getElementById('modal-servicio-body');
    
    body.innerHTML = `
        <h2>${service.title[currentLang]}</h2>
        <p style="color: #ccc; margin: 20px 0;">${service.description[currentLang]}</p>
        
        <div class="features-list">
            <h3>Características:</h3>
            <ul>
                ${service.features[currentLang].map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        
        <div class="packages-section">
            <h3>Paquetes Disponibles:</h3>
            <div class="packages-grid">
                ${service.packages.map(pkg => `
                    <div class="package-card">
                        <h4>${pkg.name}</h4>
                        <div class="price">${pkg.price}</div>
                        <ul style="list-style: none; padding: 0;">
                            ${pkg.features[currentLang].map(f => `<p style="font-size: 13px; margin: 5px 0;">✓ ${f}</p>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <button onclick="scrollToContact()" class="btn-primary" style="margin-top: 30px;">
            Solicitar Cotización
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModalServicio() {
    document.getElementById('modalServicio').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ========== WORKFLOW ==========
async function loadWorkflow() {
    try {
        const response = await fetch('data/workflow.json');
        const data = await response.json();
        workflow = data.workflow;
        renderWorkflow();
    } catch (error) {
        console.error('Error cargando workflow:', error);
    }
}

function renderWorkflow() {
    const timeline = document.getElementById('workflow-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = workflow.map(step => `
        <div class="workflow-step">
            <div class="workflow-icon">
                <i class="fa-solid ${step.icon}"></i>
            </div>
            <div class="workflow-content">
                <h3>${step.title[currentLang]}</h3>
                <span class="workflow-duration">${step.duration[currentLang]}</span>
                <p>${step.description[currentLang]}</p>
                <div class="workflow-deliverables">
                    <h4 data-translate="workflow.deliverables">Entregables</h4>
                    <ul>
                        ${step.deliverables[currentLang].map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== PACKAGES ==========
async function loadPackages() {
    try {
        const response = await fetch('data/packages.json');
        const data = await response.json();
        packages = data.packages;
        renderPackages();
    } catch (error) {
        console.error('Error cargando packages:', error);
    }
}

function renderPackages() {
    const grid = document.getElementById('packages-grid');
    if (!grid) return;
    
    const popularText = translations[currentLang]?.packages?.popular || 'Most Popular';
    
    grid.innerHTML = packages.map(pkg => `
        <div class="package-card ${pkg.popular ? 'popular' : ''}" ${pkg.popular ? `data-popular="${popularText}"` : ''}>
            <div class="package-header">
                <div class="package-name">${pkg.name[currentLang]}</div>
                <div class="package-subtitle">${pkg.subtitle[currentLang]}</div>
                <div class="package-price">${pkg.price}</div>
            </div>
            ${pkg.idealFor[currentLang] ? `
                <div class="package-ideal">
                    <strong data-translate="packages.idealFor">Ideal para:</strong>
                    ${pkg.idealFor[currentLang]}
                </div>
            ` : ''}
            <div class="package-features">
                <ul>
                    ${pkg.features[currentLang].map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            ${pkg.notIncluded[currentLang] && pkg.notIncluded[currentLang].length > 0 ? `
                <div class="package-not-included">
                    <h4 data-translate="packages.notIncluded">No incluido:</h4>
                    <ul>
                        ${pkg.notIncluded[currentLang].map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <button class="package-cta" onclick="contactPackage('${pkg.name[currentLang]}')" data-translate="packages.selectPlan">Seleccionar Plan</button>
        </div>
    `).join('');
}

function contactPackage(packageName) {
    // Scroll to contact section
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill message if textarea exists
    const messageField = document.getElementById('mensaje');
    if (messageField) {
        messageField.value = `Hola, estoy interesado en el paquete "${packageName}". Me gustaría obtener más información.`;
        messageField.focus();
    }
}

// ========== TESTIMONIOS ==========
async function loadTestimonials() {
    try {
        const response = await fetch('data/testimonials.json');
        const data = await response.json();
        testimonials = data.testimonials;
        renderTestimonials();
        renderCompanies(data.companies);
    } catch (error) {
        console.error('Error cargando testimonios:', error);
    }
}

function renderTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container || testimonials.length === 0) return;
    
    showTestimonial(0);
    createTestimonialDots();
}

function showTestimonial(index) {
    if (!testimonials[index]) return;
    
    const container = document.getElementById('testimonial-container');
    const testimonial = testimonials[index];
    const stars = '⭐'.repeat(testimonial.rating);
    
    container.innerHTML = `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.name}" onerror="this.src=TESTIMONIAL_PLACEHOLDER">
            <div class="name">${testimonial.name}</div>
            <div class="position">${testimonial.position[currentLang]}</div>
            <div class="rating">${stars}</div>
            <div class="comment">"${testimonial.comment[currentLang]}"</div>
        </div>
    `;
    
    currentTestimonial = index;
    updateDots();
}

function prevTestimonial() {
    const newIndex = currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1;
    showTestimonial(newIndex);
}

function nextTestimonial() {
    const newIndex = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
    showTestimonial(newIndex);
}

function createTestimonialDots() {
    const dotsContainer = document.getElementById('carousel-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = testimonials.map((_, i) => 
        `<div class="dot ${i === 0 ? 'active' : ''}" onclick="showTestimonial(${i})"></div>`
    ).join('');
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonial);
    });
}

function renderCompanies(companies) {
    const container = document.getElementById('companies-logos');
    if (!container) return;
    
    container.innerHTML = companies.map(company => 
        `<img src="${company.logo}" alt="${company.name}" class="company-logo" onerror="this.style.display='none'">`
    ).join('');
}

// ========== FAQ ==========
async function loadFAQ() {
    try {
        const response = await fetch('data/faq.json');
        const data = await response.json();
        faqs = data.faqs;
        renderFAQ();
    } catch (error) {
        console.error('Error cargando FAQ:', error);
    }
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    container.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" id="faq-${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question[currentLang]}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer[currentLang]}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const item = document.getElementById(`faq-${index}`);
    const wasActive = item.classList.contains('active');
    
    // Cerrar todos
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    // Abrir el seleccionado si no estaba activo
    if (!wasActive) {
        item.classList.add('active');
    }
}

// ========== CERTIFICACIONES ==========
async function loadCertifications() {
    try {
        const response = await fetch('data/certifications.json');
        const data = await response.json();
        certifications = data.certifications;
        renderCertifications();
    } catch (error) {
        console.error('Error cargando certificaciones:', error);
    }
}

function renderCertifications() {
    const grid = document.getElementById('certifications-grid');
    if (!grid) return;
    
    grid.innerHTML = certifications.map(cert => `
        <div class="cert-card">
            <i class="${cert.icon}"></i>
            <h3>${cert.name}</h3>
            <div class="issuer">${cert.issuer}</div>
            <div class="date">${cert.date}</div>
        </div>
    `).join('');
}

// ========== PORTFOLIO ==========
const proyectos = [
    {
        titulo: "Educ - Plataforma Educativa",
        imagen: "img/p1.jpg",
        descripcion: "Plataforma de educación. Creación de un módulo para realizar cuestionarios tipo quizz para la plataforma EDUC con la finalidad de retroalimentar el aprendizaje sobre ciertas actividades que asigne el profesor a un alumno.",
        tecnologias: ["Vue.js", "Node.js", "MySQL", "Express"]
    },
    {
        titulo: "Web - EDA",
        imagen: "img/p2.jpg",
        descripcion: "Plataforma web que automatiza el análisis exploratorio de datos (EDA) mediante IA generativa. El sistema acepta archivos CSV o conexiones a bases de datos, genera automáticamente visualizaciones relevantes, identifica patrones, anomalías y correlaciones, y genera un informe detallado en lenguaje natural.",
        tecnologias: ["Python", "Streamlit", "SQL", "OpenAI API"]
    },
    {
        titulo: "NEXUS APP - Gestión de Proyectos",
        imagen: "img/Gestor de Tareas.png",
        descripcion: "Plataforma web para la gestión integral de proyectos, facilitando la colaboración en equipo, seguimiento de tareas, análisis de de proyecto (estadísticas y métricas de desempeño) y generación de reportes en tiempo real.",
        tecnologias: ["React", "Vite", "Node.js", "MongoDB"]
    },
    {
        titulo: "APP Móvil - Control de Gastos",
        imagen: "img/p4.jpg",
        descripcion: "Aplicación móvil multiplataforma para el control y gestión de gastos personales. Permite registrar ingresos y gastos por viaje, categorizar transacciones, establecer presupuestos mensuales, generar reportes visuales y recibir notificaciones de alertas financieras.",
        tecnologias: ["Flutter", "Dart", "Oracle DB", "Node.js"]
    },
    {
        titulo: "Portfolio Web",
        imagen: "img/p5.jpg",
        descripcion: "Portfolio personal profesional completamente responsivo. Incluye secciones de proyectos, habilidades, experiencia y formulario de contacto funcional. Optimizado para SEO y rendimiento, con animaciones suaves y diseño moderno.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "EmailJS"]
    },
    {
        titulo: "Sistema de Reservas",
        imagen: "img/p6.jpg",
        descripcion: "Sistema completo de reservas en línea con calendario interactivo, gestión de disponibilidad, confirmaciones automáticas por email y panel de administración. Incluye sistema de pagos y generación de reportes de ocupación.",
        tecnologias: ["Vue.js", "Node.js", "MongoDB", "Socket.io"]
    }
];

function renderProjects() {
    const galeria = document.getElementById('galeria-proyectos');
    if (!galeria) return;
    
    galeria.innerHTML = proyectos.map((proyecto, index) => `
        <div class="proyecto" data-techs="${proyecto.tecnologias.join(',')}" onclick="abrirModal(${index})">
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <div class="overlay">
                <h3>${proyecto.titulo.split(' - ')[0]}</h3>
                <p>${proyecto.titulo.split(' - ')[1] || ''}</p>
            </div>
        </div>
    `).join('');
}

function initializePortfolioFilters() {
    // Filtros por tecnología
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByTech(btn.dataset.filter);
        });
    });
    
    // Búsqueda
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterProjects(e.target.value));
    }
}

function filterByTech(tech) {
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        if (tech === 'all') {
            proyecto.style.display = 'block';
        } else {
            const techs = proyecto.dataset.techs;
            proyecto.style.display = techs.includes(tech) ? 'block' : 'none';
        }
    });
}

function filterProjects(searchTerm) {
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        const titulo = proyecto.querySelector('h3').textContent.toLowerCase();
        const descripcion = proyecto.querySelector('p').textContent.toLowerCase();
        const match = titulo.includes(searchTerm.toLowerCase()) || descripcion.includes(searchTerm.toLowerCase());
        proyecto.style.display = match ? 'block' : 'none';
    });
}

function abrirModal(index) {
    const proyecto = proyectos[index];
    const modal = document.getElementById('modalProyecto');
    
    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-img').src = proyecto.imagen;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    
    const tecnologiasContainer = document.getElementById('modal-tecnologias');
    tecnologiasContainer.innerHTML = proyecto.tecnologias.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modalProyecto').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ========== UTILIDADES ==========
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

function downloadVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Luis Alberto Ramírez Tapia
TEL:+523121408235
EMAIL:luistapia97.dev@gmail.com
URL:https://github.com/luistapia97
NOTE:Ingeniero de Software
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Luis_Alberto_Ramirez_Tapia.vcf';
    a.click();
}

function openPrivacyModal() {
    document.getElementById('modalPrivacy').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
    document.getElementById('modalPrivacy').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openTermsModal() {
    document.getElementById('modalTerms').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeTermsModal() {
    document.getElementById('modalTerms').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modales con ESC o click fuera
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-servicio') ||
        e.target.classList.contains('modal-blog') ||
        e.target.classList.contains('modal-proyecto') ||
        e.target.classList.contains('modal-legal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal"]').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

// ========== EMAILJS ==========
function enviarMensaje(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    
    btn.disabled = true;
    btn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i><span class="overlay"></span>';
    
    emailjs.sendForm('service_umodx1c', 'template_wnjobvw', form)
        .then(function(response) {
            alert('✅ Mensaje enviado correctamente. Pronto me pondré en contacto contigo.');
            form.reset();
            btn.disabled = false;
            btn.innerHTML = 'Enviar Mensaje<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
        }, function(error) {
            alert('❌ Error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente.');
            btn.disabled = false;
            btn.innerHTML = 'Enviar Mensaje<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
        });
}
