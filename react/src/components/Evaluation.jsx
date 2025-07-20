function Evaluation({ narrator }) {
  if (!narrator?.infoList2) return null;

  return (
    <div>
      {narrator.infoList2.map((item, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <strong>{item.title}:</strong>
          {typeof item.text === "string" ? (
            <div>{item.text}</div>
          ) : (
            <ul>
              {item.text.map((entry, i) => (
                <li key={i}>
                  {entry.text}
                  {entry.bookName?.length > 0 && (
                    <span>
                      {" ("}
                      {entry.bookName.map((book) => book.bookName).join(" - ")}
                      {")"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Evaluation;
