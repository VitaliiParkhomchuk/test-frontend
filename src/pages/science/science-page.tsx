import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { PageTransition } from "@/widgets";
import { useLoadNamespace } from "@/shared/hooks";
import { ROUTES } from "@/shared/model/routes";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";
import { loadTranslations } from "./locales";

export type SciencePageKind =
  | "publications"
  | "research"
  | "conferences"
  | "grants";

type ActivityStatusKey = "open" | "upcoming" | "completed";

type ScienceActivity = {
  id: number;
  title: string;
  description: string;
  date: string;
  theme: string;
  location: string;
  status: ActivityStatusKey;
  statusLabel: string;
  organizer: string;
  tags: string[];
};

type SciencePageData = {
  eyebrow: string;
  title: string;
  gradientTitle: string;
  intro: string;
  heroImage: string;
  activitiesTitle: string;
  activitiesIntro: string;
  activities: ScienceActivity[];
};

type ScienceLabels = {
  navPublications: string;
  navResearch: string;
  navConferences: string;
  navGrants: string;
  activities: string;
  results: string;
  search: string;
  searchPlaceholder: string;
  date: string;
  theme: string;
  status: string;
  all: string;
  reset: string;
  location: string;
  organizer: string;
  noResultsTitle: string;
  noResultsText: string;
};

const PAGE_HERO_IMAGE: Record<SciencePageKind, string> = {
  publications:
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=80",
  research:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  conferences:
    "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1600&q=80",
  grants:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
};

const ACTIVITY_META: Record<
  SciencePageKind,
  Array<{ date: string; status: ActivityStatusKey }>
> = {
  publications: [
    { date: "2026-05-12", status: "open" },
    { date: "2026-06-03", status: "upcoming" },
    { date: "2026-04-18", status: "completed" },
    { date: "2026-05-28", status: "open" },
  ],
  research: [
    { date: "2026-05-07", status: "open" },
    { date: "2026-05-21", status: "upcoming" },
    { date: "2026-04-09", status: "completed" },
    { date: "2026-06-10", status: "upcoming" },
  ],
  conferences: [
    { date: "2026-05-15", status: "open" },
    { date: "2026-05-30", status: "upcoming" },
    { date: "2026-04-16", status: "completed" },
    { date: "2026-06-18", status: "open" },
  ],
  grants: [
    { date: "2026-05-05", status: "open" },
    { date: "2026-05-23", status: "upcoming" },
    { date: "2026-04-12", status: "completed" },
    { date: "2026-06-07", status: "open" },
  ],
};

const NAV_ITEMS = [
  {
    kind: "publications",
    route: ROUTES.SCIENCE_PUBLICATIONS,
    labelKey: "common.navPublications",
  },
  {
    kind: "research",
    route: ROUTES.SCIENCE_RESEARCH,
    labelKey: "common.navResearch",
  },
  {
    kind: "conferences",
    route: ROUTES.SCIENCE_CONFERENCES,
    labelKey: "common.navConferences",
  },
  {
    kind: "grants",
    route: ROUTES.SCIENCE_GRANTS,
    labelKey: "common.navGrants",
  },
] satisfies Array<{ kind: SciencePageKind; route: string; labelKey: string }>;

const STATUS_KEYS = ["open", "upcoming", "completed"];

