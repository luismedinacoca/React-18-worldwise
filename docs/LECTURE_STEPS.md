

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
import { BrowserRouter, Routes } from "react-router-dom";   // 👈🏽 ✅ (1)
function App() {
  return (
    <BrowserRouter>                                         {/* 👈🏽 ✅ (2) */}
      <Routes>                                              {/* 👈🏽 ✅ (2) */}

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
import { BrowserRouter, Routes, Route } from "react-router-dom";        // 👈🏽 ✅ (1) import "route"
import Product from "./pages/Product";                                  // 👈🏽 ✅ (2)
import Pricing from "./pages/Pricing";                                  // 👈🏽 ✅ (2)
import Homepage from "./pages/Homepage";                                // 👈🏽 ✅ (2)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />                       {/* 👈🏽 ✅ (3) */}
        <Route path="product" element={<Product />} />                  {/* 👈🏽 ✅ (3) */}
        <Route path="pricing" element={<Pricing />} />                  {/* 👈🏽 ✅ (3) */}
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
import PageNotFound from "./pages/PageNotFound";                                  // 👈🏽 ✅ (1)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />                             {/* 👈🏽 ✅ (2) */}
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

- [ ] Optionally update `src/App.jsx` route paths to `path="/product"` and `path="/pricing"` for consistency with `path="/"` (lines 12–13)
- [ ] When implementing real page content, add appropriate `aria-label` and semantic markup to page components in `src/pages/`

[↑ top — 206. Lesson 206 — *Implementing Main Pages and Routes*](#-206-lesson-206--implementing-main-pages-and-routes)


<br>

## 🔧 207. Lesson 207 — *Linking Between Routes With `<Link />` and `<NavLink />`*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [207. Lesson 207 — *Linking Between Routes With `<Link />` and `<NavLink />`*](#-207-lesson-207--linking-between-routes-with-link--and-navlink-)
- [207.1 Context](#-2071-context)
- [207.2 Updating code according the context](#-2072-updating-codetheory-according-the-context)
  - [207.2.1 Anchor Tag Causes Full Page Reload](#20721-anchor-tag-causes-full-page-reload)
  - [207.2.2 Replacing Anchor with Link for Client-Side Navigation](#20722-replacing-anchor-with-link-for-client-side-navigation)
  - [207.2.3 Creating PageNav Component with Link](#20723-creating-pagenav-component-with-link)
  - [207.2.4 Adding PageNav to Homepage](#20724-adding-pagenav-to-homepage)
  - [207.2.5 Adding PageNav to PageNotFound](#20725-adding-pagenav-to-pagenotfound)
  - [207.2.6 Adding PageNav to Product Page](#20726-adding-pagenav-to-product-page)
  - [207.2.7 Adding PageNav to Pricing Page](#20727-adding-pagenav-to-pricing-page)
  - [207.2.8 Using NavLink for Active State Styling](#20728-using-navlink-for-active-state-styling)
- [207.3 Issues](#-2073-issues)
- [207.4 Pending Fixes (TODO)](#-2074-pending-fixes-todo)

### 🧠 207.1 Context:

**Linking Between Routes** is the practice of navigating between different views in a React SPA without triggering a full page reload. Instead of using native HTML `<a href="...">` anchors (which cause the browser to request a new document from the server), React Router provides `<Link>` and `<NavLink>` components that perform **client-side navigation**: they update the URL and swap the rendered component while keeping the app state and avoiding a full reload.

In the Worldwise project, we use `Link` for in-page navigation (e.g. a "Pricing" link on the Homepage) and `NavLink` inside a shared `PageNav` component. `NavLink` automatically applies an `active` class (or custom styling) to the current route's link, enabling visual feedback such as highlighting the active nav item.

**Key Concepts:**

1. **`<Link to="...">`** — A React Router component that renders an `<a>` tag but intercepts clicks to perform client-side navigation via the History API. No full page reload occurs.
2. **`<NavLink>`** — An enhanced `Link` that adds an `active` class (or custom `className`/`style` functions) when its `to` path matches the current URL. Essential for navigation UIs where the current page should be visually distinct.
3. **`to` prop** — Accepts a string path (e.g. `"/pricing"`) or a location object. Must be used instead of `href` for React Router links.
4. **Shared navigation component** — A reusable `PageNav` component containing `NavLink` items ensures consistent navigation across all pages and centralizes route definitions.
5. **Avoid `href` for internal routes** — Using `<a href="/path">` triggers a full reload; always use `<Link to="/path">` for routes handled by React Router.

**Advantages:**
- No full page reloads; faster, smoother navigation.
- Preserves React state and component tree; no flicker or re-initialization.
- `NavLink` simplifies active-state styling for nav menus.
- Better UX for SPAs; feels like a native app.
- Browser back/forward and direct URL access work correctly when routing is configured.

**Disadvantages / Gotchas:**
- Must remember to use `Link`/`NavLink` instead of `<a>` for internal routes; easy to slip back to anchors.
- `NavLink` exact matching: by default it uses partial matching; `end` prop ensures exact match for the root `/` route.
- Duplicating `PageNav` in every page component can be tedious; consider lifting it to a layout or `App.jsx`.
- External links (to other domains) should still use `<a href="..." target="_blank" rel="noopener noreferrer">`.

**When to Consider Alternatives:**
- For external URLs — use `<a href="...">` with appropriate `rel` attributes.
- For programmatic navigation (e.g. after form submit) — use `useNavigate()` hook.
- For custom active styling beyond a simple class — use `NavLink`'s `className` or `style` as a function.
- When using nested routes — ensure `NavLink` paths match the route structure correctly.

In Worldwise, we replace the initial `<a href="/pricing">` with `<Link to="/pricing">`, build a `PageNav` component with links to Home, Product, and Pricing, add `PageNav` to all pages, and finally switch to `NavLink` in `PageNav` to enable future active-state styling.

---

### ⚙️ 207.2 Updating code/theory according the context:

#### **Summary**

- Section 207.2 demonstrates how to replace native anchor tags with React Router's `Link` and `NavLink` for client-side navigation.
- It solves the problem of full page reloads when navigating between routes; anchors cause reloads, whereas `Link` and `NavLink` perform in-app navigation.
- Subsections 207.2.1–207.2.2 show the anchor vs. `Link` contrast on the Homepage; 207.2.3 creates the `PageNav` component; 207.2.4–207.2.7 add `PageNav` to all pages; 207.2.8 replaces `Link` with `NavLink` in `PageNav` for active-state styling.
- The images illustrate each step: Homepage with anchor, Homepage with Link, Homepage with PageNav, and NavLink with active class.

---

#### 207.2.1 Anchor Tag Causes Full Page Reload

**Subsection Summary:**
- Uses a native `<a href="/pricing">Pricing</a>` anchor on the Homepage.
- Demonstrates the problem: clicking the link triggers a full page reload because the browser requests a new document.
- The image `section17-lecture207-001.png` shows the Homepage with the anchor tag; this approach defeats the SPA experience.
- Establishes why we need React Router's `Link` for internal navigation.

* reloading page in order to move to Pricing page.

```jsx
/* src/pages/Homepage.jsx */
const Homepage = () => {
  return (
    <>
      <h1>Worldwise page</h1>
      <a href="/pricing">Pricing</a>
    </>
  );
};

export default Homepage;
```
![Homepage with anchor tag](../img/section17-lecture207-001.png)

---

#### 207.2.2 Replacing Anchor with Link for Client-Side Navigation

**Subsection Summary:**
- Imports `Link` from `react-router-dom` and replaces `<a href="/pricing">` with `<Link to="/pricing">`.
- Enables client-side navigation: clicking "Pricing" updates the URL and renders the Pricing component without a full reload.
- The image `section17-lecture207-001.png` is reused to show the Homepage with the `Link` component (visually similar, but behavior differs).
- Core pattern: use `to` instead of `href` for routes handled by React Router.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";        // 👈🏽 ✅ (1)

const Homepage = () => {
  return (
    <>
      <h1>Worldwise page</h1>
      <Link to="/pricing">Pricing</Link>        {/* 👈🏽 ✅ (2) */}
    </>
  );
};

export default Homepage;
```
![Homepage with link tag](../img/section17-lecture207-001.png)

---

#### 207.2.3 Creating PageNav Component with Link

**Subsection Summary:**
- Creates `PageNav` in `src/components/PageNav.jsx` with a semantic `<nav>` and unordered list.
- Uses `Link` for Home (`/`), Product (`/product`), and Pricing (`/pricing`).
- Centralizes navigation links in one component for reuse across pages.
- Establishes the structure that will later use `NavLink` for active-state styling.

```jsx
/* src/components/PageNav.jsx */
import { Link } from "react-router-dom";

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
```

---

#### 207.2.4 Adding PageNav to Homepage

**Subsection Summary:**
- Imports and renders `PageNav` at the top of the Homepage component.
- Keeps the existing `<Link to="/pricing">` in the page body (redundant with PageNav but illustrative).
- The image `section17-lecture207-002.png` shows the Homepage with the PageNav component visible.
- Ensures users can navigate to Product and Pricing from the landing page.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";            // 👈🏽 ✅ (1)

const Homepage = () => {
  return (
    <>
      <PageNav />                                        {/* 👈🏽 ✅ (2) */}
      <h1>Worldwise page</h1>
      <Link to="/pricing">Pricing</Link>
    </>
  );
};

export default Homepage;
```
![Homepage with PageNav component](../img/section17-lecture207-002.png)

---

#### 207.2.5 Adding PageNav to PageNotFound

**Subsection Summary:**
- Imports and adds `PageNav` to the PageNotFound component.
- Allows users on a 404 page to navigate back to Home, Product, or Pricing without typing the URL.
- The image `section17-lecture207-003.png` shows the NotFound page with PageNav.
- Improves UX: 404 pages should still offer a way to get back into the app.

```jsx
/* src/pages/PageNotFound.jsx */
import PageNav from "../components/PageNav";                      // 👈🏽 ✅ (1)

const PageNotFound = () => {
  return (
    <>
      <PageNav />                                                 {/* 👈🏽 ✅ (2) */}
      <h1>Page not found 🥹</h1>
    </>
  );
};

export default PageNotFound;
```
![NotFoundPage with PageNav component](../img/section17-lecture207-003.png)

---

#### 207.2.6 Adding PageNav to Product Page

**Subsection Summary:**
- Imports and adds `PageNav` to the Product page component.
- Provides consistent navigation from the Product view to Home, Product, and Pricing.
- The image `section17-lecture207-004.png` shows the Product page with PageNav.
- Follows the same pattern as Homepage and PageNotFound for consistency.

```jsx
/* src/pages/Product.jsx */
import PageNav from "../components/PageNav";                      // 👈🏽 ✅ (1)
const Product = () => {
  return (
    <>
      <PageNav />                                                 {/* 👈🏽 ✅ (2) */}
      <h1>Product</h1>
    </>
  );
};

export default Product;
```
![Product page with PageNav component](../img/section17-lecture207-004.png)

---

#### 207.2.7 Adding PageNav to Pricing Page

**Subsection Summary:**
- Imports and adds `PageNav` to the Pricing page component.
- Completes the navigation pattern across all main pages.
- The image `section17-lecture207-005.png` shows the Pricing page with PageNav.
- Ensures users can navigate between all routes from any page.

```jsx
/* src/pages/Pricing.jsx */
import PageNav from "../components/PageNav";                      //  👈🏽 ✅ (1)
const Pricing = () => {
  return (
    <>
      <PageNav />                                                 {/*  👈🏽 ✅ (2) */}
      <h1>Pricing</h1>
    </>
  );
};

export default Pricing;
```
![Pricing page with PageNav component](../img/section17-lecture207-005.png)

---

#### 207.2.8 Using NavLink for Active State Styling

**Subsection Summary:**
- Replaces `Link` with `NavLink` in `PageNav` for all three nav items.
- `NavLink` automatically adds `class="active"` to the link whose route matches the current URL.
- The image `section17-lecture207-006.png` illustrates the NavLink component and active state.
- Enables future CSS styling (e.g. bold, underline, background) for the active nav item; `className` or `style` props can customize the active appearance.


```jsx
/* src/components/PageNav.jsx */
import { Link, NavLink } from "react-router-dom";                           // 👈🏽 ✅ (1)

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>                                    {/* 👈🏽 ✅ (2) */}
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>                          {/* 👈🏽 ✅ (2) */}
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>                          {/* 👈🏽 ✅ (2) */}
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
```
![Adding NavLink component](../img/section17-lecture207-006.png)

---

### 🐞 207.3 Issues:

- **PageNav duplicated across all pages**: Each page (Homepage, Product, Pricing, PageNotFound) imports and renders `PageNav` individually; this works but creates redundancy. Consider lifting `PageNav` to `App.jsx` or a layout component.
- **Accessibility: nav lacks `aria-label`**: The `<nav>` element in `PageNav` should have an `aria-label` (e.g. `aria-label="Main navigation"`) so screen readers can identify its purpose.
- **NavLink root route matching**: `NavLink to="/"` matches any path that starts with `/` (e.g. `/product`, `/pricing`); adding `end` prop ensures only the exact root path gets the active class.
- **Redundant Link on Homepage**: `Homepage` includes both `PageNav` and a standalone `<Link to="/pricing">Pricing</Link>`, which duplicates the Pricing link; consider removing if not intentional.

| Issue | Status | Log/Error |
|---|---|---|
| PageNav duplicated in every page | ℹ️ Low Priority | `src/pages/Homepage.jsx`, `Product.jsx`, `Pricing.jsx`, `PageNotFound.jsx`: Each imports and renders `PageNav`; consider layout in `App.jsx` |
| nav element missing aria-label | ⚠️ Identified | `src/components/PageNav.jsx:5`: `<nav>` should include `aria-label="Main navigation"` for accessibility |
| NavLink for root path may match child routes | ⚠️ Identified | `src/components/PageNav.jsx:8`: `<NavLink to="/">` should use `end` prop: `<NavLink to="/" end>Home</NavLink>` |
| Redundant Pricing link on Homepage | ℹ️ Informational | `src/pages/Homepage.jsx:9`: `<Link to="/pricing">` duplicates PageNav; remove if not needed for CTA |

---

### 🧱 207.4 Pending Fixes (TODO)

- [ ] Add `aria-label="Main navigation"` to the `<nav>` element in `src/components/PageNav.jsx` (line 5) for screen reader accessibility
- [ ] Add `end` prop to `<NavLink to="/">` in `src/components/PageNav.jsx` (line 8) so only the root path receives the active class: `<NavLink to="/" end>Home</NavLink>`
- [ ] Consider moving `PageNav` to `App.jsx` as a shared layout component to avoid importing it in every page
- [ ] Remove redundant `<Link to="/pricing">Pricing</Link>` from `src/pages/Homepage.jsx` (line 9) if the PageNav already provides sufficient navigation

[↑ top — 207. Lesson 207 — *Linking Between Routes With `<Link />` and `<NavLink />`*](#-207-lesson-207--linking-between-routes-with-link--and-navlink-)

<br>

## 🔧 208. Lesson 208 — *Styling Options For React Applications*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [208. Lesson 208 — *Styling Options For React Applications*](#-208-lesson-208--styling-options-for-react-applications)
- [208.1 Context](#-2081-context)
- [208.2 Updating code according the context](#-2082-updating-codetheory-according-the-context)
  - [208.2.1 Styling Options Comparison Table](#20821-styling-options-comparison-table)
- [208.3 Issues](#-2083-issues)
- [208.4 Pending Fixes (TODO)](#-2084-pending-fixes-todo)

### 🧠 208.1 Context:

**React does not care about styling** — it is a UI library that handles rendering and state, but it does not prescribe how you style your components. Choosing a styling approach is entirely up to the developer. This lesson provides an overview of the main styling options available for React applications so you can make an informed decision for the Worldwise project.

The five main approaches are: **inline CSS**, **CSS/Sass files**, **CSS Modules**, **CSS-in-JS** (e.g. Styled Components), and **utility-first CSS** (e.g. Tailwind). Each has different scope, where/how it is applied, and what it is based on. There are also **UI component libraries** (MUI, Chakra UI, Mantine) that provide pre-styled components as an alternative to writing CSS yourself.

**Key Concepts:**

1. **Inline CSS** — Apply styles via the `style` prop on JSX elements. Scope: local to the element. Based on: CSS. Good for one-off styles or dynamic values, but can become verbose and does not support pseudo-classes or media queries.
2. **CSS or Sass files** — Traditional external `.css` (or `.scss`) files imported globally. Applied via `className`. Scope: entire app; can cause naming collisions and unintended overrides.
3. **CSS Modules** — One external file per component; class names are automatically scoped/hashed to avoid collisions. Applied via `className`. Scope: component. Based on: CSS. Provides component-level encapsulation without extra libraries.
4. **CSS-in-JS** — Write styles in JavaScript (e.g. Styled Components, Emotion). Creates new components; styles are scoped to the component. Based on: JavaScript. Good for dynamic styles and colocation, but adds runtime cost and bundle size.
5. **Utility-first CSS (Tailwind)** — Pre-defined utility classes applied via `className`. Scope: per element. Based on: CSS (but configured via PostCSS). Fast prototyping, consistent design system; can lead to long `className` strings.
6. **UI component libraries** — MUI, Chakra UI, Mantine, etc. Provide pre-built, themed components; little to no custom CSS needed. Trade-off: less control over design and larger bundles.

**Advantages:**

- **Inline CSS**: Quick for prototypes; supports dynamic values; no extra files.
- **CSS/Sass files**: Familiar to all developers; full CSS feature set; easy to integrate with existing stylesheets.
- **CSS Modules**: Component-scoped; no naming collisions; standard CSS syntax.
- **CSS-in-JS**: Colocation of styles and logic; full JS power (variables, conditionals); no class name conflicts.
- **Tailwind**: Rapid development; consistent spacing/colors; purges unused CSS in production.
- **UI libraries**: Quick setup; accessible components; design system out of the box.

**Disadvantages / Gotchas:**

- **Inline CSS**: No pseudo-classes, media queries; verbose; harder to maintain at scale.
- **CSS/Sass files**: Global scope; naming clashes (e.g. `.button` in multiple files); requires discipline (BEM, etc.).
- **CSS Modules**: Extra `.module.css` convention; some learning curve for teams unfamiliar with it.
- **CSS-in-JS**: Runtime overhead; larger bundle; vendor lock-in; SSR considerations.
- **Tailwind**: Long class strings; HTML can look busy; requires build setup.
- **UI libraries**: Opinionated design; bundle size; customization can be cumbersome.

**When to Consider Alternatives:**

- For a small prototype — inline CSS or a single global CSS file is fine.
- For medium-to-large apps with many components — prefer CSS Modules or Tailwind to avoid global scope issues.
- When you need heavy theming and dynamic styles — CSS-in-JS (Styled Components, Emotion) can be useful.
- When you want to ship quickly and don't need a custom design — UI libraries (MUI, Chakra, Mantine) are a good fit.
- For Worldwise — the project currently has no styling; the next lesson will likely choose one approach (e.g. CSS Modules or Tailwind) and implement it.

---

### ⚙️ 208.2 Updating code/theory according the context:

#### **Summary**

- Section 208.2 introduces the different styling options available in React applications.
- It does not modify code; it provides a conceptual overview via a comparison table so developers can choose an approach.
- Subsection 208.2.1 presents the table "Styling Options in React" with columns: Styling Option, Where?, How?, Scope, and Based On.
- The table covers five approaches (Inline CSS, CSS/Sass, CSS Modules, CSS-in-JS, Utility-first) plus UI libraries as an alternative.
- The image highlights that React is styling-agnostic and compares scope (local vs global vs component-level).

---

#### 208.2.1 Styling Options Comparison Table

**Subsection Summary:**

- The image `section17-lecture208-001.png` displays a comparison table titled "STYLING OPTIONS IN REACT".
- A note emphasizes: **"React doesn't care about styling"** — React handles rendering, not styling decisions.
- The table has five rows for: **Inline CSS** (style prop, scope: JSX element, local); **CSS or Sass file** (className, scope: entire app — noted as "global, causes problems"); **CSS Modules** (one file per component, className, scope: component); **CSS-in-JS** (creates new component, scope: component); **Utility-first CSS** e.g. Tailwind (className, scope: JSX element).
- Each row shows WHERE (JSX, external file, etc.), HOW (style prop, className, etc.), SCOPE, and BASED ON (CSS or JavaScript).
- Below the table: **Alternative** — UI libraries (MUI, Chakra UI, Mantine) as an option instead of writing CSS.
- The table helps developers decide which approach fits their project; global CSS is flagged as problematic; component-scoped options (CSS Modules, CSS-in-JS) are highlighted positively.

![Styling Options in React](../img/section17-lecture208-001.png)

---

### 🐞 208.3 Issues:

- **No styling approach implemented**: The Worldwise project has no CSS files, no Tailwind, and no styled-components; all components (PageNav, Homepage, Product, Pricing, PageNotFound) are unstyled.
- **No global styles or reset**: `index.html` and `main.jsx` do not import any CSS; there is no baseline typography, margin reset, or design tokens.
- **PageNav has no visual styling**: The `<nav>`, `<ul>`, and `<li>` elements in `PageNav` have no classes or styles; nav links are plain and not visually distinct from page content.
- **NavLink active state has no CSS**: Although `NavLink` applies an `active` class when the route matches, there is no CSS to style the active link (e.g. bold, underline, background); the active state is effectively invisible.

| Issue | Status | Log/Error |
|---|---|---|
| No CSS or styling system in use | ⚠️ Identified | `package.json`, `src/main.jsx`: No CSS imports, no Tailwind, no styled-components; project is unstyled |
| No global CSS or reset | ⚠️ Identified | `src/main.jsx`: Does not import any CSS file; `index.html` has no linked stylesheet |
| PageNav lacks visual styling | ℹ️ Identified | `src/components/PageNav.jsx:4-17`: `<nav>`, `<ul>`, `<li>` have no `className` or inline styles |
| NavLink active class has no styles | ℹ️ Identified | `src/components/PageNav.jsx:7-14`: `NavLink` adds `.active` but no CSS targets it |

---

### 🧱 208.4 Pending Fixes (TODO)

- [ ] Choose a styling approach for the project (e.g. CSS Modules, Tailwind, or a single global CSS file) and add the necessary setup (e.g. `npm install -D tailwindcss` or create `src/index.css`)
- [ ] Add global styles: create `src/index.css` (or `src/App.css`) and import it in `src/main.jsx` — include at least a basic reset and typography
- [ ] Apply initial styling to `PageNav` in `src/components/PageNav.jsx`: add `className` or inline styles for layout (e.g. flex/grid for nav items) and spacing
- [ ] Add CSS for the `NavLink` active state: define `.active` (or `[aria-current="page"]`) styles in the chosen styling system so the current route is visually highlighted
- [ ] Consider adding `aria-label` to `<nav>` in `src/components/PageNav.jsx` (line 5) and `end` prop to `<NavLink to="/">` (line 8) as noted in Lesson 207 — these complement styling improvements

[↑ top — 208. Lesson 208 — *Styling Options For React Applications*](#-208-lesson-208--styling-options-for-react-applications)


<br>

## 🔧 209. Lesson 209 — *Using CSS Modules*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [209. Lesson 209 — *Using CSS Modules*](#-209-lesson-209--using-css-modules)
- [209.1 Context](#-2091-context)
- [209.2 Updating code/theory according the context](#-2092-updating-codetheory-according-the-context)
  - [209.2.1 PageNav CSS Module File](#20921-pagenav-css-module-file)
  - [209.2.2 PageNav Component Using CSS Module](#20922-pagenav-component-using-css-module)
  - [209.2.3 AppLayout Page Component](#20923-applayout-page-component)
  - [209.2.4 App Route Configuration with AppLayout](#20924-app-route-configuration-with-applayout)
  - [209.2.5 Homepage Link to App Layout](#20925-homepage-link-to-app-layout)
  - [209.2.6 AppNav Component](#20926-appnav-component)
  - [209.2.7 AppLayout with AppNav](#20927-applayout-with-appnav)
  - [209.2.8 AppNav CSS Module File](#20928-appnav-css-module-file)
  - [209.2.9 AppNav Using CSS Module](#20929-appnav-using-css-module)
  - [209.2.10 Homepage with Both Navigation Components](#209210-homepage-with-both-navigation-components)
  - [209.2.11 Global index.css Styles](#209211-global-indexcss-styles)
  - [209.2.12 Importing Global CSS in main.jsx](#209212-importing-global-css-in-mainjsx)
  - [209.2.13 :global() Selector for Unscoped Styles](#209213-global-selector-for-unscoped-styles)
  - [209.2.14 Applying Global Class in Homepage](#209214-applying-global-class-in-homepage)
  - [209.2.15 NavLink Active Class Not Working](#209215-navlink-active-class-not-working)
  - [209.2.16 Using :global(.active) for NavLink Active State](#209216-using-globalactive-for-navlink-active-state)
- [209.3 Issues](#-2093-issues)
- [209.4 Pending Fixes (TODO)](#-2094-pending-fixes-todo)

### 🧠 209.1 Context:

**CSS Modules** is a build-time feature that scopes CSS class names to the component that imports them. Instead of global CSS (where `.button` in one file can conflict with `.button` in another), each CSS Module generates unique, hashed class names (e.g. `PageNav_nav_a3f2k`) so styles are isolated per component. This eliminates naming collisions and makes styles predictable and maintainable.

In the Worldwise project, we use CSS Modules for both `PageNav` and `AppNav` components. Each component has a companion `.module.css` file (e.g. `PageNav.module.css`). We import the generated class names as a JavaScript object (`import styles from "./PageNav.module.css"`) and apply them via `className={styles.nav}`. For third-party or dynamically added classes (such as React Router's `active` class on `NavLink`), we use the `:global()` wrapper so the class is not hashed and stays globally available.

**Key Concepts:**

1. **Module file convention** — CSS Modules use the `.module.css` suffix (e.g. `PageNav.module.css`). The bundler (Vite) detects this convention and processes the file.
2. **Scoped class names** — Selectors like `.nav` become `.PageNav_nav_a3f2k` (or similar) at build time. Only the importing component can use them.
3. **Import as object** — `import styles from "./PageNav.module.css"` yields an object: `{ nav: "PageNav_nav_a3f2k", list: "PageNav_list_x9k2m" }`. Use `className={styles.nav}`.
4. **Named imports** — `import { nav } from "./AppNav.module.css"` is also valid; it imports the hashed value of `.nav` directly.
5. **:global()** — Wraps selectors that must remain unscoped. Use `:global(.active)` when targeting classes added by libraries (e.g. React Router's `active` on `NavLink`).
6. **Global CSS variables** — `:root` variables in `index.css` are available everywhere; CSS Modules can use `var(--color-brand--1)` etc.

**Advantages:**
- No naming collisions; each component's styles are isolated.
- Standard CSS syntax; no new language or runtime.
- Works with Vite out of the box; no extra configuration.
- Co-location: each component has its own `.module.css` next to it.
- Easy to combine with global styles (reset, typography, variables).

**Disadvantages / Gotchas:**
- Requires the `.module.css` naming convention; teams must adopt it consistently.
- Third-party classes (e.g. `active` from NavLink) need `:global()` to be targeted.
- Composing classes or dynamic class names requires `className={`${styles.nav} ${styles.active}`}` or similar.
- No built-in theming; rely on CSS variables or additional tooling.

**When to Consider Alternatives:**
- For very small apps — a single global CSS file may be sufficient.
- When using Tailwind — utility classes provide similar component-level granularity without Modules.
- For heavy theming or dynamic styles — CSS-in-JS (Styled Components, Emotion) might be preferable.
- When integrating UI libraries (MUI, Chakra) — they bring their own styling; CSS Modules may overlap.

In Worldwise, we apply CSS Modules to `PageNav` and `AppNav`, add global styles via `index.css`, and use `:global(.active)` to style the active navigation link from React Router's `NavLink`.

---

### ⚙️ 209.2 Updating code/theory according the context:

#### **Summary**

- Section 209.2 demonstrates how to implement CSS Modules in the Worldwise app for component-scoped styling.
- It solves global CSS conflicts by scoping styles to `PageNav` and `AppNav`, and shows how to target third-party classes (e.g. `active` from `NavLink`) using `:global()`.
- Subsections 209.2.1–209.2.2 set up PageNav with a CSS Module; 209.2.3–209.2.7 introduce AppLayout and AppNav with their own Module; 209.2.8–209.2.10 apply AppNav styles and show both navs together; 209.2.11–209.2.12 add global `index.css`; 209.2.13–209.2.16 explain `:global()` and fix NavLink active styling.
- Images illustrate each step: PageNav with Module, AppNav styled, both navs, global styles, test global class, active not working, and active working with `:global(.active)`.

---

#### 209.2.1 PageNav CSS Module File

**Subsection Summary:**
- Creates `src/components/PageNav.module.css` with `.nav` and `ul` selectors.
- `.nav` sets `background-color: sandybrown`; `ul` gets flex layout with `list-style: none`, `display: flex`, `justify-content: space-between`.
- Establishes the CSS Module file that will be imported by PageNav.
- Note: `ul` is a bare selector; in CSS Modules it gets hashed. Later the structure changes to `.nav ul` for nested styling.
```css
/* src/components/PageNav.module.css */
.nav {
  background-color: sandybrown
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
```

#### 209.2.2 PageNav Component Using CSS Module

**Subsection Summary:**
- Imports the CSS Module as `styles` from `PageNav.module.css` and applies `className={styles.nav}` to the nav element.
- Uses `className={styles.list}` on the `ul` for the flex layout (requires a `.list` class in the Module, or use `.nav ul` in CSS).
- Demonstrates the standard pattern: `import styles from "./Component.module.css"` and `className={styles.className}`.
- The image `section17-lecture209-001.png` shows the PageNav with sandybrown background and styled list after applying the CSS Module.

```jsx
/* src/components/PageNav.jsx */
import { Link, NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
```

![PageNave.module.css added in PageNav component](../img/section17-lecture209-001.png)

---

#### 209.2.3 AppLayout Page Component

**Subsection Summary:**
- Creates the `AppLayout` component in `src/pages/AppLayout.jsx` as a placeholder for the app section.
- Renders a simple `<div>App Layout</div>`; will later contain `AppNav` and nested routes.
- Establishes the structure for the `/app` route that will wrap app-specific views.

```jsx
/* src/pages/AppLayout.jsx */
const AppLayout = () => {
  return <div>App Layout</div>;
};

export default AppLayout;
```

---

#### 209.2.4 App Route Configuration with AppLayout

**Subsection Summary:**
- Imports `AppLayout` and adds a `<Route path="/app" element={<AppLayout />} />` in `App.jsx`.
- Enables navigation to `/app` for the app-specific layout and future nested routes.
- Keeps the existing routes for Homepage, Product, Pricing, and PageNotFound.

```jsx
/* src/App.jsx */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";                      // 👈🏽 ✅ (1)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />} />           {/* 👈🏽 ✅ (2) */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

#### 209.2.5 Homepage Link to App Layout

**Subsection Summary:**
- Updates Homepage to include `PageNav` and a `<Link to="/app">Go to the App Layout</Link>`.
- Replaces or comments out the previous `<Link to="/pricing">`; demonstrates navigation to the new app section.
- Prepares for the distinction between marketing pages (Home, Product, Pricing) and the app area (`/app`).

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";          // 👈🏽 ✅ (1)

const Homepage = () => {
  return (
    <>
      <PageNav />                                     {/* 👈🏽 ✅ (2) */}
      <h1>Worldwise page</h1>
      {/* <Link to="/pricing">Pricing</Link> */}
      <Link to="/app">Go to the App Layout</Link>
    </>
  );
};

export default Homepage;
```

---

#### 209.2.6 AppNav Component

**Subsection Summary:**
- Creates `AppNav` in `src/components/AppNav.jsx` with a semantic `<nav>` and empty `<ul>`.
- Serves as the app-specific navigation (distinct from `PageNav` for marketing pages).
- Will be used inside `AppLayout` and styled via its own CSS Module in subsequent steps.

```jsx
/* src/components/AppNav.jsx */
const AppNav = () => {
  return (
    <nav>
      App Navigation
      <ul></ul>
    </nav>
  );
};

export default AppNav;
```

---

#### 209.2.7 AppLayout with AppNav

**Subsection Summary:**
- Imports `AppNav` into `AppLayout` and renders it above the layout content.
- Provides a consistent app navigation bar for routes under `/app`.
- Demonstrates composing layout components (AppLayout wraps AppNav and main content).

```jsx
/* src/pages/AppLayout.jsx */
import AppNav from "../components/AppNav";          // 👈🏽 ✅ (1)
const AppLayout = () => {
  return (
    <div>
      <AppNav />                                    {/* 👈🏽 ✅ (2) */}
      <p>App Layout</p>
    </div>
  );
};

export default AppLayout;
```

---

#### 209.2.8 AppNav CSS Module File

**Subsection Summary:**
- Creates `src/components/AppNav.module.css` with a `.nav` class.
- Sets `background-color: lightblue` to differentiate AppNav visually from PageNav (sandybrown).
- Both nav components can use `.nav` without conflict because CSS Modules scope the names per file.

```css
/* src/components/AppNav.module.css */
.nav {
  background-color: lightblue;
}
```

---

#### 209.2.9 AppNav Using CSS Module

**Subsection Summary:**
- Uses named import `import { nav } from "./AppNav.module.css"` to get the hashed class for `.nav`.
- Applies `className={nav}` to the `<nav>` element so AppNav receives the lightblue background.
- Demonstrates an alternative to `import styles from` — named imports work when you need only specific classes.
- The image `section17-lecture209-002.png` shows AppNav with the lightblue styling applied.

```jsx
/* src/components/AppNav.jsx */
import { nav } from "./AppNav.module.css";            // 👈🏽 ✅

const AppNav = () => {
  return (
    <nav className={nav}>
      App Navigation
      <ul></ul>
    </nav>
  );
};

export default AppNav;
```

![AppNav with CSS Module styling](../img/section17-lecture209-002.png)

---

#### 209.2.10 Homepage with Both Navigation Components

**Subsection Summary:**
- Adds `AppNav` alongside `PageNav` to the Homepage for demonstration purposes.
- Shows that both components can use the same class name `.nav` in their respective Modules without conflict — each gets a unique hashed class.
- The image `section17-lecture209-003.png` illustrates both navigation bars with distinct backgrounds (sandybrown and lightblue) on the same page.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";            // 👈🏽 ✅ (1)

const Homepage = () => {
  return (
    <>
      <PageNav />
      <AppNav />                                      {/* 👈🏽 ✅ (2) */}
      <h1>Worldwise page</h1>
      {/* <Link to="/pricing">Pricing</Link> */}
      <Link to="/app">Go to the App Layout</Link>
    </>
  );
};

export default Homepage;
```

![both components have nav as style](../img/section17-lecture209-003.png)

---

#### 209.2.11 Global index.css Styles

**Subsection Summary:**
- Creates or updates `src/index.css` with global styles: Leaflet CSS, Manrope font, CSS variables (`:root`), reset, typography, form elements, and CTA styles.
- CSS variables (e.g. `--color-brand--1`, `--color-dark--1`) are available in all CSS Modules via `var(--variable-name)`.
- Source: [index.css repo link](https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/11-worldwise/starter/index.css)

```css
/* src/index.css */
/* Taken from getting started guide at: https://leafletjs.com/examples/quick-start/ */
@import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
@import "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap";

/* These CSS variables are global, so they are available in all CSS modules */
:root {
  --color-brand--1: #ffb545;
  --color-brand--2: #00c46a;

  --color-dark--0: #242a2e;
  --color-dark--1: #2d3439;
  --color-dark--2: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: #d6dee0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
  color: var(--color-light--2);
  font-weight: 400;
  line-height: 1.6;
}

label {
  font-size: 1.6rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-light--3);
  transition: all 0.2s;
}

input:focus {
  outline: none;
  background-color: #fff;
}

.cta:link,
.cta:visited {
  display: inline-block;
  background-color: var(--color-brand--2);
  color: var(--color-dark--1);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 5px;
}

/*
"importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as `styles`"
  },
*/
```

---

#### 209.2.12 Importing Global CSS in main.jsx

**Subsection Summary:**
- Adds `import "./index.css"` in `src/main.jsx` so global styles apply to the entire app.
- The import order ensures global styles load before the app renders; CSS Modules still scope their own classes.
- The image `section17-lecture209-004.png` shows the app after global styles (Manrope font, colors, reset) are applied.

```jsx
/* src/main.jsx */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";                                     // 👈🏽 ✅

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

![after global style](../img/section17-lecture209-004.png)

---

#### 209.2.13 :global() Selector for Unscoped Styles

**Subsection Summary:**
- Adds `:global(.test)` to `PageNav.module.css` to demonstrate how to target a class that is not hashed by the Module.
- `:global(.className)` keeps the selector globally available; useful when you need to style elements with fixed class names (e.g. from libraries or shared markup).
- Answers the question: *How can we use a module style class as a global style?* — by wrapping the selector in `:global()`.

```css
/* src/components/PageNav.module.css */
.nav {
  background-color: sandybrown
}

.nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

:global(.test) {                                            // 👈🏽 ✅
  background-color: red;
}
```

---

#### 209.2.14 Applying Global Class in Homepage

**Subsection Summary:**
- Adds `className="test"` to the `<h1>` in Homepage so it receives the red background from `:global(.test)` in PageNav.module.css.
- Demonstrates that `:global(.test)` applies to any element with `class="test"` anywhere in the app, even though the rule lives in a CSS Module.
- The image `section17-lecture209-005.png` shows the h1 with the red background from the global test class.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <>
      <PageNav />
      <AppNav />
      <h1 className="test">Worldwise page</h1>              {/* 👈🏽 ✅ */}
      {/* <Link to="/pricing">Pricing</Link> */}
      <Link to="/app">Go to the App Layout</Link>
    </>
  );
};

export default Homepage;
```

![test global style](../img/section17-lecture209-005.png)

---

#### 209.2.15 NavLink Active Class Not Working

**Subsection Summary:**
- Attempts to style the active NavLink with `.nav .active` in PageNav.module.css.
- **Problem**: In CSS Modules, `.active` is hashed to something like `PageNav_active_x9k2m`, but React Router's `NavLink` adds the literal class `active` (unhashed) to the DOM. The selector `.nav .active` expects the hashed version, so it does not match.
- The image `section17-lecture209-006.png` shows that the active link styling is not applied.

```css
/* src/components/PageNav.module.css - .nav .active does NOT work for NavLink */
.nav {
  background-color: sandybrown
}

.nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.nav .active {                                                  // 👈🏽 ✅
  background-color: green;
  color: greenyellow;
  padding: 0.25rem 1.75rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: none;
}

:global(.test) {
  background-color: red;
}
```

![active class not working](../img/section17-lecture209-006.png)

---

#### 209.2.16 Using :global(.active) for NavLink Active State

**Subsection Summary:**
- Replaces `.nav .active` with `.nav :global(.active)` so the `.active` class is not hashed and matches the class React Router adds to the DOM.
- The active NavLink now receives the green background, greenyellow text, padding, and border-radius.
- The image `section17-lecture209-007.png` illustrates the working active state styling for the current route.

```css
/* src/components/PageNav.module.css */
.nav {
  background-color: sandybrown;
}

.nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.nav :global(.active) {                                           // 👈🏽 ✅
  background-color: green;
  color: greenyellow;
  padding: 0.25rem 1.75rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: none;
}

:global(.test) {
  background-color: red;
}
```

![global style for active class](../img/section17-lecture209-007.png)

---

### 🐞 209.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| AppNav on Homepage (demo only) | ℹ️ Informational | `src/pages/Homepage.jsx:9`: AppNav is for `/app` layout; consider removing from Homepage for production |
| font-weight: none invalid | ⚠️ Identified | `src/components/PageNav.module.css:14`: Use `font-weight: normal` instead of `font-weight: none` |
| :global(.test) demonstration code | ℹ️ Informational | `src/components/PageNav.module.css`: Remove `:global(.test)` and Homepage `className="test"` when cleaning up |
| PageNav .list vs .nav ul | ℹ️ Low Priority | `src/components/PageNav.module.css`, `PageNav.jsx`: Ensure `.list` exists if used, or use `.nav ul` and remove `className` from ul |

---

### 🧱 209.4 Pending Fixes (TODO)

- [ ] Fix `font-weight: none` to `font-weight: normal` in `src/components/PageNav.module.css` (line 14)
- [ ] Remove `:global(.test)` from `src/components/PageNav.module.css` and `className="test"` from `src/pages/Homepage.jsx` when cleaning up demonstration code
- [ ] Consider removing `AppNav` from Homepage and keeping it only in `AppLayout` for production — update `src/pages/Homepage.jsx` accordingly
- [ ] Reconcile PageNav `ul` styling: if using `styles.list`, add `.list` to `PageNav.module.css`; if using `.nav ul`, remove `className={styles.list}` from the `ul` in `PageNav.jsx`

[↑ top — 209. Lesson 209 — *Using CSS Modules*](#-209-lesson-209--using-css-modules)


<br>

## 🔧 210. Lesson 210 — *Building the Pages*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [210. Lesson 210 — *Building the Pages*](#-210-lesson-210--building-the-pages)
- [210.1 Context](#-2101-context)
- [210.2 Updating code according the context](#-2102-updating-code-according-the-context)
  - [210.2.1 Cities Data Structure](#21021-cities-data-structure)
  - [210.2.2 Public Assets Folder Structure](#21022-public-assets-folder-structure)
  - [210.2.3 AppLayout CSS Module](#21023-applayout-css-module)
  - [210.2.4 Homepage Component with Styles](#21024-homepage-component-with-styles)
  - [210.2.5 Login Page with Form](#21025-login-page-with-form)
  - [210.2.6 PageNotFound Simplified](#21026-pagenotfound-simplified)
  - [210.2.7 Pricing Page (Shared Product Styles)](#21027-pricing-page-shared-product-styles)
  - [210.2.8 Product Page with Styles](#21028-product-page-with-styles)
  - [210.2.9 Homepage with CTA Link](#21029-homepage-with-cta-link)
  - [210.2.10 PageNav CSS Module Update](#210210-pagenav-css-module-update)
  - [210.2.11 Homepage with PageNav](#210211-homepage-with-pagenav)
  - [210.2.12 Logo Component](#210212-logo-component)
  - [210.2.13 PageNav with Logo and Login Link](#210213-pagenav-with-logo-and-login-link)
  - [210.2.14 Logo as Link to Home](#210214-logo-as-link-to-home)
  - [210.2.15 Login Page with PageNav](#210215-login-page-with-pagenav)
  - [210.2.16 Product Page with PageNav](#210216-product-page-with-pagenav)
  - [210.2.17 Pricing Page with PageNav](#210217-pricing-page-with-pagenav)
  - [210.2.18 App Route Configuration with Login](#210218-app-route-configuration-with-login)
- [210.3 Issues](#-2103-issues)
- [210.4 Pending Fixes (TODO)](#-2104-pending-fixes-todo)

### 🧠 210.1 Context:

**Building the Pages** is the phase where placeholder page components are transformed into fully styled, content-rich views that match the Worldwise app design. This lesson applies CSS Modules (introduced in Lesson 209) across all pages, introduces shared data and assets, and establishes the layout and navigation structure that users will see.

The lesson covers: (1) setting up the cities data structure for future app features; (2) organising public assets (images, logo, backgrounds); (3) applying CSS Modules to each page (Homepage, Product, Pricing, Login, PageNotFound, AppLayout); (4) creating the Logo component and updating PageNav with a branded header and Login link; (5) wiring the Login route and ensuring all pages share consistent styling and navigation.

**Key Concepts:**

1. **Page structure and layout** — Each page uses a semantic `<main>` (or wrapper) with a CSS Module for scoped styles. Common patterns include full-viewport backgrounds, flex/grid layouts for content sections, and consistent spacing via design tokens (`var(--color-dark--1)`, etc.).
2. **Shared styles across pages** — The Pricing page reuses `Product.module.css` because both share the same two-column layout (image + text block); this avoids duplication while keeping the option to extract a shared module later.
3. **Logo and branded navigation** — The `Logo` component provides a clickable brand identity; wrapping it in `<Link to="/">` allows users to return home from any page. PageNav is updated to show Logo, Product, Pricing, and Login, with the Login link styled as a CTA button.
4. **Public assets** — Vite serves files from the `public/` folder at the root URL. Images (bg.jpg, img-1.jpg, img-2.jpg, logo.png) are referenced with paths like `/logo.png` or in CSS as `url("/bg.jpg")` (or relative paths depending on setup).
5. **Route coverage** — All main views (/, /product, /pricing, /login, /app, *) are configured in `App.jsx` so users can navigate to each page via links or direct URL entry.
6. **Form state and controlled inputs** — The Login page demonstrates controlled components with `useState` for email and password; values are pre-filled for development but the form is not yet wired to authentication.

**Advantages:**
- Consistent look and feel across all pages using CSS Modules and global design tokens.
- Reusable Logo and PageNav; single source of truth for navigation links.
- Separation of marketing pages (Homepage, Product, Pricing, Login) from the app section (`/app`).
- Data structure (`cities.json`) prepared for future map and city list features.
- Clear, maintainable page components with descriptive class names and layout styles.

**Disadvantages / Gotchas:**
- Pricing reusing Product styles can cause confusion if layout diverges later; consider extracting shared layout styles.
- Background image paths in CSS Modules must resolve correctly (e.g. `/bg.jpg` for public assets).
- `PageNav` is still duplicated per page; consider a layout wrapper to reduce repetition.
- Typo in CTA text ("noew" instead of "now") and possible export naming mismatch in Pricing (e.g. exporting `Product` instead of `Pricing`).

**When to Consider Alternatives:**
- For very different page layouts — give each page its own CSS Module instead of sharing.
- For complex form validation — integrate a form library (React Hook Form, Formik) or validation schema.
- For image optimization — use a loader or CDN for production assets.
- For layout nesting — consider React Router nested routes with shared layouts to avoid repeating PageNav.

In Worldwise, this lesson completes the visual foundation of the app: all pages have real content, styled layouts, the Logo, PageNav, and the Login route. The `/app` layout remains a placeholder for future map and city features.

---

### ⚙️ 210.2 Updating code according the context:

#### **Summary**

- Section 210.2 walks through the step-by-step implementation of all Worldwise pages, from data and asset setup to full page layouts and route configuration.
- It transforms placeholder components into styled, content-rich views using CSS Modules, introduces the Logo component, updates PageNav with new links and styles, and adds the Login page and route.
- Subsections 210.2.1–210.2.2 set up data and assets; 210.2.3–210.2.9 build each page’s layout and styles; 210.2.10–210.2.14 refine PageNav and Logo; 210.2.15–210.2.18 add PageNav to remaining pages and configure the Login route.
- Images illustrate the Homepage with CTA, the Homepage with PageNav, and the final route overview.

---

#### 210.2.1 Cities Data Structure

**Subsection Summary:**
- Defines the `cities.json` data structure in `data/` with an array of city objects.
- Each city has `cityName`, `country`, `emoji`, `date`, `notes`, `position` (lat/lng), and `id`.
- Prepares mock data for future map and city list features; not yet consumed by any component.
- Establishes the schema that the app will use when displaying visited cities.
```json
/* data/cities.json */
{
  "cities": [
    {
      "cityName": "Lisbon",
      "country": "Portugal",
      "emoji": "🇵🇹",
      "date": "2027-10-31T15:59:59.138Z",
      "notes": "My favorite city so far!",
      "position": {
        "lat": 38.727881642324164,
        "lng": -9.140900099907554
      },
      "id": 73930385
    },
    {
      "cityName": "Madrid",
      "country": "Spain",
      "emoji": "🇪🇸",
      "date": "2027-07-15T08:22:53.976Z",
      "notes": "",
      "position": {
        "lat": 40.46635901755316,
        "lng": -3.7133789062500004
      },
      "id": 17806751
    },
    {
      "cityName": "Berlin",
      "country": "Germany",
      "emoji": "🇩🇪",
      "date": "2027-02-12T09:24:11.863Z",
      "notes": "Amazing 😃",
      "position": {
        "lat": 52.53586782505711,
        "lng": 13.376933665713324
      },
      "id": 98443197
    }
  ]
}
```

---

#### 210.2.2 Public Assets Folder Structure

**Subsection Summary:**
- Lists the public assets in the `public/` folder: `bg.jpg`, `icon.png`, `img-1.jpg`, `img-2.jpg`, `logo.png`.
- Vite serves these at the root; reference them as `/bg.jpg`, `/logo.png`, etc.
- `bg.jpg` is used as the Homepage background; `img-1.jpg` and `img-2.jpg` for Product and Pricing; `logo.png` for the Logo component.
- Keeps assets separate from source code for correct caching and deployment.

```
18-worldwise/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── README.md
│
├── data/
│   └── cities.json
│
├── public/
│   ├── bg.jpg
│   ├── icon.png
│   ├── img-1.jpg
│   ├── img-2.jpg
│   └── logo.png
│
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── assets/
    │   └── react.svg
    │
    ├── components/
    │   ├── AppLayout.module.css
    │   ├── AppNav.jsx
    │   ├── AppNav.module.css
    │   ├── Logo.jsx
    │   ├── Logo.module.css
    │   ├── PageNav.jsx
    │   └── PageNav.module.css
    │
    └── pages/
        ├── AppLayout.jsx
        ├── AppLayout.module.css
        ├── Homepage.jsx
        ├── Homepage.module.css
        ├── Login.jsx
        ├── Login.module.css
        ├── PageNotFound.jsx
        ├── Pricing.jsx
        ├── Product.jsx
        └── Product.module.css
```

---

#### 210.2.3 AppLayout CSS Module

**Subsection Summary:**
- Creates `AppLayout.module.css` with `.app` class for the app layout container.
- Sets full viewport height (`100vh`), padding, flex layout, and `overscroll-behavior-y: none` to prevent scroll chaining.
- Establishes the base layout styles for the `/app` section where the map and city list will live.
- Uses `display: flex` and `position: relative` for future sidebar/content layout.

```css
/* src/pages/AppLayout.module.css */
.app {
  height: 100vh;
  padding: 2.4rem;
  overscroll-behavior-y: none;
  display: flex;
  position: relative;
}
```

---

#### 210.2.4 Homepage Component with Styles

**Subsection Summary:**
- Rebuilds the Homepage with `Homepage.module.css` for full-page hero layout.
- Uses a background image (bg.jpg) with dark overlay, centred content section with flex, large typography.
- Does not yet include PageNav or CTA link; introduces the core layout and styling structure.
- The `.homepage` class handles height, margin, background, and padding; `.homepage section` centres the text block.

```jsx
/* src/pages/Homepage.jsx */
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>
  );
}
```

and its style file:

```css
/* src/pages/Homepage.module.css */
.homepage {
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
}

.homepage section {
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
}

.homepage h1 {
  font-size: 4.5rem;
  line-height: 1.3;
}

.homepage h2 {
  width: 90%;
  font-size: 1.9rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
}

```

---

#### 210.2.5 Login Page with Form

**Subsection Summary:**
- Creates the Login page with controlled email and password inputs using `useState`.
- Pre-fills values ("jack@example.com", "qwerty") for development; form has no submit handler yet.
- Uses `Login.module.css` for dark background, centred form box, row layout for labels and inputs.
- Demonstrates a typical login form structure with semantic labels and accessible `htmlFor`/`id` associations.

```jsx
/* src/pages/Login.jsx */
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
```

and its style file:

```css
/* src/pages/Login.module.css */
.login {
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: calc(100vh - 5rem);
}

.form {
  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Different from other form */
  width: 48rem;
  margin: 8rem auto;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

---

#### 210.2.6 PageNotFound Simplified

**Subsection Summary:**
- Simplifies PageNotFound to a minimal `<div>` with an "Page not found 😢" heading.
- Removes PageNav and previous layout; serves as a basic 404 fallback.
- Will be styled or enhanced later; for now provides a clear fallback for unmatched routes.
- Uses function declaration `export default function PageNotFound()` for consistency with other pages.

```jsx
/* src/pages/PageNotFound.jsx */
export default function PageNotFound() {
  return (
    <div>
      <h1>Page not found 😢</h1>
    </div>
  );
}
```

---

#### 210.2.7 Pricing Page (Shared Product Styles)

**Subsection Summary:**
- Creates the Pricing page reusing `Product.module.css` for the same two-column grid layout.
- Renders "Simple pricing. Just $9/month" heading and Lorem ipsum text with `img-2.jpg` on the right.
- **Note:** The example code exports `function Product` instead of `Pricing`; this is a naming bug — the component should be named and exported as `Pricing`.
- Shares layout and styling with Product page; only content differs (text and image order).

```jsx
/* src/pages/Pricing.jsx */
// Uses the same styles as Product
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
```

---

#### 210.2.8 Product Page with Styles

**Subsection Summary:**
- Builds the Product page with `Product.module.css` for two-column grid layout.
- Image on left (`img-1.jpg`), text block on right with "About WorldWide." heading and paragraphs.
- Uses `clamp()` for responsive section width; grid with `1fr 1fr` for equal columns.
- Establishes the base layout that Pricing will reuse via the same CSS Module.

```jsx
/* src/pages/Product.jsx */
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
```

and its style file:

```css
/* src/pages/Product.module.css */
.product {
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: calc(100vh - 5rem);
}

.product section {
  width: clamp(80rem, 80%, 90rem);
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  align-items: center;
}

.product img {
  width: 100%;
}

.product h2 {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 3rem;
}

.product p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.product section a {
  margin-top: 2rem;
}
```

---

#### 210.2.9 Homepage with CTA Link

**Subsection Summary:**
- Adds a `<Link to="/app" className="cta">` CTA button to the Homepage section.
- The `cta` class is defined globally in `index.css`; provides branded button styling.
- **Note:** The example has a typo: "Start tracking noew" should be "Start tracking now".
- The image `section17-lecture210-001.png` illustrates the Homepage with the CTA button.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">Start tracking noew</Link>
      </section>
    </main>
  );
}
```

![homepage updated](../img/section17-lecture210-001.png)

---

#### 210.2.10 PageNav CSS Module Update

**Subsection Summary:**
- Updates `PageNav.module.css` to replace the earlier sandybrown demo styles with production-ready navigation styles.
- Uses flex layout, dark background for links, `:global(.active)` for NavLink active state (brand color highlight).
- Adds `.ctaLink` for the Login button with branded background and contrast styling.
- Removes the old margin/padding styles; nav aligns with logo and uses `gap` for spacing between items.
- The first code block shows styles to replace; the second shows the final `PageNav.module.css` content.

* Replace this updated code:
```jsx
/*  */
.nav {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.nav ul {
  list-style: none;
  display: flex;
  background-color: var(--color-dark--2);
  border-radius: 7px;
}

.nav a:link,
.nav a:visited {
  display: block;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  border-radius: 5px;
}

/* CSS Modules feature */
.nav a:global(.active) {
  background-color: var(--color-dark--0);
}
```

and this file

```css
/* src/components/PageNav.module.css */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.nav a:link,
.nav a:visited {
  text-decoration: none;
  color: var(--color-light--2);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
}

/* CSS Modules feature */
.nav a:global(.active) {
  color: var(--color-brand--2);
}

a.ctaLink:link,
  a.ctaLink:visited {
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
}
```

---

#### 210.2.11 Homepage with PageNav

**Subsection Summary:**
- Adds `PageNav` to the Homepage component above the hero section.
- Imports `PageNav` and renders it inside the `<main>`; users can navigate to Product, Pricing, or Login from the landing page.
- The image `section17-lecture210-002.png` shows the Homepage with PageNav, Logo, and CTA.
- Ensures consistent navigation across the marketing pages.

```jsx
/* src/pages/Homepage.jsx */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";          // 👈🏽 ✅

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">Start tracking noew</Link>
      </section>
    </main>
  );
}
```


![homepage updated](../img/section17-lecture210-002.png)

---

#### 210.2.12 Logo Component

**Subsection Summary:**
- Creates the `Logo` component in `src/components/Logo.jsx` displaying the WorldWise logo image.
- Uses `Logo.module.css` for height (`5.2rem`); logo is not yet wrapped in a link.
- Renders `<img src="/logo.png" alt="WorldWise logo" className={styles.logo} />` for accessibility.
- Establishes the brand identity element that will be placed in PageNav.

```jsx
/* src/components/Logo.jsx */
import styles from "./Logo.module.css";

function Logo() {
  return <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />;
}

export default Logo;
```

and its style file:

```css
/* src/components/Logo.module.css */
.logo {
  height: 5.2rem;
}
```

---

#### 210.2.13 PageNav with Logo and Login Link

**Subsection Summary:**
- Integrates `Logo` into PageNav on the left; nav links (Product, Pricing) and Login (with `ctaLink` style) on the right.
- Removes the Home NavLink since the Logo will serve as the home link once wrapped in `<Link>`.
- Adds Login NavLink with `className={styles.ctaLink}` for CTA button styling.
- Reorders links; Logo provides brand and home navigation in a single element.

```jsx
/* src/components/PageNav.jsx */
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";                                        // 👈🏽 ✅
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.list}>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>                      {/* 👈🏽 ✅ */}
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
```

---

#### 210.2.14 Logo as Link to Home

**Subsection Summary:**
- Wraps the Logo image in `<Link to="/">` so clicking the logo navigates to the Homepage.
- Imports `Link` from `react-router-dom`; maintains client-side navigation without full reload.
- Provides an expected UX pattern: logo as home link is common on most websites.
- Keeps the same visual appearance; only adds navigational behaviour.

```jsx
/* src/components/Logo.jsx */
import { Link } from "react-router-dom";                          // 👈🏽 ✅
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">                                                 {/* 👈🏽 ✅ */}
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  )
}

export default Logo;
```

---

#### 210.2.15 Login Page with PageNav

**Subsection Summary:**
- Adds `PageNav` to the Login page above the form for consistent navigation.
- Users can navigate back to Product, Pricing, or Home (via Logo) from the login screen.
- Follows the same pattern as Homepage and Product: import PageNav and render at the top of `<main>`.
- Ensures Login is part of the shared navigation experience.

```jsx
/* src/pages/Login.jsx */
import { useState } from "react";
import PageNav from '../components/PageNav'                         // 👈🏽 ✅
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={styles.login}>
      <PageNav />                                                   {/* 👈🏽 ✅ */}
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
```

---

#### 210.2.16 Product Page with PageNav

**Subsection Summary:**
- Adds `PageNav` to the Product page above the two-column content section.
- Provides navigation to Product (current), Pricing, and Login from the About page.
- Keeps the existing layout and styling; PageNav appears at the top of the dark background.
- Completes the marketing pages’ shared navigation pattern.

```jsx
/* src/pages/Product.jsx */
import PageNav from '../components/PageNav'                           // 👈🏽 ✅
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />                                                     {/* 👈🏽 ✅ */}
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
```

---

#### 210.2.17 Pricing Page with PageNav

**Subsection Summary:**
- Adds `PageNav` to the Pricing page above the two-column content section.
- Reuses `Product.module.css`; layout mirrors Product with image and text swapped.
- **Note:** The code exports `Product` instead of `Pricing`; should be renamed for clarity.
- Provides navigation to Product, Pricing (current), and Login from the pricing view.

```jsx
/* src/pages/Pricing.jsx */
// Uses the same styles as Product
import PageNav from '../components/PageNav'                           // 👈🏽 ✅
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />                                                     {/* 👈🏽 ✅ */}
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
```

---

#### 210.2.18 App Route Configuration with Login

**Subsection Summary:**
- Adds the Login route to `App.jsx`: `<Route path="/login" element={<Login />} />`.
- Imports `Login` from `./pages/Login` and places the route before the catch-all.
- Completes the route configuration: `/`, `/product`, `/pricing`, `/login`, `/app`, and `*` (PageNotFound).
- The image `section17-lecture210-003.png` illustrates the full route structure and app overview.

```jsx
/* src/App.jsx */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from './pages/Login'                                   // 👈🏽 ✅

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />                 {/* 👈🏽 ✅ */}
        <Route path="/app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

![](../img/section17-lecture210-003.png)

---

### 🐞 210.3 Issues:

- **Pricing.jsx exports wrong component name**: The Pricing page defines and exports `function Product` instead of `Pricing`; the import in App.jsx works (Pricing from "./pages/Pricing") but the component name is misleading and violates naming conventions.
- **Typo in Homepage CTA**: "Start tracking noew" should be "Start tracking now" in the Link text.
- **Background image path may fail**: `Homepage.module.css` uses `url("bg.jpg")`; for Vite public assets, the path should typically be `url("/bg.jpg")` so the browser resolves it from the root.
- **PageNav lacks `.list` class in CSS**: PageNav.jsx uses `className={styles.list}` on the `ul`, but `PageNav.module.css` only defines `.nav` and `.nav ul`; the `.list` class may be missing or redundant.
- **Image paths in Product/Pricing**: Using `src="img-1.jpg"` and `src="img-2.jpg"` without leading slash; Vite serves public assets at root, so `/img-1.jpg` is more explicit for assets in `public/`.
- **PageNav duplicated on every page**: Each page imports and renders PageNav individually; consider a shared layout component to reduce repetition.

| Issue | Status | Log/Error |
|---|---|---|
| Pricing exports Product instead of Pricing | ⚠️ Identified | `src/pages/Pricing.jsx:5`: `export default function Product` should be `export default function Pricing` |
| CTA typo "noew" | ⚠️ Identified | `src/pages/Homepage.jsx:20`: `<Link ...>Start tracking noew</Link>` — change to "now" |
| Background url may not resolve | ⚠️ Identified | `src/pages/Homepage.module.css:8`: `url("bg.jpg")` — consider `url("/bg.jpg")` for public folder |
| PageNav `.list` class | ℹ️ Low Priority | `src/components/PageNav.jsx:9`, `PageNav.module.css`: Verify `.list` exists or use `.nav ul` only |
| Image paths without leading slash | ℹ️ Informational | `src/pages/Product.jsx:9`, `Pricing.jsx:22`: `img-1.jpg`, `img-2.jpg` — `/img-1.jpg` more explicit |
| PageNav duplication | ℹ️ Low Priority | All pages in `src/pages/`: Consider layout wrapper in `App.jsx` |

---

### 🧱 210.4 Pending Fixes (TODO)

- [ ] Fix Pricing component name: change `export default function Product` to `export default function Pricing` in `src/pages/Pricing.jsx` (line 5)
- [ ] Fix typo in Homepage CTA: change "noew" to "now" in `src/pages/Homepage.jsx` (line 20)
- [ ] Verify background image path: update `url("bg.jpg")` to `url("/bg.jpg")` in `src/pages/Homepage.module.css` (line 8) if the image does not load
- [ ] Reconcile PageNav `ul` styling: ensure `.list` exists in `PageNav.module.css` or remove `className={styles.list}` from `src/components/PageNav.jsx` (line 9)
- [ ] Consider using leading slash for public images: update `src="img-1.jpg"` to `src="/img-1.jpg"` in Product and Pricing pages for clarity
- [ ] Consider lifting PageNav to a shared layout component in `App.jsx` to avoid importing it in every page

[↑ top — 210. Lesson 210 — *Building the Pages*](#-210-lesson-210--building-the-pages)


<br>

## 🔧 211. Lesson 211 — *Building the App Layout*

[🧳 Section 17: *React Route: Building Single-Page Applications (SPA)*](#-section-17-react-route-building-single-page-applications-spa)

### 📑 Table of Contents:
- [211. Lesson 211 — *Building the App Layout*](#-211-lesson-211--building-the-app-layout)
- [211.1 Context](#-2111-context)
- [211.2 Updating code according the context](#-2112-updating-code-according-the-context)
  - [211.2.1 Sidebar Component](#21121-sidebar-component)
  - [211.2.2 Sidebar CSS Module](#21122-sidebar-css-module)
  - [211.2.3 AppLayout with Sidebar](#21123-applayout-with-sidebar)
  - [211.2.4 Map Component](#21124-map-component)
  - [211.2.5 AppLayout with Sidebar and Map](#21125-applayout-with-sidebar-and-map)
  - [211.2.6 List of Updated Component Files](#21126-list-of-updated-component-files)
- [211.3 Issues](#-2113-issues)
- [211.4 Pending Fixes (TODO)](#-2114-pending-fixes-todo)

### 🧠 211.1 Context:

**Building the App Layout** is the phase where the `/app` route transforms from a placeholder into a structured two-column layout: a **Sidebar** on the left (containing Logo, AppNav, city list placeholder, and footer) and a **Map** area on the right. This layout provides the main user interface for the Worldwise app—the map view for visited cities and the sidebar for navigation and city controls.

The App Layout uses a flex-based structure defined in `AppLayout.module.css`: the container has `display: flex`, with the Sidebar taking a fixed `flex-basis` and the Map occupying the remaining space via `flex: 1`. This pattern is common in dashboards and map-based applications where a persistent sidebar holds controls while the main content area displays dynamic or interactive content.

**Key Concepts:**

1. **Layout composition** — `AppLayout` composes smaller components (`Sidebar`, `Map`) rather than rendering all UI inline. Each component has a single responsibility; the page orchestrates them.
2. **Flex layout for app shell** — The parent uses `display: flex`; the Sidebar gets `flex-basis: 56rem` (fixed width); the Map gets `flex: 1` to fill remaining space. This ensures responsive behaviour without media queries at this stage.
3. **Sidebar structure** — The Sidebar is a vertical column (`flex-direction: column`) containing Logo, AppNav, a placeholder for the city list, and a footer. The footer uses `margin-top: auto` to stick to the bottom, leveraging flexbox behaviour.
4. **Map placeholder** — The Map component is initially a styled container; later lessons will integrate Leaflet or similar for the actual map. The CSS Module uses `:global()` for Leaflet-specific classes when the map library is added.
5. **Separation of marketing vs app UI** — Marketing pages (Homepage, Product, Pricing, Login) use `PageNav`; the app section (`/app`) uses `AppNav` inside the Sidebar. This keeps navigation context-specific.
6. **CSS Modules for layout** — `AppLayout`, `Sidebar`, and `Map` each use their own `.module.css` file for scoped styles, avoiding conflicts and keeping layout logic co-located.

**Advantages:**
- Clear visual hierarchy: sidebar for controls, map for content.
- Reusable Sidebar; can be extended with city list, forms, and filters without touching Map.
- Flex layout is simple to reason about and adjusts well for different viewport sizes (with future responsive tweaks).
- Footer pinned to bottom via `margin-top: auto` without absolute positioning.
- Prepared for Leaflet integration: `Map.module.css` already includes `:global()` overrides for Leaflet popup styling.

**Disadvantages / Gotchas:**
- Sidebar width (`56rem`) is fixed; on small screens it may consume too much space; responsive breakpoints will be needed later.
- AppNav is still a placeholder with minimal content; needs NavLinks and styling to match the app context.
- Import paths in Sidebar use `../components/Logo` despite being in `components/`; `./Logo` would be simpler and more consistent.
- "List of cities" is a static `<p>` placeholder; the city list component will replace it in subsequent lessons.

**When to Consider Alternatives:**
- For collapsible or resizable sidebars — consider state for sidebar width or a layout library.
- For very narrow viewports — use a drawer or bottom sheet instead of a persistent sidebar.
- For complex nested layouts — consider CSS Grid or a layout component library (e.g. react-grid-layout).
- If the map requires full viewport — the Sidebar could be overlayed or toggled rather than always visible.

In Worldwise, this lesson completes the app shell: users navigating to `/app` see the Sidebar (Logo, AppNav, footer) and the Map area, ready for data integration and interactive map features in later lessons.

---

### ⚙️ 211.2 Updating code according the context:

#### **Summary**

- Section 211.2 demonstrates how to build the App Layout for the `/app` route by introducing the Sidebar and Map components and composing them in `AppLayout`.
- It solves the problem of a placeholder app section by providing a real two-column layout: Sidebar (navigation, city list placeholder, footer) and Map (interactive content area).
- Subsections 211.2.1–211.2.2 define the Sidebar component and its CSS Module; 211.2.3 integrates Sidebar into AppLayout; 211.2.4 defines the Map component; 211.2.5 composes both in AppLayout; 211.2.6 lists the full set of component files introduced or updated in this lesson.
- The image `section17-lecture211-001.png` illustrates the final App Layout with Sidebar and Map.

---

#### 211.2.1 Sidebar Component

**Subsection Summary:**
- Creates the `Sidebar` component in `src/components/Sidebar.jsx`.
- Renders a vertical layout containing Logo, AppNav, a "List of cities" placeholder paragraph, and a footer with dynamic copyright year.
- Uses CSS Modules (`Sidebar.module.css`) for scoped styling.
- Establishes the left-hand column of the app layout; Logo and AppNav provide brand and app-specific navigation; the footer uses `margin-top: auto` to stay at the bottom.

```jsx
/* src/components/Sidebar.jsx */
import styles from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar
```

---

#### 211.2.2 Sidebar CSS Module

**Subsection Summary:**
- Creates `src/components/Sidebar.module.css` with `.sidebar`, `.footer`, and `.copyright` classes.
- `.sidebar` sets fixed width (`flex-basis: 56rem`), dark background, padding, flex column layout, and full height minus top padding.
- `.footer` uses `margin-top: auto` to push the copyright to the bottom of the flex container.
- `.copyright` styles the footer text with smaller font size and muted colour.
- Ensures the Sidebar has a distinct visual identity and correct flex behaviour within the App Layout.

```css
/* src/components/Sidebar.module.css */
.sidebar {
  flex-basis: 56rem;
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 3.5rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 4.8rem);
}

.footer {
  margin-top: auto;
}

.copyright {
  font-size: 1.2rem;
  color: var(--color-light--1);
}
```

---

#### 211.2.3 AppLayout with Sidebar

**Subsection Summary:**
- Replaces the previous AppNav-only layout in `AppLayout` with the new `Sidebar` component.
- Removes or comments out direct `AppNav` and placeholder text; imports and renders `Sidebar` inside the `.app` container.
- The `.app` class in `AppLayout.module.css` provides `display: flex`, so Sidebar appears as the first flex child.
- Prepares for the Map component to be added as the second flex child in the next step.

```jsx
/* src/pages/AppLayout.jsx */
// import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import styles from './AppLayout.module.css';
const AppLayout = () => {
  return (
    <div className={styles.app}>
      {/* <AppNav />
      <p>App Layout</p> */}
      <Sidebar />
    </div>
  );
};

export default AppLayout;
```

---

#### 211.2.4 Map Component

**Subsection Summary:**
- Creates the `Map` component in `src/components/Map.jsx` as a placeholder for the future map view.
- Renders a `div` with `mapContainer` class; displays "Map" text for now.
- Uses `Map.module.css` for layout: `flex: 1`, full height, dark background, `position: relative` for future overlay elements.
- Prepares the structure for Leaflet integration; `Map.module.css` already includes `:global()` overrides for Leaflet popup styling (background, typography, brand colour accents).

```jsx
/* src/components/Map.jsx */
import styles from './Map.module.css';
const Map = () => {
  return (
    <div className={styles.mapContainer}>
      Map
    </div>
  )
}

export default Map;
```

---

#### 211.2.5 AppLayout with Sidebar and Map

**Subsection Summary:**
- Adds the `Map` component to `AppLayout` alongside the `Sidebar`.
- Both components render inside the flex container; Sidebar has `flex-basis: 56rem`, Map has `flex: 1` from its CSS Module.
- Produces the final two-column layout: sidebar on the left, map area on the right.
- The image `section17-lecture211-001.png` illustrates the complete Worldwise app layout with Sidebar and Map visible.

```jsx
/* src/pages/AppLayout.jsx */
import Sidebar from "../components/Sidebar";
import Logo from './Logo'
import AppNav from './AppNav'
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
```

![worldwise app](../img/section17-lecture211-001.png)

---

#### 211.2.6 List of Updated Component Files

**Subsection Summary:**
- Lists all component files introduced or updated as part of Lesson 211 and the broader app build.
- Includes layout components (Sidebar, Map), UI components (Button, Form, User, City, CityItem, CountryItem), feedback components (Message, Spinner, SpinnerFullPage), and their associated CSS Modules.
- Serves as a reference for the full component inventory; some components (e.g. City, Form, User) may be used in later lessons for city list and user features.
- **Note:** Corrected typo `Buttom.module.ccs` → `Button.module.css` and `City.modules.css` → `City.module.css`; `User.module.csss` → `User.module.css`.

Other updated components files:

```
- components/Button.module.css
- components/City.jsx
- components/City.module.css
- components/CityItem.jsx
- components/CityItem.module.css
- components/CityList.module.css
- components/CountryItem.jsx
- components/CountryItem.module.css
- components/CountryList.module.css
- components/Form.jsx
- components/Form.module.css
- components/Map.jsx
- components/Map.module.css
- components/Message.jsx
- components/Message.module.css
- components/Sidebar.jsx
- components/Sidebar.module.css
- components/Spinner.jsx
- components/Spinner.module.css
- components/SpinnerFullPage.jsx
- components/SpinnerFullPage.module.css
- components/User.jsx
- components/User.module.css
```

---

### 🐞 211.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Redundant import paths in Sidebar | ℹ️ Low Priority | `src/components/Sidebar.jsx:2-3`: Use `./Logo` and `./AppNav` instead of `../components/Logo` and `../components/AppNav` |
| AppNav is placeholder only | ⚠️ Identified | `src/components/AppNav.jsx`: Renders "App Navigation" and empty `<ul>`; needs NavLinks for Cities, Countries, Account |
| City list not integrated | ⚠️ Identified | `src/components/Sidebar.jsx:11`: Static `<p>List of cities</p>`; CityList/CityItem components exist but not used |
| Logo links to / vs /app | ℹ️ Informational | `src/components/Logo.jsx`: Links to `/`; consider whether app users should navigate to `/app` from within the app |
| Leaflet styles without map | ℹ️ Informational | `src/components/Map.module.css`: `:global()` Leaflet overrides have no effect until Leaflet is integrated |

---

### 🧱 211.4 Pending Fixes (TODO)

- [ ] Simplify Sidebar imports: change `../components/Logo` to `./Logo` and `../components/AppNav` to `./AppNav` in `src/components/Sidebar.jsx` (lines 2-3)
- [ ] Implement AppNav with NavLinks for app routes (e.g. Cities, Countries, Account) and apply appropriate styling in `src/components/AppNav.jsx`
- [ ] Replace static "List of cities" placeholder with `CityList` (and `CityItem`) in `src/components/Sidebar.jsx` (line 11) once data fetching is set up
- [ ] Integrate Leaflet map in `src/components/Map.jsx` so `Map.module.css` Leaflet `:global()` styles take effect
- [ ] Consider responsive breakpoints for Sidebar width (`56rem`) in `src/components/Sidebar.module.css` for smaller viewports

[↑ top — 211. Lesson 211 — *Building the App Layout*](#-211-lesson-211--building-the-app-layout)















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