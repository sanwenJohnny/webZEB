<template>
  <component :is="spinnerView"></component>
</template>
<script>
const SPINNERS = {
  BUBBLES: {
    render (createElement) {
      return createElement('span', {
        attrs: {
          class: 'loading-bubbles'
        }
      }, Array.apply(Array, Array(8)).map(() => createElement('span', {
        attrs: {
          class: 'bubble-item'
        }
      }))
      )
    }
  },
  CIRCLES: {
    render (createElement) {
      return createElement('span', {
        attrs: {
          class: 'loading-circles'
        }
      }, Array.apply(Array, Array(8)).map(() => createElement('span', {
        attrs: {
          class: 'circle-item'
        }
      }))
      )
    }
  },
  DEFAULT: {
    render (createElement) {
      return createElement('i', {
        attrs: {
          class: 'loading-default'
        }
      })
    }
  },
  SPIRAL: {
    render (createElement) {
      return createElement('i', {
        attrs: {
          class: 'loading-spiral'
        }
      })
    }
  },
  WAVEDOTS: {
    render (createElement) {
      return createElement('span', {
        attrs: {
          class: 'loading-wave-dots'
        }
      }, Array.apply(Array, Array(5)).map(() => createElement('span', {
        attrs: {
          class: 'wave-item'
        }
      }))
      )
    }
  }
}
export default {
  name: 'spinner',
  computed: {
    spinnerView () {
      return SPINNERS[(this.spinner || '').toUpperCase()] || SPINNERS.DEFAULT
    }
  },
  props: {
    spinner: String
  }
}
</script>
<style lang="less" scoped>
@deep: ~'>>>';

.loading-wave-dots {
  @size: 8px;
  @wave: -6px;
  @delay: .14s;
  position: relative;
  @{deep} .wave-item {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    margin-top: -@size/2;
    width: @size;
    height: @size;
    border-radius: 50%;
    animation: loading-wave-dots linear 2.8s infinite;
    &:first-child {
      margin-left: -@size/2 + -@size * 4;
    }
    &:nth-child(2) {
      margin-left: -@size/2 + -@size * 2;
      animation-delay: @delay;
    }
    &:nth-child(3) {
      margin-left: -@size/2;
      animation-delay: @delay * 2;
    }
    &:nth-child(4) {
      margin-left: -@size/2 + @size * 2;
      animation-delay: @delay * 3;
    }
    &:last-child {
      margin-left: -@size/2 + @size * 4;
      animation-delay: @delay * 4;
    }
  }
  @keyframes loading-wave-dots {
    0% {
      transform: translateY(0);
      background: #bbb;
    }
    10% {
      transform: translateY(@wave);
      background: #999;
    }
    20% {
      transform: translateY(0);
      background: #bbb;
    }
    100% {
      transform: translateY(0);
      background: #bbb;
    }
  }
}

.loading-circles {
  @size: 5px;
  @radius: 12px;
  @shallow: 56%;
  @c-basic: #505050;
  @{deep} .circle-item {
    width: @size;
    height: @size;
    animation: loading-circles linear .75s infinite;
    &:first-child {
      margin-top: -@size/2 + -@radius;
      margin-left: -@size/2;
    }
    &:nth-child(2) {
      margin-top: -@size/2 + -@radius * .73;
      margin-left: -@size/2 + @radius * .73;
    }
    &:nth-child(3) {
      margin-top: -@size/2;
      margin-left: -@size/2 + @radius;
    }
    &:nth-child(4) {
      margin-top: -@size/2 + @radius * .73;
      margin-left: -@size/2 + @radius * .73;
    }
    &:nth-child(5) {
      margin-top: -@size/2 + @radius;
      margin-left: -@size/2;
    }
    &:nth-child(6) {
      margin-top: -@size/2 + @radius * .73;
      margin-left: -@size/2 + -@radius * .73;
    }
    &:nth-child(7) {
      margin-top: -@size/2;
      margin-left: -@size/2 + -@radius;
    }
    &:last-child {
      margin-top: -@size/2 + -@radius * .73;
      margin-left: -@size/2 + -@radius * .73;
    }
  }
  @keyframes loading-circles {
    0% {
      background: lighten(@c-basic, @shallow);
    }
    90% {
      background: @c-basic;
    }
    100% {
      background: lighten(@c-basic, @shallow);
    }
  }
}

.loading-bubbles {
  @size: 1px;
  @radius: 12px;
  @shallow: 3px;
  @c-basic: #666;
  @{deep} .bubble-item {
    background: @c-basic;
    animation: loading-bubbles linear .75s infinite;
    &:first-child {
      margin-top: -@size/2 + -@radius;
      margin-left: -@size/2;
    }
    &:nth-child(2) {
      margin-top: -@size/2 + -@radius * .73;
      margin-left: -@size/2 + @radius * .73;
    }
    &:nth-child(3) {
      margin-top: -@size/2;
      margin-left: -@size/2 + @radius;
    }
    &:nth-child(4) {
      margin-top: -@size/2 + @radius * .73;
      margin-left: -@size/2 + @radius * .73;
    }
    &:nth-child(5) {
      margin-top: -@size/2 + @radius;
      margin-left: -@size/2;
    }
    &:nth-child(6) {
      margin-top: -@size/2 + @radius * .73;
      margin-left: -@size/2 + -@radius * .73;
    }
    &:nth-child(7) {
      margin-top: -@size/2;
      margin-left: -@size/2 + -@radius;
    }
    &:last-child {
      margin-top: -@size/2 + -@radius * .73;
      margin-left: -@size/2 + -@radius * .73;
    }
  }
  @keyframes loading-bubbles {
    0% {
      width: @size;
      height: @size;
      box-shadow: 0 0 0 @shallow @c-basic;
    }
    90% {
      width: @size;
      height: @size;
      box-shadow: 0 0 0 0 @c-basic;
    }
    100% {
      width: @size;
      height: @size;
      box-shadow: 0 0 0 @shallow @c-basic;
    }
  }
}

// default spinner
.loading-default {
  position: relative;
  border: 1px solid #999;
  animation: loading-rotating ease 1.5s infinite;
  &:before {
    @size: 6px;
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    margin-top: -@size/2;
    margin-left: -@size/2;
    width: @size;
    height: @size;
    background-color: #999;
    border-radius: 50%;
  }
}

// spiral spinner
.loading-spiral {
  border: 2px solid #777;
  border-right-color: transparent;
  animation: loading-rotating linear .85s infinite;
}

// rotate animation
@keyframes loading-rotating {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}

// common styles for the bubble spinner and circle spinner
.loading-bubbles,
.loading-circles {
  position: relative;
}
.loading-circles @{deep} .circle-item,
.loading-bubbles @{deep} .bubble-item {
  @delay: .093s;
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  border-radius: 50%;
  &:nth-child(2) {
    animation-delay: @delay;
  }
  &:nth-child(3) {
    animation-delay: @delay * 2;
  }
  &:nth-child(4) {
    animation-delay: @delay * 3;
  }
  &:nth-child(5) {
    animation-delay: @delay * 4;
  }
  &:nth-child(6) {
    animation-delay: @delay * 5;
  }
  &:nth-child(7) {
    animation-delay: @delay * 6;
  }
  &:last-child {
    animation-delay: @delay * 7;
  }
}

</style>
