<script lang="ts">
	function googleLogin() {
		console.log('Google Login');
	}
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<div
	id="g_id_onload"
	data-client_id="205747104756-qt2qftm8dh2jeoiobmb3q337dtgh5jdd.apps.googleusercontent.com"
	data-context="signin"
	data-ux_mode="popup"
	data-login_uri="http://localhost:5174/login"
	data-auto_prompt="false"
/>

<div
	class="g_id_signin"
	data-type="standard"
	data-shape="pill"
	data-theme="outline"
	data-text="signin_with."
	data-size="large"
	data-logo_alignment="left"
/>
