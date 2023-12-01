/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import GreenBox from "../components/greenbox";
import { RESOURCES as resources } from "@/constants";

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

      <div className="flex pt-10 justify-center w-full gap-7 font-semibold font-rubik">
        <button className="px-6 py-2 rounded-lg border border-green bg-green text-white hover:scale-105 transform transition-all">
          All Resources
        </button>
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            className="px-5 py-2 rounded-lg border border-neutral-200 bg-white hover:scale-105 transform transition-all"
          >
            Category
          </button>
        ))}
      </div>

      <div className="flex flex-col small:flex-row justify-center pt-10 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex flex-col items-center w-80 rounded-2xl bg-white shadow shadow-neutral-200"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full rounded-t-2xl"
            />

            <div className="flex flex-col p-5 gap-6 relative">
              <div className="flex flex-col gap-3 pt-5">
                <span className="text-xs">1 - {resource.date}</span>
                <h3 className="font-bold text-lg text-darkGreen">
                  {resource.title}
                </h3>
              </div>

              <p className="text-xs leading-normal">{resource.description}</p>

              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <p className="font-bold text-darkOrange text-xl">
                    $ {resource.after}
                  </p>
                  <p className="font-semibold text-neutral-400 text-lg line-through">
                    $ {resource.before}
                  </p>
                </div>
                <button className="px-5 py-2 bg-darkGreen text-white shadow rounded-lg text-sm hover:bg-green">
                  Check Out
                </button>
              </div>

              <div className="flex w-full justify-center">
                <div className="flex items-center gap-1 bg-gray rounded-full px-2 py-1 absolute z-10 border border-neutral-200 -top-5">
                  <img src={resource.avatars} alt="avatar-group" />
                  <p>+ {resource.students} students</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ResourcesTemplate;
