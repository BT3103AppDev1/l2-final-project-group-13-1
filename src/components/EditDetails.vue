<template>

    <div class = "customer-edit-details">
        <div class = "edit-details">
            <span class="poppins-bold-black-20px">Edit your details<br></span>
        </div>

        <div class = "name-details">
            <div class = "name-entry">
                <span class="roboto-medium-flamingo">Enter your name<br></span>
            </div>
            <div class = "name-textbox">
                <input type = "text" size = 112 placeholder="  amy" >
                
            </div>
        </div>
        
        <div class = "email-details">
            <div class = "email-entry">
                <span class="poppins-bold-black-10px">Enter your email address<br></span>
            </div>
            <div class = "email-textbox">
                <input type = "text" size = 112 placeholder="  amy380@gmail.com">
            </div>
        </div>

        <div class = "number-details">
            <div class = "number-entry">
                <span class="poppins-bold-black-10px">Enter your 8-digit phone number (+65 numbers only)<br></span>
            </div>
            <div class = "number-textbox">
                <input type = "text" size = 112 placeholder="  98473825">
            </div>
        </div>

        <div class = "password-details">
            <div class = "password-entry">
                <span class="poppins-bold-black-10px">Enter your password<br></span>
            </div>
            <div class = "password-textbox">
                <input type = "text" size = 112 placeholder="  ********">
            </div>
        </div>

        <div class = "submit-options">
            <button v-on:click="">Submit</button> 
        </div>

        <div class = "back-options">
            <button v-on:click="">Back</button> 
        </div>

    </div>



</template>

<style>
    /* For Page Body */
    .customer-edit-details {
        align-items: center;
        background-color: var(--concrete);;
        margin-top: 0px;
        display: flex;
        height: 500px;
        margin-top: 20px;
        width: 900px;
    }

    .edit-details {
        display: flex;
        margin-top: -450px;
        margin-left: 320px;
        height: 20px;
        min-width: 300px;
        padding: 6px 23px;
        position: center;
    }

    .name-details {
        margin-top: 150px;
    }

    .name-entry {
        margin-top: -260px;
        margin-left: -570px;
        height: 30px
    }

    .name-textbox {
        text-align: left;
        margin-left: -570px;
    }


    textarea, input {
        border-radius: 10px;
        height: 35px;
    }

    .email-details {
        margin-top: 600px;
        margin-left: -800px;
    }

    .email-entry {
        margin-top: -400px;
        margin-left: 20px;
        height: 30px;
    }

    .email-textbox {
        height: 100px;
        text-align: left;
        margin-left: 20px;
    }

    .number-details {
        margin-top: 740px;
        margin-left: -800px;
    }

    .number-entry {
        margin-top: -390px;
        margin-left: 20px;
        height: 30px;
    }

    .number-textbox {
        height: 100px;
        text-align: left;
        margin-left: 20px;
    }

    .password-details {
        margin-top: 920px;
        margin-left: -800px;
    }

    .password-entry {
        margin-top: -400px;
        margin-left: 20px;
        height:30px;
    }

    .password-textbox {
        height: 100px;
        text-align: left;
        margin-left: 20px;
    }

    .submit-options {
        margin-top: 370px;
        margin-left: -650px;
        font-family: 'Arial';
        width: 250px;
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
        margin-top: 370px;
        margin-left: 50px;
        font-family: 'Arial';
        width: 250px;
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

    
    
    
</style>