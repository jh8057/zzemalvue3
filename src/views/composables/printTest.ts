import { reactive, toRefs } from 'vue';
// import { printTestType } from '@/utils/types';

interface printTestType {
    test: string;
}

export default () => {
    const state: printTestType = reactive({
        test: 'This is reactive state',
    });
    const printLog = () => {
        console.log('print');
    };

    const printHello = () => {
        console.log('Hello');
    };

    return {
        ...toRefs(state),
        printLog,
        printHello,
    };
};
