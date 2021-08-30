<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<h1 class="p-project_single__title">
					<PageTitle v-bind:text="pageTitle"></PageTitle>
				</h1>
		
				<div class="p-project_single__wrapper">
					<div class="p-project_single__image __instant_open">
						<g-image alt="" src="~/image/unity_single.jpg" class="p-project_single_hero" />
					</div>

					<div class="p-project_single__wrapper__wrapper">
						<div class="p-project_single__head js-scrl_target js-scrl_target__popup">
							<div class="p-project_single__head__wrapper js-scrl_target__wrapper">
								<h2 class="p-project_single__head__title">
									<div class="__text">Climber of Penguin(仮題)</div>
								</h2>
								<div class="p-project_single__head__text">
									<p class="p-text_block">キャラクターを操作して、いかに早くステージを登れるかを競う2Dアクションゲームです。<br>グラフィックは一応全て手書きの自作です。</p>
									<p class="p-text_block">今後やりたいこととしてはゲーム性の向上、2プレイヤーモードの実装、ランキングシステムの導入などを検討しています。</p>
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
										<a href="https://spreadsheep.net/games/penguin/ver0_0_1/" target="_blank">https://spreadsheep.net/games/penguin/ver0_0_1/</a>
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										使用技術
									</div>
									<div class="p-table__td">
										Unity / C#
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										githubリポジトリ
									</div>
									<div class="p-table__td">
										<a href="https://github.com/daima4657/climber-of-penguin" target="_blank">https://github.com/daima4657/climber-of-penguin</a>
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
		title: 'Project | ゲーム開発',
		bodyAttrs: {
			id : 'game_dev',
			class: 'single_project full_view',
		},
	},
	components: {
		PageTitle
	},
	data(){
		return{
			pageTitle:'Unityゲーム開発',
		}
	},
}
</script>
