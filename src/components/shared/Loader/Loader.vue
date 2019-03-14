<template>
  <div
    class="loader"
    :style="{width: size + 'px', height: size + 'px'}"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :height="size"
      :width="size"
      viewBox="0 0 75 75"
    >
      <circle
        cx="37.5"
        cy="37.5"
        r="33.5"
        stroke-width="8"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    size: {
      default: 75,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  $pi: 3.14159265359;

  $easing:     cubic-bezier(.8,.0,.4,.8);
  $speed:      1320ms;       // animation time for each loop
  $color:      var(--blue);  // Blue A200 in the Material Design color palette
  $linecap:    square;       // could be 'round', but the official one is square
  $loops:      5;            // number of points where the arc meets
  $arc:        0.72;         // fraction of the circumference that the arc grows to
  $perimeter:  67 * $pi;  // circumference of the raw svg inner cricle

  // measure to prevent inline block spacing from affecting the outer rotation
  font-size: 0;

  display: inline-block;
  animation: outer $speed * $loops linear infinite;

  svg {
    animation: inner $speed linear infinite;

    circle {
      fill: none;
      stroke: $color;
      stroke-linecap: $linecap;
      animation: arc $speed $easing infinite;
    }
  }

  @keyframes outer {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes inner {
    0% {
      transform: rotate(-360deg * (1 - $arc));
    }
    100% {
      transform: rotate(0);
    }
  }

  @keyframes arc {
    0% {
      stroke-dasharray: 1 $perimeter;
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dasharray: $arc * $perimeter, $perimeter;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 1 $perimeter;
      stroke-dashoffset: -$arc * $perimeter;
    }
  }
}

</style>
