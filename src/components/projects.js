import Tags from "./tags";

export default function Projects({ projects }) {
  return (
    <ul>
      {projects.map((p) => (
        <li key={p.title}>
          <h3 css={{ marginBottom: 0 }}>{p.title}</h3>
          <a css={{ margin: 0 }} href={p.url}>
            {p.url}
          </a>
          <p>{p.description}</p>
          <Tags alt tags={p.stack} />
          <Tags tags={p.roles} />
        </li>
      ))}
    </ul>
  );
}
