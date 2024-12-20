import SpainFlag from "../components/flags/Spain.astro";
import UnitedStatesFlag from "../components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    // "nav.inicio": "Inicio",
  },
  en: {
    // "nav.inicio": "Home",
  },
} as const;

export const routes = {
  //key names have to match other languages, what changes is the value's language
  es: {
    contacto: "contacto",
    // "solucion-desarrollo": "solucion-desarrollo",
    // "solucion-soporte": "solucion-soporte",
    // "solucion-inteligencia-artificial": "solucion-inteligencia-artificial",
    // "nuestro-equipo": "nuestro-equipo",
  },
  en: {
    contacto: "contact",
    // "solucion-desarrollo": "solution-development",
    // "solucion-soporte": "solution-support",
    // "solucion-inteligencia-artificial": "solution-artificial-intelligence",
    // "nuestro-equipo": "our-team",
  },
};
