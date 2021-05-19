var klaroConfig = {
  version: 1,
  elementID: "klaro",
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: "cookie",
  cookieName: "blockstem",
  cookieExpiresAfterDays: 120,
  default: true,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  disablePoweredBy: true,
  translations: {
    zz: {
      privacyPolicyUrl: "/privacidad",
    },
    es: {
      consentModal: {
        title: "<h4>Quisieramos usar</h4>",
        description:
          "Aquí puedes personalizar la información que recolectamos.",
      },
      privacyPolicyUrl: "/privacidad",
      googleAnalytics: {
        description: "Estadísticas de uso del sitio.",
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
      cookies: [
        [/^_g.*/, "/", ".webflow.io"], // delete already set cookies at loading time of Klaro
      ],
      optOut: false,
      callback: function (consent, service) {
        console.log(
          "User consent for service " + service.name + ": consent=" + consent
        );
      },
    },
    {
        name: "gtm",
        title: "Google Tag Manager",
        purposes: ["analytics"],
        optOut: false,
      },
    {
      name: "facebook",
      title: "Facebook",
      purposes: ["marketing"],
      cookies: [
        [/^_fb.*/, "/", ".webflow.io"], // delete already set cookies at loading time of Klaro
      ],
      optOut: false,
    },
    {
      name: "hubspot",
      title: "Hubspot",
      purposes: ["marketing"],
      cookies: [
        [/^_hs.*/, "/", ".webflow.io"], // delete already set cookies at loading time of Klaro
      ],
      optOut: false,
    },
  ],
};
