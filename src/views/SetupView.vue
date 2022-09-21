<template>
    <div>
        <h1>Setup</h1>
        <button @click="increaseCnt">cnt</button>
        {{ cnt }}

        <button @click="printHello">hello</button>
        {{ test }}
        <input v-model="test" />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import refs from './composables/refs';

export default defineComponent({
    props: {
        user: { type: String },
    },
    setup(props: Object) {
        console.log(props);
        const { printHello, test } = refs();

        let cnt = ref(0); // reactive

        const increaseCnt = () => {
            cnt.value++;
        };

        return { increaseCnt, cnt, printHello, test };
    },
});
</script>

<style></style>
