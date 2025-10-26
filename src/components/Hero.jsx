import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section id="home" className="relative min-h-[100vh] overflow-hidden">
      {/* 3D Spline scene with parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-slate-900/70 dark:via-slate-900/30 dark:to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-teal-500">John Doe</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300"
            >
              Full Stack Developer & Creative Designer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-indigo-700 dark:text-indigo-200 border border-indigo-300/60 dark:border-indigo-700/60 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { label: 'Projects', value: 24 },
                { label: 'Clients', value: 8 },
                { label: 'Awards', value: 3 },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/40 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/50 p-4 backdrop-blur">
                  <AnimatedCounter to={stat.value} className="text-3xl font-extrabold text-slate-900 dark:text-white" />
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-white/40 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/50 p-6 backdrop-blur shadow-xl"
            >
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Passionate developer currently pursuing [Course Name] with expertise in modern web technologies. Currently studying at [University/College Name].
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Tag>React</Tag>
                <Tag>FastAPI</Tag>
                <Tag>Python</Tag>
                <Tag>UI/UX</Tag>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-slate-900" />
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 text-indigo-700 dark:text-indigo-200 border border-indigo-300/30 dark:border-indigo-700/30">
      {children}
    </span>
  );
}

function AnimatedCounter({ to, className }) {
  const { scrollY } = useScroll();
  const value = useTransform(scrollY, [0, 600], [0, to]);
  return (
    <motion.span className={className}>
      {value.to((v) => Math.round(v))}
    </motion.span>
  );
}
