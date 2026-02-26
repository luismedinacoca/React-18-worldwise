

## 🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*

### 📑 Table of Contents


<br>

## 🔧 205. Lesson 205 — *Routing and Single-Page Application (SPAs)*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [205. Lesson 205 — *Routing and Single-Page Application (SPAs)*](#-205-lesson-205--routing-and-single-page-application-spas)
- [205.1 Context](#-2051-context)
- [205.2 Updating code according the context](#-2052-updating-codetheory-according-the-context)
  - [205.2.1 What is Routing?](#20521-what-is-routing)
  - [205.2.2 Single-Page Applications (SPA)](#20522-single-page-applications-spa)
- [205.3 Issues](#-2053-issues)
- [205.4 Pending Fixes (TODO)](#-2054-pending-fixes-todo)

### 🧠 205.1 Context:

**Routing** is the mechanism that determines which UI component or view to display based on the current URL. In traditional multi-page applications (MPAs), the server returns different HTML documents for each route (e.g. `/about`, `/contact`). In React and other modern frontend frameworks, **client-side routing** lets the app update the visible content without requesting a new HTML page from the server; only a single HTML shell is loaded and subsequent updates happen in the browser via JavaScript.

A **Single-Page Application (SPA)** is an application that loads a single HTML document and then dynamically updates its content as the user navigates, without full page reloads. React is often used to build SPAs, and the URL can change (e.g. via the History API) without triggering a server round-trip.

**Key Concepts:**

1. **Client-side routing** — Routing logic runs in the browser. The URL changes and the framework swaps components in and out based on the current path.
2. **History API** — Browsers expose `history.pushState`, `history.replaceState`, and the `popstate` event to change the URL and respond to back/forward without full reloads.
3. **Virtual navigation** — The server does not send new HTML for each route; the React app renders the appropriate component for the current URL.
4. **Route matching** — A routing library (e.g. React Router) maps URL paths to component trees (e.g. `/cities` → `<CitiesList />`, `/cities/42` → `<CityDetail />`).
5. **Nested routes** — Routes can be hierarchical (e.g. `/app/settings/profile`), with nested layouts and components.

**Advantages:**
- Fast navigation after initial load; no full page reloads.
- Smoother UX with less flicker and loading states.
- Possibility of offline-first or app-like behavior.
- Clear separation between frontend UI and backend APIs.
- URLs remain shareable and bookmarkable when routing is set up correctly.

**Disadvantages / Gotchas:**
- Initial bundle size can be large; code-splitting and lazy loading are important.
- SEO needs extra care (e.g. SSR/SSG) unless only for internal apps.
- Browser history and deep linking require proper routing configuration.
- 404 and redirects must be handled on both client and server (fallback to `index.html`).
- Memory and state can grow if not managed well in long-running sessions.

**When to Consider Alternatives:**
- When SEO is critical and you cannot use SSR/SSG — consider Next.js, Remix, or similar.
- For very simple apps with 1–2 views — conditional rendering may be enough.
- When you need server-rendered HTML per route — use a framework with built-in SSR.
- For static marketing sites — static HTML or a static site generator may be simpler.

In the **Worldwise** project, we will add React Router so routes like `/`, `/cities`, `/countries`, etc. can each render a different view while staying within a single-page experience.

---

### ⚙️ 205.2 Updating code/theory according the context:

#### **Summary**

- Section 205.2 introduces the concepts of **routing** and **Single-Page Applications (SPAs)** that underpin React Router and the Worldwise app.
- It explains how routing maps URLs to views and how SPAs differ from traditional server-rendered apps.
- Subsection 205.2.1 covers what routing is and why it matters; 205.2.2 explains SPAs, their flow, and how they relate to routing.

---

#### 205.2.1 What is **Routing**?

**Subsection Summary:**
- Describes **routing** as the process of mapping a URL (path) to a specific view or component.
- Shows how different URLs map to different content in a React SPA (e.g. `/` → Home, `/cities` → Cities list).
- The image `section17-lecture205-001.png` illustrates the concept of routing: URL-to-view mapping and how the browser URL drives which component is rendered.
- Establishes that routing is the backbone of navigation in SPAs.

![What is ROUNTING](../img/section17-lecture205-001.png)

---

#### 205.2.2 **Single-Page** Applications (SPA)

**Subsection Summary:**
- Explains that an SPA loads one HTML file initially; subsequent “navigation” is handled by JavaScript swapping components.
- Contrasts SPA behavior with multi-page apps: no full reloads, no new HTML from the server for each route.
- The image `section17-lecture205-002.png` likely illustrates the SPA lifecycle: initial load, client-side navigation, and how the DOM is updated without full page reloads.
- Connects SPAs to routing: the URL still changes (e.g. via the History API) so users can bookmark and share links while the app stays single-page.

![Single-Page Applications](../img/section17-lecture205-002.png)

---

### 🐞 205.3 Issues:

- **No routing library installed**: The project does not yet include `react-router-dom`; routing cannot be implemented until the dependency is added.
- **No route configuration**: `src/App.jsx` renders only static content; there is no route setup or view switching based on the URL.
- **Missing image assets**: The referenced images `docs/../img/section17-lecture205-001.png` and `section17-lecture205-002.png` may not exist in the repo; verify the `img` folder and file paths.

| Issue | Status | Log/Error |
|---|---|---|
| No react-router-dom dependency | ⚠️ Identified | `package.json`: project uses only `react` and `react-dom`; no routing library |
| App has no route structure | ⚠️ Identified | `src/App.jsx`: renders only `<h1>Worldwise</h1>` with no `<Routes>` or route config |
| Image paths possibly broken | ℹ️ Informational | `docs/LECTURE_STEPS.md`: references `../img/section17-lecture205-*.png`; ensure `img` folder exists relative to `docs/` |

---

### 🧱 205.4 Pending Fixes (TODO)

- [ ] Install `react-router-dom` via `npm install react-router-dom` and wrap the app with `<BrowserRouter>` in `src/main.jsx`
- [ ] Add route configuration in `src/App.jsx` with `<Routes>` and `<Route>` components (e.g. `/`, `/cities`, `/countries`) — placeholder components can be used initially
- [ ] Verify that `docs/../img/` exists and contains `section17-lecture205-001.png` and `section17-lecture205-002.png`; fix paths if assets are stored elsewhere

[↑ top — 205. Lesson 205 — *Routing and Single-Page Application (SPAs)*](#-205-lesson-205--routing-and-single-page-application-spas)


<br>

## 🔧 206. Lesson 206 — *Implementing Main Pages and Routes*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [206. Lesson 206 — *Implementing Main Pages and Routes*](#-206-lesson-206--implementing-main-pages-and-routes)
- [206.1 Context](#-2061-context)
- [206.2 Updating code according the context](#-2062-updating-code-according-the-context)
  - [206.2.1 Product Page Component](#20621-product-page-component)
  - [206.2.2 Homepage Component](#20622-homepage-component)
  - [206.2.3 Pricing Page Component](#20623-pricing-page-component)
  - [206.2.4 Installing react-router-dom](#20624-installing-react-router-dom)
  - [206.2.5 App Shell with Routes](#20625-app-shell-with-routes)
  - [206.2.6 Configuring Route Definitions](#20626-configuring-route-definitions)
  - [206.2.7 PageNotFound and Catch-All Route](#20627-pagenotfound-and-catch-all-route)
- [206.3 Issues](#-2063-issues)
- [206.4 Pending Fixes (TODO)](#-2064-pending-fixes-todo)

### 🧠 206.1 Context:

**Implementing Main Pages and Routes** is the practical application of client-side routing concepts introduced in Lesson 205. This lesson covers how to structure a React SPA with React Router: creating page components, installing the routing library, and wiring up routes so that different URLs render different views without full page reloads.

In the Worldwise project, we implement three main pages (Homepage, Product, Pricing), a 404 fallback page, and configure `BrowserRouter`, `Routes`, and `Route` so that navigation between `/`, `/product`, `/pricing`, and any unmatched path works correctly.

**Key Concepts:**

1. **Page components** — Each screen or view is a React component living in `src/pages/`. These are simple presentational components that React Router renders based on the current URL.
2. **BrowserRouter** — The top-level router component that enables the HTML5 History API (e.g. `pushState`, `popstate`), so URLs like `/product` work without server round-trips.
3. **Routes and Route** — `Routes` wraps a set of `Route` definitions. Each `Route` maps a `path` (e.g. `/`, `product`, `pricing`) to an `element` (the component to render).
4. **Catch-all route** — A `Route` with `path="*"` matches any URL not matched by earlier routes, used for 404/Page Not Found pages.
5. **Route path conventions** — Using `path="/"` for the root and `path="product"` (or `path="/product"`) for `/product`; both styles work for top-level routes in React Router v6+.

**Advantages:**
- Clear separation: one component per page, easy to locate and maintain.
- Simple route configuration: all routes declared in one place (`App.jsx`).
- Catch-all `*` route ensures no broken links; unknown URLs show a friendly 404.
- Works with Vite dev server out of the box; no extra server config for SPA fallback during development.

**Disadvantages / Gotchas:**
- All routes are defined in one file; as the app grows, consider lazy loading or route modules.
- Path `product` vs `/product`: both work for top-level routes, but `/product` is more explicit; be consistent.
- Server-side routing: in production, the server must serve `index.html` for all non-asset paths so client-side routing works on refresh or direct links.
- `BrowserRouter` placement: wrapping in `App.jsx` vs `main.jsx` both work; keeping it in `App.jsx` keeps routing logic inside the app tree.

**When to Consider Alternatives:**
- For nested layouts (e.g. shared header/footer per section) — use `<Outlet />` and nested routes.
- For data loading per route — consider React Router's `loader` API or data fetching libraries.
- For code-splitting — use `React.lazy()` and `Suspense` with route components.
- If deploying to a static host — configure the server to redirect all routes to `index.html` (e.g. `_redirects` for Netlify, `rewrites` for Vercel).

In Worldwise, this lesson establishes the core SPA structure: Homepage, Product, Pricing, and PageNotFound, all wired through React Router in `src/App.jsx`.

---

### ⚙️ 206.2 Updating code according the context:

#### **Summary**

- Section 206.2 walks through the step-by-step implementation of main pages and routes in the Worldwise app.
- It covers creating page components (Product, Homepage, Pricing, PageNotFound), installing `react-router-dom`, and configuring `App.jsx` with `BrowserRouter`, `Routes`, and `Route`.
- Subsections 206.2.1–206.2.3 define the page components; 206.2.4 adds the dependency; 206.2.5–206.2.6 set up the route shell and definitions; 206.2.7 adds the 404 fallback with a catch-all route.
- The image `section17-lecture206-001.png` illustrates the three main pages (Homepage, Product, Pricing); `section17-lecture206-002.png` shows the Page Not Found screen for unmatched URLs.

---

#### 206.2.1 Product Page Component

**Subsection Summary:**
- Defines the `Product` page component in `src/pages/Product.jsx`.
- Returns a simple `<h1>Product</h1>` placeholder for the product view.
- Demonstrates the pattern: one component per page, default export for use with `Route element`.
- Establishes the structure for the `/product` route.

```jsx
/* src/pages/Product.jsx */
const Product = () => {
  return <h1>Product</h1>;
};

export default Product;
```

---

#### 206.2.2 Homepage Component

**Subsection Summary:**
- Defines the `Homepage` component in `src/pages/Homepage.jsx`.
- Renders `<h1>Worldwise page</h1>` as the landing page content.
- Serves as the root route (`/`) component for the Worldwise app.
- Uses the same pattern as Product: functional component with default export.

```jsx
/* src/pages/Homepage.jsx */
const Homepage = () => {
  return <h1>Worldwise page</h1>;
};

export default Homepage;
```

---

#### 206.2.3 Pricing Page Component

**Subsection Summary:**
- Defines the `Pricing` page component in `src/pages/Pricing.jsx`.
- Returns `<h1>Pricing</h1>` as a placeholder for the pricing view.
- Mirrors the Product and Homepage structure for consistency.
- Will be rendered when the user navigates to `/pricing`.

```jsx
/* src/pages/Pricing.jsx */
const Pricing = () => {
  return <h1>Pricing</h1>;
};

export default Pricing;
```

---

#### 206.2.4 Installing react-router-dom

**Subsection Summary:**
- Runs `npm i react-router-dom` to add the routing library to the project.
- The package is added to `dependencies` in `package.json` (e.g. `react-router-dom": "^7.13.1"`).
- Demonstrates that the install completes without vulnerabilities.
- React Router provides `BrowserRouter`, `Routes`, `Route`, and other APIs used in subsequent steps.

```bash
npm i react-router-dom
```

outcome:
```
added 5 packages, and audited 162 packages in 3s

34 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

In the meantime in `package.json` file:
```json
{
  "name": "18-worldwise",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.1"                       // 👈🏽 ✅ (1)
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.3.1"
  }
}
```

---

#### 206.2.5 App Shell with Routes

**Subsection Summary:**
- Sets up the minimal routing structure in `src/App.jsx`: `BrowserRouter` wrapping `Routes`.
- Imports `BrowserRouter` and `Routes` from `react-router-dom`; no `Route` definitions yet.
- Establishes the shell where individual routes will be added.
- `BrowserRouter` must wrap the app (or the part that uses routing) for the History API to work.

```jsx
/* src/App.jsx */
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

---

#### 206.2.6 Configuring Route Definitions

**Subsection Summary:**
- Adds `Route` components for `/` (Homepage), `product` (Product), and `pricing` (Pricing).
- Imports the three page components and maps each path to its `element`.
- Enables navigation to `http://localhost:5173/`, `http://localhost:5173/product`, and `http://localhost:5173/pricing`.
- The image `section17-lecture206-001.png` illustrates these three pages in the browser.

```jsx
/* src/App.jsx */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

![Homepage - Product page - Pricing page](../img/section17-lecture206-001.png)

Let's visit:

* [Homepage page](http://localhost:5173/)
* [Product page](http://localhost:5173/product)
* [Pricing page](http://localhost:5173/pricing)

---

#### 206.2.7 PageNotFound and Catch-All Route

**Subsection Summary:**
- Creates `PageNotFound` in `src/pages/PageNotFound.jsx` with a friendly "Page not found 🥹" message.
- Adds a catch-all route `<Route path="*" element={<PageNotFound />} />` in `App.jsx`.
- The `*` path matches any URL not handled by prior routes (e.g. `/unknown`, `/typo`), ensuring users see a 404-like page instead of a blank screen.
- The image `section17-lecture206-002.png` shows the Page Not Found screen when visiting an unmatched URL.

```jsx
/* src/pages/PageNotFound.jsx */
const PageNotFound = () => {
  return <h1>Page not found 🥹</h1>;
};

export default PageNotFound;
```

And meanwhile:

```jsx
/* src/App.jsx */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

![Not Found page](../img/section17-lecture206-002.png)

---

### 🐞 206.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Route paths without leading slash | ℹ️ Low Priority | `src/App.jsx:12-13`: `path="product"` and `path="pricing"` work but `path="/product"` and `path="/pricing"` are more explicit |
| Accessibility attributes missing on placeholders | ℹ️ Low Priority | `src/pages/Homepage.jsx`, `Product.jsx`, `Pricing.jsx`, `PageNotFound.jsx`: `<h1>` elements lack `tabIndex`, `aria-label` |

---

### 🧱 206.4 Pending Fixes (TODO)

- [ ] Create `docs/img/` folder and add screenshots `section17-lecture206-001.png` (Homepage/Product/Pricing) and `section17-lecture206-002.png` (Page Not Found) if images are intended for documentation
- [ ] Optionally update `src/App.jsx` route paths to `path="/product"` and `path="/pricing"` for consistency with `path="/"` (lines 12–13)
- [ ] When implementing real page content, add appropriate `aria-label` and semantic markup to page components in `src/pages/`

[↑ top — 206. Lesson 206 — *Implementing Main Pages and Routes*](#-206-lesson-206--implementing-main-pages-and-routes)






















---

<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:

### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```jsx
/*  */

```

#### XXX.2.2
```jsx
/*  */

```

#### XXX.2.3
```jsx
/*  */

```

#### XXX.2.4
```jsx
/*  */

```

### 🐞 XXX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]