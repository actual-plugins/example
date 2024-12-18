import { ActualPluginManifest } from 'plugins-shared';

const manifest: ActualPluginManifest = {
  slug: "example-plugin",
  name: "Example Plugin",
  version: "1.0.0",
  description: "This is an example plugin.",
  pluginType: 'client',
  minimumActualVersion: 'v24.12.0'
};

export default manifest;