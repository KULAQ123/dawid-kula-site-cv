const ArticlesEnum = Object.freeze({
  PROJECT_1: {
    title: "Strona internetowa Zielony Zakątek",
    subtitle: "HTML, CSS, Bootstrap",
    image: "src/assets/images/portfolio/zielony-zakatek/start.png",
    mainDescription: {
      part1:
        "Projekt strony internetowej został stworzony w ramach kursu z podstaw programowania. Strona charakteryzuje się prostym i eleganckim designem, w którym dominują zielone akcenty, nawiązujące do tematyki ogrodnictwa. Strona główna zawiera czytelne menu nawigacyjne, z podstawowymi zakładkami: Start, Cennik, Nasze rośliny oraz Kontakt.\n" +
        "\n" +
        'Dodatkowo, strona posiada sekcję "Najnowsze realizacje", w której przedstawiono nie tylko ofertę ogrodniczą, ale także usługi związane z projektowaniem roślin w przestrzeniach biurowych, ogrodach oraz pokojach domowych.',
      part2:
        "W stopce strony znajdują się najczęściej zadawane pytania oraz dane kontaktowe właściciela firmy, wraz z informacjami o dojeździe.\n" +
        "\n" +
        "Do stworzenia strony wykorzystano języki HTML, CSS oraz framework Bootstrap, co pozwoliło na automatyczne dostosowanie strony do urządzeń mobilnych.\n" +
        "\n" +
        "Chętnie podejmę się realizacji podobnych projektów dla innych zainteresowanych klientów.",
    },
    gallery: [
      "src/assets/images/portfolio/zielony-zakatek/full_site.png",
      "src/assets/images/portfolio/zielony-zakatek/mobile_start.png",
      "src/assets/images/portfolio/zielony-zakatek/section_article.png",
      "src/assets/images/portfolio/zielony-zakatek/section_footer.png",
      "src/assets/images/portfolio/zielony-zakatek/section_how.png",
      "src/assets/images/portfolio/zielony-zakatek/start.png",
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
});

export default ArticlesEnum;
