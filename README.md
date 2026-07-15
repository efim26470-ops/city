# City Bingo

City Bingo is a mobile-first progressive web app for playful urban research. It is intentionally built with plain HTML, CSS, and JavaScript so it can be hosted on GitHub Pages without a build step or backend.

The interface is available in English and Russian. Russian is selected automatically on Russian-language devices, and the RU/EN button in the header remembers the player's choice.

## Publish on GitHub Pages

1. Create a new empty GitHub repository.
2. Unzip this package and upload **the contents of the `city-bingo` folder** to the repository root. `index.html` must be at the root, not inside another folder.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main`, choose `/ (root)`, and press **Save**.
7. GitHub will show the public URL after deployment finishes.

The app uses only relative paths, so it works both at `username.github.io` and at a project URL such as `username.github.io/city-bingo/`.

## Install on iPhone or iPad

1. Open the GitHub Pages URL in Safari.
2. Tap the Share button.
3. Choose **Add to Home Screen**, then tap **Add**.

The installed app opens fullscreen. After the first online visit, its game shell is available offline.

## Included features

- 4 × 4 urban-research bingo card with 16 field tasks
- Complete English and Russian localization with a persistent RU/EN switch
- Architecture, culture, ecology, and movement series
- Levels, points, bingo detection, achievements, and a field passport
- Field notes, optional camera evidence, and approximate check-ins
- Schematic neighborhood research routes
- Local progress storage plus JSON export/import
- Web Share support and iOS installation guidance
- Offline application shell via service worker

## Data and privacy

Progress is stored locally in the browser. Photo files are never uploaded or embedded in local storage; the app records only the selected filename as evidence. Optional check-ins save rounded coordinates in the local field archive. There is no analytics, server, account, or remote database.

## Local testing

Service workers require `https://` or localhost. From this folder, run a local server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

## Customization

- Edit tasks in the `TASKS` array in `app.js`.
- Change the visual palette in the `:root` section of `styles.css`.
- Bump `CACHE_VERSION` in `sw.js` after deploying asset changes so installed copies update promptly.
