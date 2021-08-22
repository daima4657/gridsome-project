<template>
	<Layout>
		<div class="p-inner">

			<div class="p-project_single">
				<div class="p-project_single__wrapper">
					<div class="p-project_single__image">
						<g-image alt="" src="~/image/memento_single-min.jpg" class="p-project_single_hero" />
					</div>
					
					<div class="p-project_single__head js-popup">
						<div class="p-project_single__head__wrapper js-popup__wrapper">
							<h1 class="__title">WEBアプリ開発</h1>
							<div class="__text">
								AWSとLaravelを活用したメモアプリの開発を行っています。
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
