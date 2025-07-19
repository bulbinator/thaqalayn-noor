import { Tooltip, Button } from "@mantine/core";

function Narrator({ narrator }) {
  let narrators = narrator.narrators; // thank you kulayni for idata min ashabina
  const narratorStatus = narrators.map((narrator) => narrator.name).join("\n");

  return (
    <>
      <Tooltip
        label={<div style={{ whiteSpace: "pre-line" }}>{narratorStatus}</div>}
      >
        <span>{narrator.title + " "}</span>
      </Tooltip>
    </>
  );
}

export default Narrator;
