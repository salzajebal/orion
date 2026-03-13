import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ContentSectionProps {
  title: string;
  highlight: string;
  description: string;
  image: string;
  reversed?: boolean;
  listItems?: string[];
}

export function ContentSection({ title, highlight, description, image, reversed = false, listItems }: ContentSectionProps) {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {title} <span className="text-[#3a6aa0] relative inline-block">
                {highlight}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#3a6aa0]/20 -z-10 transform skew-x-12"></span>
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {description}
            </p>
            
            {listItems && (
              <ul className="space-y-3 mt-6">
                {listItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3a6aa0] mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={image} alt={title} className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
