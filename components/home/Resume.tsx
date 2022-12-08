import Image from 'next/image'
import { Button } from "components/Button"
import { ArrowDownIcon } from "components/icon/ArrowDown"
import { BriefcaseIcon } from "components/icon/Briefcase"
import habitatWeb from 'images/habitat-web.png';
import webcat from 'images/webcat.jpeg';
import puntoCero from 'images/punto-cero.jpeg';
import kation from 'images/kation.jpeg';

const resume = [
  {
    company: 'Webcat, LLC',
    title: 'React Developer',
    logo: webcat,
    start: {
      label: 'mar. 2022',
      dateTime: new Date('March 14, 2022').toDateString()
    },
    end: {
      label: 'Present',
      dateTime: new Date().toDateString()
    },
  },
  {
    company: 'Kation Interactive',
    title: 'Frontend Developer',
    logo: kation,
    start: {
      label: 'dec. 2020',
      dateTime: new Date('December 01, 2020').toDateString()
    },
    end: {
      label: 'Present',
      dateTime: new Date().toDateString()
    },
  },
  {
    company: 'Habitat Web',
    title: 'Web Developer - Freelance',
    logo: habitatWeb,
    start: {
      label: 'sep. 2020',
      dateTime: new Date('September 21, 2020').toDateString(),
    },
    end: {
      label: 'apr. 2021',
      dateTime: new Date('April 16, 2021').toDateString(),
    },
  },
  {
    company: 'Punto Cero',
    title: 'Frontend Developer - Freelance',
    logo: puntoCero,
    start: {
      label: 'jul. 2020',
      dateTime: new Date('July 12, 2020').toDateString(),
    },
    end: {
      label: 'apr. 2022',
      dateTime: new Date('April 12, 2022').toDateString(),
    },
  },
]
export function Resume() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end
                }`}
              >
                <time dateTime={role.start.dateTime}>
                  {role.start.label}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime}>
                  {role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/cv.pdf" target="_blank" download variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}