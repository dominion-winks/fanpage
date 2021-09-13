// let toggle = document.querySelector("#header .toggle-button");
// let collapse = document.querySelectorAll("#header .collapse");
// let collapseToggle = document.querySelector(".collapse-toggle")
//
// bringOutCollapse = () =>{
//   collapse.style.display = 'block';
// }
//
// toggle.addEventListener('click' , function(){
//   console.log(toggle);
// })

// with masonry
// new Masonry(".posts .grid", {
//     itemSelector : '.grid-item',
//     gutter : 20
// });
var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item'
});
