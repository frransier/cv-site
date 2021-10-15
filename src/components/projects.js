import Tags from "./tags";

export default function Projects({ projects }) {
  return (
    <ul>
      {projects.map((p) => (
        <li
          css={{
            "@media print": {
              pageBreakInside: "avoid",
            },
          }}
          key={p.title}
        >
          <h3 css={{ marginBottom: 0 }}>{p.title}</h3>
          <a css={{ margin: 0 }} href={`https://${p.url}`} target="_blank">
            {p.url}
          </a>
          <p>{p.description}</p>
          <Tags tags={p.stack} />
          <Tags alt tags={p.roles} />
        </li>
      ))}
    </ul>
  );
}
