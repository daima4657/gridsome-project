<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<div class="p-project_single__wrapper">
					<g-image alt="" src="~/image/memento_single-min.jpg" class="p-project_single_hero" />
					<div class="p-project_single__head">
						<h1 class="__title">WEBアプリ開発</h1>
						<div class="__text">
							AWSとLaravelを活用したメモアプリの開発を趣味で行っています。
						</div>
					</div>
					<div class="p-table">
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
								使用技術、サービス
							</div>
							<div class="p-table__td">
								Laravel / javascript / mySQL / Apache / EC2 / S3 / route 53 / cloud front
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
