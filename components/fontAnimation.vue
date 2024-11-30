<!--
 * @Description: 字体动画组件
 * @Author: mhf
 * @Date: 2024-11-30 23:57:10
 * @params: 动画
-->
<template>
  <div class="font-animation"
       :style="{
          ...fontStyle,
          cursor: canClick ? 'pointer' : 'default',
        }"
       @click="handleClick">
    <slot name="prepend"></slot>
    <span class="font-animation-text">
      <span
          v-for="(char, index) in text"
          :key="index"
          :style="{
          animationDelay: `${index * 0.2}s`,
        }"
      >{{ char }}</span
      >
    </span>
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: "fontAnimation",
  components: {},
  mixins: [],
  props: {
    text: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },

    canClick: {
      type: Boolean,
      default() {
        return true;
      }
    },

    fontStyle: {
      type: Object,
      default() {
        return {
          color: "#ffa500",
          fontWeight: "bolder"
        };
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.canClick) {
        this.$emit("handle-click", this.text);
      }
    }
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  }
};
</script>

<style scoped>
.font-animation {
  border: 1px solid red;
  width: max-content;
  overflow: hidden;
  z-index: 1;
  position: relative;
}

.font-animation-text {
  position: relative;
  display: inline-block;
  letter-spacing: 2px;
}

.font-animation-text span {
  display: inline-block;
  animation: font-animation-fade 2.4s ease-in-out infinite;
}

@keyframes font-animation-fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
