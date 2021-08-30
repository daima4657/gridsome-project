<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<h1 class="p-project_single__title">
					<PageTitle v-bind:text="pageTitle"></PageTitle>
				</h1>
		
				<div class="p-project_single__wrapper">
					<div class="p-project_single__image __instant_open">
						<g-image alt="" src="~/image/memento_single-min.jpg" class="p-project_single_hero" />
					</div>

					<div class="p-project_single__wrapper__wrapper">
						<div class="p-project_single__head js-scrl_target js-scrl_target__popup">
							<div class="p-project_single__head__wrapper js-scrl_target__wrapper">
								<h2 class="p-project_single__head__title">
									<div class="__text">MEMENTO</div>
								</h2>
								<div class="p-project_single__head__text">
									<p class="p-text_block">LaravelとAWS EC2の組み合わせによるメモアプリです。<br>現状はサインインとCRUDが出来るようになった段階であり、今後は特定の用途に特化した機能の追加を行っていきたいと考えています。</p>
								</div>
							</div>
						</div>
						<div class="p-project_single__detail js-scrl_target js-scrl_target__popup">
							<div class="p-table js-popup__wrapper js-scrl_target__wrapper">
								<div class="p-table__tr">
									<div class="p-table__th">
										URL
									</div>
									<div class="p-table__td">
										<a href="http://memento-app.xyz/" target="_blank">http://memento-app.xyz/</a>
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										使用技術
									</div>
									<div class="p-table__td">
										Laravel / javascript / mySQL / Apache / EC2 / S3 / route 53 / cloud front
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										githubリポジトリ
									</div>
									<div class="p-table__td">
										<a href="https://github.com/daima4657/memento2" target="_blank">https://github.com/daima4657/memento2</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					


				</div>

				<div class="p-project_single__wrapper">
					<div class="p-project_single__image js-scrl_target">
						<g-image alt="" src="~/image/chat__single_tmn.jpg" class="p-project_single_hero" />
					</div>

					<div class="p-project_single__wrapper__wrapper">
						<div class="p-project_single__head js-scrl_target js-scrl_target__popup">
							<div class="p-project_single__head__wrapper js-scrl_target__wrapper">
								<h2 class="p-project_single__head__title">
									<div class="__text">NUXT.jsアプリ(仮題)</div>
								</h2>
								<div class="p-project_single__head__text">
									<p class="p-text_block">詳細は未定ですが、NUXT.jsとAWS Amplifyを利用したサーバレスアーキテクチャによるアプリ開発を進めています。</p>
								</div>
							</div>
						</div>
						<div class="p-project_single__detail js-scrl_target js-scrl_target__popup">
							<div class="p-table js-popup__wrapper js-scrl_target__wrapper">
								<div class="p-table__tr">
									<div class="p-table__th">
										URL
									</div>
									<div class="p-table__td">
										<a href="https://master.d2x555rlmyfvhs.amplifyapp.com/chat/" target="_blank">https://master.d2x555rlmyfvhs.amplifyapp.com/chat/</a>
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										使用技術
									</div>
									<div class="p-table__td">
										Nuxt.js / Amplify / AppSync / CloudFront / S3 / DynamoDB / Cognito
									</div>
								</div>
								<div class="p-table__tr">
									<div class="p-table__th">
										githubリポジトリ
									</div>
									<div class="p-table__td">
										<a href="https://github.com/daima4657/parrot" target="_blank">https://github.com/daima4657/parrot</a>
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
//import Vue from 'vue'
import PageTitle from '~/components/PageTitle.vue'
//import GlobalMixin from '~/mixin/GlobalMixin'
//Vue.mixin(GlobalMixin)

export default {
	metaInfo: {
		title: 'Project | WEBコーディング',
		bodyAttrs: {
			id : 'web_cooding',
			class: 'single_project full_view',
		},
	},
	components: {
		PageTitle
	},
	data(){
		return{
			pageTitle:'WEBアプリ開発',
		}
	},

}
</script>
