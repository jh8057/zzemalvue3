<template>
    <div>
        <h1>Setup</h1>
        <button @click="increaseCnt">cnt</button>
        {{ cnt }}

        <button @click="printHello">hello</button>
        {{ test }}
        <input v-model="test" />

        <div class="info">
            name : {{ name }}<input v-model="name" /><br />
            age : {{ age }}<input v-model="age" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import printTest from './composables/printTest';
import info from './composables/info';

export default defineComponent({
    props: {
        user: { type: String },
    },
    setup(props: Object) {
        console.log('user:', props);
        const { printHello, test } = printTest();
        const { name, age } = info();

        let cnt = ref(0); // reactive

        const increaseCnt = () => {
            cnt.value++;
        };

        return { increaseCnt, cnt, printHello, test, name, age };
    },
});
</script>

<style></style>
