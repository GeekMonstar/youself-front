/* eslint-disable @next/next/no-img-element */
import React, { JSX } from "react";

export default function Avatar({ src, alt, size = "md" }:AvatarProps): JSX.Element {
    return (
        <div className={`avatar ${size}`}>
            {src && <img src={src} alt={alt} className="rounded-full" />}
        </div>
    );
}

export interface AvatarProps {
    src: string | undefined ;
    alt: string;
    size?: string;
}