
function InterThemeImgs(){
   // Header interactive 

//Theme imgs
  setInterval(() => {
    const themesImgs = [
      "./src/img/icons/themes-blue.png",
      "./src/img/icons/themes-green.png",
      "./src/img/icons/themes-red.png",
      "./src/img/icons/themes-white.png"
    ];
    const random = Math.floor(Math.random() * themesImgs.length);
    $("#themes img").attr("src", themesImgs[random]);
    $("header > h1").css("src", themesImgs[random]);

  }, 1000);

 
// event for theme imgs
let isClickThemeImg = false; 
$("#themes img").click(() => {
  isClickThemeImg = !isClickThemeImg;
  if (isClickThemeImg) {
      $("#themes > div").css("visibility", "visible")
  } else {
       $("#themes > div").css("visibility", "hidden");
  }
});

}


function ChangeThemes(){

  $("#themes div").click(function () {

      const color = this.id;

      // change header color
      $("header").css("background-color", color);
      $("#themes div").css("border", "none");
      $(this).css("border", "3px white solid");

      //change select btn color
      $("#selectCal > input[value='Basic Calculator']").css("border-bottom" , `solid ${color}`)


      //basic calculator
      $("#basicCal").css("box-shadow",`2px 2px 2px 2px ${color}`);
      $("#screen").css("border",`1px solid ${color}`);
      $("#screenFirst").css("border-bottom",`1px ${color} dotted`)
      $("#basicCalcButtons > div").css("box-shadow",`1px 1px 1px  1px ${color}`);
       $("#basicCalcButtons > div").css("color",` ${color}`);

     //more about calculator
      $("#displayMore").css("box-shadow",`2px 2px 2px 2px ${color}`)
      $("#moreCalcBtns > button").css("box-shadow",`2px 2px 2px 2px ${color}`)


      //footer
      $("footer").css("background-color" ,`${color}`)
  });

}
export { InterThemeImgs, ChangeThemes };