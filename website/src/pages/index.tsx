import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const RELEASES_URL = 'https://github.com/SkarnerV/Trivium/releases/latest';
const QUICK_START_URL = '/docs/getting-started/quick-start';
const INTRO_URL = '/docs/getting-started/introduction';

/**
 * Decorative "triptych" — three Roman arches, one per art
 * (grammar · logic · rhetoric), echoing the three brand colors
 * of the wordmark below. Purely ornamental.
 */
function TriptychArches() {
  const arch = (x0: number, x1: number, shoulder: number) =>
    `M ${x0} 430 L ${x0} ${shoulder} A ${(x1 - x0) / 2} ${(x1 - x0) / 2} 0 0 1 ${x1} ${shoulder} L ${x1} 430`;
  return (
    <svg
      className={styles.triptych}
      viewBox="0 0 760 440"
      fill="none"
      aria-hidden="true">
      {/* left arch — grammar */}
      <path
        d={arch(60, 228, 214)}
        className={styles.arch}
        fill="var(--trivium-indigo)"
        stroke="var(--trivium-indigo)"
      />
      {/* center arch — logic */}
      <path
        d={arch(288, 472, 152)}
        className={styles.arch}
        fill="var(--trivium-teal)"
        stroke="var(--trivium-teal)"
      />
      {/* right arch — rhetoric */}
      <path
        d={arch(532, 700, 214)}
        className={styles.arch}
        fill="var(--trivium-amber)"
        stroke="var(--trivium-amber)"
      />
      {/* baseline */}
      <path
        d="M 36 430 H 724"
        className={styles.archBaseline}
        strokeDasharray="2 7"
      />
      {/* roman numerals inside each arch */}
      <text x={144} y={268} className={styles.archNumeral} fill="var(--trivium-indigo)">
        I
      </text>
      <text x={380} y={206} className={styles.archNumeral} fill="var(--trivium-teal)">
        II
      </text>
      <text x={616} y={268} className={styles.archNumeral} fill="var(--trivium-amber)">
        III
      </text>
    </svg>
  );
}

type Mode = {
  cssClass: string;
  label: string;
  name: string;
  description: string;
  chips: string[];
};

const modes: Mode[] = [
  {
    cssClass: styles.modeCode,
    label: '⌘1 · Grammar',
    name: 'Code',
    description:
      'Fix and build software with the full tool set: read, bash, edit and write. The Changes, Git and Preview panels keep every diff in sight while the agent works.',
    chips: ['read', 'bash', 'edit', 'write', 'Changes', 'Git', 'Preview'],
  },
  {
    cssClass: styles.modeResearch,
    label: '⌘2 · Logic',
    name: 'Research',
    description:
      'Read material and take notes — no shell. Every claim the agent makes must come with a citation, collected in the Sources tab of the note preview.',
    chips: ['no shell', 'citations', 'Sources tab', 'Open in Write'],
  },
  {
    cssClass: styles.modeWrite,
    label: '⌘3 · Rhetoric',
    name: 'Write',
    description:
      'Draft project documentation that keeps your voice. Edits land as small, reviewable tracked changes you can accept or reject one by one — or all at once.',
    chips: ['tracked changes', 'your voice', 'accept / reject'],
  },
];

type WhyItem = {
  title: string;
  body: string;
};

const whyItems: WhyItem[] = [
  {
    title: 'Every step, visible',
    body: 'Each tool call the agent makes is listed with its own duration — folded when you want calm, detailed when you want proof.',
  },
  {
    title: 'Questions, surfaced',
    body: 'When the agent is waiting on you, the question is inline in the conversation — not buried in a scrolling log.',
  },
  {
    title: 'The exact diff',
    body: 'Every run records what actually changed on disk. Review it, keep it, or revert it — before you ever open an editor.',
  },
  {
    title: 'Tools and models per mode',
    body: 'Each mode is its own agent profile with a dedicated tool whitelist and model settings, tuned for the task at hand.',
  },
];

