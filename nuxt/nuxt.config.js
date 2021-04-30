import serveStatic from 'serve-static';
import path from 'path';

export default {
  srcDir: 'src/',
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxt/http'],
  serverMiddleware: {
    '/api/users/me': '~/server-middleware/users/me.ts',
    '/static': serveStatic(path.join(__dirname, 'src', 'assets', 'static')),
  },
};
