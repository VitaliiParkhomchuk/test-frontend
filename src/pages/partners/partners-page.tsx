import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { PageTransition } from "@/widgets";
import { useLoadNamespace } from "@/shared/hooks";
import { ROUTES } from "@/shared/model/routes";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";
import { loadTranslations } from "./locales";

export type PartnersPageKind = "academic" | "business";

type PartnerProposition = {
  id: number;
  partner: string;
  name: string;
  description: string;
  type: string;
  direction: string;
  format: string;
  deadline: string;
  skills: string[];
  link: string;
};

type PartnersPageData = {
  title: string;
  gradientTitle: string;
  intro: string;
  heroImage: string;
  propositions: PartnerProposition[];
};

type PartnersLabels = {
  instituteName: string;
  navAcademic: string;
  navBusiness: string;
  heroEyebrow: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntro: string;
  results: string;
  search: string;
  searchPlaceholder: string;
  direction: string;
  type: string;
  all: string;
  reset: string;
  neededSkills: string;
  deadline: string;
  moreInfo: string;
  noResultsTitle: string;
  noResultsText: string;
};

const PAGE_HERO_IMAGE: Record<PartnersPageKind, string> = {
  academic: "/images/students-audience.jpg",
  business: "/images/noosphere-workshop.jpg",
};

const PROPOSITIONS_META: Record<
  PartnersPageKind,
  Array<{ deadline: string; link: string }>
> = {
  academic: [
    { deadline: "2026-05-24", link: "https://www.gallaudet.edu/" },
    { deadline: "2026-06-12", link: "https://erasmus-plus.ec.europa.eu/" },
    { deadline: "2026-05-31", link: "https://education.ec.europa.eu/" },
    { deadline: "2026-06-20", link: "https://www.openaire.eu/" },
  ],
  business: [
    { deadline: "2026-05-18", link: "https://career.softserveinc.com/" },
    { deadline: "2026-06-02", link: "https://www.gen.tech/careers/" },
    { deadline: "2026-05-29", link: "https://www.epam.com/careers" },
    { deadline: "2026-06-15", link: "https://ajax.systems/careers/" },
  ],
};

const NAV_ITEMS = [
  {
    kind: "academic",
    labelKey: "common.navAcademic",
    route: ROUTES.PARTNERS_ACADEMIC_MOBILITY,
  },
  {
    kind: "business",
    labelKey: "common.navBusiness",
    route: ROUTES.PARTNERS_BUSINESS,
  },
] satisfies Array<{ kind: PartnersPageKind; labelKey: string; route: string }>;

