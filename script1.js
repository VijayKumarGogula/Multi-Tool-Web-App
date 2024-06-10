

//calculator

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } 
        else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } 
        else if (display.innerText !== '' && item.id === 'equal') {
            try {
                display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
            } catch {
                display.innerText = 'Error';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } 
        else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } 
        else {
            // Replace special characters for multiplication and division to their JavaScript equivalents
            const value = item.innerText === '×' ? '*' : item.innerText === '÷' ? '/' : item.innerText;
            display.innerText += value;
        }
    }
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};


//calendar
{
const header=document.querySelector('.calendar h3');
const dates=document.querySelector('.dates');
const navs=document.querySelectorAll("#prev,#next");

const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let date=new Date();
let month=date.getMonth();
let year=date.getFullYear();

function renderCalendar(){
    
    
    const start=new Date(year,month,1).getDay();
    const endDate=new Date(year,month+1,0).getDate();
    const end=new Date(year,month,endDate).getDay();
    const endDatePrev=new Date(year,month,0).getDate();

    let datesHtml="";
    for(let i=start;i>0;i--){
        datesHtml+=`<li class="inactive">${endDatePrev-i+1}</li>`;
    }


    for(let i=1;i<=endDate;i++){
        let className=(
            i===date.getDate() &&
            month===new Date().getMonth() &&
            year===new Date().getFullYear()
        ) ?'class="today"'
        :"";
        datesHtml+=`<li ${className}>${i}</li>`;
    }
    

    for(i=end;i<6;i++){
        datesHtml+=`<li class="inactive"> ${i-end+1}</li>`;
    }
    dates.innerHTML=datesHtml;
    header.textContent=`${months[month]} ${year}`;
}

navs.forEach(nav =>{
    nav.addEventListener('click', e=>{
        const btnId=e.target.id;

        if(btnId === 'prev' && month ===0){
            year--;
            month=11;
        }
        else if(btnId === 'next' && month ===11){
            year++;
            month=0;
        }
        else{
            month=btnId === "next"? month+1: month-1;
        }


        date=new Date(year,month,new Date().getDate());
        year=date.getFullYear();
        month=date.getMonth();
        

        renderCalendar();
    })
})

renderCalendar();

}