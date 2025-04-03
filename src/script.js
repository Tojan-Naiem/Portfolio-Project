function openSidebar(){
    var sidebar= document.getElementById('my-sidepanel');
    toggleBtn=document.getElementById('menu-button');
if(sidebar.style.left=='0px'){
    sidebar.style.left='-600px';
    toggleBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}
else {
    sidebar.style.left='0';
    toggleBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
}
   
}
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY >500) {
       header.style.height='70px';
    } else {
        header.style.height='100px';
    }
 });

 document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      if (isElementInViewport(el)) {
        el.classList.add('visible');
      }
    });
  });