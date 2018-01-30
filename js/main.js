var sidebar = document.querySelector('.left-sidebar');
var btnAccount = document.querySelector('.btn-account');
var accountModal = document.querySelector('.account-modal');
var btnForm = document.querySelector('.btn-form');
var selectStatut = document.querySelector('#statut');
var trValue = document.querySelectorAll('tbody > tr');

sidebar.addEventListener("mouseover", openSidebar);
sidebar.addEventListener("mouseout", closeSidebar);
btnAccount.addEventListener("click", accountBox);
selectStatut.addEventListener("change", changeStatut);


function openSidebar() {
    sidebar.style.left = "0";
}

function closeSidebar() {
    sidebar.style.left = "-210px"
}

function accountBox() {
    if(accountModal.classList.contains('hide') == true){
        accountModal.classList.add('show');
        accountModal.classList.remove('hide');
    } else {
        accountModal.classList.remove('show');
        accountModal.classList.add('hide');
    }
}

var statutValue = document.querySelectorAll('td.statut-i');

function statutIconesReplace() {
    for(i=0; i<statutValue.length; i++) {
        if(statutValue[i].innerHTML == "1") {
            statutValue[i].innerHTML = "<i class='fa statut-on fa-play-circle-o' aria-hidden='true'></i>"
        } else {
            statutValue[i].innerHTML = "<i class='fa statut-off fa-play-circle-o' aria-hidden='true'></i>"
        }
    }
}

statutIconesReplace();


function changeStatut() {
    var thisValue = selectStatut.value.slice(7, 8);
    for(g=0; g< trValue.length; g++) {
        if(thisValue == "1") {
            if(trValue[g].classList.contains('on') == true) {
                trValue[g].classList.remove('dontshow');   
            } else {
                trValue[g].classList.add('dontshow');
            }
        } else  {
            if(trValue[g].classList.contains('off') == true) {
                trValue[g].classList.remove('dontshow');   
            } else {
                trValue[g].classList.add('dontshow');
            }
        }
    }
}

changeStatut();