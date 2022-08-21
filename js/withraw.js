document.getElementById('Withraw-btn').addEventListener('click',function(){
    const withrawfild=document.getElementById('Withraw-fild');
    const withrawvalue=withrawfild.value ;
    const withrawvaluenumber=parseFloat(withrawvalue);
   
    const withrawtotal=document.getElementById('withrawtotal');
    const withrawtotalvalue=withrawtotal.innerText;
    const withrawtotalnumber=parseFloat(withrawtotalvalue);
    withrawtotal.innerText=withrawtotalnumber-withrawvaluenumber;


    const withrwamain=document.getElementById('withrawamount');
    const wihtrawmainvalue=withrwamain.innerText;
    const withrawmainnumber=parseFloat(wihtrawmainvalue);
    withrwamain.innerText=withrawmainnumber+withrawvaluenumber;
    withrawfild.value='';

    

    

    

})