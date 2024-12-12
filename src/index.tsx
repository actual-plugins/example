import type { ActualPlugin } from 'plugins-shared';
import { ThemeIcon } from './theming/themeIcon';
import React from 'react';
import { draculaTheme } from './theming/dracula';

const plugin: ActualPlugin = {
    name: 'Example',
    version: '0.0.1',
    availableThemes: (darkMode) => darkMode ? ['dracula'] : ['allwhite'],
    getThemeIcon: (themeName, darkMode, properties) => <ThemeIcon themeName={themeName} darkMode={darkMode} style={properties} />,
    getThemeSchema: themeSchema,
}

function themeSchema(themeName: string, darkMode: boolean) {
    return draculaTheme;
}

export default plugin;