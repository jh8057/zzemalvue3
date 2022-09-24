import { reactive, toRefs } from 'vue';

interface cntType {
    cntNum: number | string;
}

export default () => {
    const state: cntType = reactive({
        cntNum: 0,
    });
    const increaseCnt = () => {
        state.cntNum = Number(state.cntNum) + 1;
    };

    return {
        ...toRefs(state),
        increaseCnt,
    };
};
