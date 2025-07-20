import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Tooltip, Button } from "@mantine/core";
import Narrator from "./Narrator";

function Chain({ chain }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {chain.map((item, index) =>
        item.is_narrator ? (
          <Narrator narratorObject={item} key={index}></Narrator>
        ) : (
          <span key={index} className="non-narrator">{item.title + " "}</span>
        )
      )}
    </>
  );
}

export default Chain;