function PartnersHero({
  data,
  labels,
  currentKind,
}: {
  data: PartnersPageData;
  labels: PartnersLabels;
  currentKind: PartnersPageKind;
}) {
  const { t } = useTranslation("partners");

  return (
    <section className="relative overflow-hidden bg-[#08090f] pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      <img
        src={data.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[#08090f]/85 to-[#08090f]/60" />
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

      <Stagger className="container-v2 relative z-[1]" stagger={0.08}>
        <StaggerItem mode="scale" className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 py-1.5 pl-2 pr-4 backdrop-blur-md">
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] text-white">
            ННКІТІ
          </span>
          <span className="text-[12px] text-white/70">{labels.heroEyebrow}</span>
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

function PropositionCard({
  proposition,
  labels,
  dateLocale,
}: {
  proposition: PartnerProposition;
  labels: PartnersLabels;
  dateLocale: string;
}) {
  const formattedDate = new Intl.DateTimeFormat(dateLocale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${proposition.deadline}T12:00:00`));

  return (
    <article className="grad-border card-hover relative grid gap-5 overflow-hidden rounded-[20px] bg-white/[0.03] p-6 backdrop-blur-xl lg:grid-cols-[1fr_280px] lg:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(166,132,255,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative min-w-0">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="font-display rounded-full border border-violet-500/30 bg-violet-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.04em] text-violet-200">
            {proposition.type}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold text-white/55">
            {proposition.direction}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold text-white/55">
            {proposition.format}
          </span>
        </div>

        <p className="text-grad font-display text-[13px] font-bold">
          {proposition.partner}
        </p>
        <h3
          className="font-display mt-2 font-bold text-white"
          style={{ fontSize: "1.2rem", letterSpacing: "-0.02em" }}
        >
          {proposition.name}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-white/55">
          {proposition.description}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
            {labels.neededSkills}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {proposition.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/55"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grad-border relative flex flex-col justify-between gap-5 rounded-[16px] bg-gradient-to-br from-violet-500/[0.10] to-blue-500/[0.06] p-5 backdrop-blur-xl">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
            {labels.deadline}
          </p>
          <p className="text-grad font-display mt-2 text-[20px] font-extrabold">
            {formattedDate}
          </p>
        </div>

        <a
          href={proposition.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(166,132,255,0.3)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(166,132,255,0.55)] active:scale-95"
        >
          {labels.moreInfo} <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

function PropositionsSection({
  data,
  labels,
  dateLocale,
}: {
  data: PartnersPageData;
  labels: PartnersLabels;
  dateLocale: string;
}) {
  const [search, setSearch] = useState("");
  const [selectedDirection, setSelectedDirection] = useState(labels.all);
  const [selectedType, setSelectedType] = useState(labels.all);

  const directions = useMemo(
    () => [
      labels.all,
      ...Array.from(new Set(data.propositions.map((item) => item.direction))),
    ],
    [data.propositions, labels.all]
  );

  const types = useMemo(
    () => [
      labels.all,
      ...Array.from(new Set(data.propositions.map((item) => item.type))),
    ],
    [data.propositions, labels.all]
  );

  const filteredPropositions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.propositions.filter((item) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          item.partner,
          item.name,
          item.description,
          item.direction,
          item.format,
          ...item.skills,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      const matchesDirection =
        selectedDirection === labels.all ||
        item.direction === selectedDirection;
      const matchesType =
        selectedType === labels.all || item.type === selectedType;

      return matchesSearch && matchesDirection && matchesType;
    });
  }, [data.propositions, labels.all, search, selectedDirection, selectedType]);

  function resetFilters() {
    setSearch("");
    setSelectedDirection(labels.all);
    setSelectedType(labels.all);
  }

  const inputClass =
    "h-12 rounded-[12px] border border-white/10 bg-white/[0.04] px-4 text-[13px] text-white placeholder-white/30 outline-none transition focus:border-violet-500/50 focus:bg-white/[0.06]";

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-v2">
        <Reveal mode="up" amount={0.15} className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-500">
              — {labels.sectionEyebrow}
            </div>
            <h2
              className="font-display font-black text-white"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.04em",
              }}
            >
              {labels.sectionTitle}
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
              {labels.sectionIntro}
            </p>
          </div>

          <div className="grad-border rounded-[18px] bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {labels.results}
            </p>
            <p className="font-display mt-2 text-[28px] font-extrabold">
              <span className="text-grad">{filteredPropositions.length}</span>
              <span className="text-[14px] text-white/35">
                {" "}
                / {data.propositions.length}
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grad-border mb-8 grid gap-3 rounded-[20px] bg-white/[0.03] p-4 backdrop-blur-xl sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.5fr_240px_200px_auto]">
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
              {labels.direction}
            </span>
            <select
              value={selectedDirection}
              onChange={(event) => setSelectedDirection(event.target.value)}
              className={inputClass}
            >
              {directions.map((direction) => (
                <option key={direction} value={direction}>
                  {direction}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {labels.type}
            </span>
            <select
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
              className={inputClass}
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            className="self-end rounded-[12px] border border-white/15 bg-white/[0.04] px-5 py-3 text-[12px] font-semibold text-white/70 backdrop-blur-md transition hover:bg-white/[0.10] hover:text-white sm:col-span-2 lg:col-span-1"
          >
            {labels.reset}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {filteredPropositions.length > 0 ? (
            filteredPropositions.map((proposition) => (
              <Reveal key={proposition.id} mode="up" amount={0.15}>
                <PropositionCard
                  proposition={proposition}
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

export function PartnersPage({ kind }: { kind: PartnersPageKind }) {
  const { t, i18n } = useTranslation("partners");
  useLoadNamespace("partners", loadTranslations);

  const labels = useMemo(
    () => ({
      instituteName: t("common.instituteName"),
      navAcademic: t("common.navAcademic"),
      navBusiness: t("common.navBusiness"),
      heroEyebrow: t("common.heroEyebrow"),
      sectionEyebrow: t("common.sectionEyebrow"),
      sectionTitle: t("common.sectionTitle"),
      sectionIntro: t("common.sectionIntro"),
      results: t("common.results"),
      search: t("common.search"),
      searchPlaceholder: t("common.searchPlaceholder"),
      direction: t("common.direction"),
      type: t("common.type"),
      all: t("common.all"),
      reset: t("common.reset"),
      neededSkills: t("common.neededSkills"),
      deadline: t("common.deadline"),
      moreInfo: t("common.moreInfo"),
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
      title: t(`${pageKey}.title`),
      gradientTitle: t(`${pageKey}.gradientTitle`),
      intro: t(`${pageKey}.intro`),
      propositions: PROPOSITIONS_META[kind].map((proposition, index) => {
        const itemKey = `${pageKey}.propositions.${index}`;
        return {
          id: index + 1,
          partner: t(`${itemKey}.partner`),
          name: t(`${itemKey}.name`),
          description: t(`${itemKey}.description`),
          type: t(`${itemKey}.type`),
          direction: t(`${itemKey}.direction`),
          format: t(`${itemKey}.format`),
          skills: t(`${itemKey}.skills`).split("|"),
          deadline: proposition.deadline,
          link: proposition.link,
        };
      }),
    };
  }, [kind, t]);

  return (
    <PageTransition className="!pt-0 pb-0" isPaddingOn={false}>
      <PartnersHero data={data} labels={labels} currentKind={kind} />
      <div className="bg-[#08090f]">
        <PropositionsSection
          data={data}
          labels={labels}
          dateLocale={i18n.language}
        />
      </div>
    </PageTransition>
  );
}
