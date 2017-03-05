function pushNewUserData(name, data, data2, data3) {
    var timeStamp = new Date();
    
    var postsRef = database.ref("graphs").child("sens1").push({
          time: timeStamp,
          val: data,
        
    
      // lumbarAngle : lumbar,
      // cervicalAngle : cervical,
      // thoracicAngle : thoracic
    });
    
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFplIrdlZ03GGTMUwHen9yjkXwR4qhf8g",
  authDomain: "habitus-cb41b.firebaseapp.com",
  databaseURL: "https://habitus-cb41b.firebaseio.com",
  storageBucket: "habitus-cb41b.appspot.com",
  messagingSenderId: "889800309026"
};
var defaultApp = firebase.initializeApp(config);

var database = firebase.database();
