
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
    if(search_word==undefined) return;

    elm = document.getElementById('rg');
    imgs = elm.getElementsByTagName('img');
    console.log(imgs);

    for(i=0;i<imgs_for_each_element;i++){
      // console.log(i,imgs_for_each_element);
      img_data = imgs[i].getAttribute('src');
      img_data = img_data.replace(/^data:image\/[^;]/, 'data:application/octet-stream');

      blob = new Blob([img_data], {type: 'text/jpg'});
      e = document.createEvent('MouseEvents');
      a = document.createElement('a');
      a.download = `${search_word}.jpg`
      // a.href = window.URL.createObjectURL(blob)
      a.href = img_data
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      e.preventDefault();
      a.dispatchEvent(e)
    }

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



