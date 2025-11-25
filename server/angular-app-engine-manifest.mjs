
export default {
  basePath: 'https://yuki616161.github.io/my-resume-site-ng',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
