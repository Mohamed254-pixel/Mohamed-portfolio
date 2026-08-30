"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiGit,
} from "react-icons/si";

import {
  LuDatabase,
  LuBraces,
  LuWorkflow,
  LuMenu,
  LuX,
  LuSearch,
  LuUser,
  LuBriefcaseBusiness,
  LuLayers3,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuArrowUpRight,
  LuArrowUp,
  LuDownload,
  LuChevronDown,
  LuExternalLink,
  LuSend,
  LuCheck,
} from "react-icons/lu";

const techCategories = [
  {
    name: "Languages",
    description: "Programming and querying",
    items: [
      { Icon: SiPython, name: "Python" },
      { Icon: LuDatabase, name: "SQL" },
    ],
  },
  {
    name: "Databases",
    description: "Relational storage and querying",
    items: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    name: "Data Engineering",
    description: "Building reliable data systems",
    items: [
      { Icon: LuWorkflow, name: "ETL" },
      { Icon: LuBraces, name: "APIs" },
      { Icon: LuDatabase, name: "Data Modeling" },
    ],
  },
  {
    name: "Libraries",
    description: "Data processing and analysis",
    items: [
      { Icon: SiPandas, name: "Pandas" },
      { Icon: LuBraces, name: "NumPy" },
      { Icon: LuLayers3, name: "Matplotlib" },
    ],
  },
  {
    name: "Tools",
    description: "Development and version control",
    items: [
      { Icon: SiGit, name: "Git" },
      { Icon: LuGithub, name: "GitHub" },
    ],
  },
];

const experienceItems = [
  {
    date: "2025 — Present",
    role: "GSOC Security Specialist",
    company: "Securitas Technology",
    summary:
      "Real-time operations, incident awareness, communication, and high-responsibility monitoring in a fast-paced environment.",
    details:
      "Monitor live systems, document incident activity, coordinate responses, and communicate clearly when situations change quickly.",
    skills: [
      "Real-time monitoring",
      "Incident response",
      "Documentation",
      "Communication",
    ],
  },
  {
    date: "Current",
    role: "Operations Manager",
    company: "Umah Service LLC",
    summary:
      "Coordinate daily operations, support drivers, manage workflows, and solve operational issues across a transportation business.",
    details:
      "Handle scheduling and dispatch workflows, resolve conflicts, coordinate with drivers and partners, and improve day-to-day operational processes.",
    skills: [
      "Operations",
      "Scheduling",
      "Process improvement",
      "Problem solving",
    ],
  },
  {
    date: "Current",
    role: "MIS Student",
    company: "San José State University",
    summary:
      "Focused on databases, data systems, programming, analytics, and the technical-business side of modern information systems.",
    details:
      "Building practical projects in data engineering, analytics, databases, and AI while connecting technical implementation with business needs.",
    skills: [
      "Python",
      "SQL",
      "Databases",
      "Analytics",
      "Data engineering",
    ],
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            node.classList.add(
              "is-visible"
            );

            observer.unobserve(
              node
            );
          }
        },
        {
          threshold: 0.14,
        }
      );

    observer.observe(node);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function StatusBadge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />

      {children}
    </span>
  );
}

function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] =
    useState("");

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  const actions = [
    {
      label: "About",
      hint: "Jump to section",
      icon: LuUser,
      href: "#about",
    },
    {
      label: "Experience",
      hint: "Jump to section",
      icon: LuBriefcaseBusiness,
      href: "#experience",
    },
    {
      label: "Education",
      hint: "View education",
      icon: LuFileText,
      href: "#education",
    },
    {
      label: "Portfolio",
      hint: "View projects",
      icon: LuLayers3,
      href: "#portfolio",
    },
    {
      label: "Resume",
      hint: "Open PDF",
      icon: LuFileText,
      href: "/resume.pdf",
      external: true,
    },
    {
      label: "Certificate",
      hint: "Open Google certificate",
      icon: LuFileText,
      href: "/google-data-analytics-certificate.pdf",
      external: true,
    },
    {
      label: "GitHub",
      hint: "Open profile",
      icon: LuGithub,
      href: "https://github.com/Mohamed254-pixel",
      external: true,
    },
    {
      label: "LinkedIn",
      hint: "Open profile",
      icon: LuLinkedin,
      href: "https://www.linkedin.com/in/mohamed-ibrahim-6270ab2a3/",
      external: true,
    },
    {
      label: "Email",
      hint: "Send a message",
      icon: LuMail,
      href: "mailto:mohamedibrahim.sjsu@gmail.com",
    },
    {
      label: "Contact",
      hint: "Jump to section",
      icon: LuArrowUpRight,
      href: "#contact",
    },
  ];

  const filtered =
    actions.filter((action) =>
      `${action.label} ${action.hint}`
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  function handleClose() {
    setQuery("");
    onClose();
  }

  if (!open) return null;

  function handleAction(
    action: (typeof actions)[number]
  ) {
    if (action.external) {
      window.open(
        action.href,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (
      action.href.startsWith("#")
    ) {
      document
        .querySelector(
          action.href
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      window.location.href =
        action.href;
    }

    handleClose();
  }

  return (
    <div
      className="command-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          handleClose();
        }
      }}
    >
      <div className="command-shell">
        <div className="command-search-row">
          <LuSearch
            className="h-4 w-4 text-zinc-600"
            aria-hidden="true"
          />

          <input
            autoFocus
            value={query}
            onChange={(event) =>
              setQuery(
                event.target.value
              )
            }
            onKeyDown={(
              event
            ) => {
              if (
                event.key ===
                "Escape"
              ) {
                handleClose();
              }

              if (
                event.key ===
                  "Enter" &&
                filtered[0]
              ) {
                handleAction(
                  filtered[0]
                );
              }
            }}
            placeholder="Search navigation..."
            className="command-search-input"
          />

          <button
            type="button"
            onClick={handleClose}
            className="command-key hover:text-white transition-colors"
            aria-label="Close quick navigation"
          >
            ESC
          </button>
        </div>

        <div className="command-list">
          {filtered.length > 0 ? (
            filtered.map(
              (action) => {
                const Icon =
                  action.icon;

                return (
                  <button
                    key={
                      action.label
                    }
                    type="button"
                    className="command-item"
                    onClick={() =>
                      handleAction(
                        action
                      )
                    }
                  >
                    <span className="command-item-left">
                      <span className="command-icon">
                        <Icon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>

                      <span>
                        <span className="command-label">
                          {
                            action.label
                          }
                        </span>

                        <span className="command-hint">
                          {
                            action.hint
                          }
                        </span>
                      </span>
                    </span>

                    <span className="text-zinc-700">
                      ↗
                    </span>
                  </button>
                );
              }
            )
          ) : (
            <div className="command-empty">
              No matching
              actions.
            </div>
          )}
        </div>

        <div className="command-footer">
          <span>↵ open</span>
          <span>esc close</span>
          <span>
            ⌘K reopen anytime
          </span>
        </div>
      </div>
    </div>
  );
}

function TerminalCard() {
  const [command, setCommand] =
    useState("");

  const [history, setHistory] =
    useState<
      {
        cmd: string;
        out: string;
      }[]
    >([
      {
        cmd: "help",
        out: "Try a command or tap one below.",
      },
    ]);

  const [
    commandHistory,
    setCommandHistory,
  ] = useState<string[]>([]);

  const [
    historyIndex,
    setHistoryIndex,
  ] = useState(-1);

  const suggestions = [
    "whoami",
    "skills",
    "education",
    "projects",
    "resume",
    "github",
    "contact",
  ];

  const responses: Record<
    string,
    string
  > = {
    whoami:
      "Mohamed Ibrahim — MIS student focused on data engineering, analytics, and AI.",

    skills:
      "Languages: Python, SQL · Databases: PostgreSQL, MySQL · Data Engineering: ETL, APIs, Data Modeling · Libraries: Pandas, NumPy, Matplotlib · Tools: Git, GitHub",

    focus:
      "Reliable pipelines, clean data models, analytics systems, and AI-powered tools.",

    education:
      "San José State University · B.S. Business Administration — Management Information Systems · Expected 2027.",

    projects:
      "Opening the portfolio showcase...",

    resume:
      "Opening resume...",

    github:
      "Opening GitHub profile...",

    contact:
      "Email: mohamedibrahim.sjsu@gmail.com · Phone: 408-618-9877",

    help:
      "Commands: whoami, skills, focus, education, projects, resume, github, contact, clear",
  };

  function executeCommand(
    rawValue: string
  ) {
    const value = rawValue
      .trim()
      .toLowerCase();

    if (!value) return;

    setCommandHistory(
      (prev) => [
        ...prev.filter(
          (item) =>
            item !== value
        ),
        value,
      ]
    );

    setHistoryIndex(-1);

    if (value === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        cmd: value,
        out:
          responses[value] ??
          `command not found: ${value}. Type "help".`,
      },
    ]);

    setCommand("");

    window.setTimeout(() => {
      if (
        value === "projects"
      ) {
        document
          .querySelector(
            "#portfolio"
          )
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }

      if (
        value === "education"
      ) {
        document
          .querySelector(
            "#education"
          )
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }

      if (
        value === "resume"
      ) {
        window.open(
          "/resume.pdf",
          "_blank",
          "noopener,noreferrer"
        );
      }

      if (
        value === "github"
      ) {
        window.open(
          "https://github.com/Mohamed254-pixel",
          "_blank",
          "noopener,noreferrer"
        );
      }
    }, 180);
  }

  function moveThroughHistory(
    direction:
      | "up"
      | "down"
  ) {
    if (
      commandHistory.length ===
      0
    ) {
      return;
    }

    if (
      direction === "up"
    ) {
      const nextIndex =
        historyIndex < 0
          ? commandHistory.length -
            1
          : Math.max(
              0,
              historyIndex - 1
            );

      setHistoryIndex(
        nextIndex
      );

      setCommand(
        commandHistory[
          nextIndex
        ]
      );

      return;
    }

    const nextIndex =
      historyIndex + 1;

    if (
      nextIndex >=
      commandHistory.length
    ) {
      setHistoryIndex(-1);
      setCommand("");
      return;
    }

    setHistoryIndex(
      nextIndex
    );

    setCommand(
      commandHistory[
        nextIndex
      ]
    );
  }

  return (
    <div className="terminal-shell">
      <div className="terminal-topbar">
        <div className="flex gap-2">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>

        <span className="text-[10px] text-zinc-700 tracking-[0.2em] uppercase">
          mohamed.dev /
          terminal
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-suggestions">
          {suggestions.map(
            (suggestion) => (
              <button
                key={
                  suggestion
                }
                type="button"
                onClick={() =>
                  executeCommand(
                    suggestion
                  )
                }
                className="terminal-suggestion"
              >
                {suggestion}
              </button>
            )
          )}
        </div>

        <div className="terminal-history">
          {history.map(
            (
              item,
              index
            ) => (
              <div
                key={`${item.cmd}-${index}`}
                className="mb-5"
              >
                <p className="text-zinc-400 text-sm">
                  <span className="text-zinc-700">
                    guest@mohamed.dev:~$
                  </span>{" "}
                  {item.cmd}
                </p>

                <p className="text-zinc-600 text-sm mt-2 leading-6">
                  {item.out}
                </p>
              </div>
            )
          )}
        </div>

        <div className="terminal-command-row">
          <span className="text-zinc-700 text-sm whitespace-nowrap">
            guest@mohamed.dev:~$
          </span>

          <input
            value={command}
            onChange={(event) =>
              setCommand(
                event.target.value
              )
            }
            onKeyDown={(
              event
            ) => {
              if (
                event.key ===
                "Enter"
              ) {
                executeCommand(
                  command
                );
              }

              if (
                event.key ===
                "ArrowUp"
              ) {
                event.preventDefault();

                moveThroughHistory(
                  "up"
                );
              }

              if (
                event.key ===
                "ArrowDown"
              ) {
                event.preventDefault();

                moveThroughHistory(
                  "down"
                );
              }
            }}
            placeholder="type help"
            className="terminal-input"
            aria-label="Terminal command"
            spellCheck={false}
          />
        </div>

        <div className="terminal-help-row">
          <span>
            ↑↓ history
          </span>

          <span>
            ↵ run command
          </span>

          <span>
            clear resets
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [
    activeTab,
    setActiveTab,
  ] = useState<
    | "projects"
    | "certificates"
    | "stack"
  >("projects");

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    commandOpen,
    setCommandOpen,
  ] = useState(false);

  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  const [
    showBackToTop,
    setShowBackToTop,
  ] = useState(false);

  const [
    heroTilt,
    setHeroTilt,
  ] = useState({
    x: 0,
    y: 0,
  });

  const [
    contactName,
    setContactName,
  ] = useState("");

  const [
    contactEmail,
    setContactEmail,
  ] = useState("");

  const [
    contactMessage,
    setContactMessage,
  ] = useState("");

  const [
    quickNote,
    setQuickNote,
  ] = useState("");

  const [
    openExperience,
    setOpenExperience,
  ] = useState<
    number | null
  >(0);

  const [
    isScrolled,
    setIsScrolled,
  ] = useState(false);

  const [
    formStatus,
    setFormStatus,
  ] = useState<
    | "idle"
    | "sending"
    | "success"
    | "error"
  >("idle");

  const [
    formError,
    setFormError,
  ] = useState("");

  useEffect(() => {
    function handleShortcut(
      event: KeyboardEvent
    ) {
      if (
        (event.metaKey ||
          event.ctrlKey) &&
        event.key.toLowerCase() ===
          "k"
      ) {
        event.preventDefault();

        setCommandOpen(
          (open) => !open
        );
      }

      if (
        event.key ===
        "Escape"
      ) {
        setCommandOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleShortcut
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleShortcut
      );
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "education",
      "portfolio",
      "contact",
    ];

    const updateActiveSection =
      () => {
        const marker =
          window.scrollY + 180;

        let current = "home";

        for (const id of sectionIds) {
          const section =
            document.getElementById(
              id
            );

          if (
            section &&
            section.offsetTop <=
              marker
          ) {
            current = id;
          }
        }

        setActiveSection(
          current
        );

        setShowBackToTop(
          window.scrollY > 700
        );

        setIsScrolled(
          window.scrollY > 36
        );

        const maxScroll =
          document.documentElement
            .scrollHeight -
          window.innerHeight;

        const progress =
          maxScroll > 0
            ? window.scrollY /
              maxScroll
            : 0;

        document.documentElement.style.setProperty(
          "--scroll-progress",
          progress.toFixed(4)
        );

        document.documentElement.style.setProperty(
          "--scroll-shift",
          `${Math.round(
            progress * 120
          )}px`
        );
      };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    [
      "Experience",
      "#experience",
    ],
    [
      "Education",
      "#education",
    ],
    [
      "Portfolio",
      "#portfolio",
    ],
    ["Contact", "#contact"],
  ];

  return (
    <main
      className="site-enter min-h-screen text-white cursor-glow portfolio-surface"
      onMouseMove={(event) => {
        event.currentTarget.style.setProperty(
          "--mouse-x",
          `${event.clientX}px`
        );

        event.currentTarget.style.setProperty(
          "--mouse-y",
          `${event.clientY}px`
        );

        const x =
          (event.clientX /
            window.innerWidth -
            0.5) *
          2;

        const y =
          (event.clientY /
            window.innerHeight -
            0.5) *
          2;

        setHeroTilt({
          x,
          y,
        });

        event.currentTarget.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`
        );

        event.currentTarget.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`
        );
      }}
    >
      <CommandPalette
        open={commandOpen}
        onClose={() =>
          setCommandOpen(false)
        }
      />

      <div
        className="page-transition-line"
        aria-hidden="true"
      />

      <div className="fixed inset-0 pointer-events-none grid-background" />

      <div className="fixed inset-0 pointer-events-none ambient-orbs">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
      </div>

      {/* NAVBAR */}
      <div className="sticky top-4 z-50 px-5 md:px-10 lg:px-14 pt-4">
        <nav
          className={`max-w-7xl mx-auto rounded-2xl border px-5 py-3.5 transition-all duration-500 ${
            isScrolled
              ? "nav-scrolled"
              : "border-white/10 bg-black/55 backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() =>
                setMobileMenuOpen(
                  false
                )
              }
              className="text-sm tracking-[0.22em] text-zinc-200 hover:text-white transition-colors duration-300"
            >
              mohamed.dev
            </a>

            <div className="hidden lg:flex items-center gap-6 text-sm">
              {navItems.map(
                ([
                  label,
                  href,
                ]) => (
                  <a
                    key={label}
                    href={href}
                    className={`nav-link transition-colors duration-300 ${
                      activeSection ===
                      href.slice(1)
                        ? "active text-white"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                )
              )}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setCommandOpen(
                    true
                  )
                }
                className="command-bar"
                aria-label="Open quick navigation"
              >
                <span className="command-bar-left">
                  <LuSearch
                    size={14}
                  />

                  <span>
                    Search site...
                  </span>
                </span>

                <span className="command-bar-key">
                  ⌘K
                </span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="premium-button text-xs sm:text-sm"
              >
                Resume ↗
              </a>
            </div>

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={
                mobileMenuOpen
              }
              onClick={() =>
                setMobileMenuOpen(
                  (open) =>
                    !open
                )
              }
              className="md:hidden mobile-menu-button"
            >
              {mobileMenuOpen ? (
                <LuX size={20} />
              ) : (
                <LuMenu
                  size={20}
                />
              )}
            </button>
          </div>

          <div
            className={`md:hidden mobile-menu-panel ${
              mobileMenuOpen
                ? "is-open"
                : ""
            }`}
          >
            <div className="pt-4 pb-1 grid gap-1">
              {navItems.map(
                ([
                  label,
                  href,
                ]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                    className={`mobile-nav-link ${
                      activeSection ===
                      href.slice(1)
                        ? "is-active"
                        : ""
                    }`}
                  >
                    <span>
                      {label}
                    </span>

                    <span className="text-zinc-700">
                      ↗
                    </span>
                  </a>
                )
              )}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  setMobileMenuOpen(
                    false
                  )
                }
                className="mobile-resume-link"
              >
                Resume
                <span>↗</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-28 relative min-h-screen px-5 md:px-10 lg:px-14 pt-12 pb-10"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="min-h-[74vh] grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12">
              <div>
                <div className="hero-badge-row">
                  <div className="internship-badge">
                    <span className="internship-pulse" />

                    <span>
                      Open to internships
                      &amp; project
                      opportunities
                    </span>
                  </div>

                  <span className="hero-badge-note">
                    San Jose · Data
                    Engineering
                  </span>
                </div>

                <h1 className="hero-title text-[60px] sm:text-[86px] lg:text-[108px] leading-[0.84] font-black tracking-[-0.065em] uppercase">
                  <span className="hero-word hero-word-one">
                    Data
                  </span>

                  <br />

                  <span className="hero-word hero-word-two text-zinc-500">
                    Engineering
                  </span>
                </h1>

                <p className="hero-subtitle">
                  MIS Student · Data
                  Engineering Focus
                </p>

                <div
                  className="hero-signal-row"
                  aria-label="Current focus"
                >
                  <span className="hero-signal-label">
                    CURRENT FOCUS
                  </span>

                  <span className="hero-signal-value">
                    Pipelines
                  </span>

                  <span className="hero-signal-sep">
                    /
                  </span>

                  <span className="hero-signal-value">
                    Analytics
                  </span>

                  <span className="hero-signal-sep">
                    /
                  </span>

                  <span className="hero-signal-value">
                    AI Systems
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-zinc-500 text-sm md:text-base leading-7">
                  I build reliable data
                  pipelines, analytics
                  systems, and
                  AI-powered tools that
                  turn messy information
                  into structured,
                  useful results.
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  {[
                    "Python",
                    "SQL",
                    "ETL",
                    "APIs",
                    "Data Modeling",
                  ].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="skill-pill"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="#portfolio"
                    className="premium-button"
                  >
                    View Projects
                  </a>

                  <a
                    href="https://github.com/Mohamed254-pixel"
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Mohamed-Ibrahim-Resume.pdf"
                    className="ghost-button"
                  >
                    <LuDownload
                      size={14}
                    />

                    Download Resume
                  </a>
                </div>

                <div className="hero-recruiter-links">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-text-link"
                  >
                    <LuFileText
                      size={13}
                    />

                    View Resume
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mohamed-ibrahim-6270ab2a3/"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-text-link"
                  >
                    <LuLinkedin
                      size={13}
                    />

                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Mohamed254-pixel"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-text-link"
                  >
                    <LuGithub
                      size={13}
                    />

                    GitHub
                  </a>
                </div>

                <div className="mt-8 text-xs text-zinc-700 space-y-2 tracking-wide">
                  <p>
                    ↳ explore selected
                    work below
                  </p>

                  <p>
                    ↳ data engineering ·
                    analytics · AI
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:flex justify-center items-center min-h-[560px]">
                <div className="hero-orbit-ring hero-orbit-ring-one" />
                <div className="hero-orbit-ring hero-orbit-ring-two" />
                <div className="hero-photo-axis hero-photo-axis-x" />
                <div className="hero-photo-axis hero-photo-axis-y" />

                <div
                  className="clean-hero-photo"
                  style={{
                    transform: `translate3d(${
                      heroTilt.x *
                      8
                    }px, ${
                      heroTilt.y *
                      5
                    }px, 0) rotateY(${
                      heroTilt.x *
                      4
                    }deg) rotateX(${
                      -heroTilt.y *
                      3
                    }deg)`,
                  }}
                >
                  <div className="clean-hero-photo-inner">
                    <img
                      src="/profile.jpg"
                      alt="Mohamed Ibrahim"
                      className="clean-hero-photo-img"
                    />

                    <div className="clean-hero-photo-overlay" />
                  </div>

                  <div className="clean-hero-photo-meta">
                    <span>
                      MOHAMED IBRAHIM
                    </span>

                    <span>
                      DATA · MIS
                    </span>
                  </div>
                </div>

                <div className="hero-data-chip hero-data-chip-one">
                  <span className="hero-data-kicker">
                    PIPELINE
                  </span>

                  <strong>
                    ETL → SQL
                  </strong>
                </div>

                <div className="hero-data-chip hero-data-chip-two">
                  <span className="hero-data-kicker">
                    ROWS
                  </span>

                  <strong>
                    278K+
                  </strong>
                </div>

                <div className="hero-data-chip hero-data-chip-three">
                  <span className="hero-data-kicker">
                    MATCHES
                  </span>

                  <strong>
                    380
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>

          <a
            href="#about"
            className="scroll-explore"
            aria-label="Scroll to explore"
          >
            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="scroll-explore-line" />

            <span className="scroll-explore-dot" />
          </a>

          <div className="grid md:grid-cols-3 gap-4 pb-10">
            {[
              [
                "01",
                "Projects",
                "3",
              ],
              [
                "02",
                "Certification",
                "Google Data Analytics",
              ],
              [
                "03",
                "Focus",
                "Data + AI",
              ],
            ].map(
              ([
                num,
                label,
                value,
              ]) => (
                <div
                  key={label}
                  className="info-card group depth-card"
                >
                  <span className="text-zinc-600 text-xs">
                    {num}
                  </span>

                  <div>
                    <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                      {label}
                    </p>

                    <p className="mt-1 text-xl md:text-2xl font-semibold">
                      {value}
                    </p>
                  </div>

                  <span className="text-zinc-600">
                    ↗
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 relative px-5 md:px-10 lg:px-14 py-28"
      >
        <Reveal className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            <div>
              <p className="section-kicker">
                About Me
              </p>

              <h2 className="text-5xl md:text-7xl font-black tracking-[-0.045em] leading-[0.94]">
                I BUILD SYSTEMS
                <br />

                <span className="text-zinc-600">
                  THAT MAKE DATA
                  USEFUL.
                </span>
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-zinc-500 leading-7">
                <p>
                  I&apos;m an MIS
                  student focused on
                  data engineering,
                  analytics, and
                  AI-powered systems. I
                  enjoy taking raw,
                  inconsistent data and
                  designing a clean path
                  from ingestion to
                  transformation,
                  storage, and analysis.
                </p>

                <p>
                  My projects are built
                  around practical
                  engineering
                  decisions: reliable
                  pipelines, clear
                  schemas, repeatable
                  processing, and
                  results that can be
                  checked instead of
                  guessed.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mt-10">
                {[
                  [
                    "BUILD",
                    "End-to-end pipelines",
                  ],
                  [
                    "THINK",
                    "Data quality first",
                  ],
                  [
                    "SHIP",
                    "Useful, testable systems",
                  ],
                ].map(
                  ([
                    title,
                    text,
                  ]) => (
                    <div
                      key={title}
                      className="about-mini-card"
                    >
                      <p className="text-[10px] tracking-[0.25em] text-zinc-600">
                        {title}
                      </p>

                      <p className="mt-3 text-sm text-zinc-300">
                        {text}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Python",
                  "SQL",
                  "PostgreSQL",
                  "MySQL",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "ETL",
                  "APIs",
                  "Git",
                  "GitHub",
                ].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-5 rounded-full border border-white/[0.04]" />

                <div className="w-[290px] h-[290px] rounded-full border border-white/10 bg-zinc-950 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Mohamed Ibrahim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STORY */}
      <section className="relative px-5 md:px-10 lg:px-14 py-20">
        <Reveal className="max-w-7xl mx-auto">
          <div className="story-shell">
            <div className="story-index">
              04
            </div>

            <div className="story-content">
              <p className="section-kicker">
                My Story
              </p>

              <h2 className="story-title">
                From systems thinking
                <span>
                  {" "}
                  to data engineering.
                </span>
              </h2>

              <div className="story-copy">
                <p>
                  I started in MIS
                  because I was
                  interested in both the
                  business side of
                  technology and how
                  systems work behind
                  the scenes. Working
                  with databases,
                  Python, SQL, and
                  analytics pulled me
                  toward data
                  engineering.
                </p>

                <p>
                  What I care about most
                  is building things
                  that work end to end:
                  collecting data,
                  cleaning it, storing
                  it correctly, and
                  turning it into
                  something useful.
                </p>
              </div>
            </div>

            <div className="story-side">
              <div className="story-side-card">
                <span className="story-side-label">
                  Direction
                </span>

                <strong>
                  Data Engineering
                </strong>

                <p>
                  Reliable pipelines,
                  useful systems, and
                  measurable outcomes.
                </p>
              </div>

              <div className="story-side-card">
                <span className="story-side-label">
                  Approach
                </span>

                <strong>
                  End to End
                </strong>

                <p>
                  From raw data to
                  transformation,
                  storage, analysis,
                  and AI.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* RECRUITER SNAPSHOT */}
      <section className="relative px-5 md:px-10 lg:px-14 py-20">
        <Reveal className="max-w-7xl mx-auto">
          <div className="recruiter-shell">
            <div className="recruiter-copy">
              <p className="section-kicker">
                Recruiter Snapshot
              </p>

              <h2 className="recruiter-title">
                A quick read on
                <span>
                  {" "}
                  what I bring.
                </span>
              </h2>

              <p className="recruiter-intro">
                Technical project
                work, operational
                responsibility, and a
                business-systems
                mindset — all pointed
                toward data
                engineering.
              </p>

              <div className="recruiter-actions">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button"
                >
                  <LuFileText
                    size={14}
                  />

                  View Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-ibrahim-6270ab2a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-button"
                >
                  <LuLinkedin
                    size={14}
                  />

                  LinkedIn
                </a>
              </div>
            </div>

            <div className="recruiter-grid">
              {[
                [
                  "01",
                  "Location",
                  "San Jose, CA",
                ],
                [
                  "02",
                  "Focus",
                  "Data Engineering",
                ],
                [
                  "03",
                  "Education",
                  "SJSU · MIS",
                ],
                [
                  "04",
                  "Core Stack",
                  "Python · SQL · ETL",
                ],
                [
                  "05",
                  "In Progress",
                  "Agent layer + pipeline reliability",
                ],
              ].map(
                ([
                  index,
                  label,
                  value,
                ]) => (
                  <div
                    key={label}
                    className="recruiter-stat spotlight-card"
                  >
                    <span className="recruiter-stat-index">
                      {index}
                    </span>

                    <p className="recruiter-stat-label">
                      {label}
                    </p>

                    <p className="recruiter-stat-value">
                      {value}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-28 relative px-5 md:px-10 lg:px-14 py-24"
      >
        <Reveal className="max-w-7xl mx-auto">
          <div className="experience-heading-grid">
            <div>
              <p className="section-kicker">
                Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95]">
                Experience that
                connects
                <span className="text-zinc-600">
                  {" "}
                  operations and data.
                </span>
              </h2>
            </div>

            <p className="experience-heading-copy">
              Real-time decision
              making, operational
              ownership, technical
              problem solving, and
              clear communication.
            </p>
          </div>

          <div className="experience-list mt-12">
            <div
              className="experience-rail"
              aria-hidden="true"
            >
              <span />
            </div>

            {experienceItems.map(
              (item, index) => {
                const isOpen =
                  openExperience ===
                  index;

                return (
                  <article
                    key={
                      item.role
                    }
                    className={`experience-card ${
                      isOpen
                        ? "is-open"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="experience-card-trigger"
                      onClick={() =>
                        setOpenExperience(
                          (
                            current
                          ) =>
                            current ===
                            index
                              ? null
                              : index
                        )
                      }
                      aria-expanded={
                        isOpen
                      }
                    >
                      <span className="experience-index">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div className="experience-main">
                        <p className="experience-date">
                          {
                            item.date
                          }
                        </p>

                        <h3>
                          {
                            item.role
                          }
                        </h3>

                        <p className="experience-company">
                          {
                            item.company
                          }
                        </p>
                      </div>

                      <p className="experience-summary">
                        {
                          item.summary
                        }
                      </p>

                      <span className="experience-toggle">
                        <LuChevronDown
                          size={17}
                        />
                      </span>
                    </button>

                    <div className="experience-expand">
                      <div className="experience-expand-inner">
                        <p>
                          {
                            item.details
                          }
                        </p>

                        <div className="experience-skill-row">
                          {item.skills.map(
                            (
                              skill
                            ) => (
                              <span
                                key={
                                  skill
                                }
                              >
                                {
                                  skill
                                }
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="scroll-mt-28 relative px-5 md:px-10 lg:px-14 py-24"
      >
        <Reveal className="max-w-7xl mx-auto">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="section-kicker">
                  Education
                </p>

                <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95]">
                  Business systems
                  <br />

                  <span className="text-zinc-600">
                    meet engineering.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-sm md:text-base text-zinc-600 leading-7">
                  Building a technical
                  foundation across
                  databases,
                  programming,
                  analytics, data
                  engineering, and AI
                  while studying the
                  business side of
                  information systems.
                </p>
              </div>

              <div className="p-8 md:p-12 lg:p-14">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-600">
                      San José State
                      University
                    </p>

                    <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-zinc-100">
                      B.S. Business
                      Administration —
                      Management
                      Information
                      Systems
                    </h3>
                  </div>

                  <span className="text-xs text-zinc-700">
                    SJSU
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      Expected
                      Graduation
                    </p>

                    <p className="mt-3 text-xl font-semibold text-zinc-200">
                      2027
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      Technical Focus
                    </p>

                    <p className="mt-3 text-base font-medium text-zinc-300">
                      Data Engineering ·
                      Analytics · AI
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Databases",
                    "Python",
                    "SQL",
                    "Analytics",
                    "Information Systems",
                    "AI",
                  ].map(
                    (item) => (
                      <span
                        key={item}
                        className="mini-tag"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TERMINAL */}
      <section className="relative px-5 md:px-10 lg:px-14 py-24">
        <Reveal className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <p className="section-kicker">
                Interactive
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
                Try the terminal.
              </h2>

              <p className="mt-5 text-zinc-600 max-w-lg leading-7">
                A quick way to explore
                my background, skills,
                projects, education,
                and contact info.
              </p>
            </div>

            <TerminalCard />
          </div>
        </Reveal>
      </section>

      {/* CURRENT BUILDS */}
      <section className="relative px-5 md:px-10 lg:px-14 py-24">
        <Reveal className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="section-kicker">
                Current Builds
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
                Engineering Upgrades
              </h2>
            </div>

            <p className="text-sm text-zinc-600 max-w-md leading-6">
              Improvements currently
              being built on top of
              working project
              foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <a
              href="/projects/music-insights-agent"
              className="building-card group block"
            >
              <div className="flex items-center justify-between">
                <StatusBadge>
                  Active Development
                </StatusBadge>

                <span className="text-xs text-zinc-700">
                  01
                </span>
              </div>

              <h3 className="text-2xl font-semibold mt-8">
                Verified Analytics
                Agent Layer
              </h3>

              <p className="text-sm text-zinc-600 leading-6 mt-4">
                Building a SQL-first,
                read-only analytics
                layer that answers
                questions using
                verified query results.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "SQL",
                  "PostgreSQL",
                  "Read-only",
                  "AI",
                ].map(
                  (item) => (
                    <span
                      key={item}
                      className="mini-tag"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-zinc-700">
                  Open project
                </span>

                <span className="text-zinc-500">
                  →
                </span>
              </div>
            </a>

            <a
              href="/projects/soccer-data-pipeline"
              className="building-card group block"
            >
              <div className="flex items-center justify-between">
                <StatusBadge>
                  Reliability Upgrade
                </StatusBadge>

                <span className="text-xs text-zinc-700">
                  02
                </span>
              </div>

              <h3 className="text-2xl font-semibold mt-8">
                Pipeline Reliability
                Upgrade
              </h3>

              <p className="text-sm text-zinc-600 leading-6 mt-4">
                Expanding a working
                API-to-MySQL pipeline
                toward orchestration,
                data-quality checks,
                containerization, and
                repeatable scheduled
                execution.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Orchestration",
                  "Data Quality",
                  "Docker",
                  "ETL",
                ].map(
                  (item) => (
                    <span
                      key={item}
                      className="mini-tag"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-zinc-700">
                  Open project
                </span>

                <span className="text-zinc-500">
                  →
                </span>
              </div>
            </a>
          </div>
        </Reveal>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="scroll-mt-28 relative px-5 md:px-10 lg:px-14 py-28"
      >
        <Reveal className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="section-kicker">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em]">
              Portfolio Showcase
            </h2>

            <p className="mt-4 text-zinc-600">
              Projects,
              certifications, and the
              technical stack behind
              my work.
            </p>
          </div>

          <div className="mt-10 border border-white/10 rounded-2xl p-2 grid grid-cols-3 bg-white/[0.03] backdrop-blur-xl">
            {[
              [
                "projects",
                "Projects",
              ],
              [
                "certificates",
                "Certificates",
              ],
              [
                "stack",
                "Tech Stack",
              ],
            ].map(
              ([
                tab,
                label,
              ]) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(
                      tab as
                        | "projects"
                        | "certificates"
                        | "stack"
                    )
                  }
                  className={`rounded-xl py-3 text-sm transition-all duration-300 ${
                    activeTab ===
                    tab
                      ? "bg-white/[0.1] text-white shadow-inner"
                      : "text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.025]"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* PROJECTS */}
          {activeTab ===
            "projects" && (
            <div className="mt-10 space-y-5">
              {/* FEATURED MUSIC PROJECT */}
              <div className="project-card overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                        Featured Project
                      </span>

                      <StatusBadge>Active Development</StatusBadge>
                    </div>

                    <h3 className="mt-6 text-3xl md:text-5xl font-bold tracking-[-0.04em]">
                      Music Insights Agent
                    </h3>

                    <p className="mt-5 max-w-xl text-sm md:text-base leading-7 text-zinc-500">
                      I built this pipeline to turn my Apple Music listening
                      history into data I could actually query. It cleans the
                      export with Python and Pandas, stores 172,899 events in
                      PostgreSQL running through Docker, and uses four SQL views
                      for repeatable analysis.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Python",
                        "Pandas",
                        "Docker",
                        "PostgreSQL",
                        "SQL",
                        "ETL",
                      ].map((item) => (
                        <span key={item} className="mini-tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                      <a
                        href="/projects/music-insights-agent"
                        className="premium-button"
                      >
                        View Case Study
                      </a>

                      <a
                        href="https://github.com/Mohamed254-pixel/music-insights-agent"
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-button"
                      >
                        <LuGithub size={14} />
                        Source Code ↗
                      </a>
                    </div>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.018] p-7 md:p-10">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-700">
                      Project Results
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-2xl font-semibold">278,231</p>

                        <p className="text-xs text-zinc-600 mt-2">source rows</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-2xl font-semibold">172,899</p>

                        <p className="text-xs text-zinc-600 mt-2">
                          database events
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-2xl font-semibold">160,417</p>

                        <p className="text-xs text-zinc-600 mt-2">
                          listening events
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-2xl font-semibold">4</p>

                        <p className="text-xs text-zinc-600 mt-2">
                          SQL analytics views
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        Architecture
                      </p>

                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        Apple Music Export → Python and Pandas → Parquet →
                        Dockerized PostgreSQL → SQL Views → Analytics Agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECONDARY PROJECTS */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="project-card project-card-pro p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-zinc-700">
                      02
                    </span>

                    <StatusBadge>
                      Production-style
                      Project
                    </StatusBadge>
                  </div>

                  <h3 className="text-2xl font-semibold mt-7">
                    Soccer Data
                    Pipeline
                  </h3>

                  <p className="text-zinc-600 mt-3 text-sm leading-6">
                    API-to-database
                    pipeline using
                    Python, Pandas,
                    MySQL, primary-key
                    design, and UPSERT
                    logic for
                    duplicate-safe
                    loading.
                  </p>

                  <div className="project-metric-row">
                    <span>
                      <strong>
                        380
                      </strong>{" "}
                      matches
                    </span>

                    <span>
                      <strong>
                        0
                      </strong>{" "}
                      duplicates
                    </span>
                  </div>

                  <p className="text-xs text-zinc-700 mt-5">
                    Python · Pandas ·
                    MySQL · API · ETL
                  </p>

                  <div className="flex flex-wrap gap-3 mt-7">
                    <a
                      href="/projects/soccer-data-pipeline"
                      className="ghost-button"
                    >
                      Case Study →
                    </a>

                    <a
                      href="https://github.com/Mohamed254-pixel/soccer-data-pipeline"
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <div className="project-card project-card-pro p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-zinc-700">
                      03
                    </span>

                    <StatusBadge>
                      Completed
                    </StatusBadge>
                  </div>

                  <h3 className="text-2xl font-semibold mt-7">
                    Customer
                    Segmentation
                  </h3>

                  <p className="text-zinc-600 mt-3 text-sm leading-6">
                    Customer analytics
                    project using
                    K-Means clustering
                    to organize customer
                    records into
                    interpretable
                    segments.
                  </p>

                  <div className="project-metric-row">
                    <span>
                      <strong>
                        500+
                      </strong>{" "}
                      records
                    </span>

                    <span>
                      <strong>
                        4
                      </strong>{" "}
                      clusters
                    </span>
                  </div>

                  <p className="text-xs text-zinc-700 mt-5">
                    Python · Pandas ·
                    K-Means ·
                    Matplotlib
                  </p>

                  <div className="flex flex-wrap gap-3 mt-7">
                    <a
                      href="/projects/customer-segmentation"
                      className="ghost-button"
                    >
                      Case Study →
                    </a>

                    <a
                      href="https://github.com/Mohamed254-pixel/customer-segmentation"
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CERTIFICATES */}
          {activeTab ===
            "certificates" && (
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <div className="project-card p-8 group">
                <p className="text-xs text-zinc-600 tracking-[0.25em] uppercase">
                  Google · Coursera
                </p>

                <h3 className="text-2xl font-semibold mt-4">
                  Google Data
                  Analytics
                  Professional
                  Certificate
                </h3>

                <p className="text-zinc-600 mt-4 text-sm leading-6">
                  Professional training
                  in data analysis,
                  spreadsheets, SQL,
                  Tableau, R, data
                  cleaning, and
                  visualization.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs text-zinc-700 uppercase tracking-[0.18em]">
                      Issued
                    </p>

                    <p className="text-sm text-zinc-300 mt-2">
                      August 15, 2025
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs text-zinc-700 uppercase tracking-[0.18em]">
                      Credential ID
                    </p>

                    <p className="text-sm text-zinc-300 mt-2">
                      SEN3EZJEPCLN
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href="/google-data-analytics-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button"
                  >
                    <LuFileText
                      size={14}
                    />

                    View Certificate ↗
                  </a>

                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/SEN3EZJEPCLN"
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button"
                  >
                    <LuExternalLink
                      size={14}
                    />

                    Verify Credential
                  </a>
                </div>
              </div>

              <div className="project-card p-8 flex items-center justify-center min-h-[250px]">
                <p className="text-zinc-700 text-sm">
                  More coming soon
                </p>
              </div>
            </div>
          )}

          {/* TECH STACK */}
          {activeTab ===
            "stack" && (
            <div className="tech-category-grid mt-10">
              {techCategories.map(
                (
                  category,
                  categoryIndex
                ) => (
                  <div
                    key={
                      category.name
                    }
                    className="tech-category-card spotlight-card"
                  >
                    <div className="tech-category-top">
                      <span className="tech-category-index">
                        {String(
                          categoryIndex +
                            1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div>
                        <h3>
                          {
                            category.name
                          }
                        </h3>

                        <p>
                          {
                            category.description
                          }
                        </p>
                      </div>
                    </div>

                    <div className="tech-category-items">
                      {category.items.map(
                        ({
                          Icon,
                          name,
                        }) => (
                          <div
                            key={
                              name
                            }
                            className="tech-category-item"
                          >
                            <span className="tech-category-icon">
                              <Icon aria-hidden="true" />
                            </span>

                            <span>
                              {
                                name
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 relative px-5 md:px-10 lg:px-14 py-28"
      >
        <Reveal className="max-w-7xl mx-auto">
          <div className="contact-layout">
            <div className="contact-side-panel">
              <p className="section-kicker">
                Contact
              </p>

              <h2 className="contact-side-title">
                Have something
                <br />

                <span>
                  worth building?
                </span>
              </h2>

              <p className="contact-side-copy">
                I&apos;m open to
                internship
                opportunities, data
                projects,
                collaborations, and
                conversations around
                analytics,
                engineering, and AI.
              </p>

              <div className="contact-availability">
                <span className="contact-availability-dot" />

                <div>
                  <p className="contact-mini-label">
                    Current status
                  </p>

                  <p className="contact-mini-value">
                    Open to opportunities
                  </p>
                </div>
              </div>

              <div className="contact-links-stack">
                <a
                  href="mailto:mohamedibrahim.sjsu@gmail.com"
                  className="contact-link-row"
                >
                  <span>
                    Email
                  </span>

                  <strong>
                    mohamedibrahim.sjsu@gmail.com
                  </strong>

                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-ibrahim-6270ab2a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-row"
                >
                  <span>
                    LinkedIn
                  </span>

                  <strong>
                    Mohamed Ibrahim
                  </strong>

                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/Mohamed254-pixel"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-row"
                >
                  <span>
                    GitHub
                  </span>

                  <strong>
                    Mohamed254-pixel
                  </strong>

                  <span>↗</span>
                </a>
              </div>

              <div className="quick-note-card">
                <p className="contact-mini-label">
                  Quick note
                </p>

                <textarea
                  value={quickNote}
                  onChange={(
                    event
                  ) =>
                    setQuickNote(
                      event.target
                        .value
                    )
                  }
                  placeholder="Example: I saw your soccer data project..."
                  className="quick-note-input"
                  rows={4}
                />

                <button
                  type="button"
                  className="ghost-button w-full justify-center mt-3"
                  onClick={() => {
                    if (
                      !quickNote.trim()
                    ) {
                      return;
                    }

                    setContactMessage(
                      (current) =>
                        current.trim()
                          ? `${current.trim()}\n\n${quickNote.trim()}`
                          : quickNote.trim()
                    );

                    setQuickNote("");
                  }}
                >
                  Add to message →
                </button>
              </div>
            </div>

            <div className="contact-form-shell">
              <div className="contact-form-heading">
                <div className="contact-form-topline">
                  <p className="section-kicker">
                    Let&apos;s Connect
                  </p>

                  <span className="contact-secure-note">
                    <span className="contact-secure-dot" />
                    Direct form
                  </span>
                </div>

                <h3>
                  Send me a message.
                </h3>

                <p>
                  Send a note directly
                  from the portfolio.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={async (
                  event
                ) => {
                  event.preventDefault();

                  setFormError("");

                  const cleanName =
                    contactName.trim();

                  const cleanEmail =
                    contactEmail.trim();

                  const cleanMessage =
                    contactMessage.trim();

                  if (
                    !cleanName ||
                    !cleanEmail ||
                    !cleanMessage
                  ) {
                    setFormError(
                      "Please complete your name, email, and message."
                    );

                    setFormStatus(
                      "error"
                    );

                    return;
                  }

                  const endpoint =
                    process.env
                      .NEXT_PUBLIC_FORMSPREE_ENDPOINT;

                  if (!endpoint) {
                    setFormError(
                      "The direct contact endpoint still needs to be connected."
                    );

                    setFormStatus(
                      "error"
                    );

                    return;
                  }

                  setFormStatus(
                    "sending"
                  );

                  try {
                    const response =
                      await fetch(
                        endpoint,
                        {
                          method:
                            "POST",

                          headers:
                            {
                              "Content-Type":
                                "application/json",

                              Accept:
                                "application/json",
                            },

                          body: JSON.stringify(
                            {
                              name: cleanName,
                              email:
                                cleanEmail,
                              message:
                                cleanMessage,
                              _subject: `Portfolio message from ${cleanName}`,
                            }
                          ),
                        }
                      );

                    if (
                      !response.ok
                    ) {
                      throw new Error(
                        "Message could not be sent."
                      );
                    }

                    setFormStatus(
                      "success"
                    );

                    setContactName(
                      ""
                    );

                    setContactEmail(
                      ""
                    );

                    setContactMessage(
                      ""
                    );
                  } catch {
                    setFormError(
                      "Something went wrong while sending."
                    );

                    setFormStatus(
                      "error"
                    );
                  }
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="contact-field">
                    <span>
                      Name
                    </span>

                    <input
                      required
                      value={
                        contactName
                      }
                      onChange={(
                        event
                      ) =>
                        setContactName(
                          event.target
                            .value
                        )
                      }
                      placeholder="Your name"
                    />
                  </label>

                  <label className="contact-field">
                    <span>
                      Email
                    </span>

                    <input
                      required
                      type="email"
                      value={
                        contactEmail
                      }
                      onChange={(
                        event
                      ) =>
                        setContactEmail(
                          event.target
                            .value
                        )
                      }
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <label className="contact-field">
                  <span>
                    Message
                  </span>

                  <textarea
                    required
                    value={
                      contactMessage
                    }
                    onChange={(
                      event
                    ) =>
                      setContactMessage(
                        event.target
                          .value
                      )
                    }
                    placeholder="Tell me what you want to talk about..."
                    rows={8}
                  />
                </label>

                <div className="contact-form-actions">
                  <button
                    type="submit"
                    className="premium-button"
                    disabled={
                      formStatus ===
                      "sending"
                    }
                  >
                    {formStatus ===
                    "sending" ? (
                      "Sending..."
                    ) : formStatus ===
                      "success" ? (
                      <>
                        <LuCheck
                          size={14}
                        />

                        Sent
                      </>
                    ) : (
                      <>
                        <LuSend
                          size={14}
                        />

                        Send Message
                      </>
                    )}
                  </button>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button"
                  >
                    Resume ↗
                  </a>
                </div>
              </form>

              {formStatus ===
                "success" && (
                <p className="form-status is-success">
                  Message sent
                  successfully.
                </p>
              )}

              {formStatus ===
                "error" && (
                <p
                  className="form-status is-error"
                  role="alert"
                >
                  {formError}
                </p>
              )}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-zinc-700">
            <span>
              mohamed.dev
            </span>

            <span>
              © 2026 Mohamed Ibrahim
            </span>
          </div>
        </Reveal>
      </section>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`back-to-top ${
          showBackToTop
            ? "is-visible"
            : ""
        }`}
      >
        <LuArrowUp size={17} />

        <span className="hidden sm:inline">
          Top
        </span>
      </button>
    </main>
  );
}
