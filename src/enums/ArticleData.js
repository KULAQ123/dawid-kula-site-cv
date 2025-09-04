const ArticlesEnum = Object.freeze({
  PROJECT_1: {
    title: "Strona internetowa Zielony Zakątek",
    subtitle: "HTML, CSS, Bootstrap",
    image: "src/assets/images/portfolio/zielony-zakatek/start.png",
    mainDescription: [
      "Projekt strony internetowej został stworzony w ramach kursu z podstaw programowania. Strona charakteryzuje się prostym i eleganckim designem, w którym dominują zielone akcenty, nawiązujące do tematyki ogrodnictwa. Strona główna zawiera czytelne menu nawigacyjne, z podstawowymi zakładkami: Start, Cennik, Nasze rośliny oraz Kontakt.\n" +
        "\n" +
        'Dodatkowo, strona posiada sekcję "Najnowsze realizacje", w której przedstawiono nie tylko ofertę ogrodniczą, ale także usługi związane z projektowaniem roślin w przestrzeniach biurowych, ogrodach oraz pokojach domowych.',
      "W stopce strony znajdują się najczęściej zadawane pytania oraz dane kontaktowe właściciela firmy, wraz z informacjami o dojeździe.\n" +
        "\n" +
        "Do stworzenia strony wykorzystano języki HTML, CSS oraz framework Bootstrap, co pozwoliło na automatyczne dostosowanie strony do urządzeń mobilnych.\n" +
        "\n" +
        "Chętnie podejmę się realizacji podobnych projektów dla innych zainteresowanych klientów.",
    ],
    gallery: [
      "src/assets/images/portfolio/zielony-zakatek/full_site.png",
      "src/assets/images/portfolio/zielony-zakatek/mobile_start.png",
      "src/assets/images/portfolio/zielony-zakatek/section_article.png",
      "src/assets/images/portfolio/zielony-zakatek/section_footer.png",
      "src/assets/images/portfolio/zielony-zakatek/section_how.png",
      "src/assets/images/portfolio/zielony-zakatek/start.png",
    ],
    afterGalleryDescription: [
      "A to opis, który pojawi się już po galerii.",
      "Możesz tu dać dodatkowe szczegóły, podsumowanie itd.",
    ],
  },

  PROJECT_2: {
    title: "Rozwój platformy e-commerce",
    subtitle: "Vue.js",
    image: "src/assets/images/web.png",
    mainDescription: {
      part1:
        "Platforma została zaprojektowana od podstaw, uwzględniając skalowalność i wydajność.",
      part2:
        "Kluczowe funkcje obejmują wyszukiwarkę produktów, integrację płatności i narzędzia do zarządzania zamówieniami.",
    },
    gallery: [
      "src/assets/images/web.png",
      "src/assets/images/web.png",
      "src/assets/images/web.png",
      "src/assets/images/web.png",
    ],
  },

  PROJECT_3: {
    title: "Personalizacja platformy blogowej",
    subtitle: "Vue.js",
    image: "src/assets/images/web.png",
    mainDescription: {
      part1:
        "W ramach projektu dodano zaawansowane narzędzia SEO oraz integrację z mediami społecznościowymi.",
      part2:
        "Współpraca z klientami umożliwiła dostosowanie platformy zarówno pod względem funkcjonalności, jak i estetyki.",
    },
    gallery: [
      "./images/blog-platform-1.jpg",
      "./images/blog-platform-2.jpg",
      "./images/blog-platform-3.jpg",
      "./images/blog-platform-4.jpg",
      "./images/blog-platform-5.jpg",
    ],
  },

  PROJECT_4: {
    title: "Ślubna strona weselna",
    subtitle: "Wordpress",
    image: "src/assets/images/web.png",
    mainDescription: {
      part1:
        "Stworzyłem stronę ślubną weselną w wordpressie wykorzystałem do tego szablony oraz wtyczkę Elementor.",
      part2:
        "Strona służy do poinofmrowania gości weselnych o zaślubinach oraz imprezie a także jakich prezentów oczekują Państwo Młodzi.",
    },
    gallery: [
      "./images/bg-image.jpg",
      "./images/bg-image.jpg",
      "./images/bg-image.jpg",
      "./images/bg-image.jpg",
      "./images/bg-image.jpg",
    ],
  },

  PROJECT_5: {
    title: "Strona z inwestycją w nieruchomość",
    subtitle: "Wordpress",
    image: "src/assets/images/BlizniaczyZakatek.png",
    mainDescription: {
      part1:
        "Stronę wykonałem podczas pracy na umowę zlecenie dla firmy Avibud. Stworzyłem stronę przedstawiającą ich inwestycję czyli nieruchomości na własnym osiedlu bliźniaczy zakątek w kluczborku.",
      part2:
        "Stronę tworzyłem przy pomocy Wordpressa, korzystając z wtyczki Elementora.",
    },
    gallery: [
      "./images/BlizniaczyZakatek.png",
      "./images/BlizniaczyZakatek.png",
      "./images/BlizniaczyZakatek.png",
      "./images/BlizniaczyZakatek.png",
      "./images/BlizniaczyZakatek.png",
    ],
  },

  PROJECT_6: {
    title: "Praca dyplomowa inżynierska",
    subtitle: "C#, .NET, HTML, CSS, JS, MSSQL",
    image: "src/assets/images/portfolio/praca-inzynierska/Panel.jpg",
    mainDescription: {
      part1:
        "Praca dyplomowa obejmowała stworzenie aplikacji webowej do zarządzania Gospodarstwem Ogrodniczym. Miała ona na celu pokazanie problemu małej innowacyjnych rozwiązań w GOspodarstwie ogrodniczym. Dzięki niejprowadzenmie ogrodnictwa powinnna zostać ułatwiona. ",
      part2:
        "Zadaniem aplikacji jest: ułatwić zarządzanie danymi, wydajniejsze zarządzanie ogrodnictwem, weszystkie dane w jednym miejscu, lepsze rozplanowanie pracy. Do aplikacji wykorzystałem takie techniologie jak C#, HTML, CSS, JAvaScript, MSSQL, .NET. Aplikacja składa się z różnych modułów są to: Moduł Logowania, Rejestracji, Panel Główny,Magazyn, Ogrodnictwo, Rośliny, Wydarzenia, Pracownicy, Sprzedaż.",
    },
    gallery: [
      "src/assets/images/portfolio/praca-inzynierska/Logowanie.jpg",
      "src/assets/images/portfolio/praca-inzynierska/Rejestracja.jpg",
      "src/assets/images/portfolio/praca-inzynierska/Zamówienia.jpg",
      "src/assets/images/portfolio/praca-inzynierska/Panel.jpg",
      "src/assets/images/portfolio/praca-inzynierska/Panel.jpg",
    ],
  },
});

export default ArticlesEnum;
