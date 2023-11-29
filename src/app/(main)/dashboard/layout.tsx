import Nav from "@/modules/layout/templates/nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full bg-gray">
      <Nav />
      <div className="w-full">{children}</div>
    </div>
  );
}
