<template>
	<el-table :data="tableData" style="width: 100%" border :summary-method="getSummaries" :show-summary="showSummary">
		<el-table-column v-for="(item,index) in tableCol" :key="index" :prop="item.prop" :label="item.label"
			:width="item.width"
		>
			<template slot-scope="scope">
				<span>{{scope.row[item.prop]}}</span>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
export default {
	data() {
		return {
			// tableData: []
		}
	},
	props:{
		tableData:{
			type:Array,
			default:[]
		},
		tableCol:{
			type:Array,
			default:[]
		},
		showSummary:{
			type:Boolean,
			default:false,
		},
		getSummaries:{
			type:Function,
			default:function(){
				let sum = ["合计"];
				return sum;
			}
		}
	},
	mounted() {
		// console.log(this.tableData)
		// console.log(this.tableCol)
	}
}
</script>
