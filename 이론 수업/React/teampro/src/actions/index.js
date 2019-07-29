export const checked = (local) => {
    return {
        type: 'CHECKED',
        payload: local
    };
};
export const notchecked = (local) => {
    return {
        type: 'NOTCHECKED',
        payload: local
    };
};