// ===================================
// ========一進入網頁會出現的視窗========
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  let followNotice = document.getElementById("followNotice");
  followNotice.style.display = "block";
  setTimeout(function () {
    followNotice.style.display = "none"; // 2秒后隐藏消息
  }, 3000);
});


// ===================================
// ===========隨機推薦飲料=============
// ===================================
  function apple() {
    let lower = [
      "五桐號-黑糖薑母拿鐵",
      "喫茶小舖-薑汁撞奶",
      "珍煮丹-暖暖燒仙草",
      "茶湯會-芝麻拿鐵",      
      "萬波-芋頭波霸鮮奶",
    ];
    let lowerImg = [
      "./images/五桐號 黑糖薑母拿鐵.jpeg",
      "./images/喫茶 薑汁撞奶.jfif",
      "./images/珍煮丹 暖暖燒仙草.jpg",
      "./images/茶湯會  芝麻拿鐵.jpg",
      "./images/萬波 芋頭波霸鮮奶.jpg",
    ];

    let low = [
      "五桐號-法式可可奶茶",
      "再睡五分鐘-日安紅燕麥歐蕾",
      "一沐日-黃金蕎麥拿鐵",
      "清心-珍珠蜂蜜鮮奶普洱",
      "迷客夏-圓仔玄米抹茶拿鐵",,
    ];
    let lowImg = [
      "./images/五桐號 法式可可奶茶.jpeg",
      "./images/再睡五分鐘 日安紅燕麥歐蕾.jpg",
      "./images/一沐日 黃金蕎麥拿鐵.jpg",
      "./images/清心 珍珠蜂蜜鮮奶普爾.jpg",
      "./images/迷客夏 抹茶.jpg",
    ];

    let high = [
      "甘蔗媽媽-甘蔗檸檬",
      "可不可熟成紅茶-春鳳冰茶",
      "蔦日子-青檸女朋友",
      "吃茶三千-玉露青檸",
      "五桐號-最完美手沖泰奶",
    ];
    let highImg = [
      "./images/甘蔗媽媽 甘蔗檸檬.jpg",
      "./images/可不可 春鳳冰茶.jpg",
      "./images/蔦日子 青檸女朋友.jpg",
      "./images/吃茶三千 玉露青檸.jpg",
      "./images/五桐號 最完美手沖泰奶.jpg",
    ];

    let higher = [
      "可不可熟成紅茶-荔麗紅茶",
      "新井茶-甘蔗青茶",
      "萬波-紅蘋島嶼",
      "大苑子-芒果冰沙",
      "初韻-香橙檸檬銀耳露",
    ];
    let higherImg = [
      "./images/可不可 荔麗紅茶.jpeg",
      "./images/新井茶 甘蔗青茶.jpeg",
      "./images/萬波 紅蘋島嶼.jpg",
      "./images/大苑子 芒果冰沙.jpg",
      "./images/初韻 香橙檸檬銀耳露.jpg",
    ];

    let a = Math.random();
    let b = a * lower.length;
    let c = Math.floor(b);

    let x = document.getElementById("userInput").value;
    console.log(x);
    let y = document.getElementById("recommendImg").src;
    if (x === "") {
      console.log(x + "第一行");
      recommend.innerText = "請輸入正確氣溫(單位：°C)";
      document.getElementById("recommendImg").style.display = "none";
    } else if (x <= 10 && x >= -18) {
      console.log(x + "第二行");
      document.getElementById("recommendImg").style.display = "block";
      recommend.innerText = lower[c];
      y = document.getElementById("recommendImg").src = lowerImg[c];
    } else if (x > 10 && x <= 18) {
      console.log(x + "第三行");
      document.getElementById("recommendImg").style.display = "block";
      recommend.innerText = low[c];
      y = document.getElementById("recommendImg").src = lowImg[c];
    } else if (x > 18 && x <= 27) {
      console.log(x + "第四行");
      document.getElementById("recommendImg").style.display = "block";
      recommend.innerText = high[c];
      y = document.getElementById("recommendImg").src = highImg[c];
    } else if (x > 27 && x <= 45) {
      console.log(x + "第五行");
      document.getElementById("recommendImg").style.display = "block";
      recommend.innerText = higher[c];
      y = document.getElementById("recommendImg").src = higherImg[c];
    } else {
      console.log(x + "第六行");
      recommend.innerText = "請輸入正確氣溫(單位：°C)";
      document.getElementById("recommendImg").style.display="none";
    }
  }



// ===================================
// ==========RWD響應式選單按鈕=========
// ===================================
// 右邊list的出現和消失
function rightTitle(){
  let x = document.getElementById("rightList");
  if (x.style.display === "none"){
    x.style.display="block";
    // 移入的動畫
    x.classList.remove("fadeOut");
    x.classList.add("fadeIn");
  }else {
    x.style.display = "none";
    // 移出的動畫
    x.classList.remove("fadeIn");
    x.classList.add("fadeOut");
  }  
}
// 喝口感的珍珠和其他的選單
function boba(){
  let dropdown = document.getElementById("myDrop_btn");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }

}




// ===================================
// ==============輪播圖===============
// ===================================

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ===================================
// ==========輪播圖自動播放==============
// ===================================

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length > 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

// ===================================
// ===========點商品圖可以放大==========
// ===================================

// 圖片1
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgapple = document.getElementById("myImg");
// console.log(imgapple);

var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
imgapple.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// 圖片2
// Get the modal
var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
// var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// 圖片3
// Get the modal
var modal = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
// var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// 圖片4
// Get the modal
var modal = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
// var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// 圖片5
// Get the modal
var modal = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img05");
// var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// 圖片6
// Get the modal
var modal = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img06");
// var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

document.getElementsByClassName("myImg").onclick = function () {
  for (i = 0; i < 5; i++) {
    let apple = document.querySelectorAll("img");
    if (apple.classList.contains("product-padding")) {
      apple.setAttribute("id", "cat" + i);
    }
    console.log(apple);
  }
};
