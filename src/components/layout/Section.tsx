'use client';

import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section 
    className="mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <h2 className="text-3xl font-bold text-indigo-900 mb-8">
      <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    {children}
  </motion.section>
);

export default Section;