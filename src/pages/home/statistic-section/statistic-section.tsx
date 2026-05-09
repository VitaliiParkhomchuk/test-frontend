import clsx from "clsx";
import { useLoadNamespace } from "@/shared/hooks";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";
import { loadTranslations } from "./locales";

const STATS = [
  { id: 1, title: "Top 1",   description: "у Рівному",       big: true  },
  { id: 2, title: "Top 44",  description: "в Україні",       big: true  },
  { id: 3, title: "3 400+",  description: "Студентів",       big: false },
  { id: 4, title: "29 000+", description: "Випускників",     big: false },
  { id: 5, title: "40+",     description: "Міжн. партнерів", big: false },
];

type StatItem = (typeof STATS)[number];

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div
      className={clsx(
        "grad-border card-hover rounded-2xl px-4 py-5 text-center backdrop-blur-xl sm:px-5 sm:py-7 sm:rounded-[20px]",
        stat.big
          ? "bg-gradient-to-br from-violet-500/[0.12] to-blue-500/[0.12]"
          : "bg-white/[0.03]"
      )}
    >
      <div
        className="font-display font-black"
        style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
          letterSpacing: "-0.04em",
          marginBottom: 8,
        }}
      >
        {stat.big ? <span className="text-grad">{stat.title}</span> : stat.title}
      </div>
      {stat.description && (
        <div className="text-[12px] text-white/35">{stat.description}</div>
      )}
    </div>
  );
}

export default function StatisticSection({ className = "" }: { className?: string }) {
  useLoadNamespace("home", loadTranslations);

  return (
    <section
      className={clsx(
        "relative overflow-hidden border-y border-violet-500/[0.10] bg-gradient-to-br from-violet-500/[0.06] to-blue-500/[0.06] py-14 lg:py-20",
        className
      )}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "-50%",
          left: "30%",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(166,132,255,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-v2 relative">
        <Reveal mode="up" className="mb-10 text-center lg:mb-14">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-500">
            — Університет у цифрах
          </div>
          <h2
            className="font-display font-black"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Ми в <span className="text-grad">цифрах</span>
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
          stagger={0.08}
          amount={0.15}
        >
          {STATS.map((s) => (
            <StaggerItem key={s.id} mode="scale">
              <StatCard stat={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
