<script>
  // Base themes and fonts for project.
  import "$lib/styles/themes.css";
  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "$lib/styles/fonts.css";

  // Pull in more application specific CSS stylings.
  import "$lib/styles/reset.css";
  import MainHeader from "$lib/components/MainHeader.svelte";

</script>

<div class="page-wrapper">
  <MainHeader></MainHeader>
  <slot></slot>
</div>


<style>
</style>