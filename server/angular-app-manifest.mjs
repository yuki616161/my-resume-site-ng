
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
    'index.csr.html': {size: 731, hash: '9ae3d903765d30f9c285386e54e00dd13bab1b1150bcd79918a33ddf2cd0eaf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 998, hash: 'a4fff2aa35b2b3ae7744e35c00bbc1fd5707755d6c21c186e54a7072c8003fec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2845, hash: '285bc7189ae45c057b70dbe78f0683ea6d4c8e6670cb5fb237c6e3429e739ac5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4524, hash: '4d64b606f61dae0b29ecc7a42cec9c11887f683d018bfda703dc36ea8cdd21af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 2900, hash: 'f4bab300fc5b4cc73da2c3a764c7b34d20d87aedee124379cbb8533857fc875a', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'hobby/index.html': {size: 3238, hash: '765813056f31f4d223b2f4420d0d2b47d0d35932db01b778b47bc10460b158f9', text: () => import('./assets-chunks/hobby_index_html.mjs').then(m => m.default)},
    'styles-BYAO45LN.css': {size: 2454, hash: 'XrWuSDZf4lk', text: () => import('./assets-chunks/styles-BYAO45LN_css.mjs').then(m => m.default)}
  },
};
