<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<div class="p-project_single__wrapper">
					<div class="p-project_single__image">
						<g-image alt="" src="~/image/web_cooding_single_tmn.jpg" class="p-project_single_hero" />
					</div>
					
					<div class="p-project_single__head js-popup">
						<div class="p-project_single__head__wrapper js-popup__wrapper">
							<h1 class="__title">WEBコーディング</h1>
							<div class="__text">
								レスポンシブに対応した、印象的な動きのあるWEBサイトの制作が可能です。<br>得意分野はWordpressカスタマイズです
							</div>
						</div>
					</div>
					<div class="p-project_single__wrapper__wrapper js-popup">
						<div class="p-table js-popup__wrapper">
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
								HTML5 / Wordpress / javascript / jQuery / css / SCSS / gulp / pug
							</div>
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
