export type EventType =
  | "conference"
  | "seminar"
  | "olympiad"
  | "openday"
  | "cultural"
  | "deadline"
  | "sport";

export const EVENT_TYPE_META: Record<EventType, { label: string; accent: string; icon: string }> = {
  conference: { label: "Конференція",          accent: "#3b82f6", icon: "◈" },
  seminar:    { label: "Семінар / Воркшоп",    accent: "#8b5cf6", icon: "◎" },
  olympiad:   { label: "Олімпіада",            accent: "#f59e0b", icon: "◆" },
  openday:    { label: "День відкритих дверей", accent: "#ec4899", icon: "◉" },
  cultural:   { label: "Культурний захід",     accent: "#10b981", icon: "◬" },
  deadline:   { label: "Дедлайн",              accent: "#ef4444", icon: "⬡" },
  sport:      { label: "Спорт",                accent: "#06b6d4", icon: "◇" },
};

export interface CalendarEvent {
  id: number;
  title: string;
  type: EventType;
  date: string;    // YYYY-MM-DD
  time: string;
  location: string;
  description: string;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 1,  title: "День відкритих дверей ННКІТІ",                   type: "openday",    date: "2025-05-15", time: "10:00", location: "Головний корпус, акт. зала", description: "Знайомство з інститутом, зустріч з деканатом, екскурсія по лабораторіях." },
  { id: 2,  title: "Семінар «Кібербезпека 2025»",                    type: "seminar",    date: "2025-05-20", time: "14:00", location: "ауд. 315",                   description: "Актуальні загрози та інструменти захисту. Спікер — CISO провідної компанії." },
  { id: 3,  title: "Консультація для вступників",                    type: "openday",    date: "2025-05-22", time: "11:00", location: "Приймальна комісія, ауд. 101", description: "Відповіді на запитання щодо спеціальностей, умов навчання та документів." },
  { id: 4,  title: "Олімпіада з програмування",                     type: "olympiad",   date: "2025-05-28", time: "09:00", location: "Комп'ютерний зал, ауд. 220",   description: "Всеукраїнська олімпіада. Мови: C++, Python, Java. Реєстрація обов'язкова." },
  { id: 5,  title: "ІІ Міжнародна конференція «IT-Майбутнє»",       type: "conference", date: "2025-06-01", time: "09:00", location: "Конференц-зала",               description: "Два дні доповідей, воркшопів та нетворкінгу з IT-фахівцями з 8 країн." },
  { id: 6,  title: "ІІ Міжнародна конференція «IT-Майбутнє» (день 2)", type: "conference", date: "2025-06-02", time: "09:00", location: "Конференц-зала",             description: "Секційні засідання, постерна сесія, закриття та нагородження." },
  { id: 7,  title: "Захист дипломних робіт (бакалаври)",             type: "deadline",   date: "2025-06-05", time: "09:00", location: "ауд. 418",                   description: "Публічний захист кваліфікаційних робіт здобувачів освітнього ступеня бакалавра." },
  { id: 8,  title: "Спортивні змагання «IT-Кубок»",                  type: "sport",      date: "2025-06-07", time: "10:00", location: "Спортивний комплекс НУВГП",   description: "Футбол, волейбол, настільний теніс. Командні змагання між кафедрами." },
  { id: 9,  title: "Фестиваль науки",                                type: "cultural",   date: "2025-06-10", time: "12:00", location: "Кампус, відкрита зона",       description: "Наукові шоу, виставки студентських проєктів, демо роботів та 3D-принтерів." },
  { id: 10, title: "Випускний 2025",                                 type: "cultural",   date: "2025-06-15", time: "18:00", location: "Актова зала НУВГП",           description: "Урочисте вручення дипломів випускникам 2025 року та прощальний вечір." },
  { id: 11, title: "Дедлайн: документи на бюджет",                  type: "deadline",   date: "2025-06-20", time: "18:00", location: "ЄДЕБО (онлайн)",              description: "Останній день подачі заяв на державне замовлення через кабінет вступника." },
  { id: 12, title: "Воркшоп з Machine Learning",                    type: "seminar",    date: "2025-06-25", time: "14:00", location: "Лабораторія AI/ML, ауд. 214", description: "Практичне заняття з основ ML: лінійна регресія, класифікація, sklearn." },
  { id: 13, title: "Початок вступної кампанії",                     type: "openday",    date: "2025-07-01", time: "09:00", location: "Приймальна комісія",           description: "Офіційний старт прийому заяв від вступників на бакалаврат і магістратуру." },
  { id: 14, title: "День відкритих дверей (літо)",                  type: "openday",    date: "2025-07-12", time: "10:00", location: "Головний корпус",             description: "Літній день відкритих дверей для майбутніх студентів та їхніх батьків." },
  { id: 15, title: "Хакатон «CyberDev 2025»",                       type: "olympiad",   date: "2025-07-18", time: "09:00", location: "Лаб. кібербезпеки",           description: "48-годинний хакатон для студентів та молодих фахівців. Призи від спонсорів." },
  { id: 16, title: "Зарахування на бюджет",                         type: "deadline",   date: "2025-07-22", time: "18:00", location: "ЄДЕБО",                       description: "Вихід наказу про зарахування на держзамовлення. Перевіряйте рейтинговий список." },
  { id: 17, title: "Початок навчального року",                      type: "cultural",   date: "2025-09-01", time: "10:00", location: "Актова зала НУВГП",           description: "Урочиста лінійка і перші лекції нового навчального року 2025/2026." },
];

