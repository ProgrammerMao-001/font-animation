<template>
  <div id="app">
    <fontAnimation
        style="position:absolute;left: 0;right: 0;margin: auto"
        can-click
        :fontStyle="{
            color: '#ffa500',
            fontWeight: 'bolder'
        }"
        text="这组件真棒！"
        @handle-click="textClick">
      <template slot="prepend">
        <span style="margin-right: 8px">【插槽】</span>
      </template>
      <template slot="append">
        <span>【插槽】</span>
      </template>
    </fontAnimation>
  </div>
</template>

<script>
export default {
  computed: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    textClick(e) {
      console.log(e, "e")
    }
  },
  mounted() {
  },
  created() {
  },
};
</script>
