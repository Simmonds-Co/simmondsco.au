import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { home } from '@/content/site'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {home.hero.headline}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {home.hero.subhead}
          </p>
          <div className="mt-8 flex gap-4">
            <Button href="/projects">View projects</Button>
            <Button href="/about" variant="secondary">
              About us
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            What we do
          </h2>
          <ul className="mt-6 space-y-4">
            {home.whatWeDo.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="h-6 w-6 flex-none text-teal-500" />
                <span className="text-base text-zinc-600 dark:text-zinc-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {home.credibility}
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
