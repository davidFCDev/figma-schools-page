import { style } from "@/style";
import Browse from "../components/browse-box";
import Rankings from "../components/rankings-box";

const UniversitiesTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <Browse />

      <Rankings />
    </main>
  );
};

export default UniversitiesTemplate;
