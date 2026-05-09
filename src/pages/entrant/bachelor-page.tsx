import { PageTransition } from "@/widgets";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui";
import {
  EntrantHero,
  ProgramCard,
  StepItem,
  DateCard,
  SectionHead,
  EntrantCta,
} from "./ui";
import type { Program, Step, KeyDate } from "./ui";

const programs: Program[] = [
  {
    code: "121",
    name: "Інженерія програмного забезпечення",
    description:
      "Розробка ПЗ, патерни проєктування, agile, DevOps, тестування. Готуємо fullstack-розробників та team leads.",
    duration: "4 роки",
    seats: "Бюджет + контракт",
  },
  {
    code: "122",
    name: "Комп'ютерні науки",
    description:
      "Алгоритми, AI/ML, обробка даних, комп'ютерний зір. Ідеальний вибір для майбутніх data scientists та AI-інженерів.",
    duration: "4 роки",
    seats: "Бюджет + контракт",
  },
  {
    code: "123",
    name: "Комп'ютерна інженерія",
    description:
      "Апаратне та системне ПЗ, мікроконтролери, комп'ютерні мережі, вбудовані системи та IoT.",
    duration: "4 роки",
    seats: "Бюджет + контракт",
  },
  {
    code: "125",
    name: "Кібербезпека",
    description:
      "Захист мереж, криптографія, penetration testing, SOC та реагування на інциденти. Гаряча спеціальність в Україні і світі.",
    duration: "4 роки",
    seats: "Бюджет + контракт",
  },
  {
    code: "126",
    name: "Інформаційні системи та технології",
    description:
      "Корпоративні ІС, ERP-системи, бізнес-аналітика, проєктний менеджмент та інформаційна безпека підприємств.",
    duration: "4 роки",
    seats: "Контракт",
  },
  {
    code: "051",
    name: "Економічна кібернетика",
    description:
      "Математичне моделювання економіки, прийняття рішень, фінтех та цифрова трансформація бізнесу.",
    duration: "4 роки",
    seats: "Контракт",
  },
  {
    code: "113",
    name: "Прикладна математика",
    description:
      "Математичне моделювання, оптимізація, дослідження операцій. Програма для тих, хто любить точний розрахунок.",
    duration: "4 роки",
    seats: "Бюджет",
  },
  {
    code: "111",
    name: "Математика",
    description:
      "Фундаментальна математична підготовка: аналіз, алгебра, топологія, математична логіка та теорія ймовірностей.",
    duration: "4 роки",
    seats: "Бюджет",
  },
];

const steps: Step[] = [
  {
    title: "Зареєструватися на НМТ",
    text:
      "Національний мультипредметний тест — обов'язкова умова вступу. Реєстрація відкривається у лютому–березні на сайті testportal.gov.ua.",
  },
  {
    title: "Скласти НМТ",
    text:
      "Обов'язкові предмети: українська мова та математика. Додатково — іноземна мова або профільний предмет за вибором.",
  },
  {
    title: "Подати заяву в ЄДЕБО",
    text:
      "До 5 заяв на різні спеціальності та університети. Заяви подаються онлайн через особистий кабінет вступника.",
  },
  {
    title: "Завантажити документи",
    text:
      "Атестат, паспорт, сертифікат НМТ та фото — все в електронному вигляді. Оригінали надаються після зарахування.",
  },
  {
    title: "Конкурсний відбір та зарахування",
    text:
      "Ранжування за конкурсним балом (НМТ + середній бал атестата). Держзамовлення — безоплатно, контракт — на основі угоди.",
  },
];

const dates: KeyDate[] = [
  {
    period: "Лютий – березень",
    label: "Реєстрація на НМТ",
    note: "На сайті testportal.gov.ua",
  },
  {
    period: "Червень",
    label: "Проведення НМТ",
    note: "Перевірте місце та час у кабінеті вступника",
  },
  {
    period: "01 – 22 липня",
    label: "Прийом заяв на бюджет",
    note: "До 5 заяв через ЄДЕБО",
  },
  {
    period: "22 – 30 липня",
    label: "Зарахування держзамовлення",
    note: "Рейтингові списки оновлюються щодня",
  },
  {
    period: "01 – 15 серпня",
    label: "Прийом заяв на контракт",
    note: "Оплатна форма навчання, без прохідного балу",
  },
];

function BachelorPage() {
  return (
    <PageTransition className="!pt-0 pb-0" isPaddingOn={false}>
      <EntrantHero
        eyebrow="Вступникам · Бакалаврат"
        title="Чотири роки до"
        gradientWord="кар'єри в IT"
        description="8 спеціальностей у сферах розробки, кібербезпеки, AI та математики. Держзамовлення, сучасні лабораторії та викладачі-практики з реального IT-ринку."
        imageSeed="/images/students-stage.jpg"
        stats={[
          { value: "4", label: "роки навчання" },
          { value: "8", label: "спеціальностей" },
          { value: "НМТ", label: "вступний іспит" },
        ]}
      />

      <div className="bg-[#08090f]">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-v2">
            <SectionHead
              eyebrow="Спеціальності"
              title="Знайди свій"
              gradientTitle="напрям"
              subtitle="Від розробки до математики — обери програму, яка відповідає твоїм цілям і захопленням."
            />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.07} amount={0.05}>
              {programs.map((p, i) => (
                <StaggerItem key={i} mode="up">
                  <ProgramCard program={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-v2">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <Reveal mode="left" amount={0.1}>
                <SectionHead
                  eyebrow="Вступна кампанія"
                  title="Як вступити"
                  gradientTitle="на бакалавра"
                  subtitle="Весь процес — онлайн через ЄДЕБО. Жодних черг і паперів до моменту зарахування."
                />

                <div className="grad-border mt-8 rounded-[20px] bg-white/[0.03] p-6 backdrop-blur-xl">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-400">
                    Предмети НМТ для вступу
                  </p>
                  {[
                    { subject: "Українська мова", required: true },
                    { subject: "Математика", required: true },
                    {
                      subject: "Іноземна мова або профільний предмет",
                      required: false,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border-b border-white/[0.06] py-3 last:border-0"
                    >
                      <span
                        aria-hidden
                        className="h-2 w-2 flex-shrink-0 rounded-full"
                        style={{
                          background: item.required
                            ? "linear-gradient(135deg, #a684ff, #51a2ff)"
                            : "rgba(255,255,255,0.20)",
                        }}
                      />
                      <span className="text-[13px] text-white/75">
                        {item.subject}
                      </span>
                      {item.required && (
                        <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.06em] text-violet-300">
                          обов'язково
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Stagger className="flex flex-col" stagger={0.1} amount={0.1}>
                {steps.map((s, i) => (
                  <StaggerItem key={i} mode="right">
                    <StepItem
                      step={s}
                      number={i + 1}
                      index={i}
                      total={steps.length}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-v2">
            <SectionHead
              eyebrow="Важливі дати"
              title="Не пропусти"
              gradientTitle="дедлайни"
            />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08} amount={0.1}>
              {dates.map((d, i) => (
                <StaggerItem key={i} mode="up">
                  <DateCard date={d} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <EntrantCta
          title="Готовий вступити?"
          subtitle="Вступна комісія ННКІТІ проконсультує з вибором спеціальності, документами та умовами навчання."
          primaryLabel="Зв'язатися з комісією"
        />
      </div>
    </PageTransition>
  );
}

export const Component = BachelorPage;
