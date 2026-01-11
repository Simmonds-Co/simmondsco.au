// Simmonds & Co - Centralized Site Content
// Edit this file to update copy across the site

export const company = {
  name: 'Simmonds & Co',
  tagline: 'Fintech that makes the hard stuff feel simple',
  url: 'https://simmondsco.au',
}

export const home = {
  hero: {
    headline: 'Simmonds & Co builds fintech that makes the hard stuff feel simple.',
    subhead:
      "We're Tom and Ben Simmonds—bringing decades across finance, accounting, leadership, software engineering, and systems design. We turn complex financial and regulatory workflows into products people can actually use.",
  },
  whatWeDo: [
    'Product-first fintech solutions (not consultware)',
    'Automation + AI where it removes admin, not trust',
    'Systems that scale cleanly from solo operators to teams',
  ],
  credibility:
    "We start with the messy reality—paperwork, policies, edge-cases—then design software that's clear, reliable, and fast.",
}

export const about = {
  title: 'About Simmonds & Co',
  description:
    'We build innovative fintech that simplifies the hard stuff in finance and compliance.',
  body: `With decades of combined experience in finance, accounting, business leadership, software engineering, and system design, brothers Tom and Ben Simmonds founded Simmonds & Co to build innovative fintech that simplifies people's lives. We believe that deeply understanding customer problems—then applying modern software and AI responsibly—creates tools that are practical, empowering, and easy to use.`,
  howWeWork: [
    'Understand the workflow end-to-end (including compliance + edge cases)',
    'Build small, iterate quickly, ship reliable foundations',
    'Make complexity disappear through good design and automation',
  ],
}

export interface Project {
  name: string
  description: string
  link: {
    href: string
    label: string
  }
}

export const projects: Project[] = [
  {
    name: 'RedServe',
    description:
      'AI-assisted DVA advocacy copilot that interviews, maps conditions to SoP factors, and generates claim-ready packs.',
    link: { href: '#', label: 'Coming soon' },
  },
  {
    name: 'RNDL',
    description:
      'Finds R&D tax rebate opportunities and handles the paperwork so builders can keep building.',
    link: { href: '#', label: 'Coming soon' },
  },
  {
    name: 'TaxBurst',
    description:
      'A "plug in once" tax platform that automates optimisation and can lodge with the ATO for set-and-forget hygiene.',
    link: { href: '#', label: 'Coming soon' },
  },
  {
    name: 'VetAssess',
    description:
      'Veteran-first financial advice and benefits support, backed by people who know the system.',
    link: { href: '#', label: 'Coming soon' },
  },
  {
    name: 'InvestorBot',
    description:
      'Modular ASX trading automation: build strategies like blocks, backtest, and deploy without a PhD.',
    link: { href: '#', label: 'Coming soon' },
  },
]

export const metadata = {
  title: {
    template: '%s - Simmonds & Co',
    default: 'Simmonds & Co - Fintech that makes the hard stuff simple',
  },
  description:
    "Tom and Ben Simmonds build fintech solutions that turn complex financial and regulatory workflows into products people can actually use.",
}
