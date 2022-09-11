const reducer = (state, action) => {
    switch (action.type) {
        case 2:
            return {
                ...state,
                item: { "id": 2, "plan": "SECOND PLAN" }
            };

        case 3:
            return {
                ...state,
                item: { "id": 3, "plan": "3RD PLAN" }
            };
        case 4:
            return {
                ...state,
                item: { "id": 4, "plan": "4PLAN" }
            };
        default:
            return state;
    }
};

export default reducer;