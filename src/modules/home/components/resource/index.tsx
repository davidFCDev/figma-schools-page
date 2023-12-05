/* eslint-disable @next/next/no-img-element */
import { ResourceProps } from "@/types";
import Link from "next/link";

const Resource = ({ resource }: { resource: ResourceProps }) => {

  return (
    <Link href={resource.link}>
      <div
        style={{
          backgroundColor: resource.color,
          boxShadow: `0px 4px 4px ${resource.color}`,
        }}
        className={`rounded-2xl px-6 py-4 flex justify-between h-40 small:h-48 text-white relative shadow-sm hover:scale-105 transform transition-all hover:cursor-pointer`}
      >
        <img
          src={resource.mask1}
          alt="mask"
          className="absolute bottom-0 right-0"
        />
        <img
          src={resource.mask2}
          alt="mask"
          className="absolute top-0 left-0"
        />
        <div className="flex flex-col gap-1 z-20">
          <h3 className="text-xl font-semibold tracking-wider">
            {resource.title}
          </h3>
          <p className="text-sm font-light">{resource.subtitle}</p>
        </div>
        <div className="flex items-end">
          <img src={resource.icon} alt="clock" className="w-14 small:w-20 z-20" />
        </div>
      </div>
    </Link>
  );
};

export default Resource;
