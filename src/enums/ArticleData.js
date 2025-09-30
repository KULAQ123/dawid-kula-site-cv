const ArticlesEnum = Object.freeze({
  PROJECT_1: {
    title: "Moje CV online – interaktywna wizytówka",
    subtitle: "Vue.js, Vuetify, JS",
    image: "src/assets/images/portfolio/strona-cv/main.jpg",
    mainDescription: {
      part1:
        "Moja strona osobista to interaktywne CV i portfolio, które prezentuje moje doświadczenie zawodowe, wykształcenie oraz projekty frontendowe. Zbudowałem ją w Vue.js 3 z wykorzystaniem Composition API, Pinia, Vite i vue-router, a w wybranych miejscach także Vuetify dla szybszego wdrażania gotowych komponentów.",
      part2:
        "Strona jest w pełni responsywna, szybka i zoptymalizowana pod kątem wydajności, a jej projekt graficzny został zaprojektowany w oparciu o nowoczesne trendy UI/UX, inspirowane m.in. koncepcjami z Dribbble i uzupełnione własnymi grafikami stworzonymi w Canvie.",
      part3:
        "Dodałem autorskie animacje wejścia elementów podczas przewijania, a także linki do mediów społecznościowych i przycisk pobrania CV. W planach mam dalszy rozwój projektu – wdrożenie formularza kontaktowego oraz integrację z CMS-em (prawdopodobnie Strapi), co umożliwi dynamiczne zarządzanie treściami.",
      part4:
        "Dzięki temu projektowi pogłębiłem znajomość Vue 3, pracy z animacjami oraz integracji bibliotek w jednym ekosystemie, tworząc praktyczną i nowoczesną wizytówkę online.",
    },
    gallery: [
      "src/assets/images/portfolio/strona-cv/start.jpg",
      "src/assets/images/portfolio/strona-cv/experience.jpg",
      "src/assets/images/portfolio/strona-cv/skills.jpg",
      "src/assets/images/portfolio/strona-cv/portfolio.jpg",
    ],
  },

  PROJECT_2: {
    title: "Strona internetowa „Zielony Zakątek”",
    subtitle: "HTML, CSS, Bootstrap",
    image: "src/assets/images/portfolio/zielony-zakatek/main.jpg",
    mainDescription: {
      part1:
        "Projekt strony „Zielony Zakątek” powstał w ramach kursu podstaw programowania i pełni funkcję strony firmowej dla ogrodnictwa. Strona zawiera menu nawigacyjne prowadzące do sekcji: Start, Cennik, Nasze rośliny oraz Kontakt. Dodatkowo wprowadzono sekcję „Najnowsze realizacje”, prezentującą nie tylko ofertę roślinną, ale także usługi związane z projektowaniem zieleni w przestrzeniach biurowych, ogrodach i wnętrzach domowych.",
      part2:
        "W stopce umieszczono najważniejsze informacje i dane kontaktowe, a całość została zaprojektowana z wykorzystaniem HTML, CSS oraz frameworka Bootstrap, który zapewnia stronie responsywność i estetyczny układ.",
      part3:
        "Był to jeden z moich pierwszych projektów podczas studiów, który pozwolił mi zdobyć praktyczne doświadczenie w tworzeniu prostych, ale funkcjonalnych stron internetowych.",
    },
    gallery: [
      "src/assets/images/portfolio/zielony-zakatek/start.jpg",
      "src/assets/images/portfolio/zielony-zakatek/content.jpg",
      "src/assets/images/portfolio/zielony-zakatek/description.jpg",
      "src/assets/images/portfolio/zielony-zakatek/footer.jpg",
    ],
  },

  PROJECT_3: {
    title: "Strona biznesowa dla Architekta Wnętrz",
    subtitle: "HTML, CSS, Bootstrap",
    image: "src/assets/images/portfolio/strona-architekta/main.jpg",
    mainDescription: {
      part1:
        "Projekt strony dla architekta wnętrz powstał w ramach bardziej zaawansowanego kursu programowania. Strona została zaprojektowana jako wizytówka biznesu oferującego usługi projektowania wnętrz, z dodatkową sekcją sklepu internetowego z akcesoriami, blogiem tematycznym oraz prezentacją realizacji projektowych.",
      part2:
        "W ramach projektu przygotowałem i zakodowałem widoki dla kluczowych podstron: strony głównej, realizacji, usług, bloga oraz sklepu. Skupiłem się głównie na designie i warstwie frontendowej, wykorzystując HTML, CSS oraz framework Bootstrap do zapewnienia responsywności i spójnego układu strony.",
      part3:
        "Ten projekt pozwolił mi zdobyć praktykę w organizacji kodu, poznawaniu dobrych praktyk czystego programowania oraz w pracy nad większym, wielosekcyjnym projektem.",
    },
    gallery: [
      "src/assets/images/portfolio/strona-architekta/start.jpg",
      "src/assets/images/portfolio/strona-architekta/content.jpg",
      "src/assets/images/portfolio/strona-architekta/footer.jpg",
      "src/assets/images/portfolio/strona-architekta/company.jpg",
      "src/assets/images/portfolio/strona-architekta/blog.jpg",
      "src/assets/images/portfolio/strona-architekta/services.jpg",
      "src/assets/images/portfolio/strona-architekta/contact.jpg",
    ],
  },

  PROJECT_4: {
    title: "Strona z inwestycją w nieruchomość",
    subtitle: "Wordpress",
    image: "src/assets/images/portfolio/strona-nieruchomosci/main.jpg",
    mainDescription: {
      part1:
        "Stronę wykonałem podczas pracy na umowę zlecenie dla firmy Avibud. Stworzyłem stronę przedstawiającą ich inwestycję czyli nieruchomości na własnym osiedlu bliźniaczy zakątek w kluczborku.",
      part2:
        "Stronę tworzyłem przy pomocy Wordpressa, korzystając z wtyczki Elementora.",
    },
    gallery: [
      "src/assets/images/portfolio/strona-nieruchomosci/start.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/content.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/house.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/house-two.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/content-two.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/invest.jpg",
      "src/assets/images/portfolio/strona-nieruchomosci/plan.jpg",
    ],
  },

  PROJECT_5: {
    title: "Praca dyplomowa inżynierska",
    subtitle: "C#, .NET, HTML, CSS, JS, MSSQL",
    image: "src/assets/images/portfolio/praca-inzynierska/main.jpg",
    mainDescription: {
      part1:
        "Praca dyplomowa obejmowała stworzenie aplikacji webowej do zarządzania Gospodarstwem Ogrodniczym. Miała ona na celu pokazanie problemu małej innowacyjnych rozwiązań w GOspodarstwie ogrodniczym. Dzięki niejprowadzenmie ogrodnictwa powinnna zostać ułatwiona. ",
      part2:
        "Zadaniem aplikacji jest: ułatwić zarządzanie danymi, wydajniejsze zarządzanie ogrodnictwem, weszystkie dane w jednym miejscu, lepsze rozplanowanie pracy. Do aplikacji wykorzystałem takie techniologie jak C#, HTML, CSS, JAvaScript, MSSQL, .NET. Aplikacja składa się z różnych modułów są to: Moduł Logowania, Rejestracji, Panel Główny,Magazyn, Ogrodnictwo, Rośliny, Wydarzenia, Pracownicy, Sprzedaż.",
    },
    gallery: [
      "src/assets/images/portfolio/praca-inzynierska/login.jpg",
      "src/assets/images/portfolio/praca-inzynierska/start.jpg",
      "src/assets/images/portfolio/praca-inzynierska/orders.jpg",
      "src/assets/images/portfolio/praca-inzynierska/event.jpg",
      "src/assets/images/portfolio/praca-inzynierska/edit.jpg",
    ],
  },

  PROJECT_6: {
    title: "Ogólne projekty",
    subtitle: "Canva, Blender, Meta Ads, Google Ads",
    image: "src/assets/images/portfolio/ogolne-projekty/brand-logo.jpg",
    mainDescription: {
      part1:
        "Stworzyłem stronę ślubną weselną w wordpressie wykorzystałem do tego szablony oraz wtyczkę Elementor.",
      part2:
        "Strona służy do poinofmrowania gości weselnych o zaślubinach oraz imprezie a także jakich prezentów oczekują Państwo Młodzi.",
    },
    gallery: [
      "src/assets/images/portfolio/ogolne-projekty/cv.jpg",
      "src/assets/images/portfolio/ogolne-projekty/house.jpg",
      "src/assets/images/portfolio/ogolne-projekty/inside.jpg",
      "src/assets/images/portfolio/ogolne-projekty/inside-two.jpg",
      "src/assets/images/portfolio/ogolne-projekty/shampoo.jpg",
      "src/assets/images/portfolio/ogolne-projekty/shampoo-two.jpg",
    ],
  },
});

export default ArticlesEnum;
