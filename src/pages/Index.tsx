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
  }, []);
  return { ref, inView };
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
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
  { icon: "Zap", title: "Скорость трансформации", desc: "Внедряем решения в 2–3 раза быстрее рынка за счёт отработанной методологии" },
  { icon: "Target", title: "Фокус на результате", desc: "Каждый проект привязан к измеримым бизнес-показателям, не к технологиям ради технологий" },
  { icon: "Users", title: "Экспертная команда", desc: "Специалисты с опытом в финтехе, ритейле, производстве и логистике" },
  { icon: "RefreshCw", title: "Поддержка после запуска", desc: "Сопровождение, обновления и масштабирование решений на всём жизненном цикле" },
];

const stats = [
  { value: 120, suffix: "+", label: "Проектов завершено" },
  { value: 8, suffix: " лет", label: "На рынке ИТ-интеграции" },
  { value: 94, suffix: "%", label: "Клиентов возвращаются" },
  { value: 3, suffix: "x", label: "Ускорение процессов" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", task: "" });
  const [submitted, setSubmitted] = useState(false);

  const heroSection = useInView(0.1);
  const servicesSection = useInView(0.1);
  const stepsSection = useInView(0.1);
  const advantagesSection = useInView(0.1);
  const statsSection = useInView(0.1);
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
    { href: "#services", label: "Услуги" },
    { href: "#process", label: "Процесс" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(218,28%,7%)] text-[hsl(210,20%,92%)] overflow-x-hidden">

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(218,28%,7%)/90] backdrop-blur-md border-b border-[hsl(185,100%,55%,0.12)]" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold tracking-widest text-neon uppercase glow-text">
            NEXORA<span className="text-white/40">.</span>IT
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-neon transition-colors duration-300 tracking-wide">
                {l.label}
              </a>
            ))}
            <a href="#form" className="px-5 py-2 text-sm font-display font-medium tracking-widest uppercase border border-[hsl(185,100%,55%,0.5)] text-neon hover:bg-[hsl(185,100%,55%,0.1)] transition-all duration-300 rounded-sm">
              Заявка
            </a>
          </nav>
          <button className="md:hidden text-neon" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[hsl(220,24%,11%)] border-t border-[hsl(185,100%,55%,0.12)] px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-neon transition-colors" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#form" className="text-neon font-display tracking-widest uppercase text-sm" onClick={() => setMenuOpen(false)}>
              Оставить заявку →
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,28%,7%,0)] via-[hsl(218,28%,7%,0.3)] to-[hsl(218,28%,7%)]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(185,100%,55%,0.04)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(220,80%,60%,0.06)] blur-3xl pointer-events-none animate-float" />

        <div ref={heroSection.ref} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[hsl(185,100%,55%,0.3)] rounded-full text-xs font-display tracking-widest uppercase text-neon bg-[hsl(185,100%,55%,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-neon inline-block" />
              ИТ-трансформация нового поколения
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="block text-white">АУДИТ И</span>
              <span className="block text-neon glow-text">ТРАНСФОРМАЦИЯ</span>
              <span className="block text-white/60 font-light">БИЗНЕС-ПРОЦЕССОВ</span>
            </h1>
            <p className="max-w-xl text-white/50 text-lg leading-relaxed mb-12">
              Превращаем устаревшие операции в конкурентные преимущества через внедрение ИТ-продуктов нового поколения
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="group inline-flex items-center gap-3 px-8 py-4 bg-neon text-[hsl(218,28%,7%)] font-display font-semibold tracking-widest uppercase text-sm rounded-sm hover:bg-white transition-colors duration-300 glow">
                Начать трансформацию
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#process" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 font-display tracking-widest uppercase text-sm rounded-sm hover:border-neon hover:text-neon transition-all duration-300">
                Как мы работаем
              </a>
            </div>
          </div>

          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${heroSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            {stats.map((s, i) => (
              <div key={i} className="border border-white/8 bg-[hsl(220,24%,11%,0.6)] backdrop-blur-sm rounded-sm p-5">
                <div className="font-display text-3xl font-bold text-neon glow-text">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-float">
          <span className="text-xs tracking-widest uppercase font-display">Скролл</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(220,24%,11%,0.4)] to-transparent pointer-events-none" />
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`mb-16 transition-all duration-700 ${servicesSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-4">/ Услуги</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ЧТО МЫ <span className="text-neon">ДЕЛАЕМ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className={`card-hover border border-white/8 bg-[hsl(220,24%,11%,0.5)] rounded-sm p-7 transition-all duration-700 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-sm bg-[hsl(185,100%,55%,0.1)] border border-[hsl(185,100%,55%,0.2)] flex items-center justify-center mb-5">
                  <Icon name={s.icon} fallback="Zap" size={18} className="text-neon" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg tracking-wide mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 grid-bg relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(185,100%,55%,0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(185,100%,55%,0.3)] to-transparent" />
        <div ref={stepsSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${stepsSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-4">/ Процесс</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ОТ ЗАЯВКИ <span className="text-neon">ДО ЗАПУСКА</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[hsl(185,100%,55%,0)] via-[hsl(185,100%,55%,0.3)] to-[hsl(185,100%,55%,0)]" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${stepsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="relative z-10 w-16 h-16 rounded-sm border-2 border-[hsl(185,100%,55%,0.4)] bg-[hsl(218,28%,7%)] flex items-center justify-center mb-5 glow">
                    <span className="font-display font-bold text-neon text-lg">{s.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white tracking-wide mb-2">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
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
            <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-4">/ Преимущества</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ПОЧЕМУ <span className="text-neon">МЫ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className={`card-hover flex gap-6 border border-white/8 bg-[hsl(220,24%,11%,0.5)] rounded-sm p-8 transition-all duration-700 ${advantagesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-[hsl(185,100%,55%,0.1)] border border-[hsl(185,100%,55%,0.2)] flex items-center justify-center">
                  <Icon name={a.icon} fallback="Star" size={20} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white tracking-wide mb-2">{a.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience strip */}
          <div
            ref={statsSection.ref}
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${statsSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}
          >
            {[
              { label: "Отраслей охвачено", val: "12+" },
              { label: "Технологических партнёров", val: "25+" },
              { label: "Средний ROI клиентов", val: "4.2x" },
              { label: "Месяцев средний цикл", val: "3–6" },
            ].map((item, i) => (
              <div key={i} className="border border-[hsl(185,100%,55%,0.15)] rounded-sm p-5 bg-[hsl(185,100%,55%,0.04)]">
                <div className="font-display text-2xl font-bold text-neon">{item.val}</div>
                <div className="text-white/40 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-28 grid-bg relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(185,100%,55%,0.3)] to-transparent" />
        <div ref={formSection.ref} className="max-w-3xl mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-700 ${formSection.inView ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-4">/ Заявка</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              НАЧНИТЕ <span className="text-neon">ТРАНСФОРМАЦИЮ</span>
            </h2>
            <p className="text-white/40 text-sm">Опишите задачу — мы предложим решение в течение 24 часов</p>
          </div>

          {submitted ? (
            <div className={`text-center py-16 border border-[hsl(185,100%,55%,0.3)] rounded-sm bg-[hsl(185,100%,55%,0.04)] transition-all duration-700 ${formSection.inView ? "opacity-100" : "opacity-0"}`}>
              <div className="w-16 h-16 rounded-full bg-[hsl(185,100%,55%,0.1)] border border-neon flex items-center justify-center mx-auto mb-6 glow">
                <Icon name="Check" size={28} className="text-neon" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-2">Заявка отправлена!</h3>
              <p className="text-white/40 text-sm">Свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`border border-white/8 bg-[hsl(220,24%,11%,0.6)] backdrop-blur-sm rounded-sm p-8 transition-all duration-700 ${formSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { id: "name", label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                  { id: "company", label: "Компания", placeholder: "ООО «Ромашка»", type: "text" },
                  { id: "phone", label: "Телефон", placeholder: "+7 900 000-00-00", type: "tel" },
                ].map(f => (
                  <div key={f.id} className={f.id === "phone" ? "md:col-span-1" : ""}>
                    <label className="block font-display text-xs tracking-widest uppercase text-white/40 mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full bg-[hsl(218,28%,7%)] border border-white/10 focus:border-neon rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-7">
                <label className="block font-display text-xs tracking-widest uppercase text-white/40 mb-2">Описание задачи</label>
                <textarea
                  rows={5}
                  placeholder="Расскажите о вашем бизнесе, текущих процессах и что хотите изменить..."
                  value={form.task}
                  onChange={e => setForm(p => ({ ...p, task: e.target.value }))}
                  className="w-full bg-[hsl(218,28%,7%)] border border-white/10 focus:border-neon rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full py-4 bg-neon text-[hsl(218,28%,7%)] font-display font-semibold tracking-widest uppercase text-sm rounded-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 glow"
              >
                Отправить заявку
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="py-20 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="font-display text-xl font-semibold tracking-widest text-neon uppercase glow-text mb-3">
                NEXORA<span className="text-white/40">.</span>IT
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Аудит и трансформация бизнес-процессов под ИТ-продукты нового поколения
              </p>
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-5">Контакты</div>
              <div className="space-y-3">
                {[
                  { icon: "Mail", val: "hello@nexora.ru" },
                  { icon: "Phone", val: "+7 (495) 000-00-00" },
                  { icon: "MapPin", val: "Москва, Пресненская наб. 8" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/45">
                    <Icon name={c.icon} fallback="Circle" size={14} className="text-neon flex-shrink-0" />
                    {c.val}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-neon uppercase mb-5">Навигация</div>
              <div className="space-y-2">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} className="block text-sm text-white/40 hover:text-neon transition-colors duration-200">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs">© 2026 NEXORA.IT — Все права защищены</p>
            <p className="text-white/15 text-xs">ИТ-трансформация · Аудит процессов · Внедрение платформ</p>
          </div>
        </div>
      </section>

    </div>
  );
}