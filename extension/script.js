function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


if(getParameterByName('active')){

  var bot_page_number = parseInt(getParameterByName('bot_page_number') || -1);
  var search_word = search_words[bot_page_number];

  function download_img(search_word){
    elm = document.getElementById('rg');
    img = elm.getElementsByTagName('img');
    first_img = img[0].getAttribute('src');
    // console.log(first_img);

    first_img = first_img.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    // console.log(first_img);

    blob = new Blob([first_img], {type: 'text/jpg'});
    e = document.createEvent('MouseEvents');
    a = document.createElement('a');
    a.download = `${search_word}.jpg`
    // a.href = window.URL.createObjectURL(blob)
    a.href = first_img
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }

  download_img(search_word);


  var next_bot_page_number = bot_page_number+1 ;
  var next_search_word = search_words[next_bot_page_number];
  var link = `https://www.google.com/search?newwindow=1&tbm=isch&q=${next_search_word}&bot_page_number=${next_bot_page_number}&active=true`;
  console.log("Next Link",link);


  if(bot_page_number<=search_words.length-1){
    window.open(link,"_self");
    window.location.href = link;
  }


}



