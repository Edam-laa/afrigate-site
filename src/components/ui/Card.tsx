import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children?: ReactNode;
  className?: string;
  description?: string;
  icon?: ReactNode;
  title: string;
};

export function Card({ children, className, description, icon, title }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10",
        className,
      )}
    >
      {icon ? (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081A33] text-[#D7A83F]">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-[#081A33]">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      ) : null}
      {children}
    </article>
  );
}
