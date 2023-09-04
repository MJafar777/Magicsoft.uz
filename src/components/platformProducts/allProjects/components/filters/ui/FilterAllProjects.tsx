import { FC, useState } from "react";
import {
  FilterAllProjectsWrapper,
  ButtonsFilter,
  IconFilter,
} from "./filterAllProject";
import { filter } from "../../../../../../assets";
import useWindowWidth from "../../../../../../hooks/useWindowWidth";

type DataFilterItem = {
  id: number;
  value: string;
};

type Props = {
  dataFilter?: DataFilterItem[];
};

const FilterAllProjects: FC<Props> = (props) => {
  const window = useWindowWidth();
  const [idFilterValue, setIdFilterValue] = useState<number>(1);
  const [filterBtn, setFilterBtn] = useState<boolean>(false);

  const { dataFilter } = props;

  const FilterButtonClicked = (id: number) => {
    setIdFilterValue(id);
  };
  const activeButton = { backgroundColor: "#FFF", color: "black" };

  if (window <= 993) {
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
                  // setFilterBtn(false);
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
  }
  return (
    <FilterAllProjectsWrapper>
      {dataFilter &&
        dataFilter.map((item) => (
          <ButtonsFilter
            onClick={() => {
              FilterButtonClicked(item.id);
              // setFilterBtn(false);
            }}
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
