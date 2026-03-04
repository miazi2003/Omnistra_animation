import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCalculator, FaLayerGroup, FaMicrophoneAlt, FaPenNib, FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { SiShopify, SiStripe, SiWoocommerce } from "react-icons/si";
import "../../styles/components/animation.css";
import menuAlerts from "../../assets/menu-graphics/alerts.png";
import menuAutomation from "../../assets/menu-graphics/automation.png";
import menuConnect from "../../assets/menu-graphics/connect.png";
import menuInsights from "../../assets/menu-graphics/insights.png";
import menuPrevents from "../../assets/menu-graphics/prevents.png";
import customerAllCaseStudiesGraphic from "../../assets/menu-graphics/customer-all-case-studies.svg";
import customerFanaticsGraphic from "../../assets/menu-graphics/customer-fanatics.svg";
import customerHexcladGraphic from "../../assets/menu-graphics/customer-hexclad.svg";
import customerObviGraphic from "../../assets/menu-graphics/obvi.png";
import customerElementorGraphic from "../../assets/menu-graphics/elementor.png";
import integrationsAllGraphic from "../../assets/menu-graphics/integrations-all.svg";
import resourcesBlogGraphic from "../../assets/menu-graphics/resources-blog.svg";
import resourcesReportsGraphic from "../../assets/menu-graphics/resources-reports.svg";
import resourcesPodcastGraphic from "../../assets/menu-graphics/resources-podcast.svg";
import resourcesWebinarsGraphic from "../../assets/menu-graphics/resources-webinars.svg";
import companyWhoWeAreGraphic from "../../assets/menu-graphics/company-who-we-are.svg";
import companyBrandGraphic from "../../assets/menu-graphics/company-brand.svg";
import companyCareersGraphic from "../../assets/menu-graphics/company-careers.svg";
import companyPartnerGraphic from "../../assets/menu-graphics/company-become-a-partner.svg";
import companyContactGraphic from "../../assets/menu-graphics/company-contact-us.svg";



const logo = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 31 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 26.791 6.16874C26.7723 6.14897 17.7054 10.7632 17.7054 10.7632L14.0061 5.62295C20.772 0.983474 24.7214 1.69848 25.7767 3.16527L30.1387 9.22647C31.7551 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295C14.0061 5.62295 6.24723 11.9605 3.62693 17.8263C3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.64591 23.0115 5.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 4.31985 9.95881 -0.000976563Z"
      fill="currentColor"
    ></path>
  </svg>
);

const logoName = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 132 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* logoName path here */}
    <path d="M119.083 18.366H117.182L112.198 5.52075H115.589L118.364 13.1508L121.113 5.52075H123.014L125.891 13.0995L128.512 5.52075H131.852L126.97 18.366H125.069L122.063 10.4533L119.083 18.366Z" fill="currentColor"></path>
    {/* ... add the rest of logoName paths ... */}
  </svg>
);

const menuGraphics = {
  alerts: menuAlerts,
  automation: menuAutomation,
  connect: menuConnect,
  insights: menuInsights,
  prevents: menuPrevents,
};

const productCards = [
  {
    title: "Prevent",
    badge: "NEW",
    graphic: menuGraphics.prevents,
    description:
      "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
  },
  {
    title: "Automation",
    graphic: menuGraphics.automation,
    description:
      "Fully automated chargeback recovery with 4x ROI guarantee.",
  },
  {
    title: "Alerts",
    graphic: menuGraphics.alerts,
    description:
      "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
  },
  {
    title: "Insights",
    badge: "FREE",
    graphic: menuGraphics.insights,
    description:
      "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.",
  },
  {
    title: "Connect",
    badge: "FOR PLATFORMS",
    graphic: menuGraphics.connect,
    description:
      "Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.",
  },
];

