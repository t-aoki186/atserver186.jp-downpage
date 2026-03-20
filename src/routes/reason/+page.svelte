<svelte:head>
	<title>ATSERVER</title>
</svelte:head>

<main class="main-container container mx-auto">
	<div class="flex flex-col justify-center">
		<h1 class="mx-auto mt-10 mb-6 text-2xl font-semibold md:mb-10 md:text-4xl">メンテナンス理由</h1>
		<hr class="main-hr" />
		<p class="mt-6 mb-6 text-lg md:mt-10 md:mb-10 md:text-xl">
			1.新サービス展開に向けた最適化:現在の構成では安定動作に支障をきたす恐れがあるため、構成の見直しと最適化を行います。
			<br />
			2.セキュリティ強化:サーバーのアップデート及びパッチ適応を実施し、安全性を高めます。
			<br />
			3.ハードウェアの保守:不具合が発生しているHDDの交換を行います。
			<br />
            4.清掃:サーバー機器の物理的な清掃を実施します。
		</p>
		<hr class="main-hr" />
		<div class="mx-auto mt-6 hidden sm:flex md:mt-10">
			<a href="/" class="link-main mr-4">
				<div class="link-main-underline">
					<i class="fa-solid fa-house"></i>
					<span>ホーム</span>
				</div>
			</a>
			<a href="/reason" class="link-main mr-4">
				<div class="link-main-underline">
					<i class="fa-solid fa-arrow-right-long"></i>
					<span>メンテナンス理由</span>
				</div>
			</a>
			<a href="/contact" class="link-main">
				<div class="link-main-underline">
					<i class="fa-solid fa-envelope"></i>
					<span>お問い合わせ</span>
				</div>
			</a>
		</div>
		<div class="mt-6 flex flex-col sm:hidden">
			<a href="/" class="mb-2 rounded-xl bg-white p-2">
				<i class="fa-solid fa-house"></i>
				<span>ホーム</span>
			</a>
			<a href="/reason" class="mb-2 rounded-xl bg-white p-2">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>メンテナンス理由</span>
			</a>
			<a href="/contact" class="mb-2 rounded-xl bg-white p-2">
				<i class="fa-solid fa-envelope"></i>
				<span>お問い合わせ</span>
			</a>
		</div>
		<p class="mt-6 text-sm md:mt-10">&copy; 2026 ATSERVER | atserver186.jp All Rights Reserved.</p>
	</div>
</main>
