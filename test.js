var element = document.getElementsByClassName(
  "_3sxvM message-in focusable-list-item _1AOLJ CzM4m _1jHIY"
);
var imgTags = element[0].getElementsByTagName("img");

imgTags.forEach(function (img, index) {
    console.log(img);
});

//   var imgSrc = img.getAttribute("src");
//   fetch(imgSrc)
//     .then((response) => response.blob())
//     .then((blob) => {
//       var url = URL.createObjectURL(blob);
//       var a = document.createElement("a");
//       a.href = url;
//       a.download = "image" + index + ".png"; // You can set the desired filename here
//       a.style.display = "none";
//       document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//     });