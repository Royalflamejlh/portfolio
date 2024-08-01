import { ProjectPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`Hello! Im John, a recent computer engineering graduate from 
       University of Illinois and this is my little website documenting
       and showcasing my projects.`}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Checkout my projects
      </h1>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
