import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  highlight: string;
  description: string;
  image: string;
  reversed?: boolean;
  listItems?: string[];
  index?: number;
}

export function ContentSection({
  title,
  highlight,
  description,
  image,
  reversed = false,
  listItems,
  index = 0,
}: ContentSectionProps) {
  return (
    <section className="overflow-hidden border-t border-slate-100">
      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} min-h-[480px]`}>

        {/* 이미지 — full-bleed 절반 */}
        <motion.div
          className="w-full overflow-hidden bg-slate-50 md:w-1/2"
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image}
            alt={`${title} ${highlight}`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* 텍스트 */}
        <motion.div
          className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-16 lg:px-20"
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#3a6aa0]">
            FEATURE 0{index + 1}
          </p>

          <h2 className="break-keep text-3xl font-extrabold leading-snug text-slate-900 md:text-4xl">
            {title}{" "}
            <span className="text-[#3a6aa0]">{highlight}</span>
          </h2>

          {/* 강조 바 */}
          <div className="my-7 h-[3px] w-10 rounded-full bg-[#3a6aa0]" />

          <p className="break-keep text-base leading-8 text-slate-500">{description}</p>

          {listItems && (
            <ul className="mt-8 space-y-3">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600 break-keep">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eff6ff]">
                    <span className="text-[10px] font-black text-[#3a6aa0]">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

      </div>
    </section>
  );
}
