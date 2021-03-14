import { PAGE_ADD, PAGE_CLEAR } from "../types";

const reducers = (state, action) => {
    switch (action.type) {
        case PAGE_ADD:
            return {
                ...state,
                ...action.payload
            };
        case PAGE_CLEAR:
            return state;
        default:
            return state;
    }
};

export default reducers;
