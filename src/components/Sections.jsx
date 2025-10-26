import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Sections() {
  return (
    <div className="relative">
      <GradientBackgrounds />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

function GradientBackgrounds() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -z-0 top-0 left-1/2 -translate-x-1/2 h-64 w-[70%] bg-gradient-to-r from-indigo-200/60 via-fuchsia-200/50 to-teal-200/60 blur-3xl dark:from-indigo-900/30 dark:via-fuchsia-900/30 dark:to-teal-900/30 rounded-full" />
    </>
  );
}

function SectionWrapper({ id, children, bg }) {
  return (
    <section id={id} className={`${bg ?? ''} relative py-20`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function Title({ kicker, title, subtitle }) {
  return (
    <div className="mb-12">
      {kicker && <div className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">{kicker}</div>}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-700 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}

function AboutSection() {
  return (
    <SectionWrapper id="about" bg="bg-gradient-to-b from-white to-white dark:from-slate-900 dark:to-slate-900">
      <Title
        kicker="About"
        title="A little about me"
        subtitle="Passionate developer currently pursuing [Course Name] with expertise in modern web technologies. Currently studying at [University/College Name]."
      />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
          alt="Profile"
          loading="lazy"
          className="w-full h-72 object-cover rounded-3xl shadow-xl border border-white/40 dark:border-slate-800/70 hover:scale-[1.02] transition-transform"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/70 backdrop-blur"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I love crafting delightful digital experiences that balance aesthetics and performance.
            I enjoy working across the stack and collaborating with teams to ship impactful products.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl p-4 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 border border-indigo-300/30 dark:border-indigo-800/40">
              <div className="text-xs text-slate-600 dark:text-slate-400">Current Status</div>
              <div className="font-semibold text-slate-900 dark:text-white">Studying at [University/College Name]</div>
            </div>
            <div className="rounded-2xl p-4 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 border border-teal-300/30 dark:border-teal-800/40">
              <div className="text-xs text-slate-600 dark:text-slate-400">Focus</div>
              <div className="font-semibold text-slate-900 dark:text-white">Full Stack & Design</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function EducationSection() {
  const items = [
    { title: 'Bachelor of Technology in Computer Science', meta: '2023-2027', org: 'Current Course', icon: '🎓' },
    { title: 'XYZ School - 92.5%', meta: '2023', org: '12th Grade', icon: '🏫' },
    { title: 'ABC School - 95.0%', meta: '2021', org: '10th Grade', icon: '🏫' },
  ];
  return (
    <SectionWrapper id="education" bg="bg-gradient-to-b from-white to-indigo-50/60 dark:from-slate-900 dark:to-slate-900">
      <Title kicker="Education" title="My education" subtitle="Foundations that shaped my technical journey." />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group [perspective:800px]"
          >
            <div className="rounded-3xl p-6 border border-white/40 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-xl transform-gpu transition duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
              <div className="text-3xl">{item.icon}</div>
              <div className="mt-4 text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">{item.org}</div>
              <div className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{item.meta}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SkillsSection() {
  const skills = [
    { name: 'HTML/CSS', desc: 'Building modern, semantic, and accessible web interfaces', level: 92 },
    { name: 'JavaScript', desc: 'Creating interactive and dynamic user experiences', level: 88 },
    { name: 'React.js', desc: 'Developing scalable single-page applications', level: 86 },
    { name: 'Python', desc: 'Backend development and data processing', level: 80 },
    { name: 'UI/UX Design', desc: 'Crafting user-centered design solutions', level: 82 },
    { name: 'Git/GitHub', desc: 'Version control and collaborative development', level: 85 },
  ];

  return (
    <SectionWrapper id="skills" bg="bg-gradient-to-b from-indigo-50/60 to-white dark:from-slate-900 dark:to-slate-900">
      <Title kicker="Skills" title="What I work with" subtitle="A mix of engineering and design." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="rounded-3xl p-6 bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-slate-800/70 backdrop-blur group hover:-translate-y-1 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-900 dark:text-white">{s.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{s.level}%</div>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.desc}</p>
            <div className="mt-4 h-2 rounded-full bg-slate-200/70 dark:bg-slate-800/70 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-teal-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Interactive Portfolio',
      desc: 'A modern portfolio with 3D, motion, and dark mode.',
      tech: ['React', 'Framer Motion', 'Spline'],
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      live: '#',
      code: '#',
    },
    {
      title: 'E-commerce UI Kit',
      desc: 'Reusable storefront components with clean design.',
      tech: ['React', 'Tailwind'],
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
      live: '#',
      code: '#',
    },
    {
      title: 'API Dashboard',
      desc: 'Real-time analytics and management dashboard.',
      tech: ['React', 'FastAPI', 'Chart.js'],
      img: 'https://images.unsplash.com/photo-1551281044-8b55f1b7eb5a?q=80&w=1200&auto=format&fit=crop',
      live: '#',
      code: '#',
    },
  ];

  return (
    <SectionWrapper id="projects" bg="bg-gradient-to-b from-white to-white dark:from-slate-900 dark:to-slate-900">
      <Title kicker="Projects" title="Selected work" subtitle="A snapshot of things I've built and shipped." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <TiltCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function TiltCard({ title, desc, tech, img, live, code, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative rounded-3xl overflow-hidden border border-white/40 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/50 backdrop-blur shadow-xl"
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        target.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-200 border border-indigo-300/30 dark:border-indigo-800/40">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a href={live} className="inline-flex items-center gap-1 text-sm text-indigo-700 dark:text-indigo-300 hover:underline">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a href={code} className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:underline">
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
