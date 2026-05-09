import { useState } from "react";
import clsx from "clsx";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";

const ITEMS = [
  {
    icon: "🎓",
    title: "Якісна освіта",
    desc: "Топ-44 університет України за рейтингом якості освіти.",
    color: "#a684ff",
  },
  {
    icon: "🌐",
    title: "Міжнародні партнерства",
    desc: "Понад 40 партнерств з університетами та компаніями світу.",
    color: "#51a2ff",
  },
  {
    icon: "⚡",
    title: "Сучасна інфраструктура",
    desc: "Нові лабораторії, ІТ-центри та спортивні об'єкти на кампусі.",
    color: "#a684ff",
  },
];

function WhyCard({ item }: { item: (typeof ITEMS)[0] }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="grad-border card-hover rounded-2xl px-6 py-7 backdrop-blur-xl sm:px-7 sm:py-9 sm:rounded-3xl"
      style={{
        background: h ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        transition: "background 200ms",
      }}
    >
      <div
        className="mb-6 flex items-center justify-center text-2xl"
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: `${item.color}22`,
          border: `1px solid ${item.color}44`,
          color: item.color,
        }}
      >
        {item.icon}
      </div>
      <h3
        className="font-display font-extrabold text-white"
        style={{
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          marginBottom: 12,
        }}
      >
        {item.title}
      </h3>
      <p
        className="text-[14px] text-white/45"
        style={{ lineHeight: 1.65 }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function WhySection({ className = "" }: { className?: string }) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden py-16 lg:py-24",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, #08090f 0%, #0c0d18 50%, #08090f 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(81,162,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container-v2 relative">
        <Reveal mode="up" className="mb-12 text-center lg:mb-16">
          <div className="mb-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-500">
            — Наші переваги
          </div>
          <h2
            className="font-display font-black text-white"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Чому обирають <span className="text-grad">НУВГП</span>
          </h2>
        </Reveal>
        <Stagger
          className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3"
          stagger={0.12}
          amount={0.2}
        >
          {ITEMS.map((item) => (
            <StaggerItem key={item.title} mode="up">
              <WhyCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
