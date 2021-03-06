import Jobs from "./jobs";
import Projects from "./projects";
import Tags from "./tags";

export default function Resume({ jobs, projects, about }) {
  const primaryProjects = projects.filter(
    (x) => x.roles.includes("Sole Developer") && x.status !== "concept"
  );
  const secondaryProjects = projects.filter(
    (x) => !x.roles.includes("Sole Developer") && x.status !== "concept"
  );
  const tertiaryProjects = projects.filter((x) => x.status === "concept");
  console.log(tertiaryProjects);
  return (
    <div
      css={{
        padding: 6,
        paddingLeft: 18,
      }}
    >
      <h1>About Me</h1>
      <p>{about}</p>
      <h1>Work experience</h1>
      <Jobs jobs={jobs} />
      <h1>Projects I Have Built</h1>
      <Projects projects={primaryProjects} />
      <h1>Projects I Have Worked on</h1>
      <Projects projects={secondaryProjects} />
      <h1>Concepts I Have Worked on</h1>
      <Projects projects={tertiaryProjects} />
    </div>
  );
}
