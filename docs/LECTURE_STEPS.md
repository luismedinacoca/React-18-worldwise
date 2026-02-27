

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