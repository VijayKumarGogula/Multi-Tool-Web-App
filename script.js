function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    // If the opened tab is the calendar tab, hide the stopwatch tab
    if (tabname === 'calendar') {
        document.getElementById('stopwatch').style.display = 'none';
    } else {
        document.getElementById('stopwatch').style.display = 'block';
    }
}


let hour,timer,minute,seconds,interval;

let getSeconds=0,
    getMinutes=0,
    getHours=0;

function stopwatch(){
    this.start=function(){
        hour=document.getElementById("hour");
        minute=document.getElementById("minute");
        seconds=document.getElementById("seconds");

        if (getSeconds>=0){
            getSeconds++;
            seconds.innerHTML=getSeconds;
        }
        if (getSeconds<10){
            seconds.innerHTML="0"+getSeconds;
        }

        if (getSeconds>=60){
            getSeconds=0;
            getMinutes++;
            minute.innerHTML=getMinutes;
        }

        if(getMinutes<10){
            minute.innerHTML="0"+getMinutes+":";
        }

        if(getMinutes>=60){
            getMinutes=0;
            getHours++;
            hour.innerHTML=getHours;
        }
        if (getHours<10){
            hour.innerHTML="0"+getHours+":";
        }
        interval=setTimeout(object.start,1000);
    }

    this.stop=function(){
        clearTimeout(interval);
    }

    this.reset=function(){
        if(getSeconds>=0){
            getSeconds=0;
            getHours=0;
            getMinutes=0;

            seconds.innerHTML="0"+getSeconds;
            minute.innerHTML="0"+getMinutes+" :";
            hour.innerHTML="0"+getHours+" :";
            clearTimeout(interval);
        }
    }
}
let object=new stopwatch();