// ─── News ────────────────────────────────────────────────────────────────────

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  tagAccent: string;
  imageSeed: string;
}

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "ННКІТІ підписав угоду про партнерство з Cisco Networking Academy",
    excerpt: "Нова угода відкриває студентам доступ до офіційних курсів Cisco, сертифікацій CCNA/CCNP та спеціалізованого обладнання для мережевих лабораторій.",
    date: "12 травня 2025",
    tag: "Партнерства",
    tagAccent: "#3b82f6",
    imageSeed: "news-cisco",
  },
  {
    id: 2,
    title: "Студенти ННКІТІ здобули першість на Всеукраїнській олімпіаді з програмування",
    excerpt: "Команда з трьох студентів кафедри КН та ПМ посіла перше місце серед 48 університетів України. Тренував команду доцент Хоменко А.І.",
    date: "5 травня 2025",
    tag: "Досягнення",
    tagAccent: "#f59e0b",
    imageSeed: "news-olympiad",
  },
  {
    id: 3,
    title: "Відкриття оновленої лабораторії AI/ML та центру цифрових компетенцій",
    excerpt: "ННКІТІ завершив реконструкцію навчально-наукової лабораторії штучного інтелекту. Нові GPU-сервери, робоча станція для комп'ютерного зору та простір для колаборацій.",
    date: "28 квітня 2025",
    tag: "Інфраструктура",
    tagAccent: "#8b5cf6",
    imageSeed: "news-lab",
  },
  {
    id: 4,
    title: "Випускники 2025: 94% вже мають пропозиції про роботу ще до вручення диплома",
    excerpt: "За даними щорічного опитування, майже всі випускники бакалаврату і магістратури 2025 року отримали job offer до завершення навчання.",
    date: "20 квітня 2025",
    tag: "Випускники",
    tagAccent: "#10b981",
    imageSeed: "news-graduates",
  },
  {
    id: 5,
    title: "ННКІТІ запускає стартап-акселератор спільно з трьома IT-компаніями",
    excerpt: "Програма підтримки студентських стартапів триватиме 4 місяці, включатиме менторство, доступ до коворкінгу та можливість отримати seed-фінансування.",
    date: "14 квітня 2025",
    tag: "Інновації",
    tagAccent: "#ec4899",
    imageSeed: "news-startup",
  },
  {
    id: 6,
    title: "Нова програма академічної мобільності: 15 місць в університетах Польщі та Литви",
    excerpt: "Студенти 2–4 курсів можуть подати заявку на семестровий обмін у партнерські університети за програмою Erasmus+ 2025/2026.",
    date: "8 квітня 2025",
    tag: "Erasmus+",
    tagAccent: "#06b6d4",
    imageSeed: "news-erasmus",
  },
];

