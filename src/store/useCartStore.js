import { defineStore } from "pinia";

const useCartStore = defineStore("carts", {
  state() {
    return {
      cart: [],
    };
  },
  actions: {
    addToCart(product) {
      const item = this.cart?.find((item) => item.id === product.id);
      if (!item) {
        this.cart.push({ ...product });
        product.inCart = true;
      }
    },
    removeFromCart(product) {
      const index = this.cart?.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        console.log("true");
        this.cart.splice(index, 1);
        product.inCart = false;
      }
    },
  },
  getters: {
    getCarts(state) {
      return state.cart;
    },
    getTotalCarts(state) {
      return state.cart?.length ?? 0;
    },
  },
});

export default useCartStore;
