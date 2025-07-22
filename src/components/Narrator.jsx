import { Tooltip, Button, Modal, Tabs, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Biography from "./Biography";
import Evaluation from "./Evaluation";
import { IoPerson } from "react-icons/io5";
import { FaBalanceScale, FaGavel } from "react-icons/fa";

function Narrator({ narratorObject }) {
  const [opened, { open, close }] = useDisclosure(false); // modal

  function getNarratorClassName(narratorSummary) {
    if (narratorSummary.includes("معصوم")) {
      return "thiqa-imami";
    } else if (narratorSummary.includes("ثقة")) {
      if (narratorSummary.includes("على التحقيق")) {
        return "thiqa-thaqiq";
      } else if (narratorSummary.includes("غير إمامي‌")) {
        return "thiqa-ghayr-imami";
      } else {
        return "thiqa-imami";
      }
    } else if (narratorSummary.includes("ضعيف")) {
      return "daef";
    } else {
      return "";
    }
  }
  let narratorSummary = "";
  let narratorClassName = "";
  let narrators = narratorObject.narrators; // thank you kulayni for idata min ashabina

  if (narrators.length != 0) {
    narrators.forEach((narrator) => {
      let infoList = narrator.infoList2;
      if (infoList && infoList.length > 1) {
        narratorSummary +=
          narrator.name.split(",")[0] + "," + infoList[1].text + "\n";
      } else {
        narratorSummary += narrator.name + "\n";
      }
      narratorClassName = getNarratorClassName(narratorSummary);
    });
  } else {
    narratorSummary = narratorObject.title;
    narratorClassName = "narrator";
  }

  return (
    <>
      <Modal
        className="arabic-text"
        opened={opened}
        onClose={close}
        size="auto"
        title={<div style={{ fontSize: "2rem" }}>{narratorObject.title}</div>}
        overlayProps={{
          blur: 2,
        }}
      >
        {narratorObject.narrators.map((narrator, index) => (
          <Paper shadow="xl" radius="xl" withBorder p="xl" key={index}>
            <Tabs variant="outline" defaultValue="bio" radius="md">
              <Tabs.List grow justify="space-between">
                <Tabs.Tab
                  style={{ fontSize: "1.1rem" }}
                  value="bio"
                  leftSection={<IoPerson />}
                >
                  Biography
                </Tabs.Tab>
                <Tabs.Tab
                  style={{ fontSize: "1.1rem" }}
                  value="eval"
                  leftSection={<FaBalanceScale />}
                >
                  Evaluation
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="bio">
                <Biography narrator={narrator}></Biography>
              </Tabs.Panel>
              <Tabs.Panel value="eval">
                <Evaluation narrator={narrator}></Evaluation>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        ))}
      </Modal>
      <Tooltip
        label={<div style={{ whiteSpace: "pre-line" }}>{narratorSummary}</div>}
      >
        <span className={"narrator " + narratorClassName} onClick={open}>
          {narratorObject.title + " "}
        </span>
      </Tooltip>
    </>
  );
}

export default Narrator;
