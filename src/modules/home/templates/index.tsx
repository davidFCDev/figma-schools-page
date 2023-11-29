/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import GreenBox from "../components/greenbox";
import Resource from "../components/resource";

const HomeTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-16`}>
      <GreenBox />

      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">Recommended resources</h2>
        <div className="grid grid-cols-3 gap-10">
          <Resource
            color="blue"
            mask1="/shadows/blue-mask-down.png"
            mask2="/shadows/blue-mask-up.png"
            title="School Rankings"
            subtitle="Sorted By Year"
            icon="/clock.png"
          />
          <Resource
            color="orange"
            mask1="/shadows/orange-mask-down.png"
            mask2="/shadows/orange-mask-up.png"
            title="Career Pathways"
            subtitle="Apprenticeships"
            icon="/users.png"
          />
          <Resource
            color="violet"
            mask1="/shadows/violet-mask-down.png"
            mask2="/shadows/violet-mask-up.png"
            title="Study Resources"
            subtitle="Seminars & Events"
            icon="/monitor.png"
          />
          <Resource
            color="greenLime"
            mask1="/shadows/green-mask-down.png"
            mask2="/shadows/green-mask-up.png"
            title="ATAR & Subjects"
            subtitle="ATAR Score Estimator"
            icon="/maths.png"
          />
          <Resource
            color="pink"
            mask1="/shadows/pink-mask-down.png"
            mask2="/shadows/pink-mask-up.png"
            title="University Info"
            subtitle="Courses & Degrees"
            icon="/student.png"
          />
          <Resource
            color="yellow"
            mask1="/shadows/yellow-mask-down.png"
            mask2="/shadows/yellow-mask-up.png"
            title="Find Scholarships"
            subtitle="Upcoming Deadlines"
            icon="/exam.png"
          />
        </div>
      </div>
    </main>
  );
};

export default HomeTemplate;
