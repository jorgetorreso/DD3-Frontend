"use client"
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import './switcher.scss'

export default function Switcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    const toggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setTheme(isChecked ? "light" : "dark");
    };

    return (
        <div className="switch">
            <input
                type="checkbox"
                onChange={toggleDarkMode}
                checked={theme === "light" || theme === "system"}
                className="switch__input"
                id="Switch"
            />
            <label className="switch__label" htmlFor="Switch">
                <span className="switch__indicator"></span>
                <span className="switch__decoration"></span>
            </label>
        </div>
    );
}