stickyElem = document.getElementById("navbar");
stickyElem_1 = document.getElementById("accessBar");
ulcolor = document.getElementById("ulcolor");
acolor = document.querySelectorAll(".acolor");
contentShortcut = document.getElementById("contentShortcuts");

    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    currStickyPos1 = stickyElem.getBoundingClientRect().top + window.pageYOffset
    window.onscroll = function() {
         
        /* Check if the current Y offset
        is greater than the position of
        the element */
        if(window.pageYOffset > currStickyPos && window.pageYOffset > currStickyPos1) {
            if(window.innerWidth>800){
                stickyElem.style.position = "fixed";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "16vh";
            }
            else if(window.innerWidth < 800 && window.innerWidth > 600){
                stickyElem.style.position = "fixed";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "23vh";
            }
            else{
                // stickyElem.style.position = "fixed";
                stickyElem.style.display = "none";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "0rem";
                stickyElem_1.style.height = "22vh";
                ulcolor.style.backgroundColor ="#404952";
                contentShortcut.style.marginTop = "14rem";
                acolor.forEach(element => {
                    element.style.color = "#ffffff";
                });
            }
        } else {
            if(window.innerWidth < 600){
                stickyElem.style.display = "flex";
                stickyElem.style.position = "relative";
                stickyElem.style.top = "initial";
                stickyElem_1.style.position = "relative";
                stickyElem_1.style.top = "initial";
                stickyElem_1.style.height = "27vh";
                ulcolor.style.backgroundColor ="#ffffff";
                contentShortcut.style.marginTop = "0rem";
                acolor.forEach(element => {
                    element.style.color = "#404952";
                });
            }
            else{
                stickyElem.style.display = "flex";
                stickyElem.style.position = "relative";
                stickyElem.style.top = "initial";
                stickyElem_1.style.position = "relative";
                stickyElem_1.style.top = "initial";
            }

        }
    }

getText("script/blog.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("blogcontent").innerHTML = myText;
}