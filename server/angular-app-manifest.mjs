
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-resume-site-ng/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-resume-site-ng"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-site-ng/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-site-ng/contact"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-site-ng/gallery"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-resume-site-ng",
    "route": "/my-resume-site-ng/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 703, hash: 'b7097dfa2ef640dc146337693f8d36b78f4b48e28f4ff375e635adecd41163aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: '59dc68d7b56b05786eb9401e82e73b9dbc66afc5ef7e988815010d78696a1844', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4359, hash: '8ffe96fad5031ee78be76652ee297153004dfdf7f6fdcd84e69f386b96721fa1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 3074, hash: 'eaa266a01e8609ade5f9f32163be5eb9e73982fa18bd1baa519e3a011626bf41', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2681, hash: '52d40df7d273dad1f2141cd1fe303ee72199a53b7041b8aa256b8461ef676d3f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 2733, hash: '2124a6c640cd36bdc96c1b9ad8c1131bca89f922460e8335fddd754f43c7798b', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'styles-BYAO45LN.css': {size: 2454, hash: 'XrWuSDZf4lk', text: () => import('./assets-chunks/styles-BYAO45LN_css.mjs').then(m => m.default)}
  },
};
