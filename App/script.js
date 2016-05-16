$(document).ready(function(){

  var streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'syndicate', 'riotgames',
  'summit1g', 'RobotCaleb', 'wintergaming'];
  var name = '';
  var twitchApi = 'https://api.twitch.tv/kraken/streams/' + name + '?callback=?';

  $.ajax({
    type: 'GET',
    url: twitchApi,
    dataType: 'json',

    success: function(data){
      console.log(data);

      for (i=0; i < streamers.length; i++){
        name = streamers[i];
        $('#link-output').append("<h1>" + name + "</h1><br>");

      }






    }
  });














});
