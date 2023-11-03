<script>
  export let text = '';
</script>

<div class="tooltip-wrapper">
  <div class="slot-wrapper">
    <slot />
  </div>
  <div class="tooltip">{text}</div>
  <div class="tooltip-line" />
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    position: absolute;
    display: inline-block;
    visibility: hidden;
    background-color: #333;
    color: lightgreen;
    padding: 4px;
    border-radius: 2px;
    border: 1px solid lightgreen;
    bottom: 35px;
    transform: translate(calc(-32%));
  }

  .tooltip-line {
    position: absolute;
    display: inline-block;
    visibility: hidden;
    border-right: 1px solid lightgreen;
    height: 10px;
    position: absolute;
    bottom: 25px;
    right: 12px;
  }

  .slot-wrapper:hover + .tooltip,
  .slot-wrapper:hover + .tooltip + .tooltip-line {
    visibility: visible;
  }
</style>