function ScienceHero({
  data,
  currentKind,
}: {
  data: SciencePageData;
  currentKind: SciencePageKind;
}) {
  const { t } = useTranslation("science");

  return (
    <section className="relative overflow-hidden bg-[#08090f] pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      <img
        src={data.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[#08090f]/80 to-[#08090f]/60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] -top-[20%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(166,132,255,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(81,162,255,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Stagger className="container-v2 relative z-[1]" stagger={0.08} inView={false}>
        <StaggerItem mode="scale" className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 py-1.5 pl-2 pr-4 backdrop-blur-md">
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] text-white">
            ННКІТІ
          </span>
          <span className="text-[12px] text-white/70">{data.eyebrow}</span>
        </StaggerItem>

        <StaggerItem
          as="h1"
          mode="up"
          className="font-display max-w-5xl font-black text-white"
          style={{
            fontSize: "clamp(2rem, 6.5vw, 5.5rem)",
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
          }}
        >
          {data.title} <span className="text-grad">{data.gradientTitle}</span>
        </StaggerItem>
        <StaggerItem
          as="p"
          mode="up"
          className="mt-6 max-w-2xl text-[14px] leading-relaxed text-white/65 sm:text-[16px]"
          style={{ lineHeight: 1.7 }}
        >
          {data.intro}
        </StaggerItem>

        <StaggerItem mode="up" className="mt-10 flex flex-wrap gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.kind}
              to={item.route}
              className={clsx(
                "rounded-[12px] px-5 py-2.5 text-[13px] font-semibold transition-all duration-200",
                item.kind === currentKind
                  ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-[0_4px_16px_rgba(166,132,255,0.3)]"
                  : "grad-border bg-white/[0.04] text-white/60 backdrop-blur-md hover:bg-white/[0.10] hover:text-white"
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </StaggerItem>
      </Stagger>
    </section>
  );
}

function ActivityCard({
  activity,
  labels,
  dateLocale,
}: {
  activity: ScienceActivity;
  labels: ScienceLabels;
  dateLocale: string;
}) {
  const formattedDate = new Intl.DateTimeFormat(dateLocale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${activity.date}T12:00:00`));

  const statusClasses =
    activity.status === "open"
      ? "border-violet-500/30 bg-violet-500/15 text-violet-200"
      : activity.status === "upcoming"
        ? "border-blue-500/30 bg-blue-500/15 text-blue-200"
        : "border-white/10 bg-white/5 text-white/55";

  return (
    <article className="grad-border card-hover relative grid gap-5 overflow-hidden rounded-[20px] bg-white/[0.03] p-6 backdrop-blur-xl lg:grid-cols-[160px_1fr_auto] lg:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(166,132,255,0.20) 0%, transparent 70%)",
        }}
      />

      <div className="grad-border relative flex flex-col justify-between rounded-[14px] bg-gradient-to-br from-violet-500/[0.10] to-blue-500/[0.06] p-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
          {labels.date}
        </span>
        <span className="text-grad font-display mt-3 text-[18px] font-extrabold leading-tight">
          {formattedDate}
        </span>
      </div>

      <div className="relative min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={clsx(
              "font-display rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.04em]",
              statusClasses
            )}
          >
            {activity.statusLabel}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/55">
            {activity.theme}
          </span>
        </div>

        <h3
          className="font-display font-bold text-white"
          style={{ fontSize: "1.15rem", letterSpacing: "-0.02em" }}
        >
          {activity.title}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-white/55">
          {activity.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {activity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[10px] text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex min-w-[180px] flex-col justify-center gap-2 border-t border-white/[0.06] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
          {labels.location}
        </p>
        <p className="text-[13px] font-semibold text-white">
          {activity.location}
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
          {labels.organizer}
        </p>
        <p className="text-[12px] text-white/55">{activity.organizer}</p>
      </div>
    </article>
  );
}

function ActivitiesSection({
  data,
  labels,
  dateLocale,
}: {
  data: SciencePageData;
  labels: ScienceLabels;
  dateLocale: string;
}) {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(labels.all);
  const [selectedStatus, setSelectedStatus] = useState(labels.all);

  const themes = useMemo(
    () => [
      labels.all,
      ...Array.from(new Set(data.activities.map((a) => a.theme))),
    ],
    [data.activities, labels.all]
  );

  const statuses = useMemo(
    () => [
      labels.all,
      ...STATUS_KEYS.map((status) => ({
        value: status,
        label: labelsByStatus(status, data.activities),
      })),
    ],
    [data.activities, labels.all]
  );

  const filteredActivities = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.activities.filter((activity) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          activity.title,
          activity.description,
          activity.theme,
          activity.location,
          activity.organizer,
          activity.statusLabel,
          ...activity.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesDate =
        selectedDate.length === 0 || activity.date === selectedDate;
      const matchesTheme =
        selectedTheme === labels.all || activity.theme === selectedTheme;
      const matchesStatus =
        selectedStatus === labels.all || activity.status === selectedStatus;

      return matchesSearch && matchesDate && matchesTheme && matchesStatus;
    });
  }, [
    data.activities,
    labels.all,
    search,
    selectedDate,
    selectedStatus,
    selectedTheme,
  ]);

  function resetFilters() {
    setSearch("");
    setSelectedDate("");
    setSelectedTheme(labels.all);
    setSelectedStatus(labels.all);
  }

  const inputClass =
    "h-12 rounded-[12px] border border-white/10 bg-white/[0.04] px-4 text-[13px] text-white placeholder-white/30 outline-none transition focus:border-violet-500/50 focus:bg-white/[0.06]";

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-v2">
        <Reveal mode="up" amount={0.15} className="mb-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end lg:mb-14">
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-500">
              — {labels.activities}
            </div>
            <h2
              className="font-display font-black text-white"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.04em",
              }}
            >
              {data.activitiesTitle}
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
              {data.activitiesIntro}
            </p>
          </div>

          <div className="grad-border rounded-[18px] bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {labels.results}
            </p>
            <p className="font-display mt-2 text-[28px] font-extrabold">
              <span className="text-grad">{filteredActivities.length}</span>
              <span className="text-[14px] text-white/35">
                {" "}
                / {data.activities.length}
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grad-border mb-8 grid gap-3 rounded-[20px] bg-white/[0.03] p-4 backdrop-blur-xl sm:grid-cols-2 sm:p-5 xl:grid-cols-[1.5fr_220px_220px_180px_auto]">
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {labels.search}
            </span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={labels.searchPlaceholder}
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {labels.date}
            </span>
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {labels.theme}
            </span>
            <select
              value={selectedTheme}
              onChange={(event) => setSelectedTheme(event.target.value)}
              className={inputClass}
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {labels.status}
            </span>
            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
              className={inputClass}
            >
              {statuses.map((status) => (
                <option
                  key={typeof status === "string" ? status : status.value}
                  value={typeof status === "string" ? status : status.value}
                >
                  {typeof status === "string" ? status : status.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            className="self-end rounded-[12px] border border-white/15 bg-white/[0.04] px-5 py-3 text-[12px] font-semibold text-white/70 backdrop-blur-md transition hover:bg-white/[0.10] hover:text-white sm:col-span-2 xl:col-span-1"
          >
            {labels.reset}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <Reveal key={activity.id} mode="up" amount={0.15}>
                <ActivityCard
                  activity={activity}
                  labels={labels}
                  dateLocale={dateLocale}
                />
              </Reveal>
            ))
          ) : (
            <div className="grad-border rounded-[20px] bg-white/[0.03] p-10 text-center backdrop-blur-xl">
              <p className="font-display text-[18px] font-bold text-white">
                {labels.noResultsTitle}
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                {labels.noResultsText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function labelsByStatus(status: string, activities: ScienceActivity[]) {
  return (
    activities.find((activity) => activity.status === status)?.statusLabel ??
    status
  );
}

export function SciencePage({ kind }: { kind: SciencePageKind }) {
  const { t, i18n } = useTranslation("science");
  useLoadNamespace("science", loadTranslations);

  const labels = useMemo(
    () => ({
      navPublications: t("common.navPublications"),
      navResearch: t("common.navResearch"),
      navConferences: t("common.navConferences"),
      navGrants: t("common.navGrants"),
      activities: t("common.activities"),
      results: t("common.results"),
      search: t("common.search"),
      searchPlaceholder: t("common.searchPlaceholder"),
      date: t("common.date"),
      theme: t("common.theme"),
      status: t("common.status"),
      all: t("common.all"),
      reset: t("common.reset"),
      location: t("common.location"),
      organizer: t("common.organizer"),
      noResultsTitle: t("common.noResultsTitle"),
      noResultsText: t("common.noResultsText"),
    }),
    [t]
  );

  const data = useMemo(() => {
    const heroImage = PAGE_HERO_IMAGE[kind];
    const pageKey = `pages.${kind}`;

    return {
      heroImage,
      eyebrow: t("common.heroEyebrow"),
      title: t(`${pageKey}.title`),
      gradientTitle: t(`${pageKey}.gradientTitle`),
      intro: t(`${pageKey}.intro`),
      activitiesTitle: t(`${pageKey}.activitiesTitle`),
      activitiesIntro: t(`${pageKey}.activitiesIntro`),
      activities: ACTIVITY_META[kind].map((activity, index) => {
        const itemKey = `${pageKey}.activities.${index}`;
        return {
          id: index + 1,
          title: t(`${itemKey}.title`),
          description: t(`${itemKey}.description`),
          theme: t(`${itemKey}.theme`),
          location: t(`${itemKey}.location`),
          organizer: t(`${itemKey}.organizer`),
          tags: t(`${itemKey}.tags`).split("|"),
          status: activity.status,
          statusLabel: t(`common.statuses.${activity.status}`),
          date: activity.date,
        };
      }),
    };
  }, [kind, t]);

  return (
    <PageTransition className="!pt-0 pb-0" isPaddingOn={false}>
      <ScienceHero data={data} currentKind={kind} />
      <div className="bg-[#08090f]">
        <ActivitiesSection
          data={data}
          labels={labels}
          dateLocale={i18n.language}
        />
      </div>
    </PageTransition>
  );
}
