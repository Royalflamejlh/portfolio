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
            {`I'm John, a computer engineering grad from
            the University of Illinois and embedded engineer. I am constantly working on a wide variety of projects.
            At and outside of work. I have experience in embedded systems, software development, 
            and dev ops, and embedded hardware design.`}
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
          { slug: 'community-server', title: 'Community MC Server', summary: 'Leading a team to make a server!' },
          { slug: 'craig', title: 'Craig: Chess Engine', summary: 'A chess engine in C' },
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
          'MariaDB / SQL',
          'Redis',
          'Full Stack Development',
          'PIC32 Embedded',
          'PCB Design',
          'Python',
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
          {`As an embedded engineer I work across the full development cycle and stack of simulator pods,
          and working at a smaller size company means I have worn many hats.
          I work with physical simulation hardware that interfaces with windows HID APIS.
          My work spans firmware, drivers, diagnostics, and application integration.`}
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-900 dark:text-neutral-100">
          <li>{`Windows integration - bridging embedded hardware in with Windows software, and smoothing the control to the application layer`}</li>
          <li>{`Fault diagnosis - identifying, reproducing, and resolving hardware faults and bottlenecks that impact users`}</li>
          <li>{`Third-party device integration - bringing external hardware and peripherals into the stack, reverse engineering and working with vendor APIs docs to make them work reliably`}</li>
          <li>{`Python tooling - test automation, data analysis for hardware validation, and custom instrument packages including an oscilloscope interface library for automated measurements over long time periods`}</li>
          <li>{`PIC32 embedded development - writing and maintaining firmware for the microcontrollers that power + interface peripherals within the simulator`}</li>
        </ul>
      </div>
    </section>
  )
}
