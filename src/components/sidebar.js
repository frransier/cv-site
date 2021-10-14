import Tags from "./tags";

export default function Sidebar({ stack, education }) {
  return (
    <div
      css={{
        padding: 6,
        borderRight: "solid 1px lightgrey",
      }}
    >
      <h1>Stack</h1>
      {stack.map((s) => (
        <div key={s.title}>
          <h3 css={{ margin: 0 }}>{s.title}</h3>
          <Tags tags={s.tags} />
        </div>
      ))}
      <h1>Education</h1>
      {education.map((e) => (
        <div key={e.title}>
          <h4 css={{ margin: 0 }}>{e.school}</h4>
          <div>
            {e.start} - {e.end}
          </div>
          <div>{e.title}</div>
        </div>
      ))}
    </div>
  );
}
