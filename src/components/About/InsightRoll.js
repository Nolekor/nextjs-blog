import React from "react";

export default function InsightRoll({ insights }) {
    return (
        <div className="w-full bg-accent text-light whitespace-nowrap overflow-hidden dark:bg-accentDark dark:text-dark">
            <div className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base ">
                {insights.map((text) => (
                    <div key={text}>
                        {text}
                        <span className="px-4">|</span>{" "}
                    </div>
                ))}
            </div>
        </div>
    );
}
