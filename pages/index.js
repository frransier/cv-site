import Header from "../src/components/header";
import Resume from "../src/components/resume";
import Sidebar from "../src/components/sidebar";
import { get } from "../src/lib/fetch";

export default function Home({ data }) {
  return (
    <main
      css={{
        width: 640,
        margin: "0 auto",
      }}
    >
      {/* <SEO /> */}
      <Header details={data.details} />
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "2fr 5fr",
        }}
      >
        <Sidebar stack={data.stack} education={data.education} />
        <Resume about={data.about} jobs={data.jobs} projects={data.projects} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "landing"][0]{
    title,
    description,
    details,
    stack,
    about,
    personal,
    jobs[]->{...},
    education[]->{title, school, start, end},
    projects[]->{..., employer->{title, description, company, roles, start, end}},
  }`;
  const data = await get(query);
  return {
    props: { data },
  };
}
