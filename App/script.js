$(document).ready(function() {

  var streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'syndicate', 'riotgames',
    'summit1g', 'RobotCaleb', 'wintergaming', 'ESL_SC2'
  ];

  for (i = 0; i < streamers.length; i++) {
    var name = streamers[i];

    var twitchApi = 'https://api.twitch.tv/kraken/streams/' + name + '?callback=?';

   // var twitchApi = 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?';

    $.ajax({
      type: 'GET',
      url: twitchApi,
      dataType: 'json',

      success: function(data) {
        //console.log(data);

        function returnGame(d) {
          if (d === null) {
            return "Streamer is offline";
          } else if (d !== null) {
            return d.game;
          } else {
            return "Channel has been closed";
          }
        }

        //console.log(data._links.self.substring(data._links.self.lastIndexOf('/')+1));
        var channelName = data._links.self.substring(data._links.self.lastIndexOf('/')+1);

        var gameDescrip = returnGame(data.stream);

        $('#link-output').append("<h1>" + channelName + "</h1> <h3>" + gameDescrip + "</h3><br>");

      }
    });
  }

});
