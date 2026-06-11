import { cn } from "@/lib/utils";

type SectionTitleProps = {
  align?: "left" | "center";
  description?: string;
  label?: string;
  tone?: "light" | "dark";
  title: string;
};

export function SectionTitle({
  align = "left",
  description,
  label,
  tone = "dark",
  title,
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-3xl", isCenter && "mx-auto text-center")}>
      {label ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D7A83F]">
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "heading-serif text-4xl font-black tracking-tight sm:text-5xl",
          isLight ? "text-white" : "text-[#081A33]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-lg",
            isLight ? "text-white/70" : "text-slate-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
