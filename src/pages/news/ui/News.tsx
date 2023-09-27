import { FC, Suspense } from "react";
import { NewsWrapper, ChildWrapper, Brecked } from "./news";

import {
  NavbarNews,
  TitleBlock,
} from "../../../components/news&Blogs/navbar/index.ts";
import { dataCards, dataFilter } from "../../../api/data/news.ts";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards/index.ts";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters/index.ts";
// import useLocales from "../../../locales/useLocales.ts";
import { Loader } from "../../../components/Loading/index.ts";
import { Container } from "../../../components/container/index.ts";

interface Props {}

const result = dataCards.length;

const News: FC<Props> = () => {
  // const { translate } = useLocales();

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <NewsWrapper>
          <ChildWrapper>
            {/* {translate("hi")} */}
            <NavbarNews data={dataCards} length={result} />
            <TitleBlock title={"News"} />
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
      </Container>
    </Suspense>
  );
};

export default News;
