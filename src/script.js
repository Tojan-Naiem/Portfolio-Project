// I use here js for open the berger menu couse it easeier to 

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

// here I add js code for minimize the header bc it easier

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY >500) header.style.height='70px';
     else  header.style.height='100px';
    
 });

