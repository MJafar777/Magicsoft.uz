import { FC, useState } from "react";
import {
  FilterAllProjectsWrapper,
  ButtonsFilter,
  IconFilter,
} from "./filterAllProject";
import { filter } from "../../../../../../assets";

type DataFilterItem = {
  id: number;
  value: string;
};

type Props = {
  dataFilter?: DataFilterItem[];
};

const FilterAllProjects: FC<Props> = (props) => {
  const [idFilterValue, setIdFilterValue] = useState<number>(1);
  const [filterBtn, setFilterBtn] = useState<boolean>(true);

  const { dataFilter } = props;

  const FilterButtonClicked = (id: number) => {
    setIdFilterValue(id);
  };
  const activeButton = { backgroundColor: "#FFF", color: "black" };

  return (
    <FilterAllProjectsWrapper>
      <IconFilter
        onClick={() => setFilterBtn(!filterBtn)}
        src={filter}
        alt="filter"
      />
      {filterBtn
        ? dataFilter &&
          dataFilter.map((item) => (
            <ButtonsFilter
              onClick={() => {
                FilterButtonClicked(item.id);
                setFilterBtn(false);
              }}
              key={item.id}
              style={idFilterValue === item.id ? activeButton : {}}
            >
              {item.value}
            </ButtonsFilter>
          ))
        : ""}
    </FilterAllProjectsWrapper>
  );
};

export default FilterAllProjects;
