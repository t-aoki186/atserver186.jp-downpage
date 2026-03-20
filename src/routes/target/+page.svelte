<svelte:head>
	<title>ATSERVER</title>
</svelte:head>

<main class="main-container container mx-auto">
	<div class="flex flex-col justify-center">
		<h1 class="mx-auto mb-6 mt-10 text-2xl font-semibold md:mb-10 md:text-4xl">
			メンテナンス対象サービス
		</h1>
		<hr class="main-hr" />
		<p class="mt-6 mb-6 text-lg md:mt-10 md:mb-10 md:text-xl">
			以下のサービスがサーバーメンテナンスの対象となります。
		</p>
		<p>□ 自サービス</p>
		<ul>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER (atserver186.jp)下のすべてのサービス</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER Developer (moecounter.atserver186.jp)下のすべてのサービス</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER Blog (blog.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER Blog (blog.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSLink (link.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER Help (help.atserver186.jp)</p>
			</li>
		</ul>
		<p>□ CDN系</p>
		<ul>
			<li class="mb-2 flex items-center">
				<p>- cdn (cdn.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- pic (pic.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- usercontent (usercontent.atserver186.jp)</p>
			</li>
		</ul>
		<p>□ OSS系</p>
		<ul>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER WordPress Blog (wpblog.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- Moecounter (moecounter.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- Server Wiki (swiki.atserver186.jp)</p>
			</li>
			<li class="mb-2 flex items-center">
				<p>- ATSERVER Misskey (msks.atserver186.jp)</p>
			</li>
		</ul>
		<p>□ その他</p>
		<ul>
			<li class="mb-2 flex items-center">
				<p>- 非公開の開発中サービス (null.atserver186.jp)</p>
			</li>
		</ul>
		<br />
		<p>Discord Bot『ATScord』は、サーバーメンテナンス中も通常通りサービスを提供いたします。</p>
		<br />
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