// ─── Announcements ────────────────────────────────────────────────────────────

export type Urgency = "high" | "medium" | "low";

export interface Announcement {
  id: number;
  title: string;
  body: string;
  date: string;
  urgency: Urgency;
}

export const URGENCY_META: Record<Urgency, { label: string; accent: string }> = {
  high:   { label: "Терміново",  accent: "#ef4444" },
  medium: { label: "Важливо",    accent: "#f59e0b" },
  low:    { label: "Інфо",       accent: "#6b7280" },
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    urgency: "high",
    title: "Перенесення захисту дипломних робіт",
    body: "У зв'язку з технічними обставинами захист дипломних робіт на кафедрі ОТ перенесено з 5 червня на 10 червня 2025 р. Студентам необхідно підтвердити нову дату у деканаті.",
    date: "13 травня 2025",
  },
  {
    id: 2,
    urgency: "high",
    title: "Дедлайн заяв на Erasmus+ 2025/2026",
    body: "До 31 травня 2025 р. студенти, які бажають взяти участь у програмі академічної мобільності, мають подати повний пакет документів до міжнародного відділу НУВГП.",
    date: "10 травня 2025",
  },
  {
    id: 3,
    urgency: "medium",
    title: "Оновлення розкладу занять на 19–23 травня",
    body: "У зв'язку з конференцією 20 травня пари 3-го та 4-го курсів перенесені на 24 травня. Оновлений розклад опубліковано в Moodle та на дошці оголошень кафедр.",
    date: "9 травня 2025",
  },
  {
    id: 4,
    urgency: "medium",
    title: "Реєстрація на літню сесію для заочників",
    body: "Студенти заочної форми навчання мають зареєструватися на сесію до 25 травня включно через особистий кабінет студента або в деканаті.",
    date: "7 травня 2025",
  },
  {
    id: 5,
    urgency: "low",
    title: "Оновлення правил доступу до читального залу бібліотеки",
    body: "З 1 червня 2025 р. доступ до читального залу надається за електронним студентським квитком. Паперові картки більше не приймаються. Оновити студентський квиток можна в бібліотеці.",
    date: "5 травня 2025",
  },
  {
    id: 6,
    urgency: "low",
    title: "Набір до студентського наукового гуртка «Алгоритми»",
    body: "Кафедра КН та ПМ оголошує набір до наукового гуртка. Зустрічі щосереди о 16:00 в ауд. 214. Для участі достатньо базових знань Python або C++.",
    date: "2 травня 2025",
  },
];

// ─── Activity categories ──────────────────────────────────────────────────────

export interface ActivityCategory {
  type: EventType;
  count: number;
  nextDate: string;
  description: string;
  imageSeed: string;
}

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  { type: "conference", count: 12, nextDate: "1 червня",   imageSeed: "cat-conference", description: "Міжнародні та всеукраїнські конференції, де студенти та викладачі представляють наукові результати." },
  { type: "olympiad",   count: 8,  nextDate: "28 травня",  imageSeed: "cat-olympiad",   description: "Олімпіади з програмування, математики та хакатони — змагання, де перемагають найкращі." },
  { type: "openday",    count: 4,  nextDate: "15 травня",  imageSeed: "cat-openday",    description: "Дні відкритих дверей для абітурієнтів та їхніх батьків — знайомство з ННКІТІ." },
  { type: "seminar",    count: 20, nextDate: "20 травня",  imageSeed: "cat-seminar",    description: "Практичні семінари та воркшопи від викладачів-практиків та запрошених спікерів з IT-компаній." },
  { type: "cultural",   count: 15, nextDate: "10 червня",  imageSeed: "cat-cultural",   description: "Фестивалі, виставки, випускні вечори — культурне та громадське життя ННКІТІ." },
  { type: "sport",      count: 6,  nextDate: "7 червня",   imageSeed: "cat-sport",      description: "Спортивні турніри між кафедрами — футбол, волейбол, настільний теніс, шахи." },
];
