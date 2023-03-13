<script>
  import { onMount } from "svelte";
  import { classList } from "daisyui";

  let isOpen = false;
  let menuClasses = "";

  const toggle = () => {
    isOpen = !isOpen;
  };

  onMount(() => {
    menuClasses = classList({
      "navbar-menu": true,
      "block": isOpen,
      "hidden": !isOpen,
    });
  });

  $: {
    menuClasses = classList({
      "navbar-menu": true,
      "block": isOpen,
      "hidden": !isOpen,
    });
  }
</script>

<template>
  <nav class="navbar bg-primary">
    <div class="navbar-brand">
      <a href="#" class="navbar-item text-2xl font-bold text-white">
        projectTitin
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" on:click={toggle}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class={menuClasses}>
      <div class="navbar-start">
        <a href="/" class="navbar-item">
          Home
        </a>
        <a href="#" class="navbar-item">
          About
        </a>
        <a href="https://youtube.com/@pseudoforceyt" class="navbar-item">
          YouTube
        </a>
      </div>
      <div class="navbar-end">
        <a href="#" class="navbar-item">
          Themes (coming soon!)
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
  /* Add your own custom styles here */
</style>