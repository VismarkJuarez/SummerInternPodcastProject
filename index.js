
/**
 * Controls the tggling of the hamburger menu when the user clicks it.
 */
function toggleHamburgerNavOptionsList() {
    let navBarOptionsList
        = document.querySelector("#hamburgerIconNavOptionsNestedList");
    navBarOptionsList.classList.toggle("toggleCls");
}

//-------------------

/**
 * The following logic controls what will happen when the user scrolls down on
 * the screen. The navbar will decrease in heigh slightly.
*/
window.onscroll = function() {configureNavBar()};

function configureNavBar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //The user is scrolling down, so minimize the nav bar, and hide all
        //corollary navbar items to reduce clutter.
        document.querySelector(".navBar").style.height = "90px";
        hideSocialMediaIcons();
        hideNavBarOptions();
        hideLogo();
  } else {
        //The user has scrolled back up to the top. Display all corollary navbar
        //options/details.
        document.querySelector(".navBar").style.height = "120px";
        unhideSocialMediaIcons();
        unhideNavBarOptions();
        unhideLogo();
  }
}

function hideLogo() {
    let frbLogo = document.querySelector("#navBarLogocaster");

    //If the logo is currently being displayed, hide it.
    if(frbLogo.style.visibility != "hidden") {
        frbLogo.style.visibility = "hidden";
    } else {
        //no further action needed, as the social media icons are already
        //hidden.
    }
}


function unhideLogo() {
    let frbLogo = document.querySelector("#navBarLogocaster");
    let navOptionsHamburgerIcon = document.querySelector(".hamIconNavOptions");

    /**
     * If the nav options' hamburger icon is not being displayed (display = none),
     * it is because the screen is large enough to display its contents.
     * So, the navBarOptions can safely be re-displayed.
     * */
    // TODO: why does checking for a blank work? lol
    if(navOptionsHamburgerIcon.style.visibility != "hidden"){
        frbLogo.style.visibility = "visible";
    } else {
        /**
         * The nav options' hamburger icon is being displayed, which indicates
         * that the screen is too small.
         * So the navBarOptions need NOT be displayed. No further action needed.
         */
    }
}




/**
 * Will hide the social media icons (if it is even being displayed at all)
 */
function hideSocialMediaIcons() {
    let socialMediaIconList = document.querySelector(".socialMediaIconList");

    //If the social media icons are being displayed, hide them.
    if(socialMediaIconList.style.visibility != "hidden") {
        socialMediaIconList.style.visibility = "hidden";
    } else {
        //no further action needed, as the social media icons are already
        //hidden.
    }
}

/**
 * Will hide the navbar's (full-screen) options when scrolling down.
 */
function hideNavBarOptions(){
    let navBarOptions = document.querySelector(".navbarOptionsList");

    //If the social media icons are being displayed, hide them.
    if(navBarOptions.style.visibility != "hidden") {
        navBarOptions.style.visibility = "hidden";
    } else {
        //no further action needed, as the social media icons are already hidden.
    }
}

/**
 * Will re-display the social media icons if the screen is large enough to display
 * them.
 */
function unhideSocialMediaIcons() {
    let socialMediaIconList = document.querySelector(".socialMediaIconList");
    let navOptionsHamburgerIcon = document.querySelector(".hamIconNavOptions");

    /**
     * If the nav options' hamburger icon is not being displayed (display = none),
     * it is because the screen is large enough to display its contents.  So,
     * the socialMediaIcon list can safely be re-displayed.
     * */
    // TODO: why does checking for a blank work? lol
    if(navOptionsHamburgerIcon.style.visibility != "hidden"){
        socialMediaIconList.style.visibility = "visible";
    } else {
        /**
         * The nav options' hamburger icon is being displayed,
         * which indicates that the screen is too small.  So the social media
         * icons need NOT be displayed.  No further action needed.
         */
    }
}

function unhideNavBarOptions() {
    let navBarOptions = document.querySelector(".navbarOptionsList");
    let navOptionsHamburgerIcon = document.querySelector(".hamIconNavOptions");

    /**
     * If the nav options' hamburger icon is not being displayed (display = none),
     * it is because the screen is large enough to display its contents.
     * So, the navBarOptions can safely be re-displayed.
     * */
    // TODO: why does checking for a blank work? lol
    if(navOptionsHamburgerIcon.style.visibility != "hidden"){
        navBarOptions.style.visibility = "visible";
    } else {
        /**
         * The nav options' hamburger icon is being displayed, which indicates
         * that the screen is too small.
         * So the navBarOptions need NOT be displayed. No further action needed.
         */
    }
}
