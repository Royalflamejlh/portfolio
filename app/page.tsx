import { ProjectPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello, Im John!`}
      </p>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
