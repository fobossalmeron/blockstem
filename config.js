var klaroConfig = {
  version: 1,
  elementID: "cookieConsent",
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: "cookie",
  cookieName: "blockstem",
  cookieExpiresAfterDays: 120,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: true,
  hideLearnMore: false,
  noticeAsModal: false,
  disablePoweredBy: true,
  additionalClass: 'appearscroll',
  translations: {
    zz: {
      privacyPolicyUrl: "/privacidad",
    },
    es: {
      consentModal: {
        title: "Utilizamos cookies para mejorar tu experiencia",
        description:
          "Aquí puedes personalizar la información que recolectamos.",
      },
      consentNotice: {
        description:
          "¡Hola! ¿Podríamos habilitar algunos servicios para analytics & publicidad? Siempre puedes cambiar o retirar tu consentimiento más tarde.",
      },
      service: {
        disableAll: {
          description:
            "Utiliza este interruptor para activar o desactivar todos los servicios.",
        },
      },
      privacyPolicy: {
        text: "Para saber más, por favor lee nuestra <a href='/privacidad'>política de privacidad</a>.",
      },
      googleAnalytics: {
        description: "Estadísticas de uso de nuestro sitio web.",
      },
      gtm: {
        description: "Estadísticas de uso de nuestro sitio web.",
      },
      facebook: {
        description: "Información para seguimiento de Facebook, Inc.",
      },
      hubspot: {
        description: "Información para seguimiento de Hubspot, Inc.",
      },
      purposes: {
        analytics: "Analytics",
        marketing: "Publicidad",
      },
    },
  },
  services: [
    {
      name: "googleAnalytics",
      title: "Google Analytics",
      purposes: ["analytics"],
      optOut: false,
      default: true,
      cookies: [
        [/^_g.*/, "/", ".webflow.io"],
        [/^_g.*/, "/", ".blockstem.org"], // delete already set cookies at loading time of Klaro
      ],
    },
    {
      name: "gtm",
      title: "Google Tag Manager",
      purposes: ["analytics"],
      default: true,
      optOut: false,
    },
    {
      name: "facebook",
      title: "Facebook",
      purposes: ["marketing"],
      default: true,
      optOut: false,
      cookies: [
        [/^_fb.*/, "/", ".webflow.io"],
        [/^_fb.*/, "/", ".blockstem.org"], // delete already set cookies at loading time of Klaro
      ],
    },
    {
      name: "hubspot",
      title: "Hubspot",
      purposes: ["marketing"],
      default: true,
      optOut: false,
      cookies: [
        [/^_hs.*/, "/", ".webflow.io"],
        [/^_hs.*/, "/", ".blockstem.org"], // delete already set cookies at loading time of Klaro
      ],
    },
  ],
};
