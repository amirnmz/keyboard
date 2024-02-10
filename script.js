const btnk = document.querySelectorAll(".keyboard-btn");
// const charlist = [97, 98];
// const sentence = String.fromCharCode(...charlist);
var i;
// console.log(sentence);





for (i = 0; i < btnk.length; i++) {
    btnk[i].addEventListener("keydown", function (event) {
        // console.log(event.keyCode);
        console.log(event.Code);
        console.log(event.key);
       


        this.classList.add("key");



    })



}



for (i = 0; i < btnk.length; i++) {
    btnk[i].addEventListener('keyup', function (event) {

        this.classList.remove('key');
    })
}
