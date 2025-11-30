
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
    "route": "/my-resume-site-ng/hobby"
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
    'index.csr.html': {size: 703, hash: 'ca8d69060d670ed9b0cdcf9902e7281c572cdbc74bea6356c7732e1c48b9af79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: '6f55456d774c8796c383340079c421d4cdd3a3a09528144db603d140d1338026', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hobby/index.html': {size: 3070, hash: '6f61831f12401c3514c7eb798382abae35a3400d4b0fec2541637d539392b01a', text: () => import('./assets-chunks/hobby_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2677, hash: '2e8244d2c788ab591c4e9f4b03283af304d83c23e4e882313a57ce49bcf0be18', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 2729, hash: 'edffc1693922a3241a746f201f2b9f80187212fc7a9e7c99cd90499ee66bfab1', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4355, hash: 'b1321ebb299b83f7a4411357a20bffe7508ef5ce0c97d03b72dc486a0270bc12', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BYAO45LN.css': {size: 2454, hash: 'XrWuSDZf4lk', text: () => import('./assets-chunks/styles-BYAO45LN_css.mjs').then(m => m.default)}
  },
};
