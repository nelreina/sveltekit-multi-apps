<script>
  import { base } from "$app/paths";

  import { message } from "$lib/stores/message";
</script>

<div class="app-centered flex-col">
  <img src={`${base}/logo.png`} alt="Logo" />
  <h1 class="hero text-4xl text-center ">This is WEB-APP ONE!</h1>
  <p class="text-xl text-purple-500">
    {$message}
  </p>
  <a href={`${base}/simple`}>Simple Route</a>
  <a href={`/web-app2`}>Lage Hode</a>
</div>
