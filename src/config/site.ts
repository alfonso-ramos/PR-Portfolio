// Configuración del sitio
export const SITE = {
  title: 'Poncho Ramos',
  description: 'Desarrollador Frontend especializado en crear experiencias web modernas y responsivas.',
  defaultLanguage: 'es',
  siteUrl: 'https://ponchoramos.com', // Reemplaza con tu dominio real
  author: 'Poncho Ramos',
  email: 'ponchoramos@gmail.com',
  socials: {
    github: 'https://github.com/alfonso-ramos',
    twitter: 'https://twitter.com/PonchoRamosDev',
    linkedin: 'https://linkedin.com/in/ponchoramos',
  },
};

// Configuración de navegación
export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Sobre Mí', href: '/about' },
  { label: 'Contacto', href: '/contact' },
];

// Datos estructurados para Schema.org
export const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Poncho Ramos",
  "jobTitle": "Frontend Developer",
  "url": "https://tusitio.com",
  "sameAs": [
    "https://github.com/tuusuario",
    "https://twitter.com/PonchoRamosDev",
    "https://linkedin.com/in/tuperfil"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "Desarrollador Frontend especializado en crear experiencias web modernas y responsivas."
};
