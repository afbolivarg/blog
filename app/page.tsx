import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Andrés Felipe Bolívar
      </h1>
      <h2 className="mb-4 font-light">@afbolivarg</h2>
      <p className="mb-4">
        {`Working on the intersection of technology and business.`}
      </p>
      <p className="mb-4">
        {`I'm Colombian self-taught developer with experience as a full-stack developer and ML engineer,
        currently wrapping up a Business Administration degree on a full scholarship. I'm passionate about technology, business, and design. 
        I love creating functional, beautiful, and valuable solutions that drive business success.`}
      </p>
      <p className="mb-4">
        {`In addition to my studies and my day job, I'm working on a few projects and writing about them here, as well as sharing my 
        thoughts on books, business, and technology.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
