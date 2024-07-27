// // 圖片1
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// let imgapple = document.getElementById("myImg");
// // console.log(imgapple);

// let modalImg = document.getElementById("img01");
// // var captionText = document.getElementById("caption");
// imgapple.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

for (i=0;i<6;i++){
  let modal = document.getElementsByClassName("modal")[i];  
  let x = document.querySelectorAll("img")[i];
    // x.setAttribute("id","myImg"+i);
    console.log(x);
    
    x.onclick=function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    let span = document.getElementsByClassName("close")[i];
    // console.log(span);
    span.onclick = function () {
      modal.style.display = "none";
    };
}






// 老師上課例子
// for (let p = 11; p < 21; p++) {
//   var x = document.createElement("img");
//   x.setAttribute("src", "../image/product01.jpg");
//   x.setAttribute("id", "cat" + p);
//   x.onclick = function () {
//     alert("我是圖片");
//   };
//   document.body.appendChild(x);
// }