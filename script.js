function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementsByTagName("body").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementsByTagName("body").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
  }


document.querySelectorAll('.skill-box').forEach(box => {
box.addEventListener('click', function () {
    this.classList.toggle('show-desc');
  });
});