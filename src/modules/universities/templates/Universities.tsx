import { style } from "@/style";
import Browse from "../components/browse";
import Rankings from "../components/rankings";

const UniversitiesTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <Browse />

      <Rankings />
    </main>
  );
};

export default UniversitiesTemplate;
