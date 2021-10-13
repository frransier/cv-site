import { get } from "../src/lib/fetch";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      {/* <SEO /> */}
      <Header />
      {/* <Experience /> */}
      {/* <Skills /> */}
      {/* <About /> */}
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "landing"][0]{
    title,
    description,
    about,
    jobs[]->{...},
    education[]->{...},
    projects[]->{...},
  }`;
  const data = await get(query);
  return {
    props: { data },
  };
}
