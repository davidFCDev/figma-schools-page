import Navbar from "@/modules/layout/templates/nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start w-full bg-gray">
      <Navbar />
      <div className="w-full mt-10 small:mt-0">{children}</div>
    </div>
  );
}
