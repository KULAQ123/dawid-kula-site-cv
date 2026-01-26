const ArticlesEnum = Object.freeze({
  PROJECT_1: {
    title: "Moje CV online – interaktywna wizytówka",
    subtitle: "Vue.js, Vuetify, JS",
    image: "/images/portfolio/strona-cv/main.jpg",
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
      "/images/portfolio/strona-cv/start.jpg",
      "/images/portfolio/strona-cv/experience.jpg",
      "/images/portfolio/strona-cv/skills.jpg",
      "/images/portfolio/strona-cv/portfolio.jpg",
    ],
  },

  PROJECT_2: {
    title: "Strona internetowa „Zielony Zakątek”",
    subtitle: "HTML, CSS, Bootstrap",
    image: "/images/portfolio/zielony-zakatek/main.jpg",
    mainDescription: {
      part1:
        "Projekt strony „Zielony Zakątek” powstał w ramach kursu podstaw programowania i pełni funkcję strony firmowej dla ogrodnictwa. Strona zawiera menu nawigacyjne prowadzące do sekcji: Start, Cennik, Nasze rośliny oraz Kontakt. Dodatkowo wprowadzono sekcję „Najnowsze realizacje”, prezentującą nie tylko ofertę roślinną, ale także usługi związane z projektowaniem zieleni w przestrzeniach biurowych, ogrodach i wnętrzach domowych.",
      part2:
        "W stopce umieszczono najważniejsze informacje i dane kontaktowe, a całość została zaprojektowana z wykorzystaniem HTML, CSS oraz frameworka Bootstrap, który zapewnia stronie responsywność i estetyczny układ.",
      part3:
        "Był to jeden z moich pierwszych projektów podczas studiów, który pozwolił mi zdobyć praktyczne doświadczenie w tworzeniu prostych, ale funkcjonalnych stron internetowych.",
    },
    gallery: [
      "/images/portfolio/zielony-zakatek/start.jpg",
      "/images/portfolio/zielony-zakatek/content.jpg",
      "/images/portfolio/zielony-zakatek/description.jpg",
      "/images/portfolio/zielony-zakatek/footer.jpg",
    ],
  },

  PROJECT_3: {
    title: "Strona biznesowa dla Architekta Wnętrz",
    subtitle: "HTML, CSS, Bootstrap",
    image: "/images/portfolio/strona-architekta/main.jpg",
    mainDescription: {
      part1:
        "Projekt strony dla architekta wnętrz powstał w ramach bardziej zaawansowanego kursu programowania. Strona została zaprojektowana jako wizytówka biznesu oferującego usługi projektowania wnętrz, z dodatkową sekcją sklepu internetowego z akcesoriami, blogiem tematycznym oraz prezentacją realizacji projektowych.",
      part2:
        "W ramach projektu przygotowałem i zakodowałem widoki dla kluczowych podstron: strony głównej, realizacji, usług, bloga oraz sklepu. Skupiłem się głównie na designie i warstwie frontendowej, wykorzystując HTML, CSS oraz framework Bootstrap do zapewnienia responsywności i spójnego układu strony.",
      part3:
        "Ten projekt pozwolił mi zdobyć praktykę w organizacji kodu, poznawaniu dobrych praktyk czystego programowania oraz w pracy nad większym, wielosekcyjnym projektem.",
    },
    gallery: [
      "/images/portfolio/strona-architekta/start.jpg",
      "/images/portfolio/strona-architekta/content.jpg",
      "/images/portfolio/strona-architekta/footer.jpg",
      "/images/portfolio/strona-architekta/company.jpg",
      "/images/portfolio/strona-architekta/blog.jpg",
      "/images/portfolio/strona-architekta/services.jpg",
      "/images/portfolio/strona-architekta/contact.jpg",
    ],
  },

  PROJECT_4: {
    title: "Strona z inwestycją w nieruchomość",
    subtitle: "Wordpress",
    image: "/images/portfolio/strona-nieruchomosci/main.jpg",
    mainDescription: {
      part1:
        "Stronę wykonałem podczas pracy na umowę zlecenie dla firmy Avibud. Stworzyłem stronę przedstawiającą ich inwestycję czyli nieruchomości na własnym osiedlu bliźniaczy zakątek w kluczborku.",
      part2:
        "Stronę tworzyłem przy pomocy Wordpressa, korzystając z wtyczki Elementora.",
    },
    gallery: [
      "/images/portfolio/strona-nieruchomosci/start.jpg",
      "/images/portfolio/strona-nieruchomosci/content.jpg",
      "/images/portfolio/strona-nieruchomosci/house.jpg",
      "/images/portfolio/strona-nieruchomosci/house-two.jpg",
      "/images/portfolio/strona-nieruchomosci/content-two.jpg",
      "/images/portfolio/strona-nieruchomosci/invest.jpg",
      "/images/portfolio/strona-nieruchomosci/plan.jpg",
    ],
  },

  PROJECT_5: {
    title: "Praca dyplomowa inżynierska",
    subtitle: "C#, .NET, HTML, CSS, JS, MSSQL",
    image: "/images/portfolio/praca-inzynierska/main.jpg",
    mainDescription: {
      part1:
        "Praca dyplomowa obejmowała stworzenie aplikacji webowej do zarządzania Gospodarstwem Ogrodniczym. Miała ona na celu pokazanie problemu małej innowacyjnych rozwiązań w Gospodarstwie ogrodniczym. Dzięki niejprowadzenmie ogrodnictwa powinnna zostać ułatwiona. ",
      part2:
        "Zadaniem aplikacji jest: ułatwić zarządzanie danymi, wydajniejsze zarządzanie ogrodnictwem, weszystkie dane w jednym miejscu, lepsze rozplanowanie pracy. Do aplikacji wykorzystałem takie techniologie jak C#, HTML, CSS, JAvaScript, MSSQL, .NET. Aplikacja składa się z różnych modułów są to: Moduł Logowania, Rejestracji, Panel Główny,Magazyn, Ogrodnictwo, Rośliny, Wydarzenia, Pracownicy, Sprzedaż.",
    },
    gallery: [
      "/images/portfolio/praca-inzynierska/login.jpg",
      "/images/portfolio/praca-inzynierska/start.jpg",
      "/images/portfolio/praca-inzynierska/orders.jpg",
      "/images/portfolio/praca-inzynierska/event.jpg",
      "/images/portfolio/praca-inzynierska/edit.jpg",
    ],
  },

  PROJECT_6: {
    title: "Ogólne projekty",
    subtitle: "Canva, Blender, Meta Ads, Google Ads",
    image: "/images/portfolio/ogolne-projekty/brand-logo.jpg",
    mainDescription: {
      part1:
        "Moja ścieżka zawodowa to nieustanny rozwój i eksploracja nowych technologii. Zrealizowałem liczne projekty, które pozwoliły mi opanować zaawansowane techniki pracy z kodem i grafiką. W procesie twórczym swobodnie łączę świat programowania z designem, wykorzystując narzędzia takie jak Photoshop, Affinity czy Canva, co pozwala mi na dostarczanie kompletnych i estetycznych rozwiązań.",
      part2:
        "Pasjonuję się grafiką 3D i ruchem. W programie Blender tworzę zróżnicowane projekty – od precyzyjnych wizualizacji architektonicznych, przez modelowanie obiektów, aż po zaawansowane animacje typu motion capture. Ta umiejętność pozwala mi na wprowadzanie unikalnych, trójwymiarowych elementów do projektów webowych, co znacząco podnosi ich atrakcyjność.",
      part3:
        "Posiadam doświadczenie w pracy z systemami CMS, czego przykładem jest kompleksowa realizacja strony ślubnej w systemie WordPress. Wykorzystując potencjał wtyczki Elementor, stworzyłem funkcjonalny i przejrzysty serwis informacyjny dla gości, dbając o estetykę zgodną z oczekiwaniami użytkowników oraz o intuicyjną nawigację.",
      part4:
        "W obszarze jakości oprogramowania skupiam się na automatyzacji. Tworzę zaawansowane skrypty testowe w Cypressie, czego przykładem jest automatyzacja testów panelu administracyjnego. Moje nieszablonowe podejście do kodu zaowocowało również stworzeniem algorytmu rozpoznawczego, który automatycznie identyfikował elementy graficzne z gier na stronach konkursowych.",
      part5:
        "Doskonale rozumiem potrzeby biznesowe nowoczesnych stron – zajmuję się nie tylko ich tworzeniem, ale i bieżącym utrzymaniem. Prowadzę administrację treścią oraz aktywnie pracuję nad pozycjonowaniem (SEO), dbając o to, by serwisy były widoczne w sieci i generowały realny ruch.",
    },
    gallery: [
      "/images/portfolio/ogolne-projekty/cv.jpg",
      "/images/portfolio/ogolne-projekty/house.jpg",
      "/images/portfolio/ogolne-projekty/inside.jpg",
      "/images/portfolio/ogolne-projekty/inside-two.jpg",
      "/images/portfolio/ogolne-projekty/shampoo.jpg",
      "/images/portfolio/ogolne-projekty/shampoo-two.jpg",
    ],
  },
});

export default ArticlesEnum;
