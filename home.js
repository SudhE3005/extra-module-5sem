const input = document.querySelector('#info');
const btn = document.querySelector('.btn');
const list= document.querySelector('.container')
const tit = document.querySelector('.tit');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let date = new Date().toLocaleDateString();
    var row=document.createElement("div");
    row.className="row justify-content-center";
    var dates=document.createElement("col-4");
    dates.className="col-4";
    var info=document.createElement("div");
    info.className="col-4";
    dates.innerHTML=date;
    info.innerHTML=input.value;
    row.appendChild(dates);
    row.appendChild(info);
    list.appendChild(row);
});