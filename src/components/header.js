export default function Header({ personal }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }}
    >
      <div>
        <div>{personal.name}</div>
        <div>{personal.role}</div>
      </div>
      <div>
        <div>{personal.location}</div>
        <div>{personal.phone}</div>
        <div>{personal.email}</div>
        <div>{personal.github}</div>
      </div>
    </div>
  );
}
