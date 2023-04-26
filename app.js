const date = () => {
    let date_main = new Date("Jan,20,2023,10:50:58");
    let current_date=new Date();
    let date_day=parseInt((date_main - current_date)/1000/60/60/24);
    let date_hr=parseInt((date_main - current_date)/1000/60/60)%24;
    let date_min=parseInt((date_main - current_date)/1000/60)%60;
    let date_sec=parseInt((date_main - current_date)/1000)%60;

    document.getElementsByClassName('time')[0].innerHTML= `
    <span>${date_day}<br>
    <h6>Days</h6>
    </span>
    <h5>:</h5>
    <span>${date_hr}<br><h6>Hours</h6></span>
    <h5>:</h5>
    <span>${date_min}<br><h6>Minutes</h6></span>
    <h5>:</h5>
    <span>${date_sec}<br><h6>Seconds</h6></span>
    `
}
setInterval(date,1000);



let coin_first=document.getElementById('coin_first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');

coin.addEventListener('change',()=>{
    let a = coin.value;
    
    coin_first.innerHTML=a.slice(0,1);
    if(a==="Bitcoin"){
        btc.innerHTML="BTC";
    }
    else if(a==="Ethereum"){
        btc.innerHTML="ETH";
    }
    else if(a==="Tether"){
        btc.innerHTML="USDT";
    }
    else
    {
        btc.innerHTML="BNB";
    }
})




let gov_coins =document.getElementById('gov_coins');
let coins = document.getElementById('coins');
let gov_coinss = document.getElementById('gov_coinss');

coins.addEventListener('change',()=>{
    let a = coins.value;
    
    gov_coins.innerHTML=a.slice(0,1);
    if(a==="Dollar"){
        gov_coins.innerHTML="$";
        gov_coinss.innerHTML="USD";
    }
    else if(a==="Rupee"){
        gov_coins.innerHTML="₹";
        gov_coinss.innerHTML="INR";
    }
    else if(a==="Riyal"){
        gov_coins.innerHTML="S";
        gov_coinss.innerHTML="SAR";
    }
    else
    {
        gov_coins.innerHTML="A";
        gov_coinss.innerHTML="AED";
    }
})


let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let bitcoin_dollar=19974.45;
let ethereum_dollar=1349.85;
let tether_dollar=1;
let bnb_dollar=291.55;

crypto.addEventListener('change', () => {
    switch ("Bitcoin") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar);
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.67);
                    break;
            }
            break;    
    }
})


