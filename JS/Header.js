const sideBar = document.querySelector('#toggle-side-bar')
const dropBody = document.querySelector('#drop-down-body')
const dropIcon = document.querySelector("#drop-down-icon")
const toggleSideBar = () => {
    sideBar.classList.toggle('side-bar-active');
}

const toggleDropMenu = () => {
    dropBody.classList.toggle('drop-down-body-show')
    dropIcon.style.transform = dropIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)'
}
const MouseEnter = () =>{
    document.getElementById("pop-up-list").classList.add('pop-up-list-active')
}
const MouseLeave = () =>{
    document.getElementById("pop-up-list").classList.remove('pop-up-list-active')
}