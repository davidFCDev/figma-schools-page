import { SchoolProps } from "@/types";
import Link from "next/link";
import React from "react";

const SchoolDropdown: React.FC<{ school: SchoolProps }> = ({ school }) => {
  return (
    <div className="w-full flex gap-2 rounded-3xl border-t border-neutral-200 shadow-b-xs shadow-neutral-200 px-4 small:px-8 py-6">
      <p className="text-base font-light ">
        {school.description}
        <Link
          href="/dashboard/schools/[id]"
          as={`/dashboard/schools/${school.id}`}
          className="font-bold underline pl-2"
        >
          Read more
        </Link>
      </p>
    </div>
  );
};

export default SchoolDropdown;
