<template>
    <div>
        <h1>Setup</h1>
        <button @click="increaseCnt">cnt</button>
        {{ cntNum }}<br />
        {{ test }}
        <input v-model="test" /><br />

        <button @click="printHello">hello</button>

        <div class="info">
            name : {{ name }}<input v-model="name" /><br />
            age : {{ age }}<button @click="upAge">up</button><br />
            job : {{ job }}<input v-model="job" /> <br />
            NickName : {{ nickName }}
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import printTest from './composables/printTest';
import info from './composables/info';
import cnt from './composables/cnt';

export default defineComponent({
    props: {
        user: { type: String },
    },
    setup(props: Object) {
        console.log('user:', props);

        const store = useStore();
        //module
        const { printHello, test } = printTest();
        let { name, age, job, upAge } = info();
        let { cntNum, increaseCnt } = cnt();

        let nickName = store.getters.getName;

        //created
        job.value = 'test';

        return {
            printHello,
            test,
            name,
            age,
            job,
            upAge,
            cntNum,
            increaseCnt,
            nickName,
        };
    },
});
</script>

<style></style>