type Feature = {
  label: string;
  title: string;
  body: ReactNode;
  icon: ReactNode;
};

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const features: Feature[] = [
  {
    label: 'Steps',
    title: 'Folded or detailed',
    body: (
      <>
        Runs collapse to a single line —{' '}
        <code>Worked for 6.4s · 8 steps · 1 failed</code> — and expand when you
        want the full trace.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M4 6h16M4 12h10M4 18h13" />
      </svg>
    ),
  },
  {
    label: 'Input',
    title: 'Queue or steer mid-run',
    body: (
      <>
        <kbd>↵</kbd> queues a follow-up, <kbd>⌥↵</kbd> steers the current run,{' '}
        <kbd>esc</kbd> stops it. You never wait idle.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
      </svg>
    ),
  },
  {
    label: 'Context',
    title: 'Context ring',
    body: 'A live ring shows context-window usage as the conversation grows, so you see the wall before you hit it.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="8" opacity="0.35" />
        <path d="M12 4a8 8 0 0 1 6.9 12" />
      </svg>
    ),
  },
  {
    label: 'Timing',
    title: 'Reply timing',
    body: 'Time to first token and output speed are printed on every reply, next to the model that produced it.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="13" r="7" />
        <path d="M12 10v3l2 2M9 3h6" />
      </svg>
    ),
  },
  {
    label: 'Messages',
    title: 'Edit, fork, copy',
    body: 'Rewrite a message, fork the conversation to try another angle, or copy any turn — without starting over.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
        <path d="M6 8.5v7M8 6.8l7.5 4" />
      </svg>
    ),
  },
  {
    label: 'Attachments',
    title: 'Paste and drag',
    body: 'Paste a screenshot straight from the clipboard or drag files into the chat. No file-picker detours.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M8 12l6.5-6.5a3 3 0 0 1 4.2 4.2L9 19.4a4.5 4.5 0 0 1-6.4-6.4l7-7" />
      </svg>
    ),
  },
  {
    label: 'Trust',
    title: 'Project trust',
    body: (
      <>
        Opening a folder with a <code>.pi</code> project? Trivium asks whether
        you trust it before loading anything.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'MCP',
    title: 'Connectors page',
    body: (
      <>
        Manage MCP servers and logins in one place — paste{' '}
        <code>mcpServers</code> JSON straight from Claude, Cursor or VS Code.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-6 0h6m-6 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2" />
        <path d="M12 12v4" />
      </svg>
    ),
  },
  {
    label: 'Memory',
    title: 'Global and project',
    body: (
      <>
        Global memory, per-project <code>MEMORY.md</code> and daily logs — the
        agent remembers what matters, and refuses credentials.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M5 5a2 2 0 0 1 2-2h12v16H7a2 2 0 0 0-2 2V5z" />
        <path d="M5 19a2 2 0 0 1 2-2h12" />
      </svg>
    ),
  },
  {
    label: 'Usage',
    title: 'Tokens and cost',
    body: 'Token and cost statistics over 7 days, 30 days or all time — plus a 12-month calendar heatmap of your activity.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M4 20V10m6 10V4m6 16v-7" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true">
        <TriptychArches />
      </div>
      <div className={styles.heroInner}>
        <p className={styles.heroKicker}>Grammar · Logic · Rhetoric</p>
        <h1 className={styles.brandTitle}>
          <img
            src="/img/logo.png"
            alt="Trivium"
            width={1200}
            height={372}
            fetchPriority="high"
          />
        </h1>
        <p className={styles.heroTagline}>
          One desktop workspace for coding, research and writing, powered by the
          pi agent.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--primary button--lg', styles.ctaButton)}
            href={RELEASES_URL}>
            Download
          </Link>
          <Link
            className={clsx(
              'button button--secondary button--lg button--outline',
              styles.ctaButton,
              styles.ctaSecondary,
            )}
            to={QUICK_START_URL}>
            Quick start
          </Link>
        </div>
        <p className={styles.heroMeta}>
          Early preview · macOS (Apple Silicon &amp; Intel) · Windows x64 · MIT
          &nbsp;·&nbsp; switch modes with <kbd>⌘1</kbd> <kbd>⌘2</kbd>{' '}
          <kbd>⌘3</kbd>
        </p>
        <figure className={styles.shotFigure}>
          <div className={styles.shotGlow} aria-hidden="true" />
          <div className={styles.shotFrame}>
            <div className={styles.windowBar} aria-hidden="true">
              <span className={clsx(styles.windowDot, styles.dotIndigo)} />
              <span className={clsx(styles.windowDot, styles.dotTeal)} />
              <span className={clsx(styles.windowDot, styles.dotAmber)} />
              <span className={styles.windowTitle}>
                Trivium — Code · reader.ts diff
              </span>
              <span className={styles.windowKeys}>⌘1 ⌘2 ⌘3</span>
            </div>
            <img
              className={styles.shotImg}
              src="/img/app-hero.png"
              width={1440}
              height={940}
              loading="eager"
              alt="The Trivium app in Code mode: the session list on the left, the agent's step-by-step work in the middle, and a Keep / Revert diff panel on the right."
            />
          </div>
          <figcaption className={styles.shotCaption}>
            A real Code-mode run — the steps, the root cause and the exact diff,
            side by side.
          </figcaption>
        </figure>
      </div>
    </header>
  );
}

