import { FC, Suspense } from "react";
import { dataCards } from "../../../api/data/blogs";
import { Loader } from "../../../components/Loading";
import { dataFilter } from "../../../api/data/blogs";
import { Container } from "../../../components/container";
import { NewsWrapper, ChildWrapper, Brecked } from "./blogs";
import { NavbarNews, TitleBlock } from "../../../components/news&Blogs/navbar";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters";

interface Props {}

interface DataFilterItem {
  id: number;
  type: string;
  value: string;
}

interface DataCardItem {
  id: number;
  img: string;
  link: string;
  title: string;
  subTitle: string;
  basedOn: string[];
  category: string[];
  date?: string | undefined;

  miniTitle: string;
  paragraphInfo: string;
}

const result: number = dataCards.length;

const News: FC<Props> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <NewsWrapper>
          <ChildWrapper>
            <NavbarNews data={dataCards} length={result} />
            <TitleBlock title={"Blogs"} />
            <FilterAllProjects dataFilter={dataFilter as DataFilterItem[]} />
            <Brecked>
              <CardsProject
                width={500}
                bg={"rgba(44, 44, 44, 0.4)"}
                btn={"LEARN MORE"}
                dataCards={dataCards as DataCardItem[]}
              />
            </Brecked>
          </ChildWrapper>
        </NewsWrapper>
      </Container>
    </Suspense>
  );
};

export default News;
