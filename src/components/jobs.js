import Tags from "./tags";

export default function Jobs({ jobs }) {
  return (
    <ul>
      {jobs.map((j) => (
        <li
          css={{
            "@media print": {
              pageBreakInside: "avoid",
            },
          }}
          key={j.title}
        >
          <h3 css={{ marginBottom: 0 }}>{j.title}</h3>
          <div>
            {j.start} - {j.end}
          </div>
          <a
            css={{ margin: 0 }}
            href={`https://${j.company.url}`}
            target="_blank"
          >
            {j.company.name}
          </a>

          <p>{j.description}</p>
          <Tags tags={j.roles} />
        </li>
      ))}
    </ul>
  );
}
