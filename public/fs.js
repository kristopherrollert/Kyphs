(function(){
  /*
   * Changes the color of the lumbar element to the color of the hexadecimal
   * code given. If no paramater is given, the color reverts to it's original
   * color. DO NOT INCLUDE '#'
   */
  function changeLumbarColor(hexString){
    hexString = hexString || "2a363b";
    var lubmarVert = document.getElementsByClassName("lumbar-main");
    var lumbarBox = document.getElementById("sb-lumbar");
    console.log(lumbarBox);
    var lumbarUnderline = document.getElementById("lumbar-identify");
    changeBoxColor(lumbarBox, hexString);
    changeUnderlineColor(lumbarUnderline, hexString);
    for(var i = 0; i < lubmarVert.length; i++)
      changeSpinalColor(lubmarVert[i], hexString);
  }

   function changeSpinalColor(element, hexString){
     hexString = configHexString(hexString);
     element.style.fill= "#" + hexString;
     element.style.stroke = "#" + hexString;
   }

   function changeBoxColor(element, hexString){
      hexString = configHexString(hexString);
      element.style.backgroundColor = "#" + hexString;
   }

   function changeUnderlineColor(element, hexString){
     hexString = configHexString(hexString);
     element.style.borderColor = "#" + hexString;
   }

   function configHexString(hexString){
     if(hexString.substring[0,1]==="#")
        hexString = hexString.substring[1, hexString.length-1];
     return hexString;
   }

   changeLumbarColor("fcd209");

}());
