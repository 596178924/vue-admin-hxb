<template>
	<div>
		<h1>这是表单邮箱输入框</h1>
		
	</div>
</template>

<script>
export default {
	name: '',
	data: () => ({
		results: []
	}),
	methods: {
		handelSearch(value) {
			if (!value || value.indexOf('@') >= 0) {
				this.results = [];
			} else {
				this.results = ['gmail.com', '163.com', 'qq.com'].map(domain => ({ value: `${value}@${domain}`, label: `${value}@${domain}` }));
			}
		}
	}
};
</script>

<style lang="scss" scoped="scoped"></style>
