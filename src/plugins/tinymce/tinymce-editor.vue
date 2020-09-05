<template>
	<div class="tinymce-editor"><editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick"></editor></div>
</template>
<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver';
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image'; // 插入上传图片插件
import 'tinymce/plugins/media'; // 插入视频插件
import 'tinymce/plugins/table'; // 插入表格插件
import 'tinymce/plugins/lists'; // 列表插件
import 'tinymce/plugins/advlist'; // 高级列表插件
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/plugins/charmap'; // 特殊字符插件

import 'tinymce/themes/silver/theme';
import 'tinymce/skins/ui/oxide/skin.css';//引入样式文件
import 'tinymce/icons/default/icons.min.js';//引入图标文件
import './langs/zh_CN.js';//引入中文翻译包

export default {
	components: {
		Editor
	},
	props: {
		value: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			init: {
				// language_url: './langs/zh_CN.js',
				language: 'zh_CN',
				height: 300,
				resize: true,
				plugins:"lists advlist charmap wordcount image media table wordcount",
				toolbar: [
					"undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor |",
					"| bold italic underline strikethrough | indent outdent | superscript subscript | removeformat | wordcount | charmap |",
				],
				charmap_append: [//特殊字符自定义补充
					[0x2615, 'morning coffee'],
					[0x2600, 'sun'],
					[0x2601, 'cloud'],
				],
				browser_spellcheck: true, // 拼写检查
				branding: false, // 去水印
				elementpath: false, //禁用编辑器底部的状态栏
				statusbar: false, // 隐藏编辑器底部的状态栏
				paste_data_images: true, // 允许粘贴图像
				menubar: false, // 隐藏最上方menu
				fontsize_formats: "14px 16px 18px 20px 24px 26px 28px 30px 32px 36px", //字体大小
				font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times", //字体
				file_picker_types: 'image',
				images_upload_credentials: true,
				advlist_bullet_styles: 'square',
				advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman',
				// 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
				// 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
				images_upload_handler: (blobInfo, success, failure) => {
					const img = 'data:image/jpeg;base64,' + blobInfo.base64();
					success(img);
				}
			},
			myValue: this.value
		};
	},
	mounted() {
		tinymce.init({});
	},
	methods: {
		// 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
		// 需要什么事件可以自己增加
		onClick(e) {
			// this.$emit('onClick', e, tinymce);
		},
		// 可以添加一些自己的自定义事件，如清空内容
		clear() {
			this.myValue = '';
		}
	},
	watch: {
		value(newValue) {
			this.myValue = newValue;
		},
		myValue(newValue) {
			this.$emit('input', newValue);
		}
	}
};
</script>
