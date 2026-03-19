import { ProjectPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="flex items-start mb-8">
        <div className="flex-grow">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            About Me
          </h1>
          <p>
            {`I'm John, an embedded software engineer working on simulator hardware and the software stack around it.
            I'm a computer engineering grad from the University of Illinois who enjoys and is always building things
            at work and outside of work. I like getting into and learning about anything across embedded systems, full stack development, dev ops, and hardware design.`}
          </p>
        </div>

        <img
          src="/images/john.png"
          alt="John"
          className="ml-4 rounded-lg"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Highlighted Projects
      </h1>

      <div className="mb-8 space-y-3">
        {[
          { slug: 'craig', title: 'Craig: Chess Engine', summary: 'A chess engine in C' },
          { slug: 'community-server', title: 'Community MC Server', summary: 'Leading a team to make a server!' },
          { slug: 'home-server', title: 'Home Server(s) Stack', summary: 'All the stuff I have running' },
        ].map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <p className="font-medium text-neutral-900 dark:text-neutral-100">{project.title}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{project.summary}</p>
          </Link>
        ))}
      </div>

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        All Projects
      </h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {[
          { slug: 'community-server', title: 'Community Server' },
          { slug: 'craig', title: 'Chess Engine' },
          { slug: 'xpvp', title: 'XPVP' },
          { slug: 'watt-balance', title: 'Watt Balance' },
          { slug: 'eq-pedal', title: 'EQ Pedal' },
          { slug: 'fpga-chess', title: 'FPGA Chess' },
          { slug: 'home-server', title: 'Home Server' },
        ].map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {project.title}
          </Link>
        ))}
      </div>

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Skills
      </h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {[
          'Team Leadership',
          'Java',
          'C',
          'C#',
          'Python',
          'MariaDB / SQL',
          'Redis',
          'Full Stack Development',
          'PIC32 Embedded',
          'PCB Design',
          'Jira',
          'Git / GitHub',
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Professional Experience
      </h1>

      <div className="mb-8">
        <p className="text-neutral-900 dark:text-neutral-100 mb-3">
          {`I work across the full software stack of simulator pods at a small company, which means wearing a lot of hats.
          The role is software and embedded focused - writing application-layer code for Windows, and interfacing with our companies remote infrastructure (database and apis),
          building internal tooling, and developing firmware for the embedded hardware that lives inside the simulators.`}
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-900 dark:text-neutral-100">
          <li>{`Fault triage - working directly with the support team to triage, prioritize, and resolve hardware and software issues reported by customers`}</li>
          <li>{`Third-party integration - bringing external devices and peripherals into the stack by working with vendor APIs and documentation to make them work reliably`}</li>
          <li>{`Software development - writing Windows software that interfaces with simulator hardware over HID, improving the application layer and user experience`}</li>
          <li>{`Python tooling - test automation frameworks, data analysis for hardware validation, and custom instrument packages including an oscilloscope library for long-run automated measurements`}</li>
          <li>{`PIC32 firmware - developing and maintaining firmware for the microcontrollers that power peripheral hardware inside the simulators`}</li>
          <li>{`Backend integration - interfacing with the simulation databases and Azure file systems for data storage, retrieval, and access`}</li>
          <li>{`Custom Requests - designing and implementing one off software and firmware solutions for unique customer requests and unique requirements`}</li>
        </ul>
      </div>
    </section>
  )
}
