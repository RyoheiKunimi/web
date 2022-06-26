function toggleHeader(){
    let humburgerButton = document.getElementById("humburger__button");

    if(humburgerButton.className === 'active__icon'){
        document.getElementById("humburger__button").className="inactive__icon";
    }else{
        document.getElementById("humburger__button").className="active__icon";
    }
}
