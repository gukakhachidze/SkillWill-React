import {
  useState,
  useTransition,
  useDeferredValue,
  useId,
  lazy,
  Suspense,
  memo,
  useEffect,
} from "react";

// ─── Simulated "heavy" component (lazy loaded) ───────────────────────────────
// In a real project this would be: const HeavyChart = lazy(() => import('./HeavyChart'))
// Here we simulate it with a dynamic import of an inline module via a factory.

// We'll simulate lazy loading by creating a component that does expensive work
const HeavyDataGrid = memo(({ filter }: { filter: string }) => {
  // Simulate 2000 rows of data
  const ALL_ITEMS = Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: ["Electronics", "Clothing", "Food", "Books", "Sports"][i % 5],
    price: ((i * 37 + 99) % 500) + 1,
    stock: (i * 13) % 200,
  }));

  const deferred = useDeferredValue(filter);
  const isStale = deferred !== filter;

  const filtered = ALL_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(deferred.toLowerCase()) ||
      item.category.toLowerCase().includes(deferred.toLowerCase())
  ).slice(0, 50);

  return (
    <div style={{ opacity: isStale ? 0.5 : 1, transition: "opacity 0.2s" }}>
      <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "12px" }}>
        {isStale ? "⏳ Filtering..." : `✅ Showing ${filtered.length} of ${ALL_ITEMS.length} items`}
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ background: "#1e293b" }}>
              {["#", "Name", "Category", "Price", "Stock"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "8px 12px",
                    textAlign: "left",
                    color: "#64748b",
                    fontWeight: 600,
                    borderBottom: "1px solid #334155",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  background: i % 2 === 0 ? "#0f172a" : "#111827",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1e3a5f")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = i % 2 === 0 ? "#0f172a" : "#111827")
                }
              >
                <td style={{ padding: "7px 12px", color: "#475569" }}>{item.id}</td>
                <td style={{ padding: "7px 12px", color: "#e2e8f0" }}>{item.name}</td>
                <td style={{ padding: "7px 12px" }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      background: {
                        Electronics: "#1e3a5f",
                        Clothing: "#3b1f4f",
                        Food: "#1a3f2d",
                        Books: "#3f2d1a",
                        Sports: "#3f1a1a",
                      }[item.category],
                      color: {
                        Electronics: "#60a5fa",
                        Clothing: "#c084fc",
                        Food: "#34d399",
                        Books: "#fbbf24",
                        Sports: "#f87171",
                      }[item.category],
                    }}
                  >
                    {item.category}
                  </span>
                </td>
                <td style={{ padding: "7px 12px", color: "#4ade80" }}>${item.price}</td>
                <td style={{ padding: "7px 12px", color: item.stock < 20 ? "#f87171" : "#94a3b8" }}>
                  {item.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

// ─── Lazy-loaded wrapper (simulates code-splitting) ───────────────────────────
// We use React.lazy with a Promise factory to simulate lazy loading
const LazyHeavyPanel = lazy(
  () =>
    new Promise<{ default: typeof HeavyDataGrid }>((resolve) => {
      // Simulate network delay for the "chunk"
      setTimeout(() => resolve({ default: HeavyDataGrid }), 1200);
    })
);

// ─── useId Email Form (reusable, each instance gets unique IDs) ───────────────
function EmailForm({ title }: { title: string }) {
  const id = useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const subjectId = `${id}-subject`;
  const messageId = `${id}-message`;

  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "9px 12px",
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "6px",
    color: "#e2e8f0",
    fontSize: "0.875rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "4px",
    color: "#94a3b8",
    fontSize: "0.8rem",
    fontWeight: 500,
  };

  if (submitted) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: "8px" }}>✅</div>
        <p style={{ color: "#4ade80", fontWeight: 600 }}>Message sent!</p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            marginTop: "8px",
            color: "#60a5fa",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "0.85rem",
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, marginBottom: "16px" }}>
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <div>
          <label htmlFor={nameId} style={labelStyle}>
            Full Name
          </label>
          <input
            id={nameId}
            type="text"
            placeholder="John Doe"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#334155")}
          />
        </div>
        <div>
          <label htmlFor={emailId} style={labelStyle}>
            Email
          </label>
          <input
            id={emailId}
            type="email"
            placeholder="john@example.com"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#334155")}
          />
        </div>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <label htmlFor={subjectId} style={labelStyle}>
          Subject
        </label>
        <input
          id={subjectId}
          type="text"
          placeholder="How can we help?"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
          onBlur={(e) => (e.target.style.borderColor = "#334155")}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor={messageId} style={labelStyle}>
          Message
        </label>
        <textarea
          id={messageId}
          placeholder="Write your message..."
          rows={4}
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
          onBlur={(e) => (e.target.style.borderColor = "#334155")}
        />
      </div>
      <button
        onClick={() => setSubmitted(true)}
        style={{
          width: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #3b82f6, #6366f1)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: "0.9rem",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Send Message →
      </button>
    </div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  label,
  badge,
  children,
}: {
  label: string;
  badge: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: "12px",
        padding: "28px",
        marginBottom: "28px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span
          style={{
            background: "#1e293b",
            color: "#60a5fa",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "999px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </span>
        <h2 style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [showGrid, setShowGrid] = useState(false);
  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilter(e.target.value);
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020817",
        color: "#e2e8f0",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        padding: "32px 20px",
      }}
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              color: "#475569",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            React 18 · TypeScript Demo
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 8px",
            }}
          >
            Modern React Patterns
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            Lazy Loading · useTransition · useDeferredValue · useId
          </p>
        </header>

        {/* ── Section 1: Lazy Loading ── */}
        <Section label="Lazy Loading + Suspense" badge="Feature 1">
          <p
            style={{
              color: "#64748b",
              fontSize: "0.875rem",
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            კომპონენტი იტვირთება მხოლოდ ღილაკზე დაჭერის შემდეგ — სიმულირებულია 1.2 წამიანი ქსელური
            დაყოვნება.
          </p>

          {!showGrid ? (
            <button
              onClick={() => setShowGrid(true)}
              style={{
                padding: "12px 28px",
                background: "linear-gradient(135deg, #1e40af, #4f46e5)",
                border: "1px solid #3b82f6",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(59,130,246,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ⚡ Load Heavy Data Grid (2000 rows)
            </button>
          ) : (
            <Suspense
              fallback={
                <div style={{ padding: "40px", textAlign: "center", color: "#475569" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "3px solid #1e293b",
                      borderTopColor: "#3b82f6",
                      animation: "spin 0.8s linear infinite",
                      margin: "0 auto 12px",
                    }}
                  />
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  <p style={{ fontSize: "0.85rem" }}>Loading chunk… (simulated 1.2s delay)</p>
                </div>
              }
            >
              {/* ── Section 2: Transition + Deferred Value (inside lazy component) ── */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}
                >
                  <input
                    type="text"
                    placeholder="🔍 Filter by name or category…"
                    onChange={handleFilterChange}
                    style={{
                      flex: 1,
                      padding: "9px 14px",
                      background: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#e2e8f0",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                  {isPending && (
                    <span style={{ color: "#6366f1", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                      ⏳ Transition…
                    </span>
                  )}
                </div>
                <p style={{ color: "#475569", fontSize: "0.75rem" }}>
                  Filter uses <code style={{ color: "#818cf8" }}>useTransition</code> +{" "}
                  <code style={{ color: "#818cf8" }}>useDeferredValue</code> — UI stays responsive
                </p>
              </div>
              <LazyHeavyPanel filter={filter} />
            </Suspense>
          )}
        </Section>

        {/* ── Section 3: useId — Two form instances ── */}
        <Section label="useId() — Same Form, Unique IDs" badge="Feature 2 & 3">
          <p
            style={{
              color: "#64748b",
              fontSize: "0.875rem",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            ქვემოთ ერთი და იგივე <code style={{ color: "#818cf8" }}>{"<EmailForm />"}</code>{" "}
            კომპონენტი რენდერდება ორ სხვადასხვა ადგილას.
            <code style={{ color: "#c084fc" }}> useId()</code> გარანტიას იძლევა, რომ label-ებისა და
            input-ების <code style={{ color: "#c084fc" }}>id</code>-ები უნიკალური იქნება.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "#0c1929",
                border: "1px solid #1e3a5f",
                borderRadius: "10px",
                padding: "22px",
              }}
            >
              <EmailForm title="📬 Contact Sales" />
            </div>
            <div
              style={{
                background: "#0c1929",
                border: "1px solid #1e3a5f",
                borderRadius: "10px",
                padding: "22px",
              }}
            >
              <EmailForm title="🛠️ Technical Support" />
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "14px 16px",
              background: "#1a1f2e",
              borderRadius: "8px",
              borderLeft: "3px solid #6366f1",
            }}
          >
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: "#818cf8" }}>DevTools-ში:</strong> გახსენი Inspector → ორივე
              ფორმის input-ების id-ები განსხვავებული იქნება (e.g.{" "}
              <code style={{ color: "#c084fc" }}>:r0:-name</code> vs{" "}
              <code style={{ color: "#c084fc" }}>:r1:-name</code>), რაც a11y-სა და SSR-ს პრობლემებს
              გამორიცხავს.
            </p>
          </div>
        </Section>

        {/* Footer */}
        <footer
          style={{ textAlign: "center", color: "#334155", fontSize: "0.78rem", paddingTop: "8px" }}
        >
          React 18 · TypeScript · lazy() · Suspense · useTransition · useDeferredValue · useId
        </footer>
      </div>
    </div>
  );
}
