
  /*
   * Changes the color of the lumbar element to the color of the hexadecimal
   * code given. If no paramater is given, the color reverts to it's original
   * color. DO NOT INCLUDE '#'
   */
  function changeLumbarColor(hexString){
    hexString = hexString || "2a363b";
    var lubmarVert = document.getElementsByClassName("lumbar-main");
    var lumbarBox = document.getElementById("sb-lumbar");
    var lumbarUnderline = document.getElementById("lumbar-identify");
    var lumbarPercentage = document.getElementById("pt-lumbar");
    changePercentageTextColor(lumbarPercentage, hexString);
    changeBoxColor(lumbarBox, hexString);
    changeUnderlineColor(lumbarUnderline, hexString);
    for(var i = 0; i < lubmarVert.length; i++)
      changeSpinalColor(lubmarVert[i], hexString);
  }

  function changeThoracicColor(hexString){
    hexString = hexString || "2a363b";
    var thoracicVert = document.getElementsByClassName("thoracic-main");
    var thoracicBox = document.getElementById("sb-thoracic");
    var thoracicUnderline = document.getElementById("thoracic-identify");
    var thoracicPercentage = document.getElementById("pt-thoracic");
    changePercentageTextColor(thoracicPercentage, hexString);
    changeBoxColor(thoracicBox, hexString);
    changeUnderlineColor(thoracicUnderline, hexString);
    for(var i = 0; i < thoracicVert.length; i++)
      changeSpinalColor(thoracicVert[i], hexString);
  }

  function changeCervicalColor(hexString){
    hexString = hexString || "2a363b";
    var cervicalVert = document.getElementsByClassName("cervical-main");
    var cervicalBox = document.getElementById("sb-cervical");
    var cervicalUnderline = document.getElementById("cervical-identify");
    var cervicalPercentage = document.getElementById("pt-cervical");
    changePercentageTextColor(cervicalPercentage, hexString);
    changeBoxColor(cervicalBox, hexString);
    changeUnderlineColor(cervicalUnderline, hexString);
    for(var i = 0; i < cervicalVert.length; i++)
      changeSpinalColor(cervicalVert[i], hexString);
  }

  function changePercentageTextColor(element, hexString){
    hexString = configHexString(hexString);
    element.style.color = "#" + hexString;
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

