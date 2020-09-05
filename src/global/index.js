import Vue from 'vue'

import '@/router/permission'
import '@/styles/index.scss'
import '@/plugins/v-viewer'
import '@/plugins/vue-lazyload'
// import '@/plugins/xgplayer'



const modulesFiles = require.context("./model", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
 const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
 const value = modulesFiles(modulePath);
 modules[moduleName] = value.default;
 return modules;
}, {});