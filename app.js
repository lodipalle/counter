let count = 0;

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  btn.addEventListener('click', function(e){
    console.log(e.currentTarget.classList);
  });
});
