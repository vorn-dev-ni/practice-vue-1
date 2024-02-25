<template>
  <div>
    <header>
      <p>Total Product {{ getTotalProducts }}</p>
    </header>
    <nav class="container-fluid">
      <ul>
        <li><strong>PC Accessories Shop</strong></li>
      </ul>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li>
          <router-link
            to="/cart"
            style="background-color: green; padding: 10px; color: white"
          >
            View Cart
            <span class="cart-count" v-if="getTotalCarts > 0">{{
              getTotalCarts
            }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <main class="container">
      <div class="grid">
        <ProductCard
          v-for="product in getProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
          @remove-from-cart="removeFromCart"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useProductStore from "@/store/useProductStore";
import useCartStore from "@/store/useCartStore";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useProductStore, ["getProducts", "getTotalProducts"]),
    ...mapState(useCartStore, ["getCarts", "getTotalCarts"]),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart", "removeFromCart"]),
  },
  updated() {
    console.log("Home state updated");
  },
};
</script>

<style>
/* Global Styles */
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container-fluid {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.container-fluid ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.container-fluid li a {
  text-decoration: none;
  color: #333;
}

.container {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
