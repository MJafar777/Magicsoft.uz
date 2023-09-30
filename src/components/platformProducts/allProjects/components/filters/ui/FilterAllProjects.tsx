import { FC, useContext, useState } from "react";
import { filter } from "../../../../../../assets";
import useWindowWidth from "../../../../../../hooks/useWindowWidth";

import {
  IconFilter,
  ButtonsFilter,
  FilterAllProjectsWrapper,
} from "./filterAllProject";

import {
  ButtonContext,
  ButtonContextProps,
} from "../../../../../../context/ButtonContext";

type DataFilterItem = {
  id: number;
  value: string;
  type: string;
};

type Props = {
  dataFilter?: DataFilterItem[];
};

const FilterAllProjects: FC<Props> = (props) => {
  const { setFilterHandlerCard } =
    useContext<ButtonContextProps>(ButtonContext);

  const window = useWindowWidth();
  const [idFilterValue, setIdFilterValue] = useState<number>(1);
  const [filterBtn, setFilterBtn] = useState<boolean>(false);

  const { dataFilter } = props;

  const FilterButtonClicked = (id: number) => {
    setIdFilterValue(id);
  };
  const activeButton = { backgroundColor: "#FFF", color: "black" };

  const setContextValueItem = (props: string) => {
    setFilterHandlerCard(props);
  };

  // devise mobile
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
                  setContextValueItem(item.value);
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
  }

  // devise Desctop
  return (
    <FilterAllProjectsWrapper>
      {dataFilter &&
        dataFilter.map((item) => (
          <ButtonsFilter
            onClick={() => {
              FilterButtonClicked(item.id);
              setContextValueItem(item.type);
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
