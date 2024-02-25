<template>
  <header style="margin-bottom: 20px">
    <h2>Your Carts</h2>

    <router-link to="/">Go Back</router-link>
  </header>

  <div class="product-card">
    <div class="cart-list">
      <CartItem
        @remove-from-cart="handleRemoveCart"
        v-for="(cart, index) in getCarts"
        :product="cart"
        :key="index"
      />
      <p style="text-align: center" v-if="!getTotalCarts">
        Your cart is empty !!!
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useCartStore from "@/store/useCartStore";
import useProductStore from "@/store/useProductStore";
import CartItem from "@/components/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState(useCartStore, ["getCarts", "getTotalCarts"]),
  },
  methods: {
    ...mapActions(useProductStore, ["updateProductCart"]),
    ...mapActions(useCartStore, ["removeFromCart"]),
    handleRemoveCart(product) {
      //First We remove from cart
      this.removeFromCart(product);
      // Update the Product in cart set to false because we remove from cart here
      this.updateProductCart(product.id);
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}
.cart-list {
}
.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
