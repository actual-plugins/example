import { CSSProperties } from "react";
import { SvgPenTool } from "../icons/PenTool";
import React from "react";

type ThemeIconProps = {
    themeName: string;
    darkMode: boolean;
    style?: CSSProperties;
};

export function ThemeIcon({ themeName, darkMode, style } : ThemeIconProps) {
    switch(themeName) {
        case 'dracula':
            return <SvgPenTool style={style} />
    }

    return <div></div>;
}