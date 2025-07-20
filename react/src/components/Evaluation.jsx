import { Alert, Divider } from "@mantine/core";

function Evaluation({ narrator }) {
  if (!narrator?.infoList2)
    return (
      <>
      <strong>{narrator.name.split(",")[0]}:</strong>
        <Alert className="english-text"
          variant="transparent"
          color="red"
          radius="md"
          title="No data to display for this narrator"
        ></Alert>
        <Divider my="md"></Divider>
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
      <strong>{narrator.name.split(",")[0]}:</strong>
      {narrator.infoList2.map((item, index) => {
        const label = getEvalLabel(item.title);
        if (label === "remove") return null;

        return (
          <div key={index}>
            <strong className="english-text">{label}:</strong>
            {typeof item.text === "string" ? (
              <div>{item.text}</div>
            ) : (
              <ul>
                {item.text.map((entry, i) => (
                  <li key={i}>
                    {<strong>{entry.text + ": "}</strong>}
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
      <Divider my="md"></Divider>
    </div>
  );
}

export default Evaluation;
