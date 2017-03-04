(function(){
  /*
   * Changes the color of the lumbar element to the color of the hexadecimal
   * code given. If no paramater is given, the color reverts to it's original
   * color. DO NOT INCLUDE '#'
   */
  function changeLumbarColor(hexString){
    hexString = hexString || "2a363b";
    var x = document.getElementsByClassName("lumbar-main");
    for(var i = 0; i < x.length; i++)
      changeSpinalColor(x[i], hexString);
  }

  /*
   *
   */
   function changeSpinalColor(element, hexString){
     if(hexString.substring[0,1]==="#")
        hexString = hexString.substring[1, hexString.length-1];
     element.style.fill= "#" + hexString;
     element.style.stroke = "#" + hexString;
   }

}());
