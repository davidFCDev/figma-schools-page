/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import GreenBox from "../components/greenbox";
import { RESOURCES as resources } from "@/constants";
import Categories from "../components/categories";
import ResourceCard from "../components/resource-card";

const ResourcesTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-10 `}>
      <GreenBox />

      <div className="flex flex-col items-center relative">
        <h2 className="font-bold text-5xl font-averia text-darkOrange">
          Popular Resources
        </h2>

        <img
          src="/green-line2.png"
          alt="green-line"
          className="absolute -bottom-6 right-48"
        />
      </div>

      <Categories />

      <div className="flex flex-col small:flex-row justify-center pt-10 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </main>
  );
};

export default ResourcesTemplate;
