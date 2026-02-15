# 🚀 Plan de Seguimiento SEO - Portfolio Luis Ramírez
**Fecha de inicio:** 15 de febrero de 2026  
**Objetivo:** Top 3 en Google México para keywords objetivo  
**Duración estimada:** 6-12 meses

---

## ✅ IMPLEMENTACIONES COMPLETADAS (Hoy)

### 1. **SEO Técnico On-Page** ✓
- [x] Meta tags optimizados con keywords localizadas
- [x] Meta description atractiva con CTA (150 caracteres)
- [x] Open Graph tags para redes sociales (Facebook, Twitter)
- [x] Canonical URL configurado
- [x] Structured Data Schema.org (Person + Service)
- [x] Alt text optimizado en todas las imágenes (4 imágenes)
- [x] Lazy loading en imágenes secundarias
- [x] Width/height explícitos en imágenes (prevenir CLS)
- [x] Preconnect a CDNs externos (Font Awesome, EmailJS)
- [x] Scripts con atributo `defer` (optimización FID)
- [x] Sitemap.xml creado con 10 secciones
- [x] robots.txt configurado correctamente
- [x] .htaccess con compresión GZIP y caché del navegador

### 2. **Keywords Implementadas**
**Primarias:**
- "desarrollador web méxico"
- "sitios web profesionales"
- "desarrollo web freelance"

**Long-tail:**
- "sitios web desde $12,000 MXN"
- "diseño web profesional méxico"

**Ubicación:** Title, H1, meta description, alt text, Schema.org

---

## 📋 TAREAS PENDIENTES - SEMANA 1-2

### **Alta Prioridad** 🔴

#### 1. **Registro en Google Search Console**
- **Acción:** Ir a https://search.google.com/search-console
- **Pasos:**
  1. Agregar propiedad: `https://luistapia97.github.io/Portafolio_Luis/`
  2. Verificar propiedad (método HTML tag ya está en head)
  3. Enviar sitemap: `https://luistapia97.github.io/Portafolio_Luis/sitemap.xml`
  4. Solicitar indexación manual de URL principal
- **Tiempo estimado:** 30 minutos
- **Resultado esperado:** Sitio indexado en Google en 24-48 horas

#### 2. **Configurar Google Analytics 4**
- **Acción:** Ir a https://analytics.google.com
- **Pasos:**
  1. Crear propiedad GA4
  2. Obtener Measurement ID (G-XXXXXXXXXX)
  3. Agregar script de GA4 en `<head>` de index.html
  4. Configurar eventos: contacto, WhatsApp clicks, descargas
- **Tiempo estimado:** 45 minutos
- **Resultado:** Trackear conversiones y comportamiento de usuarios

#### 3. **Crear Google Business Profile**
- **Acción:** Ir a https://business.google.com
- **Pasos:**
  1. Crear perfil con categoría "Diseñador de sitios web"
  2. Agregar ubicación (tu ciudad/estado en México)
  3. Agregar horarios de atención
  4. Link a portfolio
  5. Subir 5-10 fotos de proyectos
  6. Solicitar primeras 3 reseñas de clientes anteriores
- **Tiempo estimado:** 1 hora
- **Resultado:** Aparecer en búsquedas locales "desarrollador web cerca de mí"

#### 4. **Optimizar Imágenes**
- **Acción:** Comprimir todas las imágenes
- **Herramientas:** TinyPNG.com o Squoosh.app
- **Archivos a optimizar:**
  - `img/picPortafolio-luis.jpg` (peso actual: ?)
  - `img/ubicacion.png`
  - `img/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg`
  - Imágenes de portfolio (si las tienes)
- **Objetivo:** Reducir tamaño 60-80% sin pérdida visual
- **Tiempo estimado:** 30 minutos
- **Resultado:** LCP < 2.5 segundos

#### 5. **Convertir Imágenes Hero a WebP**
- **Acción:** Crear versión WebP de imagen de fondo `.inicio`
- **Código a implementar en CSS:**
```css
.inicio {
    background: linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1)),
                url(img/experiencia-programacion.webp);
    background-size: cover;
}
```
- **Fallback:** Mantener .jpg para navegadores antiguos
- **Tiempo estimado:** 15 minutos
- **Resultado:** Peso de imagen reducido ~70%

---

## 📋 TAREAS PENDIENTES - SEMANA 3-4

### **Prioridad Media** 🟡

#### 6. **Crear Contenido de Blog (4 artículos)**
**Ubicación:** Agregar sección `/blog/` o usar carpeta `docs/`

**Artículo 1:** "¿Cuánto cuesta desarrollar una página web en México en 2026?"
- **Keywords:** "costo página web méxico", "precios desarrollo web"
- **Longitud:** 1,500 palabras
- **Estructura:**
  - Introducción
  - Comparativa de precios por tipo de sitio
  - Tu tabla de paquetes ($12K, $35K, $80K)
  - Factores que afectan el precio
  - Conclusión con CTA
- **Tiempo estimado:** 3 horas

