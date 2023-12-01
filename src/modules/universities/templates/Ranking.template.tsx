/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import RankingResults from "../components/ranking-results";
import GlobalFilters from "../components/global-filters";

const RankingsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <h2 className="text-3xl font-semibold font-averia">
        University Rankings
      </h2>

      <div className="flex flex-col gap-6 px-24">
        <GlobalFilters  />

        <RankingResults />
      </div>
    </main>
  );
};

export default RankingsTemplate;
