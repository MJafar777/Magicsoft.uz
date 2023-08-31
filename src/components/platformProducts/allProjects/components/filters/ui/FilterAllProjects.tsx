import { FC, useState } from "react";
import { FilterAllProjectsWrapper, ButtonsFilter } from "./filterAllProject";

type DataFilterItem = {
  id: number;
  value: string;
};

type Props = {
  dataFilter?: DataFilterItem[];
};

const FilterAllProjects: FC<Props> = (props) => {
  const [idFilterValue, setIdFilterValue] = useState(1);

  const { dataFilter } = props;

  const FilterButtonClicked = (id: number) => {
    setIdFilterValue(id);
  };
  const activeButton = { backgroundColor: "#FFF", color: "black" };

  return (
    <FilterAllProjectsWrapper>
      {dataFilter &&
        dataFilter.map((item) => (
          <ButtonsFilter
            onClick={() => FilterButtonClicked(item.id)}
            key={item.id}
            style={idFilterValue === item.id ? activeButton : {}}
          >
            {item.value}
          </ButtonsFilter>
        ))}
    </FilterAllProjectsWrapper>
  );
};

export default FilterAllProjects;
