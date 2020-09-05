<template>
	<div class="page1">
	   <!-- <div v-show="show_1">
			来吧，展示
	   </div>
	   <button @click="unShow(Show)">展示/隐藏</button> -->
	   <bMap></bMap>
	</div>
</template>

<script>
	import bMap from '../../../components/bMap/BMapComponent.vue'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'page1',
		data(){
			return{
				Show:false
			}
		},
		components:{
			bMap
		},
		computed:{
			...mapGetters({show_1:'show/show1'}),
		},
		methods:{
			...mapActions({unShow:'show/unShow'})
		}
	}
</script>

<style  lang="scss" scoped="scoped">
</style>
