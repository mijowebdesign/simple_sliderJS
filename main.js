


function slider (arr) {
  this.img = document.getElementsByTagName("img")[0];
  this.arr = arr;
  this.i = 0;
  this.moving = () => { // arrow func
    this.img.setAttribute('src',this.arr[this.i]);
    this.i++;
    if(this.i == this.arr.length){this.i = 0};
    setTimeout(this.moving, 1000);
  }

}

let arr1 = ["images/img1.jpeg" , "images/img2.png" , "images/img3.jpg" , "images/img4.jpg" ];
var slider1 = new slider(arr1);
slider1.moving()
