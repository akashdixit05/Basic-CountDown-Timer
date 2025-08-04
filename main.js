const endDate=new Date("4 aug, 2025 16:08:00:00").getTime();    //gettime returns the no. of milliseconds
const startDate=new Date().getTime();

// function that is used in set interval to call after each second to updaate the timer

let x = setInterval(function updateTimer(){
    const now=new Date().getTime();     // abhi kitna samay chal rha  he in ms 

    // time in ms abhi kitna chalrha he 
    const distCovered=now-startDate;    // jo progress me dikhega kitta hogya 


    // kitna samay or baki he 
    const distancePending= endDate- now;    // jo timer me dikhega kitta bacha he 


    // calculate days,hours,minutes,secs

    // 1 day= 24 hours * 60 mins * 60 secs * 1000ms
    const days= Math.floor(distancePending/(24*60*60*1000));

    //currhr =distance pending%1 day and 1 hour=60 mins *60 secs * 1000ms
    const hrs=Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
    
    // similarly % 1hr /with 1minn=60*1000
    const mins=Math.floor((distancePending % (60*60*1000)) / (60*1000));

    const secs=Math.floor((distancePending % (60*1000)) / (1000));




    // populate in ui

    // countdowntimer 
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("secs").innerHTML=secs;

    // we have already set the transition for the progress bar 
    // now we have to calculate only the % increasing 

    const totaldistance= (endDate - startDate);
    const percentageDistance=(distCovered/totaldistance)*100;

    document.getElementById("progressbar").style.width = percentageDistance + "%";
    
    if(distancePending<0){
        clearInterval(x);
        document.getElementById("blocks").innerHTML="EXPIRED";
        document.getElementById("progressbar").style.width="100%";
        alert('COUNTDOWN COMPLETED....')
    }
},1000);      //1000 ms =1sec