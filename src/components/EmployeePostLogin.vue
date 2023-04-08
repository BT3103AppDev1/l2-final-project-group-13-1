
<template>
    <div class="employee-post-login screen">
        <div class="employee-overlap-group-container">
            <div class="employee-overlap-group1">
                <div class="employee-check poppins-medium-black-16px">Check/Delete <br />Customers' Existing Bookings</div>
                <div class="employee-overlap-group">
                    <button class="employee-x-booking poppins-medium-white-16px">Check Existing Booking</button>
                </div>
            </div>
            <div class="employee-overlap-group1">
                <p class="employee-check poppins-medium-black-16px">Check Available Timings and <br />Add Phone Call Bookings</p>
                <div class="employee-overlap-group">
                    <button class="employee-x-booking poppins-medium-white-16px">Make New Booking</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name:"EmployeePostLogin"
}
</script>


<style scoped>
.employee-post-login {
    align-items: center;
    background-color: var(--white);
    border: 1px none;
    display: flex;
    flex-direction: column;
    height: 1276px;
    overflow: hidden;
    width: 1440px;
}

.hidden,
.hidden * {
    pointer-events: none;
    visibility: hidden;
}

.employee-overlap-group-container {
    align-items: flex-start;
    display: flex;
    gap: 32px;
    height: 333px;
    margin-top: 130px;
    min-width: 844px;
}

.employee-overlap-group1 {
    align-items: center;
    background-color: var(--white);
    border-radius: 40px;
    box-shadow: 0px 4px 35px #00000014;
    display: flex;
    flex-direction: column;
    gap: 56px;
    min-height: 333px;
    padding: 33px 0;
    width: 406px;
}

.employee-overlap-group {
    align-items: flex-start;
    background-color: var(--flamingo);
    border-radius: 10px;
    box-shadow: 0px 4px 19px #7793414c;
    display: flex;
    height: 40px;
    justify-content: flex-end;
    min-width: 340px;
    padding: 7px 68px;
}

.employee-x-booking {
    letter-spacing: 0;
    line-height: normal;
    min-height: 13px;
    text-align: center;
    width:203px;
}

.employee-check {
    letter-spacing: 0;
    line-height: normal;
    margin-top: 68px;
    min-height: 103px;
    text-align: center;
    width: 340px;
}


</style>