function Modes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Three modes</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Three arts, one workspace
          </Heading>
          <p className={styles.sectionLead}>
            Each mode is a dedicated agent profile with its own tools, panels
            and model settings — purpose-built for the way you work.
          </p>
        </div>
        <div className={styles.modesGrid}>
          {modes.map((mode) => (
            <div
              key={mode.name}
              className={clsx(styles.modeCard, mode.cssClass)}>
              <span className={styles.modeLabel}>{mode.label}</span>
              <h3>{mode.name}</h3>
              <p>{mode.description}</p>
              <ul className={styles.modeChips}>
                {mode.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.modesFootnote}>
          Switch anytime with <kbd>⌘1</kbd> / <kbd>⌘2</kbd> / <kbd>⌘3</kbd> —
          sessions keep running in the background while you do.
        </p>
      </div>
    </section>
  );
}

function WhyTrivium() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.whyGrid}>
          <div className={styles.whyText}>
            <span className={styles.sectionKicker}>Why Trivium</span>
            <Heading as="h2">Terminal agents hide the work</Heading>
            <p>
              A coding agent in a terminal shows you a spinner and a final
              answer. What happened in between — which files it read, what it
              ran, what it changed — scrolls away or never appears at all.
            </p>
            <p>
              Trivium keeps the whole run on the record: the steps and their
              durations, the questions waiting on you, and the exact diff each
              run produces. Underneath it is still a plain pi session you can
              open in the pi CLI.
            </p>
          </div>
          <ul className={styles.whyList}>
            {whyItems.map((item) => (
              <li key={item.title}>
                <svg viewBox="0 0 24 24" className={styles.whyIcon} {...stroke}>
                  <circle cx="12" cy="12" r="9" opacity="0.35" />
                  <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                </svg>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Features</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Built for watching agents work
          </Heading>
          <p className={styles.sectionLead}>
            The details that matter when an agent is typing, thinking and
            touching your files.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <span className={styles.featureLabel}>{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className={clsx(styles.sectionAlt, styles.ctaBand)}>
      <Heading as="h2">Ready to see your agent work?</Heading>
      <p>
        Trivium is an early preview — download a build, or read the docs to see
        how it fits together.
      </p>
      <div className={styles.heroButtons}>
        <Link
          className={clsx('button button--primary button--lg', styles.ctaButton)}
          href={RELEASES_URL}>
          Download
        </Link>
        <Link
          className={clsx(
            'button button--secondary button--lg button--outline',
            styles.ctaButton,
            styles.ctaSecondary,
          )}
          to={INTRO_URL}>
          Read the docs
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="One desktop workspace for coding, research and writing"
      description="Trivium is one desktop workspace for coding, research and writing, powered by the pi agent. Three modes, visible steps, reviewable diffs.">
      <Hero />
      <main>
        <Modes />
        <WhyTrivium />
        <Features />
        <BottomCta />
      </main>
    </Layout>
  );
}
