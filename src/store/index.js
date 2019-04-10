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
        },
        clearCart(state) {
            state.cart= []
        }
    },
    actions: {
        addToCart(context, playload) {
            context.commit('addToCart',playload)
        },
        setInventory(context, playload) {
            context.commit('setInventory',playload)
        },
        removeItem(context, playload) {
            context.commit('removeItem',playload)
        },
        clearCart(context) {
            context.commit('clearCart')
        },
        

    }

}