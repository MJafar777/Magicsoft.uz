import { FC, Suspense } from "react";
import { dataCards } from "../../../api/data/news";
import { dataFilter } from "../../../api/data/blogs";
import { NewsWrapper, ChildWrapper, Brecked } from "./blogs";
import { NavbarNews, TitleBlock } from "../../../components/news&Blogs/navbar";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters";
import { Loader } from "../../../components/Loading";

interface Props {}

const result = dataCards.length;

const News: FC<Props> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NewsWrapper>
        <ChildWrapper>
          <NavbarNews data={dataCards} length={result} />
          <TitleBlock title={"Blogs"} />
          <FilterAllProjects dataFilter={dataFilter} />
          <Brecked>
            <CardsProject
              width={500}
              bg={"rgba(44, 44, 44, 0.4)"}
              btn={"LEARN MORE"}
              dataCards={dataCards}
            />
          </Brecked>
        </ChildWrapper>
      </NewsWrapper>
    </Suspense>
  );
};

export default News;
