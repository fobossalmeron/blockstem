var klaroConfig = {

    version: 1,

    elementID: 'klaro',

    noAutoLoad: false,

    htmlTexts: true,

    embedded: false,

    groupByPurpose: true,

    storageMethod: 'cookie',

    cookieName: 'klaro',

    cookieExpiresAfterDays: 120,

    default: false,

    mustConsent: false,

    acceptAll: true,

    hideDeclineAll: false,

    hideLearnMore: false,

    noticeAsModal: false,

    translations: {
        zz: {
            privacyPolicyUrl: 'URL',
        },
        de: {
            consentModal: {
                title: '<h4>Services, die wir verwenden möchten</h4>',
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
            },
            googleAnalytics: {
                description: 'Sammeln von Besucherstatistiken',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
            },
        },
        en: {
            consentModal: {
                title: '<h4>Services we would like to use</h4>',
                description:
                    'Here you can see and customize the information that we collect about you.',
            },
            googleAnalytics: {
                description: 'Collecting of visitor statistics',
            },
            purposes: {
                analytics: 'Analytics',
            },
        },
    },

    services: [
        {
            name: 'googleAnalytics', 
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                [/^_g.*/, '/', '.webflow.io'], // delete already set cookies at loading time of Klaro
            ],
            optOut: false,
        },
    ],
};