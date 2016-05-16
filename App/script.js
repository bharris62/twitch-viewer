$(document).ready(function(){
  var twitchApi = 'https://api.twitch.tv/kraken/streams/wintergaming?callback=?';

  var streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'syndicate', 'riotgames',
        'summit1g', 'RobotCaleb', 'wintergaming'];

  $.ajax({
    type: 'GET',
    url: twitchApi,
    dataType: 'json',

    success: function(data){
      console.log(data);
    }
  });














});
