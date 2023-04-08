<template>
    <div class = "wallet-balance">
        <div class = "teoheng-wallet">
            <span class="poppins-bold-black-10px"><strong>Your TEOHENG Wallet Balance</strong><br></span>
        </div>
        <div class = "value">
            <span class="poppins-bold-black-10px">$20.00<br></span>
        </div>
        <div class = "Top-Up-options">
            <button v-on:click="">Top-Up</button> 
        </div>

        <div class = "back-options">
            <button v-on:click="">Back</button> 
        </div>  
    </div>

    <div class = "wallet-history">
        <label>
            <span class="poppins-bold-black-10px">Wallet History<br></span>
        </label>
    </div>

    <div class="rectangle">
    </div>
    <div class="rectangle-date">
        <p>Date</p>
    </div>
    <div class="rectangle-action">
        <p>Action</p>
    </div>
    <div class="rectangle-amount">
        <p>Amount</p>
    </div> 

    <div class = "table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>10 Feb 2023</th>
                    <th>Top-Up</th>
                    <th>$5.00</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08 Feb 2023</td>
                    <td>Refund</td>
                    <td>$15.00</td>
                </tr>
                <!-- <tr>
                    <td>07 Feb 2023</td>
                    <td>Booking Transaction</td>
                    <td>$15.00</td>
                </tr> -->
            </tbody>
        </table>
    </div>

    

</template>

<script>
export default {
    name: "WalletDetails"
}
</script>




<style>
    textarea, input {
        border-radius: 10px;
        height: 35px;
    }
    .wallet-balance {
        align-items: top;
        background-color: #F5F5F5;
        margin-top: 0px;
        display: flex;
        height: 130px;
        margin-top: 20px;
        width: 1000px;
    }

    .teoheng-wallet{
        margin-left: 270px;
        font-size: 30px;
        font-weight:bold;

    }

    .value{
        margin-left: -250px;
        margin-top: 40px;
        font-size: 20px;
    }

    .Top-Up-options {
        margin-top: 70px;
        margin-left: -305px;
        font-family: 'Arial';
        width: 200px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .back-options {
        margin-top: 70px;
        margin-left: 130px;
        font-family: 'Arial';
        width: 200px;
        background-color: orange;
        border: none;
        border-radius: 20px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .wallet-history{
        margin-top: 20px;
        margin-left: 0px;
        font-size: 40px;
        color:solid black;
    }

    .table-container {
        width: 100%;
        overflow-x: auto;
    }

    .table {
        width: 55.5%;
        margin-left:320px;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 20px;
        font-weight: bold;
    }

    .table th,
    .table td {
        padding: 20px;
        text-align: center;
        vertical-align: middle;
        border: 3px solid black;
    }

    .rectangle{
        background-color: #EEEEEE;
    
        color: light black;
        padding: 10px 20px;
        height: 55px;
        width: 800px;
    }

    .rectangle-date {
        background-color: #EEEEEE;
        color: light black;
        padding: 10px 20px;
        height: 55px;
        width: 800px;
        margin-top:-55px;
        margin-left: 130px;
        font-size: 30px
        
    }

    .rectangle-action {
        background-color: #EEEEEE;
    
        color: light black;
        padding: 10px 20px;
        height: 55px;
        width: 100px;
        margin-left:20px;
        margin-top:-55px;
        font-size:30px;
        
    }

    .rectangle-amount {
        background-color: #EEEEEE;
    
        color: light black;
        padding: 10px 20px;
        height: 55px;
        width: 100px;
        margin-right:-570px;
        margin-top:-55px;
        font-size:30px;
        
    }

    

    .rectangle p {
        margin: 0;
    }


</style>