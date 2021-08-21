<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<div class="p-project_single__wrapper">
					<g-image alt="" src="~/image/web_cooding_single_tmn.jpg" class="p-project_single_hero" />
					<div class="p-project_single__head">
						<h1 class="__title">WEBコーディング</h1>
						<div class="__text">
							レスポンシブに対応した、印象的な動きのあるWEBサイトの制作が可能です。<br>得意分野はWordpressカスタマイズです。
						</div>
					</div>
					<div class="p-table">
						<div class="p-table__tr">
							<div class="p-table__th">
								URL
							</div>
							<div class="p-table__td">
								<a href="https://spreadsheep.net/works/" target="_blank">https://spreadsheep.net/works/</a>(パスワード保護中)
							</div>
						</div>
						<div class="p-table__tr">
							<div class="p-table__th">
								使用技術
							</div>
							<div class="p-table__td">
								HTML5/Wordpress/javascript/jQuery/css/SCSS/gulp/pug/
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		

		<div class="p-inner">

		</div>

	</Layout>
</template>

<style scoped>
	.p-project_single__head{
		margin-bottom: 60px;
	}
	.p-project_single__head > .__title{
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.p-project_single__head > .__text{
		line-height: 1.8;
	}
	.p-project_single_hero{
		width: 100%;
		margin-bottom: 40px;
		
	}

</style>

<script>
export default {
	metaInfo: {
		title: 'Web Cooding',
		bodyAttrs: {
			id : 'web_cooding',
			class: 'single_project full_view',
		},
	}
}
</script>
