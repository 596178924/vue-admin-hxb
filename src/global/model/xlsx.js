import Vue from "vue"
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

Vue.prototype.$Excel = function(tableID, excName) {
	console.log(tableID, 'in _xlsx')
	/* generate workbook object from table */
	let table = document.querySelector('#' + tableID).cloneNode(true);
	/* 因为element-ui的表格的fixed属性导致多出一个table，会下载重复内容，这里删除掉 */
	table.removeChild(table.querySelector('.el-table__fixed'));
	table.removeChild(table.querySelector('.el-table__fixed-right'));
	console.log(table)
	let wb = XLSX.utils.table_to_book(table, {
		raw: true
	}); 
	/* get binary string as output */
	let wbout = XLSX.write(wb, {
		bookType: 'xlsx',
		bookSST: true,
		type: 'array'
	});
	try {
		FileSaver.saveAs(new Blob([wbout], {
			type: 'application/octet-stream'
		}), excName + '.xlsx'); //excName为导出表格名
	} catch (e) {
		if (typeof console !== 'undefined') console.log(e, wbout);
	}
	return wbout;
}
