$('document').ready(function(){

  function Story(data){
    this.image_url = data.image_url;
    this.title = data.title;
    this.description = data.description;
    this.keyword = data.keyword;
    this.horns = data.horns;
  }
  Story.prototype.render = function (){
    let wholeStory = $(`
    <div class="">
      <h2></h2>
      <img/>
      <p></p>
    </div>
    `).clone();

    wholeStory.find('img').attr('src', this.image_url);
    wholeStory.find('h2').text(this.title);
    wholeStory.find('p').text(this.description);
    wholeStory.addClass(this.keyword);
    // wholeStory.find('p').text(this.keyword);
    // wholeStory.find('p').text(this.horns);




    $('#photo-template').append(wholeStory);
  }



  $.get('data/page-1.json')
    .then( data => {

      let seen = {};
      // {'unicorn': true, 'UniWhal':true}
      data.forEach(element => {
        let story = new Story(element);
        story.render();
        // if the keyword in the list, skip
        // else add it
        // IF you use an array: 
        if (!seen[element.keyword] ){
          $('#choose').append(`<option value='${element.keyword}'>` + element.keyword + '</option>' );
          seen[element.keyword]=true;
        }
        
      });
    });

  $('#choose').on('change', (val) => {
    let selectedVal = val.target.value;
    if(selectedVal === 'default'){
      $('div').show();
    }
    else{
      console.log(selectedVal);
      $('div').hide();
      $(`.${selectedVal}`).fadeIn();
    }
  });

});
