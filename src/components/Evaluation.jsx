import { Alert, Divider } from "@mantine/core";

function Evaluation({ narrator }) {
  if (!narrator?.infoList2)
    return (
      <>
      {narrator.name.split(",")[0]}:
        <Alert className="english-text"
          variant="transparent"
          color="red"
          radius="md"
          title="No data to display for this narrator"
        ></Alert>
      </>
    );

  const EVAL_MAP = {
    "نتيجه ارزيابي": "remove",
    "جمع بندي ارزيابي": "Summary of Evaluation",
    "الفاظ جرح و تعدیل": "Criticism and Praise",
  };

  const getEvalLabel = (title) => {
    const normalizedTitle = title.trim().replace(/[:：]/g, "");
    return EVAL_MAP[normalizedTitle] || title;
  };

  return (
    <div>
      {narrator.name.split(",")[0]}:
      {narrator.infoList2.map((item, index) => {
        const label = getEvalLabel(item.title);
        if (label === "remove") return null;

        return (
          <div key={index}>
            <div className="english-text">{label}:</div>
            {typeof item.text === "string" ? (
              <div>{item.text}</div>
            ) : (
              <ul>
                {item.text.map((entry, i) => (
                  <li key={i}>
                    {entry.text + ": "}
                    {entry.bookName?.length > 0 && (
                      <span className="sources">
                        {" ("}
                        {entry.bookName
                          .map((book) => book.bookName)
                          .join(" - ")}
                        {")"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Evaluation;
