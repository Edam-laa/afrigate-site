import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonNativeProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonLinkProps | ButtonNativeProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D7A83F] text-[#081A33] shadow-lg shadow-[#081A33]/10 hover:bg-[#efc661]",
  secondary:
    "bg-[#081A33] text-white shadow-lg shadow-[#081A33]/15 hover:bg-[#102949]",
  outline:
    "border border-white/25 bg-white/10 text-white backdrop-blur hover:border-[#D7A83F] hover:bg-white/15",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#D7A83F] focus:ring-offset-2 focus:ring-offset-white",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
