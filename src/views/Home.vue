<template>
  <div class="home rounded overflow-hidden shadow-lg">
    <div class="home-container">
      <button type="button" @click = 'placeOrder' class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
      <h3>Change Order Status to follow your order</h3>
      <select name="order-status" id="order-status" v-on:change = "updateOrder" class ="relative w-150 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="Order Placed"  >Order Placed</option>
        <option value="Order Accepted" >Order Accepted</option>
        <option value="Prepared" >Prepared</option>
        <option value="En-route" >En-route</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>

  </div>
  
</template>


<script>
  import { sdk } from "../../utils";
  export default {
    name: 'Home',
    data(){
        return{
          documentID: null,
        }
      },
      methods: {
        placeOrder: async function(){
          try {
            let promise = await sdk.database.createDocument('62532d2523f63b230a93', 'unique()', {
              "orderStatus": "Order Placed"
            })
            
            this.documentID = promise.$id;
            alert("order successfully placed")

          } catch (error) {
            console.log(error)
          }
        },
        updateOrder: async function(e){
          try {
            let orderValue = e.target.value 
            await sdk.database.updateDocument('62532d2523f63b230a93', this.documentID, {
              "orderStatus": orderValue
            })

            alert(orderValue);
            
          } catch (error) {
            console.log(error)
          }
        }
      }
      
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width: 400px;
    height: 250px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  h3{
    color: #111;
    margin: 10px 0;
  }
</style>
