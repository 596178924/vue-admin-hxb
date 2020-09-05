<template>
	<div class="e">
		<!-- <quill-editor class="myEditor" ref="myTextEditor" v-model="content"></quill-editor> -->
		<el-button type="primary" style="margin: 10px;" @click="say">上传</el-button>
		<div class="ql-container ql-snow">
			<div v-html="content"></div>
			<quill-editor ref="myTextEditor" v-model="content" :options="quillOption"></quill-editor>
		</div>
	</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import quillConfig from '@/plugins/quill-config';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import * as Quill from 'quill';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);
export default {
	name: '',
	data() {
		return {
			content: '<h2>hello quill-editor</h2>',
			quillOption: quillConfig
		};
	},
	components: {
		quillEditor
	},
	mounted() {},
	methods: {
		say() {
			console.log('');
		}
	}
};
</script>

<style lang="scss" scoped="scoped"></style>

<style lang="scss">
.ql-editor {
	line-height: normal !important;
	max-width: 100%;
	height: 400px;
	img {
		max-width: 400px !important;
	}
}
.ql-snow {
	// max-width: 800px;
	width: 100%;
	// calc(100vw - (16vw + 210px))
}
.ql-snow .ql-tooltip[data-mode='link']::before {
	content: '请输入链接地址:';
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
	border-right: 0px;
	content: '保存';
	padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode='video']::before {
	content: '请输入视频地址:';
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
	content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
	content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
	content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
	content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
	content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
	content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
	content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
	content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
	content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
	content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
	content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
	content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
	content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
	content: '等宽字体';
}
</style>
