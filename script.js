let menuVisible = false;
//Función que oculta o muestra el menu
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
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
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

// Función para enviar mensaje del formulario con EmailJS
function enviarMensaje(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    
    // Deshabilitar botón mientras se envía
    btn.disabled = true;
    btn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i><span class="overlay"></span>';
    
    // Enviar email usando EmailJS
    emailjs.sendForm('service_umodx1c', 'template_wnjobvw', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('✅ Mensaje enviado correctamente. Pronto me pondré en contacto contigo.');
            form.reset();
            btn.disabled = false;
            btn.innerHTML = 'Enviar Mensaje<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
        }, function(error) {
            console.log('FAILED...', error);
            alert('❌ Error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente.');
            btn.disabled = false;
            btn.innerHTML = 'Enviar Mensaje<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
        });
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Datos de los proyectos para el modal
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
        descripcion: " Plataforma web que automatiza el análisis exploratorio de datos (EDA) mediante IA generativa. El sistema acepta archivos CSV o conexiones a bases de datos, genera automáticamente visualizaciones relevantes, identifica patrones, anomalías y correlaciones, y genera un informe detallado en lenguaje natural.",
        tecnologias: ["Python", "Streamlit", "SQL", "OpenAI API"]
    },
    {
        titulo: "NEXUS APP - Gestión de Proyectos",
        imagen: "img/Gestor de Tareas.png",
        descripcion: "Plataforma web para la gestión integral de proyectos, facilitando la colaboración en equipo, seguimiento de tareas, análisis de de proyecto (estadísticas y métricas de desempeño) y generación de reportes en tiempo real.",
        tecnologias: ["ReactJS", "Vite", "Node.js", "MongoDB"]
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

// Función para abrir el modal con la información del proyecto
function abrirModal(index) {
    const proyecto = proyectos[index];
    const modal = document.getElementById('modalProyecto');
    
    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-img').src = proyecto.imagen;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    
    // Crear badges de tecnologías
    const tecnologiasContainer = document.getElementById('modal-tecnologias');
    tecnologiasContainer.innerHTML = '';
    proyecto.tecnologias.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        tecnologiasContainer.appendChild(badge);
    });
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modalProyecto');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modalProyecto');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Cerrar modal con la tecla ESC
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
}); 