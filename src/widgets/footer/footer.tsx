import clsx from "clsx";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { DEPARTMENTS_DATA } from "@/shared/model/departments-data";

const NAV_COLS: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: "Університет",
    links: [
      { label: "Про нас", to: ROUTES.HISTORY },
      { label: "Кафедри", to: `/department/${DEPARTMENTS_DATA[0].id}` },
      { label: "Новини", to: ROUTES.EVENTS },
      { label: "Контакти", to: ROUTES.CONTACTS },
    ],
  },
  {
    heading: "Вступникам",
    links: [
      { label: "Програми", to: ROUTES.BACHELOR },
      { label: "Умови", to: ROUTES.BACHELOR },
      { label: "Навчання", to: ROUTES.MASTER },
      { label: "Заявка", to: ROUTES.BACHELOR },
    ],
  },
  {
    heading: "Ресурси",
    links: [
      { label: "Бібліотека", to: ROUTES.HOME },
      { label: "Розклад", to: ROUTES.HOME },
      { label: "Кампус", to: ROUTES.GALLERY },
      { label: "Партнери", to: ROUTES.PARTNERS_BUSINESS },
    ],
  },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx(className)}
      style={{
        background: "#060709",
        borderTop: "1px solid rgba(166,132,255,0.08)",
        padding: "72px 0 40px",
      }}
    >
      <div className="container-v2">
        <div
          className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr_1fr_1fr]"
          style={{ gap: 56, marginBottom: 56 }}
        >
          {/* Brand column */}
          <div>
            <Link
              to={ROUTES.HOME}
              className="flex items-center"
              style={{ gap: 12, marginBottom: 20 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #a684ff, #51a2ff)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 14,
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(166,132,255,0.35)",
                }}
              >
                НУ
              </div>
              <div>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  НУВГП
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Університет
                </div>
              </div>
            </Link>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
                maxWidth: 300,
              }}
            >
              Національний університет водного господарства та природокористування,
              вул. Соборна, 11, Рівне.
            </p>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 20,
                }}
              >
                {col.heading}
              </div>
              <div className="flex flex-col" style={{ gap: 12 }}>
                {col.links.map((lk) => (
                  <Link
                    key={lk.label}
                    to={lk.to}
                    className="nav-link"
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}
                  >
                    {lk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: 28,
          }}
        />

        <div className="flex flex-col items-center justify-between sm:flex-row" style={{ gap: 8 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>
            © 2025 НУВГП. Усі права захищено.
          </span>
          <div className="flex" style={{ gap: 24 }}>
            <Link
              to={ROUTES.HOME}
              className="nav-link"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}
            >
              Конфіденційність
            </Link>
            <Link
              to={ROUTES.HOME}
              className="nav-link"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}
            >
              Умови
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
