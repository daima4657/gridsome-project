<template>
	<Layout>
		<div class="p-inner">


			<div class="p-project_single">
				<h1 class="p-project_single__title">
					<PageTitle v-bind:text="pageTitle"></PageTitle>
				</h1>
		
				<div class="p-project_single__wrapper">
					<div class="p-project_single__image __instant_open">
						<g-image alt="" src="~/image/ec_single_tmn.jpg" class="p-project_single_hero" />
					</div>

					<div class="p-project_single__wrapper__wrapper">
						<div class="p-project_single__head js-scrl_target js-scrl_target__popup">
							<div class="p-project_single__head__wrapper js-scrl_target__wrapper">
								<h2 class="p-project_single__head__title">
									<div class="__text">ネットショップ向けコーディング</div>
								</h2>
								<div class="p-project_single__head__text">
									<p class="p-text_block">複数のモール、ショップカートASPサービスおよびwoocommerceでのECサイト構築経験があります。</p>
								</div>
							</div>
						</div>
						<div class="p-project_single__detail js-scrl_target js-scrl_target__popup">
							<div class="p-table js-scrl_target__wrapper">
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
									使用サービス例
								</div>
								<div class="p-table__td">
									楽天 / Yahooショッピング / カラーミー / makeshop / shopserve / woocommerce / ebisu mart
								</div>
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
import PageTitle from '~/components/PageTitle.vue'

export default {
	metaInfo: {
		title: 'Project | ECコーディング',
		bodyAttrs: {
			id : 'ec_cooding',
			class: 'single_project full_view',
		},
	},
	components: {
		PageTitle
	},
	data(){
		return{
			pageTitle:'ECサイト構築',
		}
	},
}
</script>
