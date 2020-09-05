/*
	文字截断函数
*/
export default function truncateFilter(text="",length=100,truncate="<span style='color:blue;'>...</span>"){
	if(text.length>=length){
		return text.substring(0,length) + truncate
	} else {
		if(text.length<=0){
			return text = "未接收参数 text ！"
		}
		return text
	}
}