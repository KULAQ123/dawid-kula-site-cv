const ArticlesEnum = Object.freeze({
  PROJECT_1: {
    title: "Strona dla Ogrodnictwa",
    link: "https://ogrodnictwokulajan.pl",
    subtitle: "Nuxt 4, Vue 3, TypeScript, Strapi CMS",
    image: "/images/portfolio/strona-ogrodnictwa/main.jpg",
    mainDescription: {
      part1:
        "Projekt obejmował stworzenie nowoczesnej i responsywnej strony internetowej dla lokalnego ogrodnictwa. Aplikację zbudowałem w oparciu o Nuxt 4 oraz Vue 3 z wykorzystaniem TypeScript, co pozwoliło na stworzenie wydajnego i skalowalnego rozwiązania z wykorzystaniem SSR.",
      part2:
        "Za zarządzanie treścią odpowiada Strapi CMS, który samodzielnie zaprojektowałem i skonfigurowałem – od struktury danych, przez relacje, aż po integrację z frontendem. CMS obsługuje m.in. ofertę roślin, galerię oraz formularz kontaktowy.",
      part3:
        "W projekcie odpowiadałem również za przygotowanie treści – wykonałem zdjęcia oraz dodałem wszystkie materiały na stronę. Dodatkowo wdrożyłem tryb jasny i ciemny, zadbałem o pełną responsywność oraz optymalizację SEO (meta tagi, struktura strony, wydajność).",
      part4:
        "Przeprowadziłem także testy działania zarówno warstwy frontendowej, jak i CMS. Uzupełnieniem projektu było przygotowanie wizytówki dla ogrodnictwa wraz z kodem QR prowadzącym do strony, zaprojektowanej w Canvie.",
    },
    gallery: [
      "/images/portfolio/strona-ogrodnictwa/home_banner.jpg",
      "/images/portfolio/strona-ogrodnictwa/about_dark.jpg",
      "/images/portfolio/strona-ogrodnictwa/about_light.jpg",
      "/images/portfolio/strona-ogrodnictwa/plant_card_dark.jpg",
      "/images/portfolio/strona-ogrodnictwa/plant_card_light.jpg",
      "/images/portfolio/strona-ogrodnictwa/galeria_dark.jpg",
      "/images/portfolio/strona-ogrodnictwa/galeria_light.jpg",
      "/images/portfolio/strona-ogrodnictwa/contact_dark.jpg",
      "/images/portfolio/strona-ogrodnictwa/contact_light.jpg",
      "/images/portfolio/strona-ogrodnictwa/wizytowki.jpg",
    ],
  },

  PROJECT_2: {
    title: "Moje CV online – interaktywna wizytówka",
    link: "https://dawidkula.pl",
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

  PROJECT_3: {
    title: "LUMEA Candles – sklep internetowy",
    link: "",
    subtitle: "Shoper, UX/UI, e-commerce, content marketing",
    image: "/images/portfolio/lumea-candles/main.jpg",
    forSale: true,
    mainDescription: {
      part1:
        "Projekt LUMEA Candles to w pełni zaprojektowany sklep internetowy stworzony na platformie Shoper. Celem projektu było stworzenie realistycznej, nowoczesnej marki e-commerce z branży home & lifestyle, specjalizującej się w ręcznie robionych świecach sojowych.",

      part2:
        "W ramach projektu zaprojektowałem kompletną strukturę sklepu, obejmującą stronę główną, kategorie produktów, karty produktów oraz wszystkie kluczowe strony informacyjne, takie jak: O firmie, Kontakt, FAQ, Regulamin, Polityka prywatności oraz Zwroty i reklamacje.",

      part3:
        "Zadbano o spójny branding marki LUMEA Candles, w tym nazwę, opis produktów, strukturę kategorii oraz treści marketingowe. Sklep został zaprojektowany w stylu minimalistycznym, premium, z naciskiem na czytelność, estetykę i doświadczenie użytkownika (UX).",

      part4:
        "Projekt pozwolił mi zdobyć praktyczne doświadczenie w pracy z platformą Shoper, projektowaniu struktury sklepu e-commerce, tworzeniu treści sprzedażowych oraz budowaniu spójnej identyfikacji wizualnej marki online.",
      part5:
        "Projekt LUMEA Candles jest dostępny do odsprzedaży jako gotowa marka e-commerce. Oferta obejmuje sklep internetowy na platformie Shoper, identyfikację wizualną, logo, treści marketingowe, opisy produktów oraz kompletną koncepcję biznesową. Cena projektu: 2299 zł.",
    },

    gallery: [
      "/images/portfolio/lumea-candles/slide-banner.jpg",
      "/images/portfolio/lumea-candles/bestseller.jpg",
      "/images/portfolio/lumea-candles/category.jpg",
      "/images/portfolio/lumea-candles/company.jpg",
      "/images/portfolio/lumea-candles/product.jpg",
      "/images/portfolio/lumea-candles/product-list.jpg",
      "/images/portfolio/lumea-candles/all-product.jpg",
      "/images/portfolio/lumea-candles/website.jpg",
    ],
  },

  PROJECT_4: {
    title: "Strona inwestycji deweloperskiej",
    subtitle: "Wordpress, JS, SVG",
    image: "/images/portfolio/strona-nieruchomosci/main.jpg",
    mainDescription: {
      part1:
        "Projekt strony internetowej dla firmy Avibud prezentującej inwestycję mieszkaniową „Bliźniaczy Zakątek” w Kluczborku. Strona została zaprojektowana jako rozbudowany serwis informacyjny, a nie tylko landing page.",

      part2:
        "W ramach projektu stworzyłem wielostronicową strukturę obejmującą m.in. stronę główną, podstronę kontakt, informacje o firmie oraz dedykowaną sekcję mieszkań.",

      part3:
        "Najbardziej zaawansowanym elementem projektu była zakładka mieszkań, w której zastosowałem interaktywną wizualizację osiedla w formie rzutu z góry. Na grafice wykorzystałem siatkę mieszkań oraz interakcje oparte o JavaScript i elementy SVG, umożliwiające użytkownikowi wybór konkretnych lokali.",

      part4:
        "Projekt wykonałem w WordPressie z użyciem Elementora, łącząc go z własnymi rozwiązaniami front-endowymi. Skupiłem się również na podstawowej optymalizacji SEO, strukturze treści oraz użyteczności interfejsu.",
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

  PROJECT_6: {
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

  PROJECT_7: {
    title: "Praca dyplomowa inżynierska",
    subtitle: "C#, .NET, HTML, CSS, JS, MSSQL",
    image: "/images/portfolio/praca-inzynierska/main.jpg",
    mainDescription: {
      part1:
        "Praca dyplomowa obejmowała stworzenie aplikacji webowej do zarządzania gospodarstwem ogrodniczym. Jej celem było przedstawienie problemu braku nowoczesnych i zintegrowanych rozwiązań w tego typu działalności oraz pokazanie, w jaki sposób aplikacja może usprawnić codzienną pracę.",

      part2:
        "Aplikacja została zaprojektowana w celu ułatwienia zarządzania danymi, zwiększenia efektywności pracy oraz centralizacji wszystkich informacji w jednym miejscu. Umożliwia lepsze planowanie i organizację pracy w gospodarstwie ogrodniczym.",

      part3:
        "W projekcie wykorzystałem technologie takie jak C#, HTML, CSS, JavaScript, MS SQL oraz .NET. Aplikacja składa się z kilku modułów, takich jak: logowanie, rejestracja, panel główny, magazyn, zarządzanie uprawami, rośliny, wydarzenia, pracownicy oraz sprzedaż.",
    },
    gallery: [
      "/images/portfolio/praca-inzynierska/login.jpg",
      "/images/portfolio/praca-inzynierska/start.jpg",
      "/images/portfolio/praca-inzynierska/orders.jpg",
      "/images/portfolio/praca-inzynierska/event.jpg",
      "/images/portfolio/praca-inzynierska/edit.jpg",
    ],
  },

  PROJECT_8: {
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

  PROJECT_9: {
    title: "Aplikacja mobilna użytkowa (SaaS / Mobile App)",
    subtitle: "Nuxt, Vue, Capacitor, Next.js, Node.js",
    image: "/images/portfolio/mockup.jpg",
    forSale: true,
    mainDescription: {
      part1:
        "Projekt obejmuje koncepcję oraz rozwój aplikacji mobilnej użytkowej przeznaczonej na systemy Android oraz iOS. Aplikacja tworzona jest z myślą o publikacji w App Store oraz Google Play jako produkt komercyjny (SaaS).",

      part2:
        "Głównym celem projektu jest stworzenie nowoczesnej, lekkiej i skalowalnej aplikacji mobilnej, która rozwiązuje realny problem użytkowników poprzez intuicyjny interfejs oraz szybki dostęp do kluczowych funkcji.",

      part3:
        "W projekcie wykorzystywany jest Nuxt oraz Vue.js do budowy interfejsu użytkownika, Capacitor do konwersji aplikacji na środowisko mobilne oraz Node.js / Next.js jako warstwa backendowa i API. Architektura została zaprojektowana z myślą o dalszym skalowaniu oraz wdrożeniu systemu subskrypcyjnego.",

      part4:
        "Projekt znajduje się obecnie w fazie rozwoju. Planowana jest implementacja dodatkowych funkcji, integracja płatności oraz przygotowanie aplikacji do publikacji w sklepach App Store i Google Play.",

      part5:
        "Projekt aplikacji mobilnej jest rozwijany jako produkt cyfrowy typu SaaS, zaprojektowany z myślą o generowaniu przychodu poprzez model subskrypcyjny, reklamy oraz dodatkowe funkcje premium. Aplikacja tworzona jest w technologii Nuxt, Vue, Capacitor, Next.js oraz Node.js i przygotowywana do publikacji w App Store oraz Google Play. Produkt obejmuje pełną koncepcję biznesową, branding oraz architekturę umożliwiającą dalsze skalowanie. Projekt przewidziany jest jako komercyjny produkt z orientacyjnymi widełkami wartości rynkowej od 10 000 do 50 000 zł w zależności od zakresu funkcjonalności i etapu rozwoju.",
    },

    gallery: ["/images/portfolio/mockup.jpg"],
  },
});

export default ArticlesEnum;
