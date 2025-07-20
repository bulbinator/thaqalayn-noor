function Biography({ narrator }) {
  if (!narrator?.infoList) return null;

  return (
    <div>
      {narrator.infoList.map((item, index) => (
        <div key={index}>
          <strong>{item.title}:</strong>
          <ul>
            {item.text.map((entry, i) => (
              <li key={i}>
                {entry.text}
                {entry?.bookName?.length > 0 && (
                  <span>
                    {" ("}
                    {entry.bookName.map((book) => book.bookName).join(" - ")}
                    {")"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Biography;
