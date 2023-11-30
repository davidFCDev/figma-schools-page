"use client";

import { PathwayProvider } from "@/lib/context/pathway-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PathwayProvider>{children}</PathwayProvider>;
}
