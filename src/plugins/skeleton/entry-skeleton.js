import Vue from 'vue'
import Skeleton from './Skeleton.vue';
// 创建一个骨架屏 Vue 实例  配置在vue.config.js中
export default new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton id="skeleton" />'
});