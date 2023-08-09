const reducer = (state = 0, { type, payload }) => {
    switch (type) {
        case 'INC':
            return state + 1
            break;
        case 'DEC':
            return state - 1
            break;
        case 'RND':
            return state + payload
            break;

        default:
            return state
            break;
    }
}

export default reducer