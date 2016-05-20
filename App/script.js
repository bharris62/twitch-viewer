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
        //activity = true means online.
        var logo = '';
        var gameDescrip;
        var activity;
        var channelname;
        function returnGame(d) {
          if (d === null) {
            logo = "http://s19.postimg.org/bz0sj7p5f/codecamp_128.png";
            gameDescrip = "";
            activity = false;
            channelName = data._links.self.substring(data._links.self.lastIndexOf('/')+1);
            return "Streamer is offline";
          } else if (d != null) {
            gameDescrip = data.stream.channel.status.slice(0,60) + "...";
            channelName = data._links.self.substring(data._links.self.lastIndexOf('/')+1);
            activity = true;
            logo = data.stream.channel.logo;
            return d.game;
          } else {
            channelName = streamers[i];
            gameDescrip = '';
            activity = false;
            logo = "https://s19.postimg.org/na0nhr1xv/frown_face.png";
            return "Channel has been closed";
          }
        }

        var game = returnGame(data.stream);

        $('#link-output').append('<div class="row text-center" id="output"><img id="logo" src=' + logo + '>' + "<h1 id='name'>" + channelName + "</h1>" + " " + "<h4 id='game'>" + game + "</h4>" + " " + "<h5 id='descrip'>" + gameDescrip + "</h5>" + "</div><br>");

      }
    });
  }


});
