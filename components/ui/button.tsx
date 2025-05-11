"use client";
import { usePathname } from "next/navigation";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
{
    variants: {
        variant: {
            primary: "bg-[var(--primary)] text-white rounded p-2",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10 rounded-md",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
    },
});

const navLinkVariants = cva(
    "flex items-center gap-2 p-2 rounded-md",
    {
        variants: {
            type:{
                default: "hover:bg-primary text-primary-foreground hover:bg-primary/90",
                active: "bg-[var(--primary-transparent)] text-primary-foreground hover:bg-primary/90",
            }
        }
    }
)

export function Button({ type, className, variant, size, children }: ButtonProps): JSX.Element {
    return (
        <button
            type={type}
            className={clsx(twMerge(buttonVariants({ variant, size, className })))}
        >{children}</button>
    );
}

export function NavLink({children, href="/" }: NavLinkProps): JSX.Element {
    const pathname = usePathname();
    const [isActive,setIsActive] = useState(pathname === href);
    useEffect(() => {
        setIsActive(pathname === href);
    }, [pathname]);
    return (
        <Link href={href ? href : "#"}
            className={clsx(twMerge(navLinkVariants({ type: isActive ? "active" : "default" })))}
        >{children}</Link>
    );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof navLinkVariants> {
    asChild?: boolean;
    type?: "default" | "active";
}