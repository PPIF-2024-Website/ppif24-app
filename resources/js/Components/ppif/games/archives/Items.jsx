import React from "react";

export default function Items({ key, children }) {
    return (
        <li key={key} className=" shrink-0 w-full h-full max-w-[662px] max-h-[445px]">
            {children}
        </li>
    );
}
