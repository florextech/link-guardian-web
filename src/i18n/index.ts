export const languages = { es: 'Español', en: 'English' } as const;
export const defaultLang = 'es' as const;

export const ui = {
  es: {
    'site.title': 'Urlora — Guarda y verifica tus enlaces',
    'site.description': 'App iOS para guardar, organizar y verificar el estado de tus enlaces. Privada, sin cuentas, sin servidores.',
    'nav.home': 'Inicio',
    'nav.privacy': 'Privacidad',
    'nav.terms': 'Términos',
    'hero.tagline': 'Tu guardián de enlaces',
    'hero.title': 'Guarda, organiza y verifica tus links',
    'hero.subtitle': 'Comprueba si tus enlaces siguen activos, organízalos con tags y protege los sensibles con Face ID. Sin cuentas, sin servidores.',
    'hero.cta': 'Descargar en App Store',
    'features.title': 'Funcionalidades',
    'features.verify.title': 'Verifica el estado',
    'features.verify.desc': 'Comprueba automáticamente si tus enlaces están disponibles, redirigidos o rotos.',
    'features.organize.title': 'Organiza a tu manera',
    'features.organize.desc': 'Tags, favoritos, filtros por estado y agrupación por dominio.',
    'features.privacy.title': 'Privacidad total',
    'features.privacy.desc': 'Sección oculta protegida con Face ID. Tus datos nunca salen de tu dispositivo.',
    'features.share.title': 'Guarda desde cualquier app',
    'features.share.desc': 'Extensión para compartir desde Safari y detección automática del portapapeles.',
    'features.widget.title': 'Widget y Spotlight',
    'features.widget.desc': 'Accede a tus enlaces recientes desde el Home Screen o búscalos con Spotlight.',
    'features.export.title': 'Exporta e importa',
    'features.export.desc': 'Backup completo en JSON. Genera códigos QR de cualquier enlace.',
    'footer.made': 'Hecho por',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'site.title': 'Urlora — Save and verify your links',
    'site.description': 'iOS app to save, organize, and verify the status of your links. Private, no accounts, no servers.',
    'nav.home': 'Home',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'hero.tagline': 'Your link guardian',
    'hero.title': 'Save, organize and verify your links',
    'hero.subtitle': 'Check if your links are still active, organize them with tags and protect sensitive ones with Face ID. No accounts, no servers.',
    'hero.cta': 'Download on App Store',
    'features.title': 'Features',
    'features.verify.title': 'Verify status',
    'features.verify.desc': 'Automatically check if your links are available, redirected or broken.',
    'features.organize.title': 'Organize your way',
    'features.organize.desc': 'Tags, favorites, status filters and domain grouping.',
    'features.privacy.title': 'Total privacy',
    'features.privacy.desc': 'Hidden section protected with Face ID. Your data never leaves your device.',
    'features.share.title': 'Save from any app',
    'features.share.desc': 'Share extension from Safari and automatic clipboard detection.',
    'features.widget.title': 'Widget & Spotlight',
    'features.widget.desc': 'Access recent links from your Home Screen or search them with Spotlight.',
    'features.export.title': 'Export & import',
    'features.export.desc': 'Full JSON backup. Generate QR codes for any link.',
    'footer.made': 'Made by',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
