<svelte:head>
	<title>ATSERVER</title>
</svelte:head>

<main class="main-container container mx-auto">
	<div class="flex h-screen flex-col justify-center">
		<h1 class="mx-auto mb-6 text-2xl font-semibold md:mb-10 md:text-4xl">
			ただいまメンテナンス中です
		</h1>
		<hr class="main-hr" />
		<p class="mt-6 mb-6 text-lg md:mt-10 md:mb-10 md:text-xl">
			404 Not Found
		</p>
		<hr class="main-hr" />
		<div class="mx-auto mt-6 hidden sm:flex md:mt-10">
			<a href="/" class="link-main mr-4">
				<div class="link-main-underline">
					<i class="fa-solid fa-house"></i>
					<span>ホーム</span>
				</div>
			</a>
			<a href="/target" class="link-main mr-4">
				<div class="link-main-underline">
					<i class="fa-solid fa-arrow-right-long"></i>
					<span>対象サービス</span>
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
			<a href="/target" class="mb-2 rounded-xl bg-white p-2">
				<i class="fa-solid fa-arrow-right-long"></i>
				<span>対象サービス</span>
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
