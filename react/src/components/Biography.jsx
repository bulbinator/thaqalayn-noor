import { Alert, Divider } from "@mantine/core";

function Biography({ narrator }) {
  if (!narrator?.infoList)
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

  const BIO_MAP = {
    لقب: "Epithet",
    کنيه: "Teknonym",
    "طبقه در ثمانیه": "Generation",
    ولادت: "Birth",
    وفات: "Death",
    معصوم: "Infalliable",
  };

  const getBioLabel = (title) => {
    const normalizedTitle = title.trim().replace(/[:：]/g, "");
    return BIO_MAP[normalizedTitle] || title;
  };

  return (
    <div>
      <strong>{narrator.name.split(",")[0]}:</strong>
      {narrator.infoList.map((item, index) => (
        <div key={index}>
          <strong className="english-text">{getBioLabel(item.title)}:</strong>
          <ul>
            {item.text.map((entry, i) => (
              <li key={i}>
                {<strong>{entry.text + ": "}</strong>}
                {entry?.bookName?.length > 0 && (
                  <span className="sources">
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
      <Divider my="md"></Divider>
    </div>
  );
}

export default Biography;
