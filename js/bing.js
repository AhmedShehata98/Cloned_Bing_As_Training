const ToggleMenu = document.querySelector('.group .Menu');
const Menu_panel = document.querySelector('.group .Menu_Panel');
ToggleMenu.addEventListener('click' , ()=>{
    Menu_panel.classList.toggle('active')
})

//    //
//    //



const Custumize_Btn = document.querySelector(".group:nth-child(2) > .Menu_Panel  li.Customize_menu a");
const More_icon     = document.querySelector('.more_ico')
const Sub_Customize_Pannel = document.querySelector('.sub_menu_panel');
Custumize_Btn.addEventListener('click' , ()=>{
    Sub_Customize_Pannel.classList.toggle('active');
    More_icon.classList.toggle('active')
})

//    //
//    //
