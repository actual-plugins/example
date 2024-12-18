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
        availableThemes: () => ['Dracula', 'Sepia', 'Rose Pine', 'Tokyo Night'],
        getThemeIcon: (themeName, properties) => <ThemeIcon themeName={themeName} style={properties} />,
        getThemeSchema: themeSchema,
    }

    function themeSchema(themeName: string) {
        switch (themeName) {
            case 'Dracula':
                return draculaTheme;

            case 'Rose Pine':
                return rosePineTheme;

            case 'Tokyo Night':
                return tokyoNightTheme;

            case 'Sepia':
                return sepiaTheme;
        }

        return {};
    }


    return plugin;
}
export default pluginEntry;