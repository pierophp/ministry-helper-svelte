<script lang="ts">
  function renderButton() {
    console.log('Render Button');
    // @ts-ignore
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }

  function onSuccess(googleUser: any) {
    console.log({ googleUser });
  }

  function onFailure(googleUser: any) {
    console.log({ googleUser });
  }

  function googleLogin() {
    console.log('Google Login');
  }

  function createUser() {
    console.log('Create User');
    fetch('/auth/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
  }

  async function listUser() {
    console.log('List user');
    const response = await fetch('/auth/user');

    if (response.status === 200) {
      const data = await response.json();
      console.log({ data });
    }
  }
</script>

<h1 class="text-3xl font-bold">Entrar</h1>

<button
  on:click={googleLogin}
  class="bg-white px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
>
  <img
    class="w-6 h-6"
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    loading="lazy"
    alt="google logo"
  />
  <span>Login with Google</span>
</button>

<button on:click={createUser}>Create User</button>
<button on:click={listUser}>List Users</button>
