import type { CSSProperties } from "react";
import { GenerateSvgPenTool } from "../icons/PenTool";

type ThemeIconProps = {
    themeName: string;
    darkMode: boolean;
    style?: CSSProperties;
};

export const GenerateThemeIcon = (React) => {
    const SvgPenTool = GenerateSvgPenTool(React);
    
    const ThemeIcon: React.FC<ThemeIconProps> = ({ themeName, darkMode, style }) => {
        switch(themeName) {
            case 'dracula':
                return <SvgPenTool style={style} />
        }
        return <div style={style}></div>;
    };

    return ThemeIcon;
}
