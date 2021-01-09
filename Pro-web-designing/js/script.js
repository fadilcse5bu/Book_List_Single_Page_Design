const navIcon = document.querySelector('.nav-icon');
const closeIcon = document.querySelector('.close-icon');
const sideBar = document.querySelector('.side-nav-bar');
const removeWhileClick = document.querySelectorAll('.remove')

navIcon.addEventListener('click', () => {
  sideBar.style.transition = ".65s";
  sideBar.style.marginLeft = 0;
  console.log("YES")
})

closeIcon.addEventListener('click', () => {
  sideBar.style.marginLeft = "-80%";
})

removeWhileClick.forEach(item => {
  item.addEventListener('click', () => {
    sideBar.style.transition = "0s";
    sideBar.style.marginLeft = "-80%";
  })
})

function closeNavBar() {
  var w = parseInt(document.body.clientWidth);
  if(w > 900) {
    sideBar.style.transition = "0s";
    sideBar.style.marginLeft = "-80%";
  }
}
