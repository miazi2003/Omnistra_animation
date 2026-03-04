import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import "../../styles/components/WhiteHero.css";

const stats = [
  { label: "Chargebacks Prevented", value: "90%" },
  { label: "Average Recovery Uplift", value: "4x ROI" },
  { label: "Native Integrations", value: "300+" },
];

export default function WhiteHero() {
  return (
    <section className="white-hero">
      <div className="white-hero__ambient white-hero__ambient--left" />
      <div className="white-hero__ambient white-hero__ambient--right" />

      <div className="white-hero__inner">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="white-hero__eyebrow"
        >
          Chargeback Intelligence Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="white-hero__title"
        >
          Prevent more disputes.
          <br />
          Recover revenue faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="white-hero__subtitle"
        >
          One workflow for alerts, automation, insights, and integrations, built
          to match the speed of modern commerce teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="white-hero__actions"
        >
          <button type="button" className="white-hero__btn white-hero__btn--primary">
            Schedule a demo <BsArrowUpRight size={12} />
          </button>
          <button type="button" className="white-hero__btn white-hero__btn--ghost">
            View integrations
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="white-hero__stats"
        >
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 + index * 0.08 }}
              className="white-hero__card"
            >
              <p className="white-hero__card-value">{item.value}</p>
              <p className="white-hero__card-label">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

