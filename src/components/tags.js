export default function Tags({ tags, alt }) {
  return (
    <ul
      css={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
        marginTop: 8,
        padding: 0,
      }}
    >
      {tags.map((t) => (
        <li
          css={{
            marginRight: 8,
            marginBottom: 8,
            padding: "4px 8px",
            borderRadius: 6,
            backgroundColor: alt ? "#FCF8FF" : "#EAFDF8",
            "-webkit-print-color-adjust": "exact",
            fontSize: 12,
          }}
          key={t}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
