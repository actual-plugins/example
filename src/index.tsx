import type { ActualPlugin, ActualPluginEntry } from 'plugins-shared';
import { GenerateThemeIcon } from './theming/themeIcon';
import { draculaTheme } from './theming/dracula';
import { sepiaTheme } from './theming/sepia';
import { rosePineTheme } from './theming/rosepine';
import { tokyoNightTheme } from './theming/tokyoNight';

const pluginEntry: ActualPluginEntry = (React) => {
    const ThemeIcon = GenerateThemeIcon(React);
    
    const plugin: ActualPlugin = {
        name: 'Example',
        version: '0.0.1',
        availableThemes: (darkMode) => darkMode ? ['Dracula'] : ['Sepia', 'Rose Pine', 'Tokyo Night'],
        getThemeIcon: (themeName, darkMode, properties) => <ThemeIcon themeName={themeName} darkMode={darkMode} style={properties} />,
        getThemeSchema: themeSchema,
    }

    function themeSchema(themeName: string, darkMode: boolean) {
        if(themeName === 'Dracula') {
            return draculaTheme;
        } else if (themeName === 'Rose Pine') {
            return rosePineTheme;
        } else if (themeName === 'Tokyo Night') {
            return tokyoNightTheme;
        } else {
            return sepiaTheme;
        }
    }
    
    
    return plugin;
}
export default pluginEntry;