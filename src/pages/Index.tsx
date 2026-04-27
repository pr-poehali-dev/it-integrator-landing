import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/62e6de64-2bf5-44c2-994a-76606438e16f/files/ba011d1e-15be-4bd5-b219-cdfee1158cb9.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return { ref, inView };
}

const services = [
  { icon: "ScanSearch", title: "Аудит процессов", desc: "Глубокая диагностика существующих бизнес-процессов и выявление точек роста для ИТ-трансформации" },
  { icon: "GitMerge", title: "Архитектура решений", desc: "Проектирование ИТ-архитектуры под задачи бизнеса с учётом масштабируемости и безопасности" },
  { icon: "Layers", title: "Внедрение платформ", desc: "Интеграция ERP, CRM, BI и кастомных продуктов нового поколения в существующую инфраструктуру" },
  { icon: "Workflow", title: "Автоматизация", desc: "Разработка и запуск workflow-систем для устранения ручного труда и ускорения операций" },
  { icon: "ShieldCheck", title: "Безопасность данных", desc: "Построение защищённых контуров хранения и передачи данных с соблюдением регуляторных требований" },
  { icon: "BarChart3", title: "Аналитика и метрики", desc: "Создание дашбордов и систем мониторинга для принятия решений на основе данных в реальном времени" },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Вы заполняете форму с описанием задачи — мы связываемся в течение 24 часов" },
  { num: "02", title: "Аудит", desc: "Команда проводит глубокое изучение процессов, инфраструктуры и целей бизнеса" },
  { num: "03", title: "Стратегия", desc: "Формируем дорожную карту трансформации с этапами, сроками и KPI" },
  { num: "04", title: "Разработка", desc: "Создаём и настраиваем ИТ-решения в тесном взаимодействии с вашей командой" },
  { num: "05", title: "Запуск", desc: "Поэтапный ввод в эксплуатацию с обучением персонала и поддержкой на старте" },
];

const advantages = [
  { icon: "Zap", title: "Скорость трансформации", desc: "Внедряем решения быстро за счёт отработанной методологии и опыта в разных отраслях" },
  { icon: "Target", title: "Фокус на результате", desc: "Каждый проект привязан к измеримым бизнес-показателям, не к технологиям ради технологий" },
  { icon: "Users", title: "Экспертная команда", desc: "Специалисты с глубокой экспертизой в AI, разработке и бизнес-аналитике" },
  { icon: "RefreshCw", title: "Поддержка после запуска", desc: "Сопровождение, обновления и масштабирование решений на всём жизненном цикле" },
];

