/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import GreenBox from "../components/greenbox";
import Resource from "../components/resource";
import { RESOURCES_BOX } from "@/constants";

const HomeTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-16`}>
      <GreenBox />

      <div className="flex flex-col gap-8">
        <h2 className="text-3xl small:text-4xl font-semibold text-center small:text-left font-averia">Recommended resources</h2>
        <div className="grid grid-cols-1 small:grid-cols-3 gap-10">
          {RESOURCES_BOX.map((resource, index) => (
            <Resource key={index} resource={resource}/>
          ))}
          
        </div>
      </div>
    </main>
  );
};

export default HomeTemplate;
