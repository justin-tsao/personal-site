// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player1', {
          videoId: 'gk5TbxRNHsQ',

          }
        );
      }
      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player2', {
          videoId: 'BvufzCwzCvE',

          }
        );
      }




 
document.getElementById('test2').addEventListener("click", function(event){

  player.stopVideo();
});


