<script>
  import { message } from "$lib/stores/message";
  import { base } from "$app/paths";
</script>

<div class="app-centered flex-col">
  <img src={`${base}/logo.png`} alt="Logo" />
  <h1 class="hero text-4xl text-center ">Welcome to web-app2!</h1>
  <p class="text-xl text-purple-500">
    {$message}
  </p>
</div>
