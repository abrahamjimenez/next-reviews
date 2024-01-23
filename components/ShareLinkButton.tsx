"use client";

import {LinkIcon} from "@heroicons/react/20/solid";
import {useState} from "react";

export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };
    return (
        <button
            className="border flex gap-1 items-center px-2 py-1 rounded text-blue-600 text-sm hover:bg-blue-200 hover:text-blue-900"
            onClick={handleClick}>
            <LinkIcon className="h-4 w-4"/>
            {clicked ? "Link copied!" : "Share Link"}
        </button>
    );
}