const expertise = [
  {
    icon: "Cctv",
    tag: "Компьютерное зрение",
    title: "Видео и аудиоаналитика",
    desc: "Внедряем системы распознавания лиц, объектов, аномалий и речи на основе нейронных сетей. Подходит для безопасности, контроля качества, мониторинга и автоматизации наблюдения.",
    accent: "Нейронные сети · Real-time обработка · Edge AI",
  },
  {
    icon: "Bot",
    tag: "Генеративный AI",
    title: "Нейроагенты и ассистенты",
    desc: "Создаём интеллектуальных агентов и ассистентов, которые работают с корпоративными данными, автоматизируют коммуникации и принимают решения без участия человека.",
    accent: "LLM-интеграция · RAG · Чат-боты · Автономные агенты",
  },
  {
    icon: "PackagePlus",
    tag: "Заказная разработка",
    title: "ИТ-продукт с нуля",
    desc: "Проектируем и разрабатываем любой ИТ-продукт под ключ — от внутренних инструментов автоматизации рутины до сложных платформ с AI-логикой и интеграциями.",
    accent: "Полный цикл · Любая сложность · Масштабируемость",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", task: "" });
  const [submitted, setSubmitted] = useState(false);

  const heroSection = useInView(0.1);
  const expertiseSection = useInView(0.1);
  const servicesSection = useInView(0.1);
  const stepsSection = useInView(0.1);
  const advantagesSection = useInView(0.1);
  const formSection = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { href: "#expertise", label: "Экспертиза" },
    { href: "#services", label: "Услуги" },
    { href: "#process", label: "Процесс" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,18%,8%)] text-[hsl(210,15%,88%)] overflow-x-hidden">

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(220,18%,8%,0.92)] backdrop-blur-md border-b border-white/6" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-lg font-semibold tracking-wider text-[hsl(165,45%,62%)] uppercase">
            ikig.ai<span className="text-white/30 font-light"> studio</span>
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-[hsl(165,45%,62%)] transition-colors duration-300 tracking-wide">
                {l.label}
              </a>
            ))}
            <a href="#form" className="px-5 py-2 text-sm font-display font-medium tracking-widest uppercase border border-[hsl(165,45%,62%,0.4)] text-[hsl(165,45%,62%)] hover:bg-[hsl(165,45%,62%,0.08)] transition-all duration-300 rounded-sm">
              Заявка
            </a>
          </nav>
          <button className="md:hidden text-[hsl(165,45%,62%)]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[hsl(220,18%,10%)] border-t border-white/6 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-white/60 hover:text-[hsl(165,45%,62%)] transition-colors" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#form" className="text-[hsl(165,45%,62%)] font-display tracking-widest uppercase text-sm" onClick={() => setMenuOpen(false)}>
              Оставить заявку →
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(hsl(165 45% 62% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(165 45% 62% / 0.03) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-12 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,18%,8%,0.2)] via-[hsl(220,18%,8%,0.4)] to-[hsl(220,18%,8%)]" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(165,45%,45%,0.05)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(220,60%,55%,0.05)] blur-3xl pointer-events-none animate-float" />

        <div ref={heroSection.ref} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[hsl(165,45%,62%,0.25)] rounded-full text-xs font-display tracking-widest uppercase text-[hsl(165,45%,62%)] bg-[hsl(165,45%,62%,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(165,45%,62%)] animate-pulse-neon inline-block" />
              ИТ-трансформация · AI-продукты нового поколения
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="block text-white">АУДИТ И</span>
              <span className="block text-[hsl(165,45%,62%)]">ТРАНСФОРМАЦИЯ</span>
              <span className="block text-white/40 font-light">БИЗНЕС-ПРОЦЕССОВ</span>
            </h1>
            <p className="max-w-lg text-white/45 text-lg leading-relaxed mb-12">
              Превращаем процессы в конкурентные преимущества — через AI, автоматизацию и ИТ-продукты нового поколения
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#form"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[hsl(165,45%,55%)] text-[hsl(220,18%,8%)] font-display font-semibold tracking-widest uppercase text-sm rounded-sm hover:bg-[hsl(165,45%,65%)] transition-colors duration-300"
                style={{ boxShadow: "0 0 24px hsl(165 45% 55% / 0.2)" }}
              >
                Начать трансформацию
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#expertise" className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white/55 font-display tracking-widest uppercase text-sm rounded-sm hover:border-[hsl(165,45%,62%,0.4)] hover:text-[hsl(165,45%,62%)] transition-all duration-300">
                Наша экспертиза
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 animate-float">
          <span className="text-xs tracking-widest uppercase font-display">Скролл</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(220,22%,10%,0.6)] to-transparent pointer-events-none" />
        <div ref={expertiseSection.ref} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`mb-16 transition-all duration-700 ${expertiseSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-4">/ Экспертиза</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ЧТО МЫ <span className="text-[hsl(165,45%,62%)]">УМЕЕМ</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-xl text-sm leading-relaxed">
              Три ключевых направления, в которых у нас реальная экспертиза
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {expertise.map((e, i) => (
              <div
                key={i}
                className={`card-hover relative border border-white/7 bg-[hsl(220,20%,11%,0.7)] rounded-sm p-8 overflow-hidden transition-all duration-700 ${expertiseSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(165,45%,62%,0.3)] to-transparent" />
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-display tracking-widest uppercase text-[hsl(165,45%,62%)] bg-[hsl(165,45%,62%,0.07)] border border-[hsl(165,45%,62%,0.15)]">
                  <Icon name={e.icon} fallback="Zap" size={12} className="text-[hsl(165,45%,62%)]" />
                  {e.tag}
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-wide mb-3">{e.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{e.desc}</p>
                <div className="text-xs text-[hsl(165,45%,62%,0.6)] font-display tracking-wide border-t border-white/6 pt-4">
                  {e.accent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 relative">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`mb-16 transition-all duration-700 ${servicesSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-4">/ Услуги</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ЧТО МЫ <span className="text-[hsl(165,45%,62%)]">ДЕЛАЕМ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className={`card-hover border border-white/7 bg-[hsl(220,20%,11%,0.5)] rounded-sm p-7 transition-all duration-700 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-sm bg-[hsl(165,45%,62%,0.08)] border border-[hsl(165,45%,62%,0.15)] flex items-center justify-center mb-5">
                  <Icon name={s.icon} fallback="Zap" size={18} className="text-[hsl(165,45%,62%)]" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg tracking-wide mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 relative"
        style={{
          backgroundImage: "linear-gradient(hsl(165 45% 62% / 0.025) 1px, transparent 1px), linear-gradient(90deg, hsl(165 45% 62% / 0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(165,45%,62%,0.2)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(165,45%,62%,0.2)] to-transparent" />
        <div ref={stepsSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${stepsSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-4">/ Процесс</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ОТ ЗАЯВКИ <span className="text-[hsl(165,45%,62%)]">ДО ЗАПУСКА</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[hsl(165,45%,62%,0)] via-[hsl(165,45%,62%,0.2)] to-[hsl(165,45%,62%,0)]" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${stepsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="relative z-10 w-16 h-16 rounded-sm border border-[hsl(165,45%,62%,0.35)] bg-[hsl(220,18%,8%)] flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-[hsl(165,45%,62%)] text-lg">{s.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white tracking-wide mb-2">{s.title}</h3>
                  <p className="text-white/38 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-28 relative">
        <div ref={advantagesSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${advantagesSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-4">/ Преимущества</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ПОЧЕМУ <span className="text-[hsl(165,45%,62%)]">МЫ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {advantages.map((a, i) => (
              <div
                key={i}
                className={`card-hover flex gap-6 border border-white/7 bg-[hsl(220,20%,11%,0.5)] rounded-sm p-8 transition-all duration-700 ${advantagesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-[hsl(165,45%,62%,0.08)] border border-[hsl(165,45%,62%,0.15)] flex items-center justify-center">
                  <Icon name={a.icon} fallback="Star" size={20} className="text-[hsl(165,45%,62%)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white tracking-wide mb-2">{a.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-28 relative"
        style={{
          backgroundImage: "linear-gradient(hsl(165 45% 62% / 0.025) 1px, transparent 1px), linear-gradient(90deg, hsl(165 45% 62% / 0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(165,45%,62%,0.2)] to-transparent" />
        <div ref={formSection.ref} className="max-w-3xl mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-700 ${formSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-4">/ Заявка</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              НАПИШИТЕ <span className="text-[hsl(165,45%,62%)]">НАМ</span>
            </h2>
            <p className="text-white/35 text-sm">Опишите задачу — мы ответим в течение 24 часов</p>
          </div>

          {submitted ? (
            <div className="text-center py-16 border border-[hsl(165,45%,62%,0.2)] rounded-sm bg-[hsl(165,45%,62%,0.04)]">
              <div className="w-16 h-16 rounded-full bg-[hsl(165,45%,62%,0.1)] border border-[hsl(165,45%,62%,0.3)] flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={28} className="text-[hsl(165,45%,62%)]" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-2">Заявка отправлена!</h3>
              <p className="text-white/35 text-sm">Свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`border border-white/7 bg-[hsl(220,20%,11%,0.6)] backdrop-blur-sm rounded-sm p-8 transition-all duration-700 ${formSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { id: "name", label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                  { id: "company", label: "Компания", placeholder: "ООО «Ромашка»", type: "text" },
                  { id: "phone", label: "Телефон", placeholder: "+7 950 153-68-52", type: "tel" },
                ].map(f => (
                  <div key={f.id}>
                    <label className="block font-display text-xs tracking-widest uppercase text-white/35 mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full bg-[hsl(220,18%,8%)] border border-white/8 focus:border-[hsl(165,45%,62%,0.5)] rounded-sm px-4 py-3 text-sm text-white placeholder-white/18 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-7">
                <label className="block font-display text-xs tracking-widest uppercase text-white/35 mb-2">Описание задачи</label>
                <textarea
                  rows={5}
                  placeholder="Расскажите о вашем бизнесе, текущих процессах и что хотите изменить или автоматизировать..."
                  value={form.task}
                  onChange={e => setForm(p => ({ ...p, task: e.target.value }))}
                  className="w-full bg-[hsl(220,18%,8%)] border border-white/8 focus:border-[hsl(165,45%,62%,0.5)] rounded-sm px-4 py-3 text-sm text-white placeholder-white/18 outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full py-4 bg-[hsl(165,45%,55%)] text-[hsl(220,18%,8%)] font-display font-semibold tracking-widest uppercase text-sm rounded-sm hover:bg-[hsl(165,45%,65%)] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Отправить заявку
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="py-20 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="font-display text-xl font-semibold tracking-wider text-[hsl(165,45%,62%)] uppercase mb-3">
                ikig.ai<span className="text-white/25 font-light"> studio</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Аудит и трансформация бизнес-процессов под ИТ-продукты нового поколения
              </p>
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-5">Контакты</div>
              <div className="space-y-3">
                {[
                  { icon: "Mail", val: "hello@ikigai.ru" },
                  { icon: "Phone", val: "+7 (950) 153-68-52" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/40">
                    <Icon name={c.icon} fallback="Circle" size={14} className="text-[hsl(165,45%,62%)] flex-shrink-0" />
                    {c.val}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-[hsl(165,45%,62%)] uppercase mb-5">Навигация</div>
              <div className="space-y-2">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} className="block text-sm text-white/35 hover:text-[hsl(165,45%,62%)] transition-colors duration-200">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/18 text-xs">© 2026 ikig.ai studio — Все права защищены</p>
            <p className="text-white/12 text-xs">ИТ-трансформация · AI-продукты · Автоматизация</p>
          </div>
        </div>
      </section>

    </div>
  );
}
