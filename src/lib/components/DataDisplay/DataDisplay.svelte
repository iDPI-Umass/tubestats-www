<script>
  import Chart from "./Chart.svelte";

  const names = [
    "views",
    "likes",
    "duration",
    "comments",
    "annual_uploads",
    "cumulative_uploads",
    "subscribers",
    "whisper_lang",
    "music",
    "category",
    "live_status",
    "age_limit"
  ];

</script>



<div class="charts-wrapper">
  {#each names as name (name)}
    <div class="canvas-wrap">
      <Chart {name}></Chart>
    </div>
  {/each}
</div>


<style>
  .charts-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
  }

  .canvas-wrap {
    flex: 1 1 50%;
    position: relative;
    aspect-ratio: 16 / 9;
    min-width: 400px;
    padding: 1rem;
  }

  canvas{
    padding: 1rem;
  }
</style>