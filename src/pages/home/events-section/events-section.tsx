import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ROUTES } from "@/shared/model/routes";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";

type NewsItem = {
  id: number;
  date: string;
  tag: string;
  title: string;
  image: string;
};

const NEWS: NewsItem[] = [
  {
    id: 1,
    date: "28 квіт 2025",
    tag: "Наука",
    title:
      "Студенти НУВГП перемогли на Всеукраїнській олімпіаді з програмування",
    image: "/images/students-lecture.jpg",
  },
  {
    id: 2,
    date: "21 квіт 2025",
    tag: "Партнерство",
    title: "Підписано угоду про співпрацю з провідними IT-компаніями",
    image: "/images/noosphere-workshop.jpg",
  },
  {
    id: 3,
    date: "15 квіт 2025",
    tag: "Освіта",
    title: "Відкрито нову лабораторію штучного інтелекту",
    image: "/images/students-workshop.jpg",
  },
  {
    id: 4,
    date: "10 квіт 2025",
    tag: "Рейтинг",
    title: "НУВГП увійшов до рейтингу найкращих університетів",
    image: "/images/students-stage.jpg",
  },
];

function Pill({ children, grad }: { children: React.ReactNode; grad?: boolean }) {
  return (
    <span
      className="inline-block"
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 12px",
        borderRadius: 999,
        background: grad
          ? "linear-gradient(90deg,rgba(166,132,255,0.2),rgba(81,162,255,0.2))"
          : "rgba(255,255,255,0.07)",
        border: grad
          ? "1px solid rgba(166,132,255,0.35)"
          : "1px solid rgba(255,255,255,0.1)",
        color: grad ? "#c4a8ff" : "rgba(255,255,255,0.5)",
      }}
    >
      {children}
    </span>
  );
}

function SeeAll() {
  const [h, setH] = useState(false);
  return (
    <Link
      to={`${ROUTES.EVENTS}#news`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.04em] transition-all duration-150"
      style={{
        gap: h ? 12 : 8,
        color: h ? "#fff" : "rgba(255,255,255,0.4)",
      }}
    >
      Усі новини
      <span style={{ color: h ? "#a684ff" : "rgba(255,255,255,0.3)" }}>↗</span>
    </Link>
  );
}

function NewsFeat({ item }: { item: NewsItem }) {
  const [h, setH] = useState(false);
  return (
    <Link
      to={`${ROUTES.EVENTS}#news`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="grad-border card-hover block overflow-hidden"
      style={{
        borderRadius: 24,
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div
        className="aspect-[16/9] w-full bg-cover bg-center sm:aspect-auto sm:h-[260px]"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      />
      <div className="px-5 py-6 sm:p-7">
        <div className="mb-3.5 flex items-center gap-2.5">
          <Pill grad>{item.tag}</Pill>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            {item.date}
          </span>
        </div>
        <h3
          className="font-display font-bold"
          style={{
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.4,
            color: h ? "#fff" : "rgba(255,255,255,0.9)",
            transition: "color 180ms",
          }}
        >
          {item.title}
        </h3>
        <div
          className="mt-5 inline-flex items-center gap-1.5"
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: h ? "#a684ff" : "rgba(255,255,255,0.3)",
            transition: "color 180ms",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Читати <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}

function NewsRow({ item }: { item: NewsItem }) {
  const [h, setH] = useState(false);
  return (
    <Link
      to={`${ROUTES.EVENTS}#news`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="flex flex-1 items-center"
      style={{
        gap: 16,
        padding: 18,
        borderRadius: 16,
        background: h ? "rgba(166,132,255,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${h ? "rgba(166,132,255,0.2)" : "rgba(255,255,255,0.06)"}`,
        transition: "all 200ms",
      }}
    >
      <div
        className="flex-shrink-0 bg-cover bg-center"
        style={{
          width: 72,
          height: 56,
          borderRadius: 10,
          backgroundImage: `url(${item.image})`,
        }}
      />
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <Pill>{item.tag}</Pill>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
            {item.date}
          </span>
        </div>
        <p
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "0.85rem",
            lineHeight: 1.4,
            color: h ? "#fff" : "rgba(255,255,255,0.75)",
            transition: "color 150ms",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </p>
      </div>
      <span style={{ color: h ? "#a684ff" : "rgba(255,255,255,0.15)", fontSize: 15 }}>
        ›
      </span>
    </Link>
  );
}

export default function EventsSection({ className = "" }: { className?: string }) {
  const featured = NEWS[0];
  const rest = NEWS.slice(1);

  return (
    <section className={clsx("bg-[#0a0b12] py-16 lg:py-24", className)}>
      <div className="container-v2">
        <Reveal mode="up" className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end lg:mb-14">
          <div>
            <div className="mb-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-500">
              — Новини
            </div>
            <h2
              className="font-display font-black leading-none text-white"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Останні <span className="text-grad">події</span>
            </h2>
          </div>
          <SeeAll />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal mode="left" amount={0.15}>
            <NewsFeat item={featured} />
          </Reveal>
          <Stagger className="flex flex-col gap-3" stagger={0.1} amount={0.1}>
            {rest.map((item) => (
              <StaggerItem key={item.id} mode="right">
                <NewsRow item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
