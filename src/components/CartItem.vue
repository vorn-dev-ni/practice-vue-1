<template>
  <div class="cart-item">
    <header>
      <img :src="product.image" alt="Product Image" class="img" />
    </header>

    <div class="text-align:center">
      <h4>{{ product.name }}</h4>
      <p>{{ product.price }}</p>

      <button class="product-remove" @click="toggleCart">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    toggleCart() {
      this.$emit("remove-from-cart", { ...this.product, inCart: true });
    },
  },
};
</script>

<style scoped>
button {
  margin: 0px 5px;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.product-remove {
  background-color: rgb(255, 112, 112);
}
.product-remove:hover {
  background-color: red;
}
.img {
  max-width: 100%;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
}
.cart-item {
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(217, 213, 213);
  padding: 10px;
}
</style>
