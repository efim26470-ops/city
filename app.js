(() => {
  "use strict";

  const STORAGE_KEY = "city-bingo-fieldwork-v1";
  const CATEGORY_COLORS = {
    architecture: "#e66f4d",
    culture: "#7e6f8f",
    ecology: "#6b8761",
    movement: "#4f7f8f"
  };

  const TASKS = [
    {
      id: "facade-detail",
      title: "Find a façade surprise",
      category: "architecture",
      icon: "building",
      prompt: "Find one building detail you would miss at walking speed. What does it reveal about craft, age, or status?",
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
      detail: "Follow the busiest path. Notice where people choose to stop."
    },
    park: {
      number: "02",
      meta: "GREEN INTERRUPTIONS · 35 MIN",
      detail: "Link three planted spaces and compare their shade, sound, and biodiversity."
    },
    bridge: {
      number: "03",
      meta: "EDGES & CROSSINGS · 45 MIN",
      detail: "Cross a physical boundary and watch how access, pace, and character change."
    },
    museum: {
      number: "04",
      meta: "MEMORY WALK · 40 MIN",
      detail: "Connect a cultural institution to traces of memory found in the surrounding streets."
    }
  };

  const ACHIEVEMENTS = [
    { id: "first", title: "First Look", detail: "Log 1 task", icon: "eye", color: "#f2b632", test: (s) => completedIds(s).length >= 1 },
    { id: "four-ways", title: "Four Ways", detail: "Try every category", icon: "compass", color: "#4f7f8f", test: (s) => new Set(completedIds(s).map((id) => taskById(id).category)).size === 4 },
    { id: "bingo", title: "Line Reader", detail: "Make 1 bingo", icon: "grid", color: "#e66f4d", test: (s) => getBingoLines(s).length >= 1 },
    { id: "witness", title: "Street Witness", detail: "Attach 3 photos", icon: "camera", color: "#7e6f8f", test: (s) => completedEntries(s).filter((entry) => entry.photo).length >= 3 },
    { id: "grounded", title: "Ground Truth", detail: "Use a check-in", icon: "pin", color: "#6b8761", test: (s) => completedEntries(s).some((entry) => entry.location) },
    { id: "full-card", title: "City Reader", detail: "Complete the card", icon: "star", color: "#f2b632", test: (s) => completedIds(s).length === TASKS.length }
  ];

  const defaultState = {
    version: 1,
    city: "My City",
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
      return { ...defaultState, ...saved };
    } catch (error) {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    if (count >= 12) return { number: 3, name: "RESEARCHER", floor: 12, ceiling: 16 };
    if (count >= 5) return { number: 2, name: "EXPLORER", floor: 5, ceiling: 12 };
    return { number: 1, name: "OBSERVER", floor: 0, ceiling: 5 };
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

  function renderBoard() {
    const winningIndexes = new Set(getBingoLines().flat());
    els.board.innerHTML = TASKS.map((task, index) => {
      const complete = Boolean(state.completed[task.id]);
      return `
        <button
          class="bingo-cell${complete ? " is-complete" : ""}${winningIndexes.has(index) ? " is-bingo" : ""}"
          type="button"
          role="gridcell"
          data-task-id="${task.id}"
          style="--cell-color:${CATEGORY_COLORS[task.category]}"
          aria-label="${escapeHtml(task.title)}. ${complete ? "Completed" : "Not completed"}."
        >
          <span class="cell-top">
            ${iconSvg(task.icon, "cell-icon")}
            <span class="cell-index">${String(index + 1).padStart(2, "0")}</span>
          </span>
          <span class="cell-title">${escapeHtml(task.title)}</span>
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
      return `
        <article class="achievement${isUnlocked ? "" : " is-locked"}" aria-label="${escapeHtml(achievement.title)}. ${isUnlocked ? "Unlocked" : "Locked"}.">
          <span class="badge-art" style="--badge-color:${achievement.color}">${iconSvg(achievement.icon)}</span>
          <strong>${escapeHtml(achievement.title)}</strong>
          <small>${isUnlocked ? "UNLOCKED" : escapeHtml(achievement.detail).toUpperCase()}</small>
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
      list.innerHTML = '<div class="empty-notes"><strong>Your archive is waiting.</strong><p>Complete a bingo square to add the first field note.</p></div>';
      return;
    }

    list.innerHTML = items.map(({ task, entry }) => `
      <article class="note-item">
        <span class="note-symbol">${iconSvg(task.icon)}</span>
        <div>
          <strong>${escapeHtml(task.title)}</strong>
          <p>${escapeHtml(entry.note || (entry.photo ? `Photo: ${entry.photo}` : "Location observation logged"))}</p>
        </div>
        <time datetime="${escapeHtml(entry.date)}">${formatShortDate(entry.date)}</time>
      </article>
    `).join("");
  }

  function formatShortDate(dateString) {
    try {
      return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(dateString)).toUpperCase();
    } catch (error) {
      return "LOGGED";
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
    document.getElementById("seriesProgressLabel").textContent = `${count} of ${TASKS.length} observations logged`;
    document.getElementById("bingoCount").textContent = bingos;
    document.getElementById("boardProgressLabel").textContent = `${Math.round(cardFraction * 100)}% of card explored`;
    document.getElementById("nextBingoLabel").textContent = bingos ? `${bingos} fieldwork ${bingos === 1 ? "line" : "lines"} completed` : "Complete any 4 connected squares";
    document.getElementById("passportRank").textContent = `${level.name} · LEVEL ${String(level.number).padStart(2, "0")}`;
    document.getElementById("passportPoints").textContent = String(points).padStart(4, "0");
  }

  function renderCity() {
    const city = state.city || "My City";
    document.getElementById("currentCityLabel").textContent = city.toUpperCase();
    document.getElementById("passportCity").textContent = city.toUpperCase();
    els.cityInput.value = city === "My City" ? "" : city;
  }

  function renderAll() {
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

    els.taskSheet.style.setProperty("--task-color", CATEGORY_COLORS[task.category]);
    els.taskSheet.innerHTML = `
      <div class="task-sheet-heading">
        <span class="task-number">${String(TASKS.indexOf(task) + 1).padStart(2, "0")}</span>
        <div>
          <span class="task-category-label"><i></i>${task.category}</span>
          <h2>${escapeHtml(task.title)}</h2>
        </div>
      </div>
      <p class="task-prompt">${escapeHtml(task.prompt)}</p>
      <div class="task-meta" aria-label="Task details">
        <div><small>TIME</small><strong>${task.time}</strong></div>
        <div><small>DIFFICULTY</small><strong>${task.difficulty}</strong></div>
        <div><small>REWARD</small><strong>${task.points} pts</strong></div>
      </div>
      <div class="task-log">
        <h3>${isComplete ? "Edit your observation" : "Log your observation"}</h3>
        <label for="taskNote">FIELD NOTE</label>
        <textarea id="taskNote" maxlength="500" placeholder="What did you notice? What question did it raise?">${escapeHtml(entry.note || "")}</textarea>
        <div class="evidence-row">
          <label class="photo-upload${activeDraft.photo ? " has-photo" : ""}" for="taskPhoto" id="photoUploadLabel">
            ${iconSvg("camera")}
            <span><strong>${activeDraft.photo ? "PHOTO ATTACHED" : "ADD A PHOTO"}</strong><small id="photoFileName">${escapeHtml(activeDraft.photo || "Camera or library")}</small></span>
          </label>
          <input id="taskPhoto" type="file" accept="image/*" capture="environment" hidden />
          <button class="checkin-button${activeDraft.location ? " has-location" : ""}" id="taskCheckin" type="button">
            ${iconSvg("pin")}
            <span><strong>${activeDraft.location ? "CHECKED IN" : "CHECK IN"}</strong><small>${activeDraft.location ? "Approximate location saved" : "Optional location evidence"}</small></span>
          </button>
        </div>
        <button class="primary-button task-complete-button${isComplete ? " is-complete" : ""}" id="completeTaskButton" type="button">
          ${isComplete ? `${iconSvg("check")} UPDATE OBSERVATION` : `COMPLETE FOR ${task.points} POINTS`}
        </button>
        ${isComplete ? '<button class="remove-completion" id="removeCompletionButton" type="button">REMOVE FROM COMPLETED</button>' : ""}
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
    label.querySelector("strong").textContent = "PHOTO ATTACHED";
    document.getElementById("photoFileName").textContent = activeDraft.photo;
  }

  function handleTaskCheckin() {
    const button = document.getElementById("taskCheckin");
    if (!navigator.geolocation) {
      showToast("Location is not available on this device.");
      return;
    }
    button.classList.add("is-locating");
    button.querySelector("strong").textContent = "LOCATING…";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        activeDraft.location = {
          lat: Number(position.coords.latitude.toFixed(3)),
          lng: Number(position.coords.longitude.toFixed(3))
        };
        button.classList.remove("is-locating");
        button.classList.add("has-location");
        button.querySelector("strong").textContent = "CHECKED IN";
        button.querySelector("small").textContent = "Approximate location saved";
        showToast("Check-in ready to save.");
      },
      () => {
        button.classList.remove("is-locating");
        button.querySelector("strong").textContent = "CHECK IN";
        showToast("Location permission was not granted.");
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
      showToast("Add a field note, photo, or check-in first.");
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
      showToast(bingos ? `Square complete · ${bingos} ${bingos === 1 ? "bingo" : "bingos"}!` : `Square complete · +${task.points} points`);
      if (navigator.vibrate) navigator.vibrate([35, 40, 55]);
    } else {
      showToast("Observation updated.");
    }
  }

  function removeActiveCompletion() {
    if (!activeTaskId || !state.completed[activeTaskId]) return;
    delete state.completed[activeTaskId];
    saveState();
    renderAll();
    els.taskDialog.close();
    showToast("Square returned to the card.");
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
    const text = `I explored ${count}/${TASKS.length} City Bingo squares in ${state.city} and made ${bingos} ${bingos === 1 ? "bingo" : "bingos"}.`;
    const shareData = { title: "My City Bingo fieldwork", text, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        showToast("Progress copied to the clipboard.");
      } else {
        showToast(text);
      }
    } catch (error) {
      if (error.name !== "AbortError") showToast("Sharing is not available right now.");
    }
  }

  function selectRoute(routeId) {
    const route = ROUTES[routeId];
    if (!route) return;
    document.querySelectorAll(".route-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === routeId));
    document.querySelectorAll(".map-stop").forEach((item) => item.classList.toggle("is-active", item.dataset.mapStop === routeId));
    document.getElementById("mapDetail").innerHTML = `
      <span class="map-detail-number">${route.number}</span>
      <div><small>${route.meta}</small><strong>${route.detail}</strong></div>
    `;
  }

  function locateOnMap() {
    const button = document.getElementById("locateButton");
    if (!navigator.geolocation) {
      showToast("Location is not available on this device.");
      return;
    }
    button.classList.add("is-locating");
    button.lastChild.textContent = " LOCATING";
    navigator.geolocation.getCurrentPosition(
      () => {
        button.classList.remove("is-locating");
        button.lastChild.textContent = " LOCATED";
        document.getElementById("mapYou").hidden = false;
        showToast("You are on the field map. Position is approximate.");
      },
      () => {
        button.classList.remove("is-locating");
        button.lastChild.textContent = " LOCATE";
        showToast("Location permission was not granted.");
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
    anchor.download = `city-bingo-${state.city.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "fieldwork"}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    showToast("Field archive exported.");
  }

  async function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      const imported = payload?.data || payload;
      if (imported?.version !== 1 || typeof imported.completed !== "object" || typeof imported.city !== "string") throw new Error("Invalid archive");
      state = { ...defaultState, ...imported };
      saveState();
      renderAll();
      showToast("Field archive imported.");
    } catch (error) {
      showToast("That file is not a City Bingo archive.");
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

  function showInstallInstructions() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.finally(() => {
        deferredInstallPrompt = null;
        els.installBanner.hidden = true;
      });
      return;
    }

    if (!isIos()) {
      els.installDialogTitle.textContent = "Install City Bingo";
      els.installSteps.innerHTML = `
        <li><span>1</span><p>Open your browser's <strong>menu</strong>.</p></li>
        <li><span>2</span><p>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p></li>
        <li><span>3</span><p>Confirm to play fullscreen and keep the game available offline.</p></li>
      `;
    }
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
    showToast(`Field site set to ${city}.`);
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

  const dateLabel = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "short", day: "numeric" }).format(new Date());
  document.getElementById("todayLabel").textContent = `${dateLabel} · TODAY'S FIELDWORK`;

  const requestedScreen = new URLSearchParams(window.location.search).get("screen");
  const initialScreen = ["home", "bingo", "map", "passport"].includes(requestedScreen)
    ? requestedScreen
    : (["home", "bingo", "map", "passport"].includes(state.lastScreen) ? state.lastScreen : "home");

  renderAll();
  navigate(initialScreen, false);
  setupInstallPrompt();
  registerServiceWorker();
})();
