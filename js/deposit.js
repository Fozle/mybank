document.getElementById('Deposit-btn').addEventListener('click',function(){
    const depositamount=document.getElementById('Deposit-fild');
    const deposittotal=depositamount.value
    const deposittotalnumber=parseFloat(deposittotal)
   
    const depositmoney=document.getElementById('deposit')
    const depositvalue=depositmoney.innerText;
    const depositvaluenumber=parseFloat(depositvalue);
    depositmoney.innerText=depositvaluenumber+deposittotalnumber;

     const withrwaammount = document.getElementById('withrawtotal');
     const withrawammounvalue=withrwaammount.innerText;
     const withrawnumber=parseFloat(withrawammounvalue);
     withrwaammount.innerText=withrawnumber+deposittotalnumber;


    depositamount.value='';
})