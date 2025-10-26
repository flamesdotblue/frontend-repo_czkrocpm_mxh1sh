import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-indigo-50/60 dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">Contact</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Let's build something</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Have a project in mind or just want to say hi? Drop a message.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! I\'ll get back to you soon.'); }}
            className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-slate-800/70 backdrop-blur shadow-xl"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea required rows="5" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project..." />
              </div>
              <div>
                <button type="submit" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg hover:shadow-xl transition">Send Message</button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-slate-800/70 backdrop-blur shadow-xl"
          >
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-indigo-600" /><span>demo@email.com</span></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-indigo-600" /><span>+91 1234567890</span></div>
            </div>

            <div className="mt-8">
              <div className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Social</div>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/40 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 hover:-translate-y-0.5 transition-transform">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/40 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 hover:-translate-y-0.5 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
