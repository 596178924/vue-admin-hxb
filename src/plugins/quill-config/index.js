// vue-quill-editor	配置
/*富文本编辑图片上传配置*/
const uploadConfig = {
	action: '', // 必填参数 图片上传地址
	methods: 'POST', // 必填参数 图片上传方式
	token: '', // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
	name: 'img', // 必填参数 文件的参数名
	size: 500, // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
	accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon' // 可选 可上传的图片格式
};

// toolbar工具栏的工具选项（默认展示全部）
const toolOptions = [
	['bold', 'italic', 'underline', 'strike'], //切换按钮：粗体，斜体，下划线，删除线
	['blockquote', 'code-block'], //区块引用号，代码块
	//[{'header': 1}, {'header': 2}],					//设置标题标签 h1,h2
	//[{'list': 'ordered'}, {'list': 'bullet'}],	//列表：有序列表，无序列表
	//[{'script': 'sub'}, {'script': 'super'}],		//标：上标，下标
	[{
		'indent': '-1'
	}, {
		'indent': '+1'
	}], //缩进：反缩进，缩进
	[{
		'direction': 'rtl'
	}], //文本方向：从右到左。
	[{
		'size': ['small', false, 'large', 'huge']
	}], //字的大小：小号，默认，大号，超大号
	[{
		'header': [1, 2, 3, 4, 5, 6, false]
	}], //下拉框设置标题标签 h1,h2--h6
	[{
		'color': []
	}, {
		'background': []
	}], //字体颜色，背景色
	[{
		'font': []
	}], //设置字体
	[{
		'align': []
	}], //设置文本text-align
	['clean'], //格式化文本按钮：去掉所有样式
	['link', 'image'] //, 'video'					//超链接，图片，视频
];
const handlers = {
	image: function(value) {
		if (value) {
			console.log(value)
			document.querySelector("input[name='file']").click();
		} else {
			this.quill.format("image", false);
		}
	}
};

export default {
	placeholder: '开始编辑吧',
	theme: 'snow', // 主题
	modules: {
		imageDrop: true, //图片拖拽
		imageResize: { //放大缩小
			// displaySize: true
			displayStyles: {
				backgroundColor: 'black',
				border: 'none',
				color: 'white'
			},
			modules: ['Resize', 'DisplaySize', 'Toolbar']
		},
		toolbar: {
			container: toolOptions, // 工具栏选项
			// handlers: handlers  // 事件重写
		}
	}
};
