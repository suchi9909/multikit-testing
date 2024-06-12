/*====================
 Ratio js
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];
    /// Optional Class Add ///
    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-bottom");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    /// Lazyloader Class Add ///
    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    /// Size Class Add ///
    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    /// Ratio Style ///
    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
background-image: url(${bgSrc});
background-size:cover;
background-position: center;
background-repeat: no-repeat;
display: block;
`
    );
  }
});




/*====================
 tap to top js
=======================*/
const btn = document.querySelector('.scroll');

btn.addEventListener('click', function () {
  scroll(0, 200);
})

window.onscroll = function showHide() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    btn.style.transform = 'scale(1)';
  }
  else {
    btn.style.transform = 'scale(0)';
  }
}

function scroll(target, duration) {
  if (duration <= 0) { return };
  let difference = target - document.documentElement.scrollTop;
  let speed = difference / duration * 10;
  setTimeout(function () {
    document.documentElement.scrollTop += speed;
    if (document.documentElement.scrollTop == target) { return };
    scroll(target, duration - 10);
  }, 10);
}
