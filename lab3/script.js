let tab;
let tabContent;

window.onload=function(){
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a){
    for (let i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event){
    let target = event.target;
    if(target.className=='tab'){
        for (let i=0;i<tab.length; i++){
            if(target==tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
}}

function generate(){
    let rtl=document.getElementById('rtl').value;
    let rtr=document.getElementById('rtr').value;
    let rbr=document.getElementById('rbr').value;
    let rbl=document.getElementById('rbl').value;

    let ttl=document.getElementById('ttl');
    let ttr=document.getElementById('ttr');
    let tbr=document.getElementById('tbr');
    let tbl=document.getElementById('tbl');

    let block=document.getElementById('block');
    let outputCode =document.getElementById('outputCode1');
   
    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;
    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px ";
    outputCode.value = "border-radius:" + block.style.borderRadius + ";";
}

function changeGrow1() {
    let grow = document.getElementById('rgrow').value;
    document.getElementById('tgrow').value = grow;
    let growValue = document.getElementById('grow').style.flexGrow = grow;
    document.getElementById('outputCode').value ="flex-grow: " + growValue + ";";
}

function changeGrow2() {
    let grow = document.getElementById('tgrow').value;
    document.getElementById('rgrow').value = grow;
    let growValue = document.querySelector('.selected').style.flexGrow = grow;
    document.getElementById('outputCode').value = "flex-grow: " + growValue + ";";
}

function changeShrink1(){
    let shrink = document.getElementById('rshrink').value;
    document.getElementById('tshrink').value = shrink;
    let shrinkValue = document.getElementById('grow2').style.flexShrink = shrink;
    document.getElementById('grow2').value = "flex-shrink: " + shrinkValue + ";";
}

function changeShrink2(){
    let shrink = document.getElementById('tshrink').value;
    document.getElementById('rshrink').value = shrink;
    let shrinkValue = document.getElementById('selected2').style.flexShrink = shrink;
    document.getElementById('grow2').value = "flex-shrink: " + shrinkValue + ";";
}