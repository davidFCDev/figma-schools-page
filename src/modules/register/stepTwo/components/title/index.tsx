/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";

const Title = () => {
  return (
    <div className="flex flex-col items-center gap-10 pb-64">
      <div className="flex flex-col gap-5">
        <h2 className={`${style.title}`}>
          The first and only step you’ll have to make
        </h2>
        <p className={`${style.subtitle}`}>
          We won’t spam your email, we’ll only use it for whats necessary.
        </p>
      </div>
      <img src="/gem.png" alt="heart" className="w-60" />
    </div>
  );
};

export default Title;
