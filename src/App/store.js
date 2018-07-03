module.exports = {
    state: {
        contents: []
    },
    mutations: {
        addContent: (state, value) => { state.contents.push(value) },
        removeContent: (state, index) => { state.contents.splice(index, 1) },
        swapContent: (state, ind1, ind2) => {
            let tmp = state.contents[ind1];
            state.contents[ind1] = state.contents[ind2];
            state.contents[ind2] = tmp;
        },
    }
}