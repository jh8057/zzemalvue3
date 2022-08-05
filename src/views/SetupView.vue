<template></template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  props: {
    user: { type: String },
  },
  setup(props: Object) {
    console.log(props);

    let cnt = ref(0); // reactive

    const increaseCnt = () => {
      cnt.value++;
    };

    return { increaseCnt };
  },
};
</script>

<style></style>
