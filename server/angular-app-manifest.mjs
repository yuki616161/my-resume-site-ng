
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://yuki616161.github.io/my-resume-site-ng/',
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
    'index.csr.html': {size: 731, hash: '6c971fb0f3716ff81bb333097604a769fa7898fe11b425f3528c04112cdb85f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 998, hash: 'bf70bf57749e517c5dc8eff9a7f3c368dc452207bafc3fbd3bf9a2558a5ce006', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hobby/index.html': {size: 3238, hash: 'fe856c500d440a0e5df2ce1bc752604afb265e2cd274f72a6c706c4f6a202780', text: () => import('./assets-chunks/hobby_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 2897, hash: '6e25b4c21a3e1dfe2931087dab101d0bb1f66d5e6d4cfcbab3a94b92c06a86d2', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4523, hash: '9db7cf84400e5f62aed19f7311b53bb8e1f9762b3058a4db7c2952fc2d6d733e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2845, hash: 'a01bd8c347e41d735452716a1c98a79d399233d91a8bc0a65fede0a74f39837e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-BYAO45LN.css': {size: 2454, hash: 'XrWuSDZf4lk', text: () => import('./assets-chunks/styles-BYAO45LN_css.mjs').then(m => m.default)}
  },
};
