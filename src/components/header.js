export default function Header({ details }) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "solid 1px lightgrey",
      }}
    >
      <div>
        <div>{details.name}</div>
        <div>{details.role}</div>
      </div>
      <div css={{ display: "flex", margin: 8 }}>
        <div css={{ marginRight: 16 }}>
          <div>
            <a href={`https://${details.github}`}>{details.github}</a>
          </div>
          <div>{details.location}</div>
        </div>
        <div>
          <div>{details.phone}</div>
          <div>{details.email}</div>
        </div>
      </div>
    </div>
  );
}
