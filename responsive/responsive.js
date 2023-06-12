/* Responsive script */



const menuimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="40" viewBox="0 0 512 512"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
`;

const closeimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="40" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
`;

const mobheader = `
	<div id="mob-header" class="mob">
		<a onclick="" href="javascript:void(0)" class="mob_button">${menuimg}</a>
	</div>
`;

const closenav = `
	<div id="closenav" class="mob">
		<a onclick="" href="javascript:void(0)" class="close_button">${closeimg}</a>
	</div>
`;

const mbody = document.querySelector('body');
const menuWrapper = document.querySelector('.navbar');
const menuNav = document.querySelector('.navbar nav');

if(menuWrapper){
  menuWrapper.insertAdjacentHTML('beforeend', mobheader);
}

if(menuNav){
  menuNav.insertAdjacentHTML('afterbegin', closenav);
}

// open nav
const mobOpenBtn = document.querySelector('#mob-header a.mob_button');

if(mobOpenBtn){
  mobOpenBtn.addEventListener("click", e=>{
    e.preventDefault();

    if(menuNav){
      menuNav.classList.add("open");
      mbody.classList.add('mobnav-open');
    }    
    
  })
}

// close nav
const mobCloseBtn = document.querySelector('#closenav a.close_button');

if(mobCloseBtn){
  mobCloseBtn.addEventListener("click", e=>{
    e.preventDefault();

    if(menuNav){
      menuNav.classList.remove("open");
      mbody.classList.remove('mobnav-open');
    }    
    
  })
}


/* ----------------------------------------------------------------------
* header fixed correction *
* -------------------------------------------------------------------- */

const mainHeader = document.querySelector('.navbar');

if(mainHeader){
  mainHeaderHeight = mainHeader.offsetHeight;
  let mainHeaderAfter = `
  <div class="itu_navbar_after mob" style="height: ${mainHeaderHeight}px;"></div>
  `;

  mainHeader.insertAdjacentHTML('afterend', mainHeaderAfter);

  //console.log(mainHeaderHeight)
}


/* ----------------------------------------------------------------------
* header scroll action *
* -------------------------------------------------------------------- */

window.onscroll = function() {ituScrollAction()};

function ituScrollAction() {
  const mainHeader2 = document.querySelector('.navbar');
  mainHeaderHeight2 = mainHeader2.offsetHeight;

  if (document.body.scrollTop > mainHeaderHeight2 || document.documentElement.scrollTop > mainHeaderHeight2) {
    //document.querySelector("#main-header").classList.add("shrink");
    mbody.classList.add("shrink");
  } else {
    //document.querySelector("#main-header").classList.remove("shrink");
    mbody.classList.remove("shrink");
  }
}