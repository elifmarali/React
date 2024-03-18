import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

function AccordionLesson() {
  const [expended, setExpended] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpended: boolean) => {
      console.log(expended);
      setExpended(isExpended ? panel : false);
    };
  return (
    <div>
      {/*       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ilk Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ikinci Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ucuncu Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expended === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ilk Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ikinci Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ucuncu Bolum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          repellat. Itaque sit alias quia voluptas at omnis officiis, id numquam
          velit voluptatem iusto libero magnam! Sapiente commodi eaque
          exercitationem error!
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionLesson;
