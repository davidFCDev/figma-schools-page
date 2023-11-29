/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import { PATHWAYS } from "@/constants";

const PathwaysTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-16`}>
      <div className="flex justify-center gap-10">
        {PATHWAYS.map((pathway) => (
          <div key={pathway.id} className="p-4 flex items-center bg-white rounded-xl">
            <img src={pathway.icon} alt={pathway.title} />
            <h2>{pathway.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PathwaysTemplate;
