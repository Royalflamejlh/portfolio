import { ProjectPosts } from 'app/components/posts'

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
          src="/static/images/john.png"
          alt="John"
          className="ml-4 rounded-lg"
          style={{ width: '150px', height: 'auto' }} // Adjust width as needed
        />
      </div>
      
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Highlighted Projects
      </h1>
      
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
