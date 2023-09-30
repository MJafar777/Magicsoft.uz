import { FC, Suspense } from "react";
import { NewsWrapper, ChildWrapper, Brecked } from "./news";

import {
  NavbarNews,
  TitleBlock,
} from "../../../components/news&Blogs/navbar/index.ts";
import { Loader } from "../../../components/Loading/index.ts";
import { dataCards, dataFilter } from "../../../api/data/news.ts";
import { Container } from "../../../components/container/index.ts";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards/index.ts";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters/index.ts";

interface Props {}

interface DataFilterItem {
  id: number;
  type: string;
  value: string;
}

const result = dataCards.length;

const News: FC<Props> = () => {
  // const { translate } = useLocales();

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <NewsWrapper>
          <ChildWrapper>
            <NavbarNews data={dataCards} length={result} />
            <TitleBlock title={"News"} />
            <FilterAllProjects dataFilter={dataFilter as DataFilterItem[]} />
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
      </Container>
    </Suspense>
  );
};

export default News;
