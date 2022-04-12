<template>
    <div class="notifications rounded overflow-hidden shadow-lg">
        <div class="order-container">
            <h2>{{orderStatus}}</h2>
        </div>
    </div>
    
</template>
<script>
    import { sdk } from "../../utils";
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'

    export default {
        name: 'Notification',
        data(){
            return{
                orderStatus: ""
            }
        },
        watch: {
            orderStatus: function(){
                createToast(this.orderStatus)
            }
        },
        mounted(){
            if(sdk.account.get !== null){
                try {
                sdk.subscribe('collections.62532d2523f63b230a93.documents', response => {
                    console.log(response.payload.orderStatus, 'order status payload' )
                    this.orderStatus = response.payload.orderStatus
                });
                
                } catch (error) {
                console.log(error, 'error')
                }
            }

        }

    }
</script>
<style scoped>
    .notifications{
        width: 350px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    


</style>