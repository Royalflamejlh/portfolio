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
            {`Hello! I'm John, a recent computer engineering graduate from 
            the University of Illinois and this is my little website documenting
            and showcasing my projects.`}
          </p>
        </div>
        
        <img
          src="/images/john.png"
          alt="John"
          className="ml-4 rounded-lg"
          style={{ width: '150px', height: 'auto' }} // Adjust width as needed
        />
      </div>
      
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Highlighted Projects
      </h1>
      
      <div className="mb-8">
        <Link
          key="craig"
          className="flex flex-col space-y-1 mb-4"
          href={`/projects/craig`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {"Craig the Chess Engine"}
            </p>
          </div>
        </Link>
        <Link
          key="xpvp"
          className="flex flex-col space-y-1 mb-4"
          href={`/projects/xpvp`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {"XPVP - Competitive Minecraft"}
            </p>
          </div>
        </Link>
        <Link
          key="watt-balance"
          className="flex flex-col space-y-1 mb-4"
          href={`/projects/watt-balance`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {"Kibble Watt Balance"}
            </p>
          </div>
        </Link>
      </div>

    </section>
  )
}
