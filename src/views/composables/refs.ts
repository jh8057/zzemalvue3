import { reactive, toRefs } from 'vue';
import { MyType } from '@/utils/types';

export default () => {
    const state = reactive({
        test: 'This is reactive state',
        num: 0,
        printLog: () => {
            console.log('print');
        },
    });

    const printHello = () => {
        console.log('Hello');
    };

    return {
        ...toRefs(state),
        printHello,
    };
};
