import { ModalWrapper } from "@/widgets";
import type { Alumni } from "../types";

interface AlumniModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  alumni: Alumni;
}

export function AlumniModal({ isOpen, toggleModal, alumni }: AlumniModalProps) {
  const socialEntries = alumni.links ? Object.entries(alumni.links) : [];

  return (
    <ModalWrapper isModalOpen={isOpen} toggleModal={toggleModal}>
      <div
        aria-hidden
        className="absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-gradient-to-r from-violet-500 to-blue-500"
      />

      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="grad-border mx-auto flex-shrink-0 overflow-hidden rounded-full bg-[#111] p-[2px] sm:mx-0">
          <img
            className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
            src={alumni.image}
            alt={alumni.full_name}
          />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          {alumni.date_of_graduation && (
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-400">
              Випуск {alumni.date_of_graduation.split("-")[0]}
            </span>
          )}
          <h2
            className="font-display text-center font-black text-white sm:text-start"
            style={{
              fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            {alumni.full_name}
          </h2>

          <div className="h-px w-full bg-gradient-to-r from-violet-500/40 via-blue-500/20 to-transparent" />

          <ul className="flex flex-col gap-1.5 text-[13px] text-white/65">
            {alumni.workplace && (
              <li>
                <span className="font-semibold text-white/90">Місце роботи:</span>{" "}
                {alumni.workplace}
              </li>
            )}
            {alumni.position && (
              <li>
                <span className="font-semibold text-white/90">Посада:</span>{" "}
                {alumni.position}
              </li>
            )}
            {alumni.major && (
              <li>
                <span className="font-semibold text-white/90">Спеціальність:</span>{" "}
                {alumni.major}
              </li>
            )}
            {alumni.degree && (
              <li>
                <span className="font-semibold text-white/90">Ступінь:</span>{" "}
                {alumni.degree}
              </li>
            )}
          </ul>
        </div>
      </div>

      {alumni.text && (
        <p className="mt-6 indent-4 leading-relaxed text-white/70">{alumni.text}</p>
      )}

      {socialEntries.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {socialEntries.map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-[12px] font-semibold text-violet-200 transition-all hover:scale-105 hover:bg-violet-500/20 hover:text-white"
            >
              {platform}
            </a>
          ))}
        </div>
      )}
    </ModalWrapper>
  );
}
