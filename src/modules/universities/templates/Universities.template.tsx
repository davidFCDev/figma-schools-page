import { style } from "@/style";
import RankingBox from "../components/ranking-box";
import BrowseBox from "../components/browse-box";

const UniversitiesTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <BrowseBox />
      <RankingBox />
    </main>
  );
};

export default UniversitiesTemplate;
