import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import("@web/test-runner").TestRunnerConfig} */
const config = {
  files: 'test/**/*.test.ts',

  nodeResolve: true,

  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'auto'
    })
  ],

  browsers: [
    playwrightLauncher({
      product: 'chromium',
    }),
  ],
};

export default config;
