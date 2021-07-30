import { ButtonGroup, Dropdown, Paper } from "byh-components";
import React from "react";
import { createArrayObjectOfAllYears } from "../../../../services/allYears";
import "./AddAdvertSelectYear.scss";

export const AddAdvertSelectYear = () => {
  const mockFunc = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Paper
        height={70}
        display="flex"
        className="addAdvertSelectYear__content-wrapper"
      >
        <div className="addAdvertSelectYear__content-wrapper">
          <ButtonGroup
            buttons={createArrayObjectOfAllYears("year", 2012)}
            width={934}
            height={49}
            fontSize={22}
            callback={mockFunc}
            defVariant={"secondary"}
          />
          <Dropdown
            height={48}
            variant={"primary"}
            width={195}
            labelFontSize={18}
            label={"Раньше"}
            callback={mockFunc}
            items={createArrayObjectOfAllYears("year", 1890, 2011)}
          />
        </div>
      </Paper>
    </>
  );
};
