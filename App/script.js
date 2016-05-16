$(document).ready(function(){

  var streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'syndicate', 'riotgames',
  'summit1g', 'RobotCaleb', 'wintergaming'];
  var name = '';
  var twitchApi = 'https://api.twitch.tv/kraken/streams/' + name + '?callback=?';

function returnGame(d){
  if (d === null){
    return "Streamer is offline";
  }else if(d === undefined){
    return "Channel has been closed";
  }else{
    return(data.stream.game);
  }
}


  $.ajax({
    type: 'GET',
    url: twitchApi,
    dataType: 'json',

    success: function(data){
      console.log(data);

      for (i=0; i < streamers.length; i++){
        name = streamers[i];
        $('#link-output').append("<h1>" + name + "</h1> <h3>" returnGame(data) + "</h3><br>");
        console.log(data);

      }






    }
  });














});
