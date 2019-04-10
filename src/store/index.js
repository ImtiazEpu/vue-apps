export const storage = {
    state:{
        inventory: [],
        cart:[]
    },
    getters: {
        getInventory(state) {
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    },

    mutations: {
        setInventory(state, playload) {
            state.inventory = playload
        },
        addToCart(state, playload) {
            state.cart.push(playload)
        },
        removeItem(state, playload) {
            state.cart.splice(playload, 1)
        }
    }

}