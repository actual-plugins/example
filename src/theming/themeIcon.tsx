import React from "react";
import type { CSSProperties } from "react";
import { SvgPenTool } from "../icons/PenTool";

type ThemeIconProps = {
    themeName: string;
    darkMode: boolean;
    style?: CSSProperties;
};

export const ThemeIcon: React.FC<ThemeIconProps> = ({ themeName, darkMode, style }) => {
    switch(themeName) {
        case 'dracula':
            return <SvgPenTool style={style} />
    }
    return <div style={style}></div>;
};
