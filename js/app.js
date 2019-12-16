'use strict'

$('document').ready(function(){
    
    
    function Story(data){
        this.image_url = data.image_url;
        this.title = data.title;
        this.description = data.description;
        this.keyword = data.keyword;
        this.horns = data.horns;
    }
    Story.prototype.render = function (){
        let wholeStory = $('<div> <h2 class="hi"></h2> <img/> <p></p> </div>').clone();

    wholeStory.find('img').attr('src', this.image_url);
    wholeStory.find('h2').text(this.title);
    wholeStory.find('p').text(this.description);
    wholeStory.find('p').text(this.keyword);
    wholeStory.find('p').text(this.horns);



    
    $('#photo-template').append(wholeStory);
  }
  
  
    
$.get('data/page-1.json')
.then( data => {

    data.forEach(element => {
        let story = new Story(element);
        story.render();
        $('#choose').append('<option>' + element.keyword + '</option>' );

     
        
       
    });
});

});

