import { reactive, toRefs } from 'vue';

interface infoType {
    name: string;
    age: number | string;
}

export default () => {
    const state: infoType = reactive({
        name: '',
        age: '',
    });

    return {
        ...toRefs(state),
    };
};
