setInterval(async ()=>{
    var playersPanel = document.getElementsByClassName('battle-player__user');
    var playersData = document.getElementsByClassName('opened-items users-2');
    var skinsPrices = [];
    var finalPrice = 0;

    for(let i = 0; i < playersData.length; i++){
        var temp = playersData[i].getElementsByClassName('opened-item__price');
        for(let x = 0; x < temp.length; x++){
            finalPrice += parseFloat(temp[x].innerHTML.substring(1));
        }
        precision = Math.pow(10, 2)
        skinsPrices[i] = Math.ceil(finalPrice * precision) / precision;
        finalPrice = 0;

        if(!playersPanel[i].innerHTML.includes("total-win-sum")){
            playersPanel[i].innerHTML += `<p style="color: #4af1cc;" class="total-win-sum">$${skinsPrices[i]}</p>`;
        }else{
            playersPanel[i].getElementsByClassName('total-win-sum')[0].innerHTML = `$${skinsPrices[i]}`;
        }
    }
}, 3000);
