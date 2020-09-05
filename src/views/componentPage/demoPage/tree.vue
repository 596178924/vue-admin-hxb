<template>
	<div class="tree">
	  <u-menu :list="list"></u-menu>
	 <!-- <li v-for="(item, index) in list" :key="index">
	  	<p>{{ item.name }}</p>
	  </li> -->
	</div>
</template>

<script>
	import umenu from './menu.vue'
	export default {
		name:'tree',
		components:{
			'u-menu':umenu
		},
		data(){
			return{
				list: [
				        {
				          name: '递归组件111111111',
				          cList: [
				            { name: '二级黄焖鸡' },
				            {
				              name: 'one chicken',
				              cList: [
				                { name: '三级黄焖鸡3333', cList: [{ name: '四级黄焖鸡' }] }
				              ]
				            }
				          ]
				        },
				        { name: '递归组件---' },
				        {
				          name: '递归组件递归组件33333333',
				          cList: [{ name: '二级黄焖鸡' }, { name: 'one chicken' }]
				        }
				      ]
			}
		},
		methods:{
			
		}
	}
</script>

<style  lang="scss" scoped="scoped">
</style>
