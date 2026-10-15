import type { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <div className="project-pages">{children}</div>;
}
