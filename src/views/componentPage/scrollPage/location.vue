<template>
	<div class="location">
		<!-- 还没有在路由中注册 -->
		<!-- <button @click="refresh()">重载路由</button> -->
		<div id="Floor-roll">
			<ul class="scroll-ul" id="scroll-ul-1">
				<h1>scroll-1</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-2">
				<h1>scroll-2</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-3">
				<h1>scroll-3</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-4">
				<h1>scroll-4</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-5">
				<h1>scroll-5</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-6">
				<h1>scroll-6</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<ul class="scroll-ul" id="scroll-ul-7">
				<h1>scroll-7</h1>
				<li v-for="(it, ix) in Floor" :key="it.ulNmae">{{ it.ulNmae }}</li>
			</ul>
			<!-- <jump-anchor :jumpList="jumpBtn"></jump-anchor> -->
		</div>
		<div id="Floor-fixed">
			<p @click="scrollTowhere()">scrollTo</p>
			<p v-for="(item, index) in jumpBtn" :key="index" @click="floorJump(item.id)">{{ item.text }}</p>
		</div>
	</div>
</template>

<script>
import jumpAnchor from '@/components/jump/jumpAnchor.vue';
export default {
	name: 'location',
	data() {
		return {
			Floor: [{ulNmae: 'Floor-1'},{ulNmae: 'Floor-2'},{ulNmae: 'Floor-3'},{ulNmae: 'Floor-4'},{ulNmae: 'Floor-5'},{ulNmae: 'Floor-6'}],
			jumpBtn: []
		};
	},
	components: {
		jumpAnchor
	},
	mounted() {
		this.$nextTick(() => {
			this.getJumpBtnList();
		});
	},
	methods: {
		scrollTowhere(){
			let main = document.getElementById('layMain')
			console.log(main.scrollTop)
		},
		floorJump(item) {
			let jump = document.getElementById(item)
			let main = document.getElementById('layMain')
			main.scrollTo(0,jump.offsetTop)
		},
		getJumpBtnList() {
			let FloorArr = document.querySelectorAll('#Floor-roll .scroll-ul');
			// console.log(FloorArr);
			FloorArr.forEach(btn => {
				let id = btn.id;
				this.jumpBtn.push({ text: id, id: id });
			});
		},
		refresh() {
			// console.log('重载路由', this.$route.fullPath);
			this.$router.replace({
				path: '/redirect' + this.$route.fullPath
			});
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
#Floor-roll {
	background-color: #e1c9ae;
	.scroll-ul {
		li {
			height: 30px;
		}
	}
}
.location{
	position: relative;
	#Floor-fixed {
		width: 100px;
		padding: 20px 10px;
		position: fixed;
		right: calc(14vw - 100px);
		top: calc(80px + 4vh);
		background-color: rgba($color: #6ffffb, $alpha: 0.2);
		& > p {
			cursor: pointer;
			&:hover {
				background-color: red;
			}
		}
	}
}

</style>
