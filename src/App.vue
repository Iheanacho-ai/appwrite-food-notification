<template>
  
  <router-link to="/">  Home Page</router-link>
  <router-link to="/notification-page">Notification Page</router-link>
</template>

<script>

  import { sdk } from "../utils";

  export default {
    name: 'App',
    data(){
      return{
        documentID: null,
        orderStaus: ""
      }
    },
    mounted(){
      if(sdk.account.get !== null){
        try {
          sdk.subscribe('collections.62532d2523f63b230a93.documents', response => {
            console.log(response)
          });
          
        } catch (error) {
          console.log(error, 'error')
        }
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
        let orderValue = e.target.value 
        await sdk.database.updateDocument('62532d2523f63b230a93', this.documentID, {
          "orderStatus": orderValue
        })

        alert(orderValue);
      }
    }
    
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
