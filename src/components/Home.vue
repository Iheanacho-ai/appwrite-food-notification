<template>
  <button type="button" @click = 'placeOrder'>Place Order</button>
  <h2>Change Order Status to follow your order</h2>
  <select name="order-status" id="order-status" v-on:change = "updateOrder">
    <option value="Order Placed" >Order Placed</option>
    <option value="Order Accepted" >Order Accepted</option>
    <option value="Prepared" >Prepared</option>
    <option value="En-route" >En-route</option>
    <option value="Delivered">Delivered</option>
  </select>
  
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
