(() => {
  "use strict";

  const STORAGE_KEY = "city-bingo-fieldwork-v1";
  const CATEGORY_COLORS = {
    architecture: "#e66f4d",
    culture: "#7e6f8f",
    ecology: "#6b8761",
    movement: "#4f7f8f"
  };

  const TRANSLATIONS = {
    en: {
      appTitle: "City Bingo — Urban Fieldwork Game",
      metaDescription: "City Bingo turns urban research into a playful fieldwork game.",
      switchLanguage: "Switch to Russian",
      goHome: "Go to home",
      fieldSite: "FIELD SITE",
      homeTitle: "Read the city<br /><em>one square at a time.</em>",
      homeIntro: "Observe closely, wander intentionally, and collect the stories hiding in plain sight.",
      openCard: "OPEN TODAY'S CARD",
      currentLevel: "Current level progress",
      fieldworkStats: "Fieldwork statistics",
      squaresFound: "SQUARES<br />FOUND",
      researchPoints: "RESEARCH<br />POINTS",
      kmWalked: "KM<br />WALKED",
      activeSeries: "ACTIVE SERIES",
      streetReader: "Street Reader",
      viewCard: "VIEW CARD",
      foundationTasks: "FOUNDATIONS · 16 TASKS",
      seriesDescription: "Learn to notice what<br />makes a place feel alive.",
      researchPrompt: "RESEARCH PROMPT",
      researchQuote: "“What does this street invite you to do — and who might it leave out?”",
      randomTask: "GIVE ME A RANDOM TASK",
      seriesFoundations: "SERIES 01 · FOUNDATIONS",
      bingoIntro: "Complete any row, column, or diagonal to make bingo. Every square is a tiny urban research method.",
      currentBingoCount: "Current bingo count",
      bingos: "BINGOS",
      taskCategoryLegend: "Task category legend",
      architecture: "Architecture",
      culture: "Culture",
      ecology: "Ecology",
      movement: "Movement",
      bingoBoard: "City Bingo challenge card",
      shareProgress: "Share progress",
      fieldMap: "NEIGHBORHOOD FIELD MAP",
      mapTitle: "Choose a thread<br />through the city.",
      locate: "LOCATE",
      locating: "LOCATING…",
      located: "LOCATED",
      mapSvgTitle: "Schematic neighborhood exploration map",
      mapSvgDesc: "A playful diagram of streets, a river, parks, and suggested research stops.",
      mapPark: "COMMON PARK",
      mapQuay: "SOUTH QUAY",
      mapQuarter: "OLD QUARTER",
      routeList: "Suggested neighborhood research routes",
      routeMarketTitle: "The Social Street",
      routeMarketMeta: "1.2 km · People",
      routeParkTitle: "Green Interruptions",
      routeParkMeta: "1.8 km · Ecology",
      routeBridgeTitle: "Edges & Crossings",
      routeBridgeMeta: "2.4 km · Movement",
      routeMuseumTitle: "Memory Walk",
      routeMuseumMeta: "2.0 km · Culture",
      mapNote: "<strong>Field note:</strong> This is a prompt map, not turn-by-turn navigation. Stay aware of traffic, access rules, and your surroundings.",
      urbanArchive: "YOUR URBAN ARCHIVE",
      fieldPassport: "Field Passport",
      passportIntro: "A growing record of places noticed, questions asked, and patterns collected.",
      urbanResearcher: "URBAN RESEARCHER",
      achievements: "ACHIEVEMENTS",
      fieldBadges: "Field badges",
      collection: "COLLECTION",
      researchNotes: "Research notes",
      localOnly: "Your observations stay on this device.",
      backupHint: "Export a backup before clearing browser data or changing phones.",
      export: "EXPORT",
      import: "IMPORT",
      navHome: "HOME",
      navCard: "CARD",
      navMap: "MAP",
      navPassport: "PASSPORT",
      mainNavigation: "Main navigation",
      installBannerTitle: "Take City Bingo with you",
      installBannerText: "Install for fullscreen play and offline access.",
      install: "INSTALL",
      dismissInstall: "Dismiss install prompt",
      close: "CLOSE",
      closeTask: "Close task details",
      closeModal: "Close",
      whereExploring: "Where are you exploring?",
      cityDialogText: "City Bingo works anywhere. Name your current city or neighborhood to personalize your field passport.",
      cityLabel: "CITY OR NEIGHBORHOOD",
      cityPlaceholder: "e.g. Lisbon",
      saveFieldSite: "SAVE FIELD SITE",
      installCityBingo: "INSTALL CITY BINGO",
      addHomeScreen: "Add to your Home Screen",
      gotIt: "GOT IT",
      todayFieldwork: "TODAY'S FIELDWORK",
      level: "LEVEL",
      observer: "OBSERVER",
      explorer: "EXPLORER",
      researcher: "RESEARCHER",
      observationsLogged: (count, total) => `${count} of ${total} observations logged`,
      cardExplored: (percent) => `${percent}% of card explored`,
      connectedSquares: "Complete any 4 connected squares",
      completedLines: (count) => `${count} fieldwork ${count === 1 ? "line" : "lines"} completed`,
      completed: "Completed",
      notCompleted: "Not completed",
      unlocked: "UNLOCKED",
      locked: "Locked",
      archiveWaiting: "Your archive is waiting.",
      archiveWaitingText: "Complete a bingo square to add the first field note.",
      photoPrefix: "Photo",
      locationLogged: "Location observation logged",
      logged: "LOGGED",
      taskDetails: "Task details",
      time: "TIME",
      difficulty: "DIFFICULTY",
      reward: "REWARD",
      pointsShort: "pts",
      difficultyEasy: "Easy",
      difficultyMedium: "Medium",
      difficultyHard: "Hard",
      editObservation: "Edit your observation",
      logObservation: "Log your observation",
      fieldNote: "FIELD NOTE",
      notePlaceholder: "What did you notice? What question did it raise?",
      photoAttached: "PHOTO ATTACHED",
      addPhoto: "ADD A PHOTO",
      cameraLibrary: "Camera or library",
      checkedIn: "CHECKED IN",
      checkIn: "CHECK IN",
      approximateSaved: "Approximate location saved",
      optionalLocation: "Optional location evidence",
      updateObservation: "UPDATE OBSERVATION",
      completeFor: (points) => `COMPLETE FOR ${points} POINTS`,
      removeCompleted: "REMOVE FROM COMPLETED",
      locationUnavailable: "Location is not available on this device.",
      checkinReady: "Check-in ready to save.",
      permissionDenied: "Location permission was not granted.",
      addEvidence: "Add a field note, photo, or check-in first.",
      squareComplete: (points) => `Square complete · +${points} points`,
      squareBingo: (count) => `Square complete · ${count} ${count === 1 ? "bingo" : "bingos"}!`,
      observationUpdated: "Observation updated.",
      squareRemoved: "Square returned to the card.",
      shareText: (count, total, city, bingos) => `I explored ${count}/${total} City Bingo squares in ${city} and made ${bingos} ${bingos === 1 ? "bingo" : "bingos"}.`,
      shareTitle: "My City Bingo fieldwork",
      progressCopied: "Progress copied to the clipboard.",
      sharingUnavailable: "Sharing is not available right now.",
      mapLocated: "You are on the field map. Position is approximate.",
      archiveExported: "Field archive exported.",
      archiveImported: "Field archive imported.",
      invalidArchive: "That file is not a City Bingo archive.",
      citySet: (city) => `Field site set to ${city}.`,
      myCity: "MY CITY",
      installIosSteps: '<li><span>1</span><p>Open this page in <strong>Safari</strong>.</p></li><li><span>2</span><p>Tap the <strong>Share</strong> button in the toolbar.</p></li><li><span>3</span><p>Choose <strong>Add to Home Screen</strong>, then tap Add.</p></li>',
      installOtherTitle: "Install City Bingo",
      installOtherSteps: '<li><span>1</span><p>Open your browser\'s <strong>menu</strong>.</p></li><li><span>2</span><p>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p></li><li><span>3</span><p>Confirm to play fullscreen and keep the game available offline.</p></li>'
    },
    ru: {
      appTitle: "City Bingo — игра для исследования города",
      metaDescription: "City Bingo превращает исследование города в увлекательную полевую игру.",
      switchLanguage: "Переключить на английский",
      goHome: "На главную",
      fieldSite: "МЕСТО",
      homeTitle: "Читайте город<br /><em>по одной клетке.</em>",
      homeIntro: "Наблюдайте внимательнее, выбирайте необычные маршруты и собирайте истории, скрытые у всех на виду.",
      openCard: "ОТКРЫТЬ КАРТОЧКУ",
      currentLevel: "Прогресс текущего уровня",
      fieldworkStats: "Статистика исследования",
      squaresFound: "ЗАДАНИЙ<br />ВЫПОЛНЕНО",
      researchPoints: "ОЧКОВ<br />ИССЛЕДОВАНИЯ",
      kmWalked: "КМ<br />ПРОЙДЕНО",
      activeSeries: "АКТИВНАЯ СЕРИЯ",
      streetReader: "Читаем улицу",
      viewCard: "К КАРТОЧКЕ",
      foundationTasks: "ОСНОВЫ · 16 ЗАДАНИЙ",
      seriesDescription: "Учитесь замечать,<br />что оживляет город.",
      researchPrompt: "ВОПРОС ИССЛЕДОВАТЕЛЯ",
      researchQuote: "«К чему приглашает эта улица — и кого она может исключать?»",
      randomTask: "СЛУЧАЙНОЕ ЗАДАНИЕ",
      seriesFoundations: "СЕРИЯ 01 · ОСНОВЫ",
      bingoIntro: "Закройте строку, столбец или диагональ, чтобы собрать бинго. Каждая клетка — небольшой метод исследования города.",
      currentBingoCount: "Количество собранных бинго",
      bingos: "БИНГО",
      taskCategoryLegend: "Категории заданий",
      architecture: "Архитектура",
      culture: "Культура",
      ecology: "Экология",
      movement: "Мобильность",
      bingoBoard: "Карточка заданий City Bingo",
      shareProgress: "Поделиться прогрессом",
      fieldMap: "КАРТА ИССЛЕДОВАНИЯ РАЙОНА",
      mapTitle: "Выберите нить<br />сквозь город.",
      locate: "НАЙТИ МЕНЯ",
      locating: "ИЩЕМ…",
      located: "НАЙДЕНО",
      mapSvgTitle: "Схематичная карта исследования района",
      mapSvgDesc: "Игровая схема улиц, реки, парков и рекомендуемых исследовательских остановок.",
      mapPark: "ОБЩИЙ ПАРК",
      mapQuay: "ЮЖНАЯ НАБЕРЕЖНАЯ",
      mapQuarter: "СТАРЫЙ КВАРТАЛ",
      routeList: "Предлагаемые исследовательские маршруты",
      routeMarketTitle: "Общественная улица",
      routeMarketMeta: "1,2 км · Люди",
      routeParkTitle: "Зелёные паузы",
      routeParkMeta: "1,8 км · Экология",
      routeBridgeTitle: "Границы и переходы",
      routeBridgeMeta: "2,4 км · Мобильность",
      routeMuseumTitle: "Прогулка памяти",
      routeMuseumMeta: "2,0 км · Культура",
      mapNote: "<strong>Полевая заметка:</strong> это карта-подсказка, а не пошаговый навигатор. Следите за движением, правилами доступа и обстановкой вокруг.",
      urbanArchive: "ВАШ ГОРОДСКОЙ АРХИВ",
      fieldPassport: "Полевой паспорт",
      passportIntro: "Пополняемая коллекция замеченных мест, заданных вопросов и найденных закономерностей.",
      urbanResearcher: "ИССЛЕДОВАТЕЛЬ ГОРОДА",
      achievements: "ДОСТИЖЕНИЯ",
      fieldBadges: "Полевые значки",
      collection: "КОЛЛЕКЦИЯ",
      researchNotes: "Заметки исследователя",
      localOnly: "Ваши наблюдения хранятся на этом устройстве.",
      backupHint: "Экспортируйте копию перед очисткой данных браузера или сменой телефона.",
      export: "ЭКСПОРТ",
      import: "ИМПОРТ",
      navHome: "ГЛАВНАЯ",
      navCard: "КАРТОЧКА",
      navMap: "КАРТА",
      navPassport: "ПАСПОРТ",
      mainNavigation: "Основная навигация",
      installBannerTitle: "Возьмите City Bingo с собой",
      installBannerText: "Установите игру для полноэкранного режима и работы офлайн.",
      install: "УСТАНОВИТЬ",
      dismissInstall: "Закрыть предложение установки",
      close: "ЗАКРЫТЬ",
      closeTask: "Закрыть задание",
      closeModal: "Закрыть",
      whereExploring: "Где вы исследуете город?",
      cityDialogText: "City Bingo работает в любом месте. Укажите город или район, чтобы персонализировать полевой паспорт.",
      cityLabel: "ГОРОД ИЛИ РАЙОН",
      cityPlaceholder: "например, Москва",
      saveFieldSite: "СОХРАНИТЬ МЕСТО",
      installCityBingo: "УСТАНОВИТЬ CITY BINGO",
      addHomeScreen: "Добавить на экран «Домой»",
      gotIt: "ПОНЯТНО",
      todayFieldwork: "СЕГОДНЯШНЕЕ ИССЛЕДОВАНИЕ",
      level: "УРОВЕНЬ",
      observer: "НАБЛЮДАТЕЛЬ",
      explorer: "ИССЛЕДОВАТЕЛЬ",
      researcher: "УРБАНИСТ",
      observationsLogged: (count, total) => `Записано наблюдений: ${count} из ${total}`,
      cardExplored: (percent) => `Карточка исследована на ${percent}%`,
      connectedSquares: "Закройте любые 4 связанные клетки",
      completedLines: (count) => `Завершено линий: ${count}`,
      completed: "Выполнено",
      notCompleted: "Не выполнено",
      unlocked: "ОТКРЫТО",
      locked: "Закрыто",
      archiveWaiting: "Ваш архив ждёт первой записи.",
      archiveWaitingText: "Выполните задание, чтобы добавить первую полевую заметку.",
      photoPrefix: "Фото",
      locationLogged: "Наблюдение с геометкой",
      logged: "ЗАПИСАНО",
      taskDetails: "Описание задания",
      time: "ВРЕМЯ",
      difficulty: "СЛОЖНОСТЬ",
      reward: "НАГРАДА",
      pointsShort: "очк.",
      difficultyEasy: "Легко",
      difficultyMedium: "Средне",
      difficultyHard: "Сложно",
      editObservation: "Изменить наблюдение",
      logObservation: "Записать наблюдение",
      fieldNote: "ПОЛЕВАЯ ЗАМЕТКА",
      notePlaceholder: "Что вы заметили? Какой вопрос возник?",
      photoAttached: "ФОТО ПРИКРЕПЛЕНО",
      addPhoto: "ДОБАВИТЬ ФОТО",
      cameraLibrary: "Камера или медиатека",
      checkedIn: "ГЕОМЕТКА ЕСТЬ",
      checkIn: "ДОБАВИТЬ ГЕОМЕТКУ",
      approximateSaved: "Приблизительное место сохранено",
      optionalLocation: "Необязательная геометка",
      updateObservation: "ОБНОВИТЬ НАБЛЮДЕНИЕ",
      completeFor: (points) => `ВЫПОЛНИТЬ ЗА ${points} ОЧКОВ`,
      removeCompleted: "УБРАТЬ ИЗ ВЫПОЛНЕННЫХ",
      locationUnavailable: "Геолокация недоступна на этом устройстве.",
      checkinReady: "Геометка готова к сохранению.",
      permissionDenied: "Нет разрешения на доступ к геолокации.",
      addEvidence: "Добавьте заметку, фото или геометку.",
      squareComplete: (points) => `Клетка выполнена · +${points} очков`,
      squareBingo: (count) => `Клетка выполнена · собрано бинго: ${count}!`,
      observationUpdated: "Наблюдение обновлено.",
      squareRemoved: "Клетка снова доступна в карточке.",
      shareText: (count, total, city, bingos) => `Я исследовал(а) ${count} из ${total} клеток City Bingo в городе ${city} и собрал(а) бинго: ${bingos}.`,
      shareTitle: "Моё городское исследование City Bingo",
      progressCopied: "Результат скопирован.",
      sharingUnavailable: "Сейчас поделиться результатом не получится.",
      mapLocated: "Вы отмечены на полевой карте. Положение приблизительное.",
      archiveExported: "Полевой архив экспортирован.",
      archiveImported: "Полевой архив импортирован.",
      invalidArchive: "Этот файл не является архивом City Bingo.",
      citySet: (city) => `Место исследования: ${city}.`,
      myCity: "МОЙ ГОРОД",
      installIosSteps: '<li><span>1</span><p>Откройте эту страницу в <strong>Safari</strong>.</p></li><li><span>2</span><p>Нажмите кнопку <strong>«Поделиться»</strong> на панели инструментов.</p></li><li><span>3</span><p>Выберите <strong>«На экран Домой»</strong>, затем нажмите «Добавить».</p></li>',
      installOtherTitle: "Установить City Bingo",
      installOtherSteps: '<li><span>1</span><p>Откройте <strong>меню</strong> браузера.</p></li><li><span>2</span><p>Выберите <strong>«Установить приложение»</strong> или <strong>«Добавить на главный экран»</strong>.</p></li><li><span>3</span><p>Подтвердите установку, чтобы играть на весь экран и офлайн.</p></li>'
    }
  };

  const TASKS = [
    {
      id: "facade-detail",
      title: "Find a façade surprise",
      category: "architecture",
      icon: "building",
      prompt: "Find one building detail you would miss at walking speed. What does it reveal about craft, age, or status?",
      ru: {
        title: "Найдите сюрприз на фасаде",
        prompt: "Найдите деталь здания, которую легко пропустить на ходу. Что она говорит о ремесле, возрасте или статусе места?"
      },
      time: "15 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.2
    },
    {
      id: "follow-a-scent",
      title: "Follow a local scent",
      category: "culture",
      icon: "steam",
      prompt: "Let a smell guide you to a bakery, market, kitchen, garden, or workshop. Describe the memory it creates.",
      ru: {
        title: "Следуйте за местным ароматом",
        prompt: "Пусть запах приведёт вас к пекарне, рынку, кухне, саду или мастерской. Опишите воспоминание, которое он вызывает."
      },
      time: "20 min",
      difficulty: "Easy",
      points: 20,
      distance: 0.3
    },
    {
      id: "shade-map",
      title: "Map a patch of shade",
      category: "ecology",
      icon: "leaf",
      prompt: "Compare a shaded and unshaded spot. Who uses each one, and how does shade change the life of the street?",
      ru: {
        title: "Составьте карту тени",
        prompt: "Сравните место в тени и на солнце. Кто пользуется каждым из них и как тень меняет жизнь улицы?"
      },
      time: "20 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.3
    },
    {
      id: "one-kilometer",
      title: "Walk one curious kilometer",
      category: "movement",
      icon: "walk",
      prompt: "Walk one kilometer without choosing the fastest route. Note three moments that made movement easier or harder.",
      ru: {
        title: "Пройдите любопытный километр",
        prompt: "Пройдите километр, не выбирая самый быстрый путь. Отметьте три момента, которые упростили или затруднили движение."
      },
      time: "25 min",
      difficulty: "Easy",
      points: 35,
      distance: 1
    },
    {
      id: "desire-path",
      title: "Spot a desire path",
      category: "movement",
      icon: "route",
      prompt: "Find a shortcut made by repeated use rather than formal planning. What does it say about the route people actually need?",
      ru: {
        title: "Найдите народную тропу",
        prompt: "Найдите короткий путь, созданный людьми, а не планировщиками. Что он говорит о маршруте, который действительно нужен?"
      },
      time: "15 min",
      difficulty: "Medium",
      points: 25,
      distance: 0.3
    },
    {
      id: "taste-place",
      title: "Taste the place",
      category: "culture",
      icon: "bowl",
      prompt: "Try a food or drink connected to this place. Ask where its ingredients, recipe, or name comes from.",
      ru: {
        title: "Попробуйте место на вкус",
        prompt: "Попробуйте блюдо или напиток, связанный с этим местом. Узнайте, откуда появились его ингредиенты, рецепт или название."
      },
      time: "30 min",
      difficulty: "Medium",
      points: 30,
      distance: 0.2
    },
    {
      id: "public-life",
      title: "Observe public life",
      category: "culture",
      icon: "people",
      prompt: "Sit in one public place for ten minutes. Count what people do, not who they are. What behavior does the space support?",
      ru: {
        title: "Понаблюдайте за городской жизнью",
        prompt: "Проведите десять минут в общественном месте. Считайте действия людей, а не самих людей. Какое поведение поддерживает это пространство?"
      },
      time: "15 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.1
    },
    {
      id: "high-view",
      title: "Find a high view",
      category: "architecture",
      icon: "eye",
      prompt: "Find a legal, publicly accessible elevated view. Identify one pattern that is invisible from street level.",
      ru: {
        title: "Найдите вид сверху",
        prompt: "Найдите легальную и общедоступную точку обзора сверху. Определите закономерность, которую не видно с уровня улицы."
      },
      time: "35 min",
      difficulty: "Medium",
      points: 35,
      distance: 0.7
    },
    {
      id: "second-life",
      title: "Find a building’s second life",
      category: "architecture",
      icon: "history",
      prompt: "Find a building used for something different from its original purpose. Which traces of the earlier life remain?",
      ru: {
        title: "Найдите вторую жизнь здания",
        prompt: "Найдите здание, которое теперь используется не по первоначальному назначению. Какие следы его прошлой жизни сохранились?"
      },
      time: "25 min",
      difficulty: "Medium",
      points: 30,
      distance: 0.5
    },
    {
      id: "wild-pocket",
      title: "Find a wild pocket",
      category: "ecology",
      icon: "flower",
      prompt: "Locate a tiny habitat: a verge, wall crack, rain garden, or untended corner. List the living things sharing it.",
      ru: {
        title: "Найдите уголок дикой природы",
        prompt: "Найдите крошечную среду обитания: обочину, трещину в стене, дождевой сад или заброшенный уголок. Перечислите его обитателей."
      },
      time: "20 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.4
    },
    {
      id: "culture-door",
      title: "Open a culture door",
      category: "culture",
      icon: "museum",
      prompt: "Visit a museum, library, gallery, archive, or community space. Find one object or story that changes how you read the area.",
      ru: {
        title: "Откройте дверь в культуру",
        prompt: "Посетите музей, библиотеку, галерею, архив или общественный центр. Найдите предмет или историю, которые изменят ваше восприятие района."
      },
      time: "45 min",
      difficulty: "Medium",
      points: 40,
      distance: 0.5
    },
    {
      id: "access-audit",
      title: "Audit an accessible route",
      category: "movement",
      icon: "access",
      prompt: "Follow one block while imagining wheels, a cane, low vision, or limited stamina. Record one support and one barrier.",
      ru: {
        title: "Проверьте доступный маршрут",
        prompt: "Пройдите квартал, представляя коляску, трость, слабое зрение или ограниченную выносливость. Запишите одно удобство и один барьер."
      },
      time: "25 min",
      difficulty: "Medium",
      points: 35,
      distance: 0.5
    },
    {
      id: "street-type",
      title: "Collect street typography",
      category: "architecture",
      icon: "type",
      prompt: "Photograph or sketch three letterforms from signs, plaques, or shopfronts. What era or identity do they communicate?",
      ru: {
        title: "Соберите уличную типографику",
        prompt: "Сфотографируйте или зарисуйте три шрифта с вывесок, табличек или витрин. Какую эпоху или идентичность они передают?"
      },
      time: "20 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.4
    },
    {
      id: "sound-map",
      title: "Draw a sound map",
      category: "ecology",
      icon: "sound",
      prompt: "Stand still for two minutes and map sounds by direction and distance. Which are biological, mechanical, and human?",
      ru: {
        title: "Нарисуйте карту звуков",
        prompt: "Постойте неподвижно две минуты и нанесите звуки на карту по направлению и расстоянию. Какие из них природные, механические и человеческие?"
      },
      time: "15 min",
      difficulty: "Easy",
      points: 25,
      distance: 0.1
    },
    {
      id: "water-trace",
      title: "Trace the rain",
      category: "ecology",
      icon: "water",
      prompt: "Follow where rainwater would travel from roof to drain, soil, or river. Where is water absorbed, delayed, or wasted?",
      ru: {
        title: "Проследите путь дождя",
        prompt: "Проследите путь дождевой воды от крыши к водостоку, почве или реке. Где вода впитывается, задерживается или теряется?"
      },
      time: "25 min",
      difficulty: "Medium",
      points: 30,
      distance: 0.4
    },
    {
      id: "last-mile",
      title: "Test the last mile",
      category: "movement",
      icon: "transit",
      prompt: "Travel from a transit stop to a useful destination. Time the walk and note crossings, shelter, seating, and wayfinding.",
      ru: {
        title: "Проверьте последний километр",
        prompt: "Пройдите от остановки транспорта до полезной точки. Засеките время и оцените переходы, укрытия, места для отдыха и навигацию."
      },
      time: "35 min",
      difficulty: "Hard",
      points: 40,
      distance: 1.2
    }
  ];

  const BINGO_LINES = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
    [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
    [0, 5, 10, 15], [3, 6, 9, 12]
  ];

  const ROUTES = {
    market: {
      number: "01",
      meta: "THE SOCIAL STREET · 25 MIN",
      detail: "Follow the busiest path. Notice where people choose to stop.",
      ru: {
        meta: "ОБЩЕСТВЕННАЯ УЛИЦА · 25 МИН",
        detail: "Следуйте по самому оживлённому пути. Замечайте, где люди решают остановиться."
      }
    },
    park: {
      number: "02",
      meta: "GREEN INTERRUPTIONS · 35 MIN",
      detail: "Link three planted spaces and compare their shade, sound, and biodiversity.",
      ru: {
        meta: "ЗЕЛЁНЫЕ ПАУЗЫ · 35 МИН",
        detail: "Соедините три озеленённых места и сравните их тень, звуки и биоразнообразие."
      }
    },
    bridge: {
      number: "03",
      meta: "EDGES & CROSSINGS · 45 MIN",
      detail: "Cross a physical boundary and watch how access, pace, and character change.",
      ru: {
        meta: "ГРАНИЦЫ И ПЕРЕХОДЫ · 45 МИН",
        detail: "Пересеките физическую границу и проследите, как меняются доступность, темп и характер места."
      }
    },
    museum: {
      number: "04",
      meta: "MEMORY WALK · 40 MIN",
      detail: "Connect a cultural institution to traces of memory found in the surrounding streets.",
      ru: {
        meta: "ПРОГУЛКА ПАМЯТИ · 40 МИН",
        detail: "Свяжите культурное учреждение со следами памяти на окружающих улицах."
      }
    }
  };

  const ACHIEVEMENTS = [
    { id: "first", title: "First Look", detail: "Log 1 task", ru: { title: "Первый взгляд", detail: "Запишите 1 задание" }, icon: "eye", color: "#f2b632", test: (s) => completedIds(s).length >= 1 },
    { id: "four-ways", title: "Four Ways", detail: "Try every category", ru: { title: "Четыре пути", detail: "Попробуйте все категории" }, icon: "compass", color: "#4f7f8f", test: (s) => new Set(completedIds(s).map((id) => taskById(id).category)).size === 4 },
    { id: "bingo", title: "Line Reader", detail: "Make 1 bingo", ru: { title: "Читатель линий", detail: "Соберите 1 бинго" }, icon: "grid", color: "#e66f4d", test: (s) => getBingoLines(s).length >= 1 },
    { id: "witness", title: "Street Witness", detail: "Attach 3 photos", ru: { title: "Свидетель улицы", detail: "Добавьте 3 фото" }, icon: "camera", color: "#7e6f8f", test: (s) => completedEntries(s).filter((entry) => entry.photo).length >= 3 },
    { id: "grounded", title: "Ground Truth", detail: "Use a check-in", ru: { title: "Проверка на месте", detail: "Добавьте геометку" }, icon: "pin", color: "#6b8761", test: (s) => completedEntries(s).some((entry) => entry.location) },
    { id: "full-card", title: "City Reader", detail: "Complete the card", ru: { title: "Читатель города", detail: "Заполните карточку" }, icon: "star", color: "#f2b632", test: (s) => completedIds(s).length === TASKS.length }
  ];

  const defaultState = {
    version: 1,
    city: "My City",
    lang: navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en",
    completed: {},
    lastScreen: "home",
    dismissedInstall: false
  };

  let state = loadState();
  let activeTaskId = null;
  let activeDraft = { photo: "", location: null };
  let deferredInstallPrompt = null;
  let toastTimer = null;

  const els = {
    board: document.getElementById("bingoBoard"),
    taskDialog: document.getElementById("taskDialog"),
    taskSheet: document.getElementById("taskSheet"),
    cityDialog: document.getElementById("cityDialog"),
    cityForm: document.getElementById("cityForm"),
    cityInput: document.getElementById("cityInput"),
    installBanner: document.getElementById("installBanner"),
    installDialog: document.getElementById("installDialog"),
    installSteps: document.getElementById("installSteps"),
    installDialogTitle: document.getElementById("installDialogTitle"),
    toast: document.getElementById("toast")
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || saved.version !== 1 || typeof saved.completed !== "object") return { ...defaultState };
      const merged = { ...defaultState, ...saved };
      if (!["en", "ru"].includes(merged.lang)) merged.lang = defaultState.lang;
      return merged;
    } catch (error) {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function t(key, ...args) {
    const value = TRANSLATIONS[state.lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
    return typeof value === "function" ? value(...args) : value;
  }

  function localized(item, field) {
    return state.lang === "ru" && item.ru?.[field] ? item.ru[field] : item[field];
  }

  function localizedTaskTime(task) {
    return state.lang === "ru" ? task.time.replace(" min", " мин") : task.time;
  }

  function localizedDifficulty(task) {
    const keys = { Easy: "difficultyEasy", Medium: "difficultyMedium", Hard: "difficultyHard" };
    return t(keys[task.difficulty] || "difficultyMedium");
  }

  function completedIds(targetState = state) {
    return Object.keys(targetState.completed || {}).filter((id) => taskById(id));
  }

  function completedEntries(targetState = state) {
    return completedIds(targetState).map((id) => targetState.completed[id]);
  }

  function taskById(id) {
    return TASKS.find((task) => task.id === id);
  }

  function getPoints(targetState = state) {
    return completedIds(targetState).reduce((sum, id) => sum + taskById(id).points, 0);
  }

  function getDistance(targetState = state) {
    return completedIds(targetState).reduce((sum, id) => sum + taskById(id).distance, 0);
  }

  function getLevel(targetState = state) {
    const count = completedIds(targetState).length;
    if (count >= 12) return { number: 3, name: t("researcher"), floor: 12, ceiling: 16 };
    if (count >= 5) return { number: 2, name: t("explorer"), floor: 5, ceiling: 12 };
    return { number: 1, name: t("observer"), floor: 0, ceiling: 5 };
  }

  function getBingoLines(targetState = state) {
    const complete = new Set(completedIds(targetState));
    return BINGO_LINES.filter((line) => line.every((index) => complete.has(TASKS[index].id)));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function iconSvg(name, className = "") {
    const paths = {
      building: '<path d="M4 21V6l8-3v18M12 9h8v12M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2M2 21h20"/>',
      steam: '<path d="M5 10h14l-1 8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3ZM8 6c-2-2 2-2 0-4M12 6c-2-2 2-2 0-4M16 6c-2-2 2-2 0-4M19 12h1a2 2 0 0 1 0 4h-2"/>',
      leaf: '<path d="M20 4C11 4 5 9 5 16c0 2 1 4 3 5 1-8 6-12 12-17Z"/><path d="M8 21c3-5 7-8 12-10"/>',
      walk: '<circle cx="13" cy="4" r="2"/><path d="m10 21 2-7-3-3 2-4 4 3 3 1M15 21l-2-7M9 11l-4 4"/>',
      route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M7.5 17.5c5-3-2-6 3-8s4 2 6-3"/>',
      bowl: '<path d="M4 10h16a8 8 0 0 1-16 0ZM7 20h10M12 6V2M8 7 6 4M16 7l2-3"/>',
      people: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 21c0-5 2-8 6-8s6 3 6 8M14 15c4-1 7 2 7 6"/>',
      eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
      history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
      flower: '<circle cx="12" cy="12" r="2"/><circle cx="12" cy="6" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/>',
      museum: '<path d="m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18v3H3Z"/>',
      access: '<circle cx="12" cy="4" r="2"/><path d="M9 8h6l2 5h-5l-2 6M10 11a5 5 0 1 0 5 6M17 13l3 7"/>',
      type: '<path d="M4 5V3h16v2M12 3v18M8 21h8"/>',
      sound: '<path d="M4 10v4h4l5 4V6L8 10ZM17 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
      water: '<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M9 16a3 3 0 0 0 3 3"/>',
      transit: '<rect x="5" y="3" width="14" height="16" rx="3"/><path d="M5 10h14M8 22l2-3M16 22l-2-3M8 7h1M15 7h1M8 15h1M15 15h1"/>',
      compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5Z"/>',
      grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
      camera: '<path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/>',
      pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      star: '<path d="m12 2 3 6 7 .9-5 4.7 1.4 6.8L12 17l-6.4 3.4L7 13.6 2 8.9 9 8Z"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>'
    };
    const path = paths[name] || paths.compass;
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = state.lang;
    document.title = t("appTitle");
    document.querySelector('meta[name="description"]').content = t("metaDescription");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = t(element.dataset.i18nHtml);
    });

    const languageToggle = document.getElementById("languageToggle");
    languageToggle.textContent = state.lang === "ru" ? "EN" : "RU";
    languageToggle.setAttribute("aria-label", t("switchLanguage"));
    document.querySelector(".brand").setAttribute("aria-label", t("goHome"));
    document.querySelector(".hero-orbit").setAttribute("aria-label", t("currentLevel"));
    document.querySelector(".stats-strip").setAttribute("aria-label", t("fieldworkStats"));
    document.querySelector(".card-stamp").setAttribute("aria-label", t("currentBingoCount"));
    document.querySelector(".category-legend").setAttribute("aria-label", t("taskCategoryLegend"));
    els.board.setAttribute("aria-label", t("bingoBoard"));
    document.getElementById("shareCardButton").setAttribute("aria-label", t("shareProgress"));
    document.querySelector(".route-list").setAttribute("aria-label", t("routeList"));
    document.querySelector(".bottom-nav").setAttribute("aria-label", t("mainNavigation"));
    document.getElementById("dismissInstall").setAttribute("aria-label", t("dismissInstall"));
    document.querySelector(".sheet-handle-row button").setAttribute("aria-label", t("closeTask"));
    document.querySelectorAll(".modal-close").forEach((button) => button.setAttribute("aria-label", t("closeModal")));

    document.getElementById("mapSvgTitle").textContent = t("mapSvgTitle");
    document.getElementById("mapSvgDesc").textContent = t("mapSvgDesc");
    document.getElementById("mapLabelPark").textContent = t("mapPark");
    document.getElementById("mapLabelQuay").textContent = t("mapQuay");
    document.getElementById("mapLabelQuarter").textContent = t("mapQuarter");
    document.querySelector(".passport-monogram").textContent = state.lang === "ru" ? "ИГ" : "UR";
    els.cityInput.placeholder = t("cityPlaceholder");

    const locale = state.lang === "ru" ? "ru-RU" : "en-US";
    const dateLabel = new Intl.DateTimeFormat(locale, { weekday: "long", month: "short", day: "numeric" }).format(new Date());
    document.getElementById("todayLabel").textContent = `${dateLabel} · ${t("todayFieldwork")}`;

    const mapLocated = !document.getElementById("mapYou").hasAttribute("hidden");
    document.getElementById("locateButtonLabel").textContent = mapLocated ? t("located") : t("locate");
    const activeRoute = document.querySelector(".route-item.is-active")?.dataset.route || "market";
    selectRoute(activeRoute);
    renderInstallInstructions();
  }

  function renderBoard() {
    const winningIndexes = new Set(getBingoLines().flat());
    els.board.innerHTML = TASKS.map((task, index) => {
      const complete = Boolean(state.completed[task.id]);
      const title = localized(task, "title");
      return `
        <button
          class="bingo-cell${complete ? " is-complete" : ""}${winningIndexes.has(index) ? " is-bingo" : ""}"
          type="button"
          role="gridcell"
          data-task-id="${task.id}"
          style="--cell-color:${CATEGORY_COLORS[task.category]}"
          aria-label="${escapeHtml(title)}. ${complete ? t("completed") : t("notCompleted")}."
        >
          <span class="cell-top">
            ${iconSvg(task.icon, "cell-icon")}
            <span class="cell-index">${String(index + 1).padStart(2, "0")}</span>
          </span>
          <span class="cell-title">${escapeHtml(title)}</span>
          <span class="cell-category" aria-hidden="true"></span>
          <span class="completion-check" aria-hidden="true">${iconSvg("check")}</span>
        </button>
      `;
    }).join("");
  }

  function renderAchievements() {
    const grid = document.getElementById("achievementGrid");
    const unlocked = ACHIEVEMENTS.filter((achievement) => achievement.test(state));
    document.getElementById("achievementCount").textContent = `${unlocked.length} / ${ACHIEVEMENTS.length}`;
    grid.innerHTML = ACHIEVEMENTS.map((achievement) => {
      const isUnlocked = achievement.test(state);
      const title = localized(achievement, "title");
      const detail = localized(achievement, "detail");
      return `
        <article class="achievement${isUnlocked ? "" : " is-locked"}" aria-label="${escapeHtml(title)}. ${isUnlocked ? t("unlocked") : t("locked")}.">
          <span class="badge-art" style="--badge-color:${achievement.color}">${iconSvg(achievement.icon)}</span>
          <strong>${escapeHtml(title)}</strong>
          <small>${isUnlocked ? t("unlocked") : escapeHtml(detail).toUpperCase()}</small>
        </article>
      `;
    }).join("");
  }

  function renderNotes() {
    const list = document.getElementById("notesList");
    const items = completedIds()
      .map((id) => ({ task: taskById(id), entry: state.completed[id] }))
      .sort((a, b) => new Date(b.entry.date) - new Date(a.entry.date));

    if (!items.length) {
      list.innerHTML = `<div class="empty-notes"><strong>${t("archiveWaiting")}</strong><p>${t("archiveWaitingText")}</p></div>`;
      return;
    }

    list.innerHTML = items.map(({ task, entry }) => `
      <article class="note-item">
        <span class="note-symbol">${iconSvg(task.icon)}</span>
        <div>
          <strong>${escapeHtml(localized(task, "title"))}</strong>
          <p>${escapeHtml(entry.note || (entry.photo ? `${t("photoPrefix")}: ${entry.photo}` : t("locationLogged")))}</p>
        </div>
        <time datetime="${escapeHtml(entry.date)}">${formatShortDate(entry.date)}</time>
      </article>
    `).join("");
  }

  function formatShortDate(dateString) {
    try {
      const locale = state.lang === "ru" ? "ru-RU" : "en-US";
      return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(new Date(dateString)).toUpperCase();
    } catch (error) {
      return t("logged");
    }
  }

  function renderSummary() {
    const count = completedIds().length;
    const points = getPoints();
    const distance = getDistance();
    const level = getLevel();
    const bingos = getBingoLines().length;
    const levelFraction = Math.min(1, (count - level.floor) / Math.max(1, level.ceiling - level.floor));
    const cardFraction = count / TASKS.length;

    document.getElementById("completedCount").textContent = count;
    document.getElementById("pointsCount").textContent = points;
    document.getElementById("distanceCount").textContent = distance.toFixed(1);
    document.getElementById("levelNumber").textContent = String(level.number).padStart(2, "0");
    document.getElementById("levelName").textContent = level.name;
    document.getElementById("levelProgressRing").style.strokeDashoffset = String(408.4 * (1 - levelFraction));
    document.getElementById("miniProgress").style.width = `${cardFraction * 100}%`;
    document.getElementById("seriesProgressLabel").textContent = t("observationsLogged", count, TASKS.length);
    document.getElementById("bingoCount").textContent = bingos;
    document.getElementById("boardProgressLabel").textContent = t("cardExplored", Math.round(cardFraction * 100));
    document.getElementById("nextBingoLabel").textContent = bingos ? t("completedLines", bingos) : t("connectedSquares");
    document.getElementById("passportRank").textContent = `${level.name} · ${t("level")} ${String(level.number).padStart(2, "0")}`;
    document.getElementById("passportPoints").textContent = String(points).padStart(4, "0");
  }

  function renderCity() {
    const city = state.city || "My City";
    const displayCity = city === "My City" ? t("myCity") : city.toUpperCase();
    document.getElementById("currentCityLabel").textContent = displayCity;
    document.getElementById("passportCity").textContent = displayCity;
    els.cityInput.value = city === "My City" ? "" : city;
  }

  function renderAll() {
    applyStaticTranslations();
    renderBoard();
    renderSummary();
    renderCity();
    renderAchievements();
    renderNotes();
  }

  function navigate(screenName, save = true) {
    const screen = document.querySelector(`[data-screen="${screenName}"]`);
    if (!screen) return;

    document.querySelectorAll(".screen").forEach((item) => {
      const active = item === screen;
      item.hidden = !active;
      item.classList.toggle("is-active", active);
    });
    document.querySelectorAll(".nav-button").forEach((button) => {
      const active = button.dataset.screenTarget === screenName;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    if (save) {
      state.lastScreen = screenName;
      saveState();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openTask(taskId) {
    const task = taskById(taskId);
    if (!task) return;
    activeTaskId = taskId;
    const entry = state.completed[taskId] || {};
    activeDraft = { photo: entry.photo || "", location: entry.location || null };
    const isComplete = Boolean(state.completed[taskId]);
    const title = localized(task, "title");
    const prompt = localized(task, "prompt");

    els.taskSheet.style.setProperty("--task-color", CATEGORY_COLORS[task.category]);
    els.taskSheet.innerHTML = `
      <div class="task-sheet-heading">
        <span class="task-number">${String(TASKS.indexOf(task) + 1).padStart(2, "0")}</span>
        <div>
          <span class="task-category-label"><i></i>${t(task.category)}</span>
          <h2>${escapeHtml(title)}</h2>
        </div>
      </div>
      <p class="task-prompt">${escapeHtml(prompt)}</p>
      <div class="task-meta" aria-label="${t("taskDetails")}">
        <div><small>${t("time")}</small><strong>${localizedTaskTime(task)}</strong></div>
        <div><small>${t("difficulty")}</small><strong>${localizedDifficulty(task)}</strong></div>
        <div><small>${t("reward")}</small><strong>${task.points} ${t("pointsShort")}</strong></div>
      </div>
      <div class="task-log">
        <h3>${isComplete ? t("editObservation") : t("logObservation")}</h3>
        <label for="taskNote">${t("fieldNote")}</label>
        <textarea id="taskNote" maxlength="500" placeholder="${t("notePlaceholder")}">${escapeHtml(entry.note || "")}</textarea>
        <div class="evidence-row">
          <label class="photo-upload${activeDraft.photo ? " has-photo" : ""}" for="taskPhoto" id="photoUploadLabel">
            ${iconSvg("camera")}
            <span><strong>${activeDraft.photo ? t("photoAttached") : t("addPhoto")}</strong><small id="photoFileName">${escapeHtml(activeDraft.photo || t("cameraLibrary"))}</small></span>
          </label>
          <input id="taskPhoto" type="file" accept="image/*" capture="environment" hidden />
          <button class="checkin-button${activeDraft.location ? " has-location" : ""}" id="taskCheckin" type="button">
            ${iconSvg("pin")}
            <span><strong>${activeDraft.location ? t("checkedIn") : t("checkIn")}</strong><small>${activeDraft.location ? t("approximateSaved") : t("optionalLocation")}</small></span>
          </button>
        </div>
        <button class="primary-button task-complete-button${isComplete ? " is-complete" : ""}" id="completeTaskButton" type="button">
          ${isComplete ? `${iconSvg("check")} ${t("updateObservation")}` : t("completeFor", task.points)}
        </button>
        ${isComplete ? `<button class="remove-completion" id="removeCompletionButton" type="button">${t("removeCompleted")}</button>` : ""}
      </div>
    `;

    document.getElementById("taskPhoto").addEventListener("change", handlePhotoSelection);
    document.getElementById("taskCheckin").addEventListener("click", handleTaskCheckin);
    document.getElementById("completeTaskButton").addEventListener("click", completeActiveTask);
    document.getElementById("removeCompletionButton")?.addEventListener("click", removeActiveCompletion);
    els.taskDialog.showModal();
  }

  function handlePhotoSelection(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    activeDraft.photo = file.name.slice(0, 80);
    const label = document.getElementById("photoUploadLabel");
    label.classList.add("has-photo");
    label.querySelector("strong").textContent = t("photoAttached");
    document.getElementById("photoFileName").textContent = activeDraft.photo;
  }

  function handleTaskCheckin() {
    const button = document.getElementById("taskCheckin");
    if (!navigator.geolocation) {
      showToast(t("locationUnavailable"));
      return;
    }
    button.classList.add("is-locating");
    button.querySelector("strong").textContent = t("locating");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        activeDraft.location = {
          lat: Number(position.coords.latitude.toFixed(3)),
          lng: Number(position.coords.longitude.toFixed(3))
        };
        button.classList.remove("is-locating");
        button.classList.add("has-location");
        button.querySelector("strong").textContent = t("checkedIn");
        button.querySelector("small").textContent = t("approximateSaved");
        showToast(t("checkinReady"));
      },
      () => {
        button.classList.remove("is-locating");
        button.querySelector("strong").textContent = t("checkIn");
        showToast(t("permissionDenied"));
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }

  function completeActiveTask() {
    const task = taskById(activeTaskId);
    if (!task) return;
    const noteInput = document.getElementById("taskNote");
    const note = noteInput.value.trim();
    if (!note && !activeDraft.photo && !activeDraft.location) {
      showToast(t("addEvidence"));
      noteInput.focus();
      return;
    }

    const wasComplete = Boolean(state.completed[task.id]);
    state.completed[task.id] = {
      note,
      photo: activeDraft.photo,
      location: activeDraft.location,
      date: new Date().toISOString()
    };
    saveState();
    renderAll();
    els.taskDialog.close();

    if (!wasComplete) {
      const bingos = getBingoLines().length;
      showToast(bingos ? t("squareBingo", bingos) : t("squareComplete", task.points));
      if (navigator.vibrate) navigator.vibrate([35, 40, 55]);
    } else {
      showToast(t("observationUpdated"));
    }
  }

  function removeActiveCompletion() {
    if (!activeTaskId || !state.completed[activeTaskId]) return;
    delete state.completed[activeTaskId];
    saveState();
    renderAll();
    els.taskDialog.close();
    showToast(t("squareRemoved"));
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2800);
  }

  function showRandomTask() {
    const remaining = TASKS.filter((task) => !state.completed[task.id]);
    const pool = remaining.length ? remaining : TASKS;
    openTask(pool[Math.floor(Math.random() * pool.length)].id);
  }

  async function shareProgress() {
    const count = completedIds().length;
    const bingos = getBingoLines().length;
    const city = state.city === "My City" ? t("myCity").toLocaleLowerCase(state.lang === "ru" ? "ru-RU" : "en-US") : state.city;
    const text = t("shareText", count, TASKS.length, city, bingos);
    const shareData = { title: t("shareTitle"), text, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        showToast(t("progressCopied"));
      } else {
        showToast(text);
      }
    } catch (error) {
      if (error.name !== "AbortError") showToast(t("sharingUnavailable"));
    }
  }

  function selectRoute(routeId) {
    const route = ROUTES[routeId];
    if (!route) return;
    const copy = state.lang === "ru" ? route.ru : route;
    document.querySelectorAll(".route-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === routeId));
    document.querySelectorAll(".map-stop").forEach((item) => item.classList.toggle("is-active", item.dataset.mapStop === routeId));
    document.getElementById("mapDetail").innerHTML = `
      <span class="map-detail-number">${route.number}</span>
      <div><small>${escapeHtml(copy.meta)}</small><strong>${escapeHtml(copy.detail)}</strong></div>
    `;
  }

  function locateOnMap() {
    const button = document.getElementById("locateButton");
    const label = document.getElementById("locateButtonLabel");
    if (!navigator.geolocation) {
      showToast(t("locationUnavailable"));
      return;
    }
    button.classList.add("is-locating");
    label.textContent = t("locating");
    navigator.geolocation.getCurrentPosition(
      () => {
        button.classList.remove("is-locating");
        label.textContent = t("located");
        document.getElementById("mapYou").removeAttribute("hidden");
        showToast(t("mapLocated"));
      },
      () => {
        button.classList.remove("is-locating");
        label.textContent = t("locate");
        showToast(t("permissionDenied"));
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }

  function exportData() {
    const payload = {
      app: "City Bingo",
      exportedAt: new Date().toISOString(),
      data: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    const citySlug = state.city.toLocaleLowerCase(state.lang === "ru" ? "ru-RU" : "en-US").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
    anchor.download = `city-bingo-${citySlug || "fieldwork"}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    showToast(t("archiveExported"));
  }

  async function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      const imported = payload?.data || payload;
      if (imported?.version !== 1 || typeof imported.completed !== "object" || typeof imported.city !== "string") throw new Error("Invalid archive");
      state = { ...defaultState, ...imported };
      if (!["en", "ru"].includes(state.lang)) state.lang = defaultState.lang;
      saveState();
      renderAll();
      showToast(t("archiveImported"));
    } catch (error) {
      showToast(t("invalidArchive"));
    } finally {
      event.target.value = "";
    }
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function renderInstallInstructions() {
    els.installDialogTitle.textContent = isIos() ? t("addHomeScreen") : t("installOtherTitle");
    els.installSteps.innerHTML = isIos() ? t("installIosSteps") : t("installOtherSteps");
  }

  function showInstallInstructions() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.finally(() => {
        deferredInstallPrompt = null;
        els.installBanner.hidden = true;
      });
      return;
    }

    renderInstallInstructions();
    els.installDialog.showModal();
  }

  function setupInstallPrompt() {
    if (isStandalone() || state.dismissedInstall) return;
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      els.installBanner.hidden = false;
    });
    setTimeout(() => {
      if (!isStandalone() && !state.dismissedInstall) els.installBanner.hidden = false;
    }, 1800);
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
          // The app remains usable online if registration is unavailable.
        });
      });
    }
  }

  document.addEventListener("click", (event) => {
    const screenButton = event.target.closest("[data-screen-target]");
    if (screenButton) navigate(screenButton.dataset.screenTarget);

    const taskButton = event.target.closest("[data-task-id]");
    if (taskButton) openTask(taskButton.dataset.taskId);
  });

  document.querySelectorAll(".route-item").forEach((button) => button.addEventListener("click", () => selectRoute(button.dataset.route)));
  document.querySelectorAll(".map-stop").forEach((stop) => stop.addEventListener("click", () => selectRoute(stop.dataset.mapStop)));
  document.getElementById("languageToggle").addEventListener("click", () => {
    state.lang = state.lang === "ru" ? "en" : "ru";
    saveState();
    renderAll();
  });
  document.getElementById("citySwitcher").addEventListener("click", () => els.cityDialog.showModal());
  document.getElementById("resumeGame").addEventListener("click", () => navigate("bingo"));
  document.getElementById("randomTaskButton").addEventListener("click", showRandomTask);
  document.getElementById("shareCardButton").addEventListener("click", shareProgress);
  document.getElementById("locateButton").addEventListener("click", locateOnMap);
  document.getElementById("exportButton").addEventListener("click", exportData);
  document.getElementById("importInput").addEventListener("change", importData);
  document.getElementById("installBannerButton").addEventListener("click", showInstallInstructions);
  document.getElementById("dismissInstall").addEventListener("click", () => {
    state.dismissedInstall = true;
    saveState();
    els.installBanner.hidden = true;
  });

  els.cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = els.cityInput.value.trim();
    if (!city) return;
    state.city = city;
    saveState();
    renderCity();
    els.cityDialog.close();
    showToast(t("citySet", city));
  });

  els.taskDialog.addEventListener("click", (event) => {
    if (event.target === els.taskDialog) els.taskDialog.close();
  });
  els.cityDialog.addEventListener("click", (event) => {
    if (event.target === els.cityDialog) els.cityDialog.close();
  });
  els.installDialog.addEventListener("click", (event) => {
    if (event.target === els.installDialog) els.installDialog.close();
  });

  const requestedScreen = new URLSearchParams(window.location.search).get("screen");
  const initialScreen = ["home", "bingo", "map", "passport"].includes(requestedScreen)
    ? requestedScreen
    : (["home", "bingo", "map", "passport"].includes(state.lastScreen) ? state.lastScreen : "home");

  renderAll();
  navigate(initialScreen, false);
  setupInstallPrompt();
  registerServiceWorker();
})();
