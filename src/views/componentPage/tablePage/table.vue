<template>
	<div class="table_index">
		<Table :tableData="tableData" :tableCol="tableCol" :showSummary="true" :getSummaries="getSummaries"></Table>
		<!--   -->
	</div>
</template>

<script>
	import elTable from "../../../components/el_table.vue"
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					money: "2000",
				}, {
					date: '2016-05-04',
					name: 'h哈哈还房贷',
					money: "2200",
				}, {
					date: '2016-05-01',
					name: '色哥',
					money: "2090",
				}, {
					date: '2016-05-03',
					name: '王小虫',
					money: "1950",
				}],
				tableCol: [{
						prop: "date",
						label: "日期"
					},
					{
						prop: "name",
						label: "名字"
					},
					{
						prop: "money",
						label: "金钱"
					},
				],
			}
		},
		components: {
			"Table": elTable
		},
		methods: {
			getSummaries(param) {
				const {
					columns,
					data
				} = param;
				const sums = [];
				columns.forEach((column, index) => {
					if (index === 0) {
						sums[index] = '总价';
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					if (!values.every(value => isNaN(value))) {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if (!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] += ' 元';
					} else {
						sums[index] = 'N/A';
					}
				});

				return sums;
			}
		}
	}
</script>
