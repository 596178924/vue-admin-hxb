<template>
	<div>
		<h2>
			字符超出100后面的变为“...”
		</h2>
		<p v-html="text"></p>
	</div>
</template>

<script>
import textFilter from '@/plugins/truncateFilter.js'
export default{
	name:'truncate',
	data(){
		return {
			atext:'返回一个新的字符串，它是此字符串的一个子字符串。该子字符串始于指定索引处的字符，一直到此字符串索引末尾。在SQLserver数据库中，用于截取字符串的某部分。返回一个新的字符串，它是此字符串的一个子字符串。该子字符串始于指定索引处的字符，一直到此字符串索引末尾。在SQLserver数据库中，用于截取字符串的某部分。'
		}
	},
	computed:{
		text(){
			return textFilter(this.atext)
		}
	},
	mounted() {
		// console.log(this.truncateFilter(this.text))
		console.log(textFilter(this.text))
	},
	methods:{
		truncateFilter(text="",length=100,truncate="..."){
			if(text.length>=length){
				return text.substring(0,length) + truncate
			} else {
				if(text.length<=0){
					return text = "未接收参数 text ！"
				}
				return text
			}
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
</style>
