// module.exports = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=196536770364038";
//   fjs.parentNode.insertBefore(js, fjs);
// }.bind(this, document, 'script', 'facebook-jssdk'));

module.exports = function() {
  new BIT.Widget({
    "artist":"Ice Cream",
    "div_id":"tour-dates",
    "bg_color": "#FFFFFF"
  }).insert_events();

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=196536770364038";
    fjs.parentNode.insertBefore(js, fjs);
  }.bind(this, document, 'script', 'facebook-jssdk')())
}
