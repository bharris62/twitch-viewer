$(document).ready(function(){

  var streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'syndicate', 'riotgames',
  'summit1g', 'RobotCaleb', 'wintergaming', 'ESL_SC2'];
  var name = '';
  var twitchApi = 'https://api.twitch.tv/kraken/streams/' + name + '?callback=?';
  //var twitchApi = 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?';



  $.ajax({
    type: 'GET',
    url: twitchApi,
    dataType: 'json',


    success: function(data){
      console.log(data.stream);

      function returnGame(d){
        if (d === null){
          return "Streamer is offline";
        }else if(d === undefined){
          return "Channel has been closed";
        }else{
          return(data.stream.game);
        }
      }


      for (i=0; i < streamers.length; i++){
        var name = streamers[i];
        var descrip = returnGame(data.stream);
        console.log(descrip);

        $('#link-output').append("<h1>" + name + "</h1> <h3>" + descrip + "</h3><br>");
        console.log(data);

      }






    }
  });














});
