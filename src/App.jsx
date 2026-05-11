
import { useState, useEffect, useMemo, useCallback } from "react";
import { sops, deviceSetups, templates } from "./docsData";


function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);
  return active;
}


function Sidebar({ sops, deviceSetups, templates, activeSlug, onSelect, search, onSearchChange }) {
  const filteredSops = useMemo(
    () => sops.filter((d) => d.title.toLowerCase().includes(search.toLowerCase())),
    [sops, search]
  );
  const filteredDevices = useMemo(
    () => deviceSetups.filter((d) => d.title.toLowerCase().includes(search.toLowerCase())),
    [deviceSetups, search]
  );
  const filteredTemplates = useMemo(
    () => templates.filter((t) => t.title.toLowerCase().includes(search.toLowerCase())),
    [templates, search]
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search docs & templates..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="sidebar-search-input"
        />
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-heading">📋 SOPs</h3>
        {filteredSops.length === 0 && (
          <p className="sidebar-empty">No SOPs found</p>
        )}
        {filteredSops.map((doc) => (
          <button
            key={doc.slug}
            className={`sidebar-link${activeSlug === doc.slug ? " active" : ""}`}
            onClick={() => onSelect(doc.slug)}
          >
            <span className="sidebar-link-icon">📄</span>
            <div>
              <span className="sidebar-link-title">{doc.title}</span>
              {doc.steps && (
                <span className="sidebar-link-meta">{doc.steps} steps</span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-heading">🔧 Network Device Setup</h3>
        {filteredDevices.length === 0 && (
          <p className="sidebar-empty">No device setups found</p>
        )}
        {filteredDevices.map((doc) => (
          <button
            key={doc.slug}
            className={`sidebar-link${activeSlug === doc.slug ? " active" : ""}`}
            onClick={() => onSelect(doc.slug)}
          >
            <span className="sidebar-link-icon">🔧</span>
            <div>
              <span className="sidebar-link-title">{doc.title}</span>
              {doc.steps && (
                <span className="sidebar-link-meta">{doc.steps} steps</span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-heading">⚙️ Templates</h3>
        {filteredTemplates.length === 0 && (
          <p className="sidebar-empty">No templates found</p>
        )}
        {filteredTemplates.map((tpl) => (
          <button
            key={tpl.slug}
            className={`sidebar-link${activeSlug === tpl.slug ? " active" : ""}`}
            onClick={() => onSelect(tpl.slug)}
          >
            <span className="sidebar-link-icon">📝</span>
            <div>
              <span className="sidebar-link-title">{tpl.title}</span>
              <span className="sidebar-link-meta">Config template</span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

function DocViewer({ item, allItems }) {
  const [copied, setCopied] = useState(false);

  const copyConfig = useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  if (!item) {
    return (
      <div className="doc-viewer-empty">
        <div className="doc-viewer-empty-icon">📚</div>
        <h2>Welcome to DocHub</h2>
        <p>Select a document or template from the sidebar to get started.</p>
        <p className="doc-viewer-empty-sub">
          All SOPs and configuration templates in one place.
        </p>
      </div>
    );
  }

  const isTemplate = item.type === "template";

  return (
    <article className="doc-viewer" id={item.slug}>
      <div className="doc-header">
        <div className="doc-badge">{isTemplate ? "⚙️ Template" : "📋 SOP"}</div>
        <h1>{item.title}</h1>
        {item.description && <p className="doc-desc">{item.description}</p>}
        {item.steps && (
          <p className="doc-meta">{item.steps} steps • Last updated {item.lastUpdated}</p>
        )}
        {!item.steps && item.lastUpdated && (
          <p className="doc-meta">Last updated {item.lastUpdated}</p>
        )}
      </div>

      {isTemplate && (
        <div className="template-actions">
          <button
            className="btn btn-primary"
            onClick={() => copyConfig(item.content)}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Config
              </>
            )}
          </button>
        </div>
      )}

      <div className="doc-content">
        {isTemplate ? (
          <pre className="code-block">
            <code>{item.content}</code>
          </pre>
        ) : (
          <div
            className="sop-content"
            dangerouslySetInnerHTML={{ __html: renderSOP(item) }}
          />
        )}
      </div>
    </article>
  );
}

function renderSOP(doc) {
  if (!doc.sections) return `<p>${doc.content || ""}</p>`;

  return doc.sections
    .map((section) => {
      let html = "";
      if (section.type === "heading") {
        html += `<h2>${section.text}</h2>`;
      } else if (section.type === "step") {
        html += `
          <div class="sop-step">
            <div class="sop-step-number">${section.number}</div>
            <div class="sop-step-body">
              <h3>${section.title}</h3>
              ${section.content ? `<p>${section.content}</p>` : ""}
              ${section.code ? `<pre class="code-block"><code>${escapeHtml(section.code)}</code></pre>` : ""}
              ${section.note ? `<div class="sop-note">💡 ${section.note}</div>` : ""}
              ${section.warning ? `<div class="sop-warning">⚠️ ${section.warning}</div>` : ""}
            </div>
          </div>`;
      } else if (section.type === "paragraph") {
        html += `<p>${section.text}</p>`;
      } else if (section.type === "list") {
        html += `<ul>${section.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      } else if (section.type === "note") {
        html += `<div class="sop-note">💡 ${section.text}</div>`;
      } else if (section.type === "warning") {
        html += `<div class="sop-warning">⚠️ ${section.text}</div>`;
      }
      return html;
    })
    .join("");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}


export default function App() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [activeSlug, setActiveSlug] = useState(sops[0]?.slug || "");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const allItems = useMemo(() => [...sops, ...deviceSetups, ...templates], []);
  const sectionIds = useMemo(() => allItems.map((i) => i.slug), [allItems]);
  const active = useActiveSection(sectionIds);

  const currentItem = useMemo(
    () => allItems.find((i) => i.slug === activeSlug) || null,
    [allItems, activeSlug]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (active && active !== activeSlug) {
      setActiveSlug(active);
    }
  }, [active]);

  useEffect(() => {
    document.getElementById(activeSlug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  }, [activeSlug]);

  return (
    <>
      <style>{css}</style>
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Header */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-wrap">
          <a href="/" className="nav-brand">PMC Network Team</a>
          <button
            className="hamburger"
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <span className={`ham-line${sidebarOpen ? " open" : ""}`} />
            <span className={`ham-line${sidebarOpen ? " open" : ""}`} />
            <span className={`ham-line${sidebarOpen ? " open" : ""}`} />
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="app-layout container">
        <div className={`sidebar-overlay${sidebarOpen ? " open" : ""}`} onClick={() => setSidebarOpen(false)} />
        <div className={`sidebar-wrap${sidebarOpen ? " open" : ""}`}>
          <Sidebar
  sops={sops}
  deviceSetups={deviceSetups}
  templates={templates}
  activeSlug={activeSlug}
  onSelect={setActiveSlug}
  search={search}
  onSearchChange={setSearch}
/>
        </div>
        <main className="main-content">
          <DocViewer item={currentItem} allItems={allItems} />
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-name">Power Mac Center — Network Team</p>
        <p>Documentation Repository · SOPs & Templates</p>
      </footer>
    </>
  );
}


const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Quicksand:wght@400;500;600&display=swap');

:root {
  --mint-50:   #f0faf7;
  --mint-100:  #d5f2ea;
  --mint-600:  #0f766e;
  --mint-700:  #115e57;
  --mint-800:  #0d4d47;
  --text:      #1e293b;
  --muted:     #64748b;
  --gold:      #c9a54a;
  --gold-soft: rgba(201,165,74,0.28);
  --gold-glow: rgba(201,165,74,0.15);
  --ruby:      #be123c;
  --border:    rgba(15,118,110,0.14);
  --surface:   rgba(255,255,255,0.72);
  --ff-head:   "Montserrat", system-ui, sans-serif;
  --ff-body:   "Quicksand", "Segoe UI", system-ui, sans-serif;
  --radius:    16px;
  --shadow-sm: 0 2px 10px rgba(17,94,89,0.07);
  --shadow-md: 0 6px 24px rgba(17,94,89,0.11);
  --shadow-lg: 0 14px 44px rgba(17,94,89,0.14);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--ff-body);
  font-weight: 500;
  color: var(--text);
  line-height: 1.7;
  background: linear-gradient(160deg, #f4fbf8 0%, #edf6f2 55%, #f9f5ee 100%);
  min-height: 100vh;
}

h1, h2, h3, h4 { font-family: var(--ff-head); letter-spacing: -0.025em; }

/* Progress bar */
.progress-bar {
  position: fixed; top: 0; left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--mint-600), var(--gold));
  z-index: 200;
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(15,118,110,0.4);
}

/* Header */
.site-header {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(18px) saturate(1.8);
  -webkit-backdrop-filter: blur(18px) saturate(1.8);
  background: rgba(244,251,248,0.82);
  border-bottom: 1px solid var(--gold-soft);
  transition: box-shadow 0.35s ease, background 0.35s ease;
}
.site-header.scrolled {
  box-shadow: var(--shadow-md);
  background: rgba(244,251,248,0.96);
}

.container { width: min(1200px, 94%); margin: 0 auto; }

.header-wrap {
  display: flex; align-items: center;
  justify-content: space-between;
  min-height: 4rem;
}

.nav-brand {
  font-family: var(--ff-head); font-weight: 800;
  font-size: 1.05rem; letter-spacing: 0.14em;
  color: var(--mint-700); text-decoration: none;
  padding: 0.3rem 0.7rem;
  border: 2px solid var(--gold-soft);
  border-radius: 10px;
  flex-shrink: 0;
}
.nav-brand:hover {
  border-color: var(--gold);
  background: var(--gold-glow);
  box-shadow: 0 2px 10px var(--gold-glow);
}

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 6px; z-index: 110;
}
.ham-line {
  display: block; width: 22px; height: 2px;
  background: var(--mint-700); border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}
.ham-line.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.ham-line.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
.ham-line.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* App Layout */
.app-layout {
  display: flex; gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  min-height: calc(100vh - 4rem - 100px);
}

.sidebar-overlay { display: none; }

.sidebar-wrap {
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 5rem;
  align-self: flex-start;
  max-height: calc(100vh - 6rem);
  overflow-y: auto;
}

.main-content {
  flex: 1;
  min-width: 0;
}

/* Sidebar */
.sidebar {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.sidebar-search {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--gold-soft);
  color: var(--muted);
}
.sidebar-search-input {
  flex: 1; border: none; background: transparent;
  font-family: var(--ff-body); font-size: 0.85rem;
  color: var(--text); outline: none;
}
.sidebar-search-input::placeholder { color: var(--muted); }

.sidebar-section { padding: 0.6rem 0; }
.sidebar-section + .sidebar-section { border-top: 1px solid var(--gold-soft); }

.sidebar-heading {
  font-family: var(--ff-head); font-size: 0.7rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted); padding: 0.5rem 1rem 0.3rem;
}

.sidebar-link {
  display: flex; align-items: flex-start; gap: 0.6rem;
  width: 100%; text-align: left;
  padding: 0.6rem 1rem;
  border: none; background: transparent;
  font-family: var(--ff-body); cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  border-left: 3px solid transparent;
}
.sidebar-link:hover { background: var(--gold-glow); }
.sidebar-link.active {
  background: rgba(15,118,110,0.06);
  border-left-color: var(--mint-600);
}
.sidebar-link-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
.sidebar-link-title {
  display: block; font-size: 0.85rem; font-weight: 600;
  color: var(--text); line-height: 1.3;
}
.sidebar-link-meta {
  display: block; font-size: 0.72rem;
  color: var(--muted); margin-top: 1px;
}
.sidebar-empty {
  padding: 0.5rem 1rem; font-size: 0.82rem;
  color: var(--muted); font-style: italic;
}

/* Doc Viewer */
.doc-viewer {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
  padding: 2rem 2.5rem;
  scroll-margin-top: 5rem;
}

.doc-viewer-empty {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; text-align: center;
  padding: 5rem 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
  color: var(--muted);
}
.doc-viewer-empty-icon { font-size: 4rem; margin-bottom: 1rem; }
.doc-viewer-empty h2 { font-family: var(--ff-head); color: var(--text); margin-bottom: 0.5rem; }
.doc-viewer-empty-sub { font-size: 0.9rem; margin-top: 0.5rem; }

.doc-header { margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--gold-soft); }
.doc-badge {
  display: inline-block;
  font-family: var(--ff-head); font-size: 0.68rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 0.65rem;
  padding: 0.2rem 0.65rem;
  border: 1px solid var(--gold-soft);
  border-radius: 20px;
  background: rgba(201,165,74,0.08);
}
.doc-header h1 {
  font-size: 1.6rem; font-weight: 800; color: var(--text);
  margin-bottom: 0.4rem; line-height: 1.2;
}
.doc-desc { color: var(--muted); max-width: 65ch; font-size: 0.95rem; }
.doc-meta { color: var(--muted); font-size: 0.82rem; margin-top: 0.4rem; }

/* SOP Content */
.sop-content h2 {
  font-size: 1.15rem; font-weight: 700; color: var(--mint-700);
  margin: 1.8rem 0 1rem;
  display: flex; align-items: center; gap: 0.45rem;
}
.sop-content h2::after {
  content: ''; display: inline-block;
  width: 28px; height: 3px; border-radius: 3px;
  background: linear-gradient(90deg, var(--mint-600), var(--gold));
}
.sop-content p { color: #334155; margin-bottom: 0.8rem; line-height: 1.8; }
.sop-content ul { margin-bottom: 0.8rem; padding-left: 1.5rem; }
.sop-content ul li { color: #334155; margin: 0.3rem 0; font-size: 0.93rem; }

.sop-step {
  display: flex; gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.2rem 1.3rem;
  background: rgba(15,118,110,0.03);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}
.sop-step:hover {
  box-shadow: var(--shadow-sm);
  border-color: rgba(15,118,110,0.22);
}
.sop-step-number {
  flex-shrink: 0;
  width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--mint-700), var(--mint-600));
  color: #fff;
  font-family: var(--ff-head); font-weight: 700; font-size: 0.85rem;
}
.sop-step-body { flex: 1; min-width: 0; }
.sop-step-body h3 {
  font-family: var(--ff-head); font-size: 0.95rem;
  font-weight: 700; color: var(--text); margin-bottom: 0.3rem;
}
.sop-step-body p { font-size: 0.9rem; color: #334155; margin-bottom: 0.5rem; }

.sop-note {
  margin: 0.8rem 0; padding: 0.7rem 1rem;
  background: rgba(15,118,110,0.05);
  border-left: 3px solid var(--mint-600);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-size: 0.88rem; color: var(--mint-700);
}
.sop-warning {
  margin: 0.8rem 0; padding: 0.7rem 1rem;
  background: rgba(201,165,74,0.08);
  border-left: 3px solid var(--gold);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-size: 0.88rem; color: #8b6914;
}

/* Code blocks */
.code-block {
  background: #1e293b;
  color: #d5f2ea;
  padding: 1.2rem 1.4rem;
  border-radius: var(--radius);
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace;
  font-size: 0.84rem;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0.8rem 0;
}
.code-block code { font-family: inherit; }

/* Template actions */
.template-actions {
  display: flex; gap: 0.5rem;
  margin-bottom: 1.2rem;
}

/* Buttons */
.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  text-decoration: none;
  font-family: var(--ff-body); font-weight: 700; font-size: 0.9rem;
  padding: 0.65rem 1.3rem; border-radius: 12px;
  transition: transform 0.22s ease, box-shadow 0.22s ease,
              background 0.22s ease, border-color 0.22s ease;
  border: 2px solid transparent; cursor: pointer;
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-primary {
  background: linear-gradient(135deg, var(--mint-700), var(--mint-600));
  color: #fff;
  box-shadow: 0 4px 14px rgba(15,118,110,0.28);
}
.btn-primary:hover {
  background: linear-gradient(135deg, var(--mint-800), var(--mint-700));
  box-shadow: 0 6px 22px rgba(15,118,110,0.36);
}

/* Footer */
.footer {
  margin: 0 auto 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--gold-soft);
  color: var(--muted); font-size: 0.9rem; text-align: center;
}
.footer p { margin: 0.25rem 0; }
.footer-name {
  font-family: var(--ff-head); font-weight: 700;
  color: var(--text); font-size: 1rem; margin-bottom: 0.4rem;
}

/* Mobile */
@media (max-width: 860px) {
  .hamburger { display: flex; }
  .app-layout { flex-direction: column; }

  .sidebar-overlay {
    display: block; position: fixed; inset: 0; z-index: 90;
    background: rgba(0,0,0,0.3);
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .sidebar-overlay.open { opacity: 1; pointer-events: auto; }

  .sidebar-wrap {
    position: fixed; top: 4rem; left: 0; bottom: 0;
    width: 280px; z-index: 95;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto; max-height: none;
  }
  .sidebar-wrap.open { transform: translateX(0); }
  .sidebar { border-radius: 0; border-left: none; }
  .doc-viewer { padding: 1.5rem 1.2rem; }
}

@media (max-width: 480px) {
  .sop-step { flex-direction: column; gap: 0.6rem; }
  .doc-viewer { padding: 1.2rem 1rem; }
}
`;