**Artículo 2:** "Top 5 errores que cometen pequeñas empresas en sus sitios web"
- **Keywords:** "errores sitios web", "mejorar página web negocio"
- **Longitud:** 1,200 palabras
- **Incluir:** Ejemplos visuales, soluciones que ofreces
- **Tiempo estimado:** 2.5 horas

**Artículo 3:** "Por qué tu negocio necesita un sitio web profesional en 2026"
- **Keywords:** "importancia sitio web", "beneficios página web empresa"
- **Longitud:** 1,000 palabras
- **Enfoque:** ROI, credibilidad, alcance
- **Tiempo estimado:** 2 horas

**Artículo 4:** "Guía: Cómo elegir el desarrollador web ideal para tu proyecto"
- **Keywords:** "contratar desarrollador web", "elegir diseñador web"
- **Longitud:** 1,500 palabras
- **Incluir:** Checklist descargable (PDF)
- **Tiempo estimado:** 3 horas

**Total blog:** 10-12 horas  
**Resultado esperado:** +40% tráfico orgánico en 60 días

#### 7. **Expandir FAQ con Keywords**
**Acción:** Agregar 10 nuevas preguntas en `data/faq.json`

**Nuevas preguntas SEO-friendly:**
- "¿Cuánto tiempo tarda desarrollar un sitio web?"
- "¿Incluyes hosting y dominio en tus paquetes?"
- "¿Ofreces mantenimiento después de entregar el sitio?"
- "¿Puedo actualizar mi sitio web yo mismo?"
- "¿Trabajas con empresas de toda México o solo local?"
- "¿Cuál es tu proceso de trabajo desde el primer contacto?"
- "¿Haces páginas web para e-commerce o tiendas online?"
- "¿Qué métodos de pago aceptas?"
- "¿Puedes migrar mi sitio web actual a una nueva plataforma?"
- "¿Ofreces diseño de logos o solo desarrollo web?"

**Tiempo estimado:** 2 horas  
**Resultado:** Rich snippets en Google (posición 0)

#### 8. **Crear Página de Casos de Estudio**
**Acción:** Documentar 3-5 proyectos en detalle

**Estructura por caso:**
- Cliente (puede ser anónimo: "E-commerce de ropa")
- Problema/Desafío
- Solución implementada
- Tecnologías usadas
- Resultados medibles (ej: "incremento de 150% en conversiones")
- Testimonial del cliente
- Imágenes before/after

**Tiempo estimado:** 4 horas (total)  
**Resultado:** Mayor tasa de conversión contacto → cliente

---

## 📋 TAREAS PENDIENTES - MES 2

### **Contenido y Link Building** 🟢

#### 9. **Perfil en Directorios Profesionales**
**Acción:** Crear perfiles completos con link a portfolio

**Directorios prioritarios:**
- [ ] GitHub (README del repo con link y descripción SEO)
- [ ] Behance o Dribbble (portfolio visual)
- [ ] Páginas Amarillas México
- [ ] Workana / Freelancer (perfil profesional)
- [ ] LinkedIn (optimizar con keywords)
- [ ] About.me o Linktree (hub de links)

**Tiempo estimado:** 3 horas total  
**Resultado:** 6 backlinks de calidad (DA 40+)

#### 10. **Guest Posts en Blogs de Emprendimiento**
**Acción:** Escribir artículos invitado para blogs locales

**Targets:**
- Blogs de emprendimiento en México
- Sitios de negocios locales
- Cámaras de comercio digitales

**Tema sugerido:** "5 mitos sobre el costo de un sitio web para PyMEs"  
**Incluir:** Link a tu portfolio en bio del autor

**Objetivo:** 2-3 guest posts  
**Tiempo estimado:** 8 horas (investigación + escritura + outreach)  
**Resultado:** 2-3 backlinks de sitios mexicanos (DA 25-50)

#### 11. **Optimizar Perfil de LinkedIn**
**Acción:** Actualizar LinkedIn con SEO

**Elementos a optimizar:**
- Headline: "Desarrollador Web en México | Sitios Web Profesionales desde $12,000 MXN"
- About: Incluir keywords naturalmente
- Servicios: Agregar servicios destacados con precios
- Portfolio: Subir imágenes de proyectos con descripciones
- Publicar 2-3 posts/semana sobre desarrollo web

**Tiempo estimado:** 2 horas iniciales + 30 min/semana  
**Resultado:** Tráfico referral desde LinkedIn

---

## 📋 TAREAS PENDIENTES - MES 3

### **Optimización Avanzada** 🔵

#### 12. **Implementar Testimoniales Enriquecidos**
**Acción:** Agregar Schema.org Review markup

**Código ejemplo:**
```json
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Cliente Satisfecho"
  },
  "reviewBody": "Excelente trabajo..."
}
```

**Ubicar en:** Sección de testimoniales  
**Tiempo estimado:** 1 hora  
**Resultado:** Estrellas en resultados de búsqueda

#### 13. **Crear Videos para YouTube**
**Acción:** Canal de YouTube con contenido educativo

**Ideas de videos:**
- "Así desarrollo un sitio web de $35,000 MXN en 15 días"
- "5 cosas que DEBES pedir a tu desarrollador web"
- "Tour por mi proceso de diseño web"

**Frecuencia:** 1 video/mes  
**Duración:** 5-10 minutos  
**Tiempo estimado:** 4 horas por video  
**Resultado:** Tráfico desde YouTube + backlink desde canal

#### 14. **Campaña de Email Marketing**
**Acción:** Crear lead magnet descargable

**Lead magnet:** "Checklist: 20 puntos para evaluar tu sitio web actual (PDF)"

**Flujo:**
1. Usuario descarga checklist
2. Entra a lista de correo
3. Secuencia automatizada:
   - Email 1: Entrega del checklist + bienvenida
   - Email 2 (día 3): Caso de estudio
   - Email 3 (día 7): Oferta especial o consulta gratis
   - Email 4 (día 14): Contenido de valor

**Herramienta:** Mailchimp Free (hasta 500 contactos)  
**Tiempo estimado:** 6 horas setup inicial  
**Resultado:** Base de datos de leads calificados

---

## 📊 MÉTRICAS A MONITOREAR

### **Semanalmente:**
- [ ] Posiciones en Google Search Console (keywords objetivo)
- [ ] Impresiones y CTR
- [ ] Errores de rastreo
- [ ] Velocidad de carga (PageSpeed Insights)

### **Mensualmente:**
- [ ] Tráfico orgánico (Google Analytics)
- [ ] Conversiones (formulario de contacto, WhatsApp)
- [ ] Backlinks nuevos (Google Search Console)
- [ ] Posición promedio general
- [ ] Páginas con mejor rendimiento

### **Herramientas Gratuitas:**
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Google Business Profile
- Ubersuggest (3 búsquedas/día gratis)

---

## 🎯 OBJETIVOS POR ETAPA

### **Mes 1:**
- ✅ SEO técnico completo (HECHO)
- [ ] Indexación en Google
- [ ] Google Business Profile activo
- [ ] Primeras 3 reseñas
- [ ] Velocidad LCP < 2.5s

**KPI:** 20-30 visitas orgánicas/día

### **Mes 2:**
- [ ] 4 artículos de blog publicados
- [ ] 6 backlinks de directorios
- [ ] FAQ expandido
- [ ] Primeras posiciones en long-tail keywords

**KPI:** 50-70 visitas orgánicas/día

### **Mes 3:**
- [ ] 2-3 guest posts publicados
- [ ] Testimoniales con Schema markup
- [ ] Primera página en 2-3 keywords long-tail
- [ ] Email list con 20+ suscriptores

**KPI:** 100+ visitas orgánicas/día

### **Mes 6:**
- [ ] Top 10 en 5+ keywords principales
- [ ] Top 3 en 10+ keywords long-tail
- [ ] 500+ visitas orgánicas/mes
- [ ] 10-15 conversiones/mes

### **Mes 12:**
- [ ] Top 3 en "desarrollador web [tu ciudad]"
- [ ] Top 5 en "diseño web méxico"
- [ ] 1,000+ visitas orgánicas/mes
- [ ] 20-30 conversiones/mes

---

## ⚠️ ERRORES A EVITAR

❌ **Keyword Stuffing:** Repetir forzadamente keywords (penalización)  
❌ **Comprar backlinks:** Google penaliza enlaces pagados  
❌ **Contenido duplicado:** No copiar de otros sitios  
❌ **Ignorar mobile:** 70% de búsquedas son mobile  
❌ **No medir resultados:** Sin datos no hay mejora  
❌ **Impaciencia:** SEO toma 3-6 meses mínimo  

---

## 📞 ACCIÓN INMEDIATA (PRÓXIMAS 24 HORAS)

1. **Registrar sitio en Google Search Console** ⏰ 30 min
2. **Enviar sitemap.xml** ⏰ 5 min
3. **Comprimir imágenes con TinyPNG** ⏰ 30 min
4. **Crear Google Business Profile** ⏰ 1 hora
5. **Validar implementación con:**
   - https://search.google.com/test/rich-results (Schema.org)
   - https://pagespeed.web.dev/ (Core Web Vitals)
   - https://validator.w3.org/ (HTML válido)

**Total tiempo:** ~2-3 horas  
**Impacto:** Base sólida para escalar

---

## 📚 RECURSOS ADICIONALES

**Aprendizaje:**
- Google SEO Starter Guide: https://developers.google.com/search/docs
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo

**Herramientas gratis:**
- Google Keyword Planner (ideas de keywords)
- AnswerThePublic (preguntas que hace la gente)
- Google Trends (tendencias de búsqueda México)

---

**✅ SIGUIENTE PASO:** Ir a Google Search Console y registrar el sitio AHORA mismo.

**Contacto para dudas:** Consulta esta guía cada semana y marca las tareas completadas con [x].

---

*Última actualización: 15 de febrero de 2026*