function ProductMenuContent() {
  return (
    <div className="w-full rounded-2xl bg-[#05070c]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
        {productCards.map((card) => (
          <div
            key={card.title}
            className="menu-option relative min-h-[280px] rounded-2xl border border-white/10 bg-[radial-gradient(140%_80%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-5 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="menu-option-text text-white text-[1rem] font-semibold leading-none">
                  {card.title}
                </h3>
                {card.badge && (
                  <span className="rounded-full border border-white/20 bg-white/5 px-2 py-[3px] text-[1rem] font-semibold text-white">
                    {card.badge}
                  </span>
                )}
              </div>
              <p className="menu-option-text text-[1rem] leading-relaxed text-white">
                {card.description}
              </p>
            </div>

            <img
              src={card.graphic}
              alt=""
              className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[56%] w-full object-cover opacity-45"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const customerMetricCards = [
  {
    brand: "obvi.",
    value: "170",
    suffix: "%",
    caption: "win-rate increase",
    chip: "eCommerce",
    graphic: customerObviGraphic,
  },
  {
    brand: "elementor",
    value: "90",
    suffix: "%",
    caption: "reduction in time spent managing chargebacks",
    chip: "SaaS",
    graphic: customerElementorGraphic,
  },
  {
    brand: "Fanatics",
    value: "2X",
    suffix: "",
    caption: "Chargeback Win Rate",
    chip: "Marketplace",
    graphic: customerFanaticsGraphic,
  },
  {
    brand: "HEXCLAD",
    value: "328",
    suffix: "hrs.",
    caption: "and 40 minutes saved",
    chip: "Travel",
    graphic: customerHexcladGraphic,
  },
];

function CustomersMenuContent() {
  return (
    <div className="w-full rounded-2xl bg-[#05070c]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-3">
        <div className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(140%_90%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-6 min-h-[295px] md:col-span-3 xl:col-span-4">
          <h3 className="menu-option-text text-[1rem] font-semibold text-white">All Case Studies</h3>

          <img
            src={customerAllCaseStudiesGraphic}
            alt=""
            className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[78%] w-full object-contain object-bottom opacity-50"
          />
        </div>

        {customerMetricCards.map((card) => (
          <div
            key={card.brand}
            className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(130%_85%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-5 min-h-[295px] md:col-span-3 xl:col-span-2"
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="menu-option-text text-[1rem] font-semibold leading-none text-white">{card.brand}</div>

              <div className="mt-auto mb-6 text-center">
                <div className="flex items-start justify-center gap-1 text-white">
                  <span className="menu-option-text text-[1rem] font-semibold leading-none">{card.value}</span>
                  {card.suffix ? (
                    <span className="menu-option-text  text-[1rem] font-medium leading-none text-white">
                      {card.suffix}
                    </span>
                  ) : null}
                </div>
                <p className="menu-option-text mt-1 text-[1rem] leading-snug text-white">{card.caption}</p>
              </div>

              <div className="mt-auto flex justify-end">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[1rem] font-medium text-white">
                  {card.chip}
                </span>
              </div>
            </div>

            {card.graphic ? (
              <img
                src={card.graphic}
                alt=""
                className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[80%] w-full object-contain object-bottom opacity-50"
              />
            ) : (
              <>
                <div className="menu-option-graphic pointer-events-none absolute left-[-15%] top-[24%] h-[74%] w-[140%] rounded-full border border-white/10 opacity-35" />
                <div className="menu-option-graphic pointer-events-none absolute left-[-8%] top-[12%] h-[88%] w-[120%] rounded-full border border-white/5 opacity-28" />
                <div className="pointer-events-none absolute left-[-15%] top-[46%] h-[1px] w-[130%] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-30" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const integrationCards = [
  {
    name: "Stripe",
    description: "#1 Chargeback Solution for Stripe Merchants",
    LogoIcon: SiStripe,
  },
  {
    name: "Shopify",
    description: "Powering 30k+ Shopify Merchants",
    LogoIcon: SiShopify,
  },
  {
    name: "WooCommerce",
    description: "Native WooCommerce Integration",
    LogoIcon: SiWoocommerce,
  },
];

function IntegrationsMenuContent() {
  return (
    <div className="w-full rounded-2xl bg-[#05070c]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 min-h-[300px]">
        <div className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(140%_90%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-6 xl:col-span-7">
          <h3 className="menu-option-text text-[1rem] font-semibold text-white">All Integrations</h3>
          <p className="menu-option-text mt-3 max-w-[320px] text-[1rem] leading-relaxed text-white">
            Choose from hundreds of integrated platforms.
          </p>
                  <img
            src={integrationsAllGraphic}
            alt="Integrations graphic"
            className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[78%] w-full object-contain object-bottom opacity-60"
          />
        </div>

        <div className="xl:col-span-5 grid grid-rows-3 gap-3">
          {integrationCards.map((card) => (
            <div
              key={card.name}
            className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#12161f_0%,#090c13_100%)] p-5"
          >
              <card.LogoIcon
                className="menu-option-icon pointer-events-none absolute left-1/2 top-1/2 z-0 h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 text-white"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full items-center justify-between gap-4">
                <div>
                  <h4 className="menu-option-text text-[1rem] font-semibold leading-none text-white">
                    {card.name}
                  </h4>
                  <p className="menu-option-text mt-2 text-[1rem] text-white">{card.description}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.04)_55%,rgba(255,255,255,0)_80%)] opacity-45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const resourceMainCards = [
  { title: "Blog", Icon: FaPenNib, graphic: resourcesBlogGraphic },
  { title: "Reports", Icon: FaLayerGroup, graphic: resourcesReportsGraphic },
  { title: "Podcast", Icon: FaMicrophoneAlt, graphic: resourcesPodcastGraphic },
  { title: "Webinars", Icon: FaRegCalendarAlt, graphic: resourcesWebinarsGraphic },
];

function ResourcesMenuContent() {
  return (
    <div className="w-full rounded-2xl bg-[#05070c]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 min-h-[295px]">
        {resourceMainCards.map((card) => (
          <div
            key={card.title}
            className="menu-option relative min-h-[295px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(140%_90%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-5"
          >
            <h4 className="menu-option-text text-[1rem] font-semibold text-white">{card.title}</h4>

            {card.graphic ? (
              <img
                src={card.graphic}
                alt=""
                className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[82%] w-full object-contain object-bottom opacity-60"
              />
            ) : (
              <>
                <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[67%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[67%] h-[168px] w-[168px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[67%] h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[67%] h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-[67%] h-[1px] w-[220px] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-[67%] h-[220px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/10" />

                <card.Icon
                  className="menu-option-icon pointer-events-none absolute left-1/2 top-[67%] h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 text-white"
                  aria-hidden="true"
                />
              </>
            )}
          </div>
        ))}

        <div className="grid h-[295px] grid-rows-2 gap-3">
          <div className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#12161f_0%,#090c13_100%)] p-5">
            <h4 className="menu-option-text font-semibold leading-none text-white">ROI Calculator</h4>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/[0.02] px-4 py-2.5">
                <span className="menu-option-text text-white [font-variant-numeric:tabular-nums]">1,020</span>
                <span className="menu-option-text rounded-full bg-white/[0.04] px-2.5 py-0.5 font-semibold tracking-wide text-white">
                  HOURS
                </span>
              </div>
              <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/[0.02] px-4 py-2.5">
                <span className="menu-option-text text-white [font-variant-numeric:tabular-nums]">$7,500</span>
                <span className="menu-option-text rounded-full bg-white/[0.04] px-2.5 py-0.5 font-semibold tracking-wide text-white">
                  USD
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <FaCalculator className="menu-option-icon pointer-events-none absolute right-4 bottom-4 h-8 w-8 text-white" aria-hidden="true" />
          </div>

          <div className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#12161f_0%,#090c13_100%)] p-5">
            <h4 className="menu-option-text text-[1rem] font-semibold leading-none text-white">Reason Codes</h4>

            <div className="mt-10 flex items-center justify-between rounded-full border border-white/20 px-4 py-2">
              <span className="menu-option-text text-[1rem] text-white">
                Error Code: <span className="menu-option-text text-white">12.7</span>
              </span>
              <FaSearch className="menu-option-icon h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const companyCards = [
  { title: "Brand", graphic: companyBrandGraphic },
  { title: "Careers", badge: "We're Hiring!", graphic: companyCareersGraphic },
  { title: "Become a Partner", graphic: companyPartnerGraphic },
  { title: "Contact Us", graphic: companyContactGraphic },
];

function CompanyMenuContent() {
  return (
    <div className="w-full rounded-2xl bg-[#05070c]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 min-h-[295px]">
        <div className="menu-option relative min-h-[295px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(140%_90%_at_10%_0%,rgba(255,255,255,0.06),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-6 xl:col-span-7">
          <h3 className="menu-option-text text-[1rem] font-semibold text-white">Who We Are</h3>
          <p className="menu-option-text mt-3 max-w-[280px] text-[1rem] leading-relaxed text-white">
            The story behind the Chargeflow.
          </p>

          <img
            src={companyWhoWeAreGraphic}
            alt=""
            className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[84%] w-full object-contain object-bottom opacity-60"
          />
        </div>

        <div className="xl:col-span-5 grid h-[295px] grid-cols-2 grid-rows-2 gap-3">
          {companyCards.map((card, index) => (
            <div
              key={card.title}
              className="menu-option relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(140%_90%_at_10%_0%,rgba(255,255,255,0.05),rgba(255,255,255,0)_45%),linear-gradient(180deg,#111520_0%,#080b12_100%)] p-5"
            >
              <div className="relative z-10 flex items-start justify-between gap-2">
                <h4 className="menu-option-text text-[1rem] font-semibold leading-none text-white">{card.title}</h4>
                {card.badge ? (
                  <span className="rounded-full bg-[#6f7f9a]/60 px-2.5 py-1 text-[1rem] font-semibold text-white">
                    {card.badge}
                  </span>
                ) : null}
              </div>

              {card.graphic ? (
                <img
                  src={card.graphic}
                  alt=""
                  className="menu-option-image pointer-events-none absolute bottom-0 left-0 h-[78%] w-full object-contain object-bottom opacity-60"
                />
              ) : null}

              {!card.graphic && index === 0 && (
                <>
                  <div className="menu-option-graphic pointer-events-none absolute right-[-24px] top-[-10px] h-[145px] w-[145px] rounded-full border border-white/15" />
                  <div className="pointer-events-none absolute right-[10%] top-[20%] h-[1px] w-[70%] rotate-[-35deg] bg-white/15" />
                </>
              )}
              {index === 1 && (
                <>
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
                  <div className="pointer-events-none absolute inset-x-[8%] top-1/2 h-[1px] -translate-y-1/2 bg-white/10" />
                  <div className="pointer-events-none absolute left-1/2 inset-y-[12%] w-[1px] -translate-x-1/2 bg-white/10" />
                </>
              )}
              {index === 2 && (
                <>
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[58%] h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl border border-white/15" />
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[58%] h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xl border border-white/15" />
                </>
              )}
              {index === 3 && (
                <>
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[58%] h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[58%] h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
                  <div className="menu-option-graphic pointer-events-none absolute left-1/2 top-[58%] h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Dynamic menus with content
const menus = [
  {
    name: "PRODUCT",
    content: <ProductMenuContent />,
  },
  {
    name: "CUSTOMERS",
    content: <CustomersMenuContent />,
  },
  {
    name: "PRICING",
    content: null,
  },
  {
    name: "INTEGRATIONS",
    content: <IntegrationsMenuContent />,
  },
  {
    name: "RESOURCES",
    content: <ResourcesMenuContent />,
  },
  {
    name: "COMPANY",
    content: <CompanyMenuContent />,
  },
];

const mobileSubmenuLinks = {
  PRODUCT: ["Prevent", "Automation", "Alerts", "Insights", "Connect"],
  CUSTOMERS: ["All Case Studies", "Obvi", "Elementor", "Fanatics", "Hexclad"],
  INTEGRATIONS: ["Stripe", "Shopify", "WooCommerce"],
  RESOURCES: ["Blog", "Reports", "Podcast", "Webinars"],
  COMPANY: ["Who We Are", "Brand", "Careers", "Become a Partner", "Contact Us"],
};

function Box() {
  const [isSticky, setIsSticky] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= 1024;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const boxRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMenuEnter = (name) => {
    const menu = menus.find((item) => item.name === name);
    clearCloseTimer();
    if (!menu?.content) {
      setHoverMenu(null);
      return;
    }
    setHoverMenu(name);
  };

  const handleMenuLeave = () => {
    clearCloseTimer();
    closeTimeoutRef.current = setTimeout(() => {
      setHoverMenu(null);
    }, 120);
  };

  // Sticky logic
  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;
      const top = boxRef.current.getBoundingClientRect().top;
      setIsSticky(top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setMobileMenuOpen(false);
        setMobileExpanded(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSection = (menuName) => {
    const menu = menus.find((item) => item.name === menuName);
    if (!menu?.content) return;
    setMobileExpanded((prev) => (prev === menuName ? null : menuName));
  };

  const activeMenu = menus.find((menu) => menu.name === hoverMenu);
  const dropdownMotion = {
    initial: { opacity: 0, y: -24, scaleY: 0.92 },
    animate: { opacity: 1, y: 0, scaleY: 1 },
    exit: { opacity: 0, y: -14, scaleY: 0.96 },
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <motion.div
      ref={boxRef}
      animate={{
        width: isDesktop && (hoverMenu || isSticky) ? "1164px" : "100%",
      }}
      transition={{
        width: { delay: 0.1, duration: 0.25, ease: "easeOut" },
      }}
      className="h-20 mx-auto sticky top-0 flex items-center justify-center z-30 rounded-xl text-white"
    >
      <div
        className={`inside flex justify-between items-center w-full px-3 lg:px-[19px] rounded-full transition-all duration-300 py-2 ${
          isSticky
            ? "bg-[#0a1324]/85 backdrop-blur-md shadow-lg border border-[#27395b]"
            : "bg-transparent"
        } relative`}
      >
        {/* Logo */}
        <div className="flex gap-2 w-auto lg:w-52 items-center h-[1.6em]">
          <div className="w-[1.6em]">{logo}</div>
          <motion.span
            animate={{
              opacity: isSticky ? 0 : 1,
              x: isSticky ? -20 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="h-22 w-22 hidden lg:block"
          >
            <svg width="100%" height="100%" viewBox="0 0 132 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M119.083 18.366H117.182L112.198 5.52075H115.589L118.364 13.1508L121.113 5.52075H123.014L125.891 13.0995L128.512 5.52075H131.852L126.97 18.366H125.069L122.063 10.4533L119.083 18.366Z" fill="currentColor"></path>
  <path d="M102.906 15.283C103.489 15.8825 104.396 16.1822 105.63 16.1822C106.863 16.1822 107.77 15.8825 108.353 15.283C108.952 14.6836 109.252 13.596 109.252 12.0203C109.252 10.3933 108.952 9.27143 108.353 8.65486C107.77 8.02116 106.863 7.70431 105.63 7.70431C104.396 7.70431 103.489 8.01259 102.906 8.62917C102.324 9.24574 102.033 10.3761 102.033 12.0203C102.033 13.596 102.324 14.6836 102.906 15.283ZM105.63 5.13525C107.959 5.13525 109.68 5.64906 110.793 6.67669C111.924 7.70431 112.489 9.48552 112.489 12.0203C112.489 14.4866 111.924 16.225 110.793 17.2355C109.68 18.246 107.959 18.7512 105.63 18.7512C103.317 18.7512 101.596 18.246 100.466 17.2355C99.3525 16.225 98.7959 14.4866 98.7959 12.0203C98.7959 9.48552 99.3525 7.70431 100.466 6.67669C101.596 5.64906 103.317 5.13525 105.63 5.13525Z" fill="currentColor"></path>
  <path d="M92.3974 3.20846L89.8283 3.20846C89.1604 3.20846 88.6723 3.37116 88.364 3.69658C88.0728 4.02199 87.9272 4.52724 87.9272 5.21232V5.52061L92.3974 5.52061L92.3974 8.08966L87.9272 8.08966L87.9272 18.3659L84.6902 18.3659L84.6902 8.08966L82.5322 8.08966L82.5322 5.52061L84.6902 5.52061V5.21232C84.6902 3.8079 85.0756 2.69465 85.8463 1.87255C86.617 1.05045 87.8587 0.639404 89.5714 0.639404L92.3974 0.639404L92.3974 3.20846ZM97.0988 0.639404L97.0988 18.3659L93.8617 18.3659L93.8617 0.639404L97.0988 0.639404Z" fill="currentColor"></path>
  <path d="M81.7136 11.0184L81.7136 12.6626L71.6687 12.6626V12.6883C71.6858 13.9899 71.9941 14.8977 72.5935 15.4115C73.193 15.9253 74.0836 16.1822 75.2653 16.1822C77.2178 16.1822 78.2882 15.4971 78.4766 14.1269L81.7136 14.1269C81.5424 15.8054 80.9172 16.9957 79.8382 17.6979C78.7764 18.4001 77.2435 18.7512 75.2396 18.7512C72.9275 18.7512 71.2148 18.246 70.1015 17.2355C68.9883 16.225 68.4316 14.4866 68.4316 12.0203C68.4316 9.48552 68.9797 7.70431 70.0758 6.67669C71.1891 5.64906 72.9018 5.13525 75.2139 5.13525C79.5471 5.13525 81.7136 7.0963 81.7136 11.0184ZM71.6687 10.967V11.0698L78.4509 11.0698C78.4509 9.83662 78.1684 8.97171 77.6032 8.47502C77.0551 7.96121 76.2501 7.70431 75.1882 7.70431C74.1092 7.70431 73.27 7.94409 72.6706 8.42364C72.0711 8.88607 71.7372 9.73386 71.6687 10.967Z" fill="currentColor"></path>
  <path d="M63.54 17.0557L63.54 15.2316L63.1803 15.2316C62.5295 17.0642 61.0737 17.9805 58.8129 17.9805C56.9461 17.9805 55.5673 17.5267 54.6767 16.6189C53.7861 15.6941 53.3408 14.0156 53.3408 11.5836C53.3408 9.15154 53.7861 7.47309 54.6767 6.54823C55.5673 5.60625 56.9461 5.13525 58.8129 5.13525C61.0737 5.13525 62.5295 6.06011 63.1803 7.90983L63.54 7.90983L63.54 5.52061L66.777 5.52061L66.777 17.0557C66.777 19.3678 66.2118 20.9949 65.0814 21.9369C63.9681 22.896 62.2554 23.3755 59.9433 23.3755C57.9566 23.3755 56.4151 23.033 55.319 22.3479C54.24 21.6628 53.6234 20.5068 53.4693 18.8797L56.7063 18.8797C56.8947 20.1642 57.9737 20.8065 59.9433 20.8065C61.1764 20.8065 62.0842 20.5324 62.6665 19.9844C63.2488 19.4534 63.54 18.4772 63.54 17.0557ZM60.2259 15.4115C62.4353 15.4115 63.54 14.4695 63.54 12.5855L63.54 10.5303C63.54 8.64629 62.4353 7.70431 60.2259 7.70431C58.8215 7.70431 57.8538 7.95265 57.3229 8.44933C56.809 8.92889 56.5521 9.97364 56.5521 11.5836C56.5521 13.1593 56.809 14.1954 57.3229 14.6921C57.8367 15.1717 58.8043 15.4115 60.2259 15.4115Z" fill="currentColor"></path>
  <path d="M51.6099 5.52075L52.6889 5.52075L52.6889 8.44947L50.9419 8.42378C49.4347 8.3724 48.3814 8.62931 47.782 9.1945C47.1825 9.75969 46.8742 10.6503 46.8571 11.8663L46.8571 18.366L43.6201 18.366L43.6201 5.52075L46.8571 5.52075L46.8571 8.86052L47.1911 8.86052C47.5336 7.69588 48.0132 6.8481 48.6298 6.31716C49.2635 5.78622 50.2568 5.52075 51.6099 5.52075Z" fill="currentColor"></path>
  <path d="M33.7744 18.7512C32.3528 18.7512 31.231 18.4087 30.4089 17.7236C29.5868 17.0385 29.1758 16.028 29.1758 14.6921C29.1758 13.5446 29.5697 12.6026 30.3575 11.8662C31.1454 11.1297 32.4642 10.7615 34.3139 10.7615C35.3586 10.7615 36.823 10.8129 38.707 10.9156L38.707 9.888C38.707 9.11729 38.4758 8.56066 38.0133 8.21812C37.568 7.87558 36.823 7.70431 35.7782 7.70431C34.8191 7.70431 34.1084 7.84989 33.6459 8.14105C33.1835 8.43221 32.8923 8.98027 32.7725 9.78524L29.5868 9.78524C29.741 8.07254 30.3147 6.87365 31.3081 6.18857C32.3186 5.48636 33.8258 5.13525 35.8296 5.13525C39.9059 5.13525 41.944 6.71094 41.944 9.86231L41.944 18.3659L38.707 18.3659L38.707 16.0794H38.373C38.0647 16.9529 37.4995 17.6209 36.6774 18.0833C35.8724 18.5286 34.9048 18.7512 33.7744 18.7512ZM35.1874 16.2849C37.5338 16.2849 38.707 15.3943 38.707 13.6131L38.707 12.791C37.628 12.7225 36.5918 12.6883 35.5984 12.6883C34.3481 12.6883 33.5175 12.851 33.1064 13.1764C32.6954 13.4847 32.4899 13.9214 32.4899 14.4866C32.4899 15.1374 32.7039 15.5999 33.1321 15.8739C33.5774 16.1479 34.2625 16.2849 35.1874 16.2849Z" fill="currentColor"></path>
  <path d="M24.4735 18.3659L24.4735 9.83661C24.4735 9.01452 24.2337 8.45789 23.7542 8.16673C23.2746 7.85844 22.521 7.7043 21.4934 7.7043C19.5067 7.7043 18.4876 8.49214 18.4362 10.0678L18.4362 18.3659L15.1992 18.3659L15.1992 0.639404L18.4362 0.639404L18.4362 7.90983L18.7702 7.90983C19.3354 6.06011 20.7141 5.13525 22.9064 5.13525C24.4821 5.13525 25.6724 5.46066 26.4774 6.11149C27.2995 6.76232 27.7105 7.90126 27.7105 9.52833L27.7105 18.3659L24.4735 18.3659Z" fill="currentColor"></path>
  <path d="M10.7296 13.6388L13.9666 13.6388C13.7782 15.4885 13.1445 16.8073 12.0655 17.5952C11.0036 18.3659 9.47929 18.7512 7.49256 18.7512C5.18041 18.7512 3.46771 18.246 2.35445 17.2355C1.2412 16.225 0.68457 14.4866 0.68457 12.0203C0.68457 9.48552 1.2412 7.70431 2.35445 6.67669C3.46771 5.64906 5.18041 5.13525 7.49256 5.13525C9.46216 5.13525 10.9779 5.51205 12.0398 6.26564C13.1017 7.01923 13.7268 8.30375 13.9152 10.1192L10.6782 10.1192C10.4213 8.50928 9.3594 7.70431 7.49256 7.70431C6.27654 7.70431 5.37737 8.01259 4.79505 8.62917C4.21274 9.24574 3.92158 10.3761 3.92158 12.0203C3.92158 13.596 4.21274 14.6836 4.79505 15.283C5.37737 15.8825 6.27654 16.1822 7.49256 16.1822C8.43454 16.1822 9.17957 15.9938 9.72763 15.617C10.2757 15.2231 10.6097 14.5637 10.7296 13.6388Z" fill="currentColor"></path>
</svg>
          </motion.span>
        </div>

        {/* Navbar */}
        <div className="relative hidden lg:flex gap-2 items-center">
          {menus.map((menu) => (
            <span
              key={menu.name}
              onMouseEnter={() => handleMenuEnter(menu.name)}
              onMouseLeave={handleMenuLeave}
              className="cursor-pointer relative px-1 py-1"
            >
              {menu.name}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isDesktop && activeMenu && (
            <motion.div
              key={activeMenu.name}
              initial={dropdownMotion.initial}
              animate={dropdownMotion.animate}
              exit={dropdownMotion.exit}
              transition={dropdownMotion.transition}
              onMouseEnter={clearCloseTimer}
              onMouseLeave={handleMenuLeave}
              style={{ transformOrigin: "top center" }}
              className="absolute top-full left-0 mt-2 w-full z-50 will-change-transform"
            >
              {activeMenu.content}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <motion.div className="hidden lg:flex gap-4">
          <button className="flex gap-2 items-center">
            Sign In <BsArrowUpRight size={10} />
          </button>
          <button className="py-[0.2em] px-[1em] bg-[#3448ff] rounded-full flex gap-2 items-center text-white">
            {isSticky ? "Schedule A Demo" : "Sign Up"}{" "}
            <BsArrowUpRight size={10} />
          </button>
        </motion.div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
        >
          <FiMenu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-12%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] p-2 sm:p-3"
          >
            <div className="relative h-full overflow-y-auto rounded-[22px] border border-white/15 bg-[linear-gradient(180deg,rgba(6,10,18,0.72)_0%,rgba(4,8,14,0.64)_100%)] px-6 pb-8 pt-5 text-white shadow-[0_30px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
                <div className="absolute left-[-20%] top-[20%] h-52 w-52 rounded-full bg-[#3b4fff]/20 blur-[80px]" />
                <div className="absolute right-[-25%] bottom-[16%] h-64 w-64 rounded-full bg-white/10 blur-[95px]" />
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0)_45%)]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 h-[1.6em]">
                    <div className="w-[1.6em]">{logo}</div>
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileExpanded(null);
                    }}
                    className="inline-flex h-10 w-10 items-center justify-center text-white"
                  >
                    <FiX size={28} />
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="flex items-center gap-2 text-[0.875rem] font-semibold uppercase leading-none text-white">
                    Sign In <BsArrowUpRight size={13} />
                  </button>
                  <button className="rounded-full bg-[#3448ff] px-5 py-3 text-[0.875rem] font-semibold uppercase leading-none text-white">
                    Schedule A Demo
                  </button>
                </div>

                <div className="mt-8 border-t border-dashed border-[#2a3140]/80">
                  {menus.map((menu) => {
                    const isExpanded = mobileExpanded === menu.name;
                    const hasContent = Boolean(menu.content);
                    return (
                      <div key={menu.name} className="border-b border-dashed border-[#2a3140]/80 py-5">
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(menu.name)}
                          className="flex w-full items-center justify-between text-left"
                        >
                          <span className="text-[1rem] font-semibold leading-none text-white">{menu.name}</span>
                          {hasContent ? (
                            <FiChevronDown
                              className={`h-6 w-6 text-white transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          ) : null}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && hasContent ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 space-y-2">
                                {(mobileSubmenuLinks[menu.name] || []).map((item) => (
                                  <li key={item} className="text-[1rem] text-white">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Box;



