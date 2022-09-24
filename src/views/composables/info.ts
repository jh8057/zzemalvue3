import { reactive, toRefs } from 'vue';

interface infoType {
    name: string;
    age: number | string;
    job: string;
}

export default () => {
    const state: infoType = reactive({
        name: '',
        age: 0,
        job: '',
    });

    const upAge = () => {
        state.age = Number(state.age) + 1;
    };

    return {
        ...toRefs(state),
        upAge,
    };
};
