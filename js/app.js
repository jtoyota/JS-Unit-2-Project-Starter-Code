/*
  Please add all Javascript code to this file.
*/

//Opens popup loader
$('#main').on('click', '.article', function() {
  $('#popUp').removeClass('hidden');
});

//Closes popup loader
$('#popUp').on('click', '.closePopUp', function() {
  $('#popUp').addClass('hidden');
});

//Removes class loader and loads popup content
$('#main').on('click', '.article', function() {
  $('#popUp').removeClass('loader');
  let articleTitle = $(this).data('title');
  let articleDescription = $(this).data('description');
  let articleUrl = $(this).data('url');
  
  $('.container > h1').text(articleTitle);
  $('.container > p').text(articleDescription);
  $('.container > a').attr('href', articleUrl);


  console.log(articleTitle);
  console.log(articleDescription);
  console.log(articleUrl);

});

//Connect with the API
let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=c5dc5261b5f9400183af1f89eb538d77';

//Templating: (1)populates list of articles; (2) stores description and url as data attributes
let item = '';
$.get(url).then(function(data) {
  data.articles.forEach(function(article){
    item += `
      <article class="article" data-title="${article.title}" data-description="${article.description}" data-url="${article.url}">
        <section class="featuredImage">
          <img src="${article.urlToImage}" alt="" />
        </section>
        <section class="articleContent">
          <a href="#"><h3>${article.title}</h3></a>
          <h6>${article.publishedAt}</h6>
        </section>
        <div class="clearfix"></div>
      </article>`
      });

      $('#main').html(item);
});

