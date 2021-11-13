/* General Methods
Nearly all jQuery methods return a jquery object. This allows us to chain methods;

    $('p').addClass('accent').text('Sample Text')

 we can traverse from specific els;
    $('el').next() or $('el').prev(); $('el').parent()
    $('el').children('li');
    $('el').find('a') -> will iterate through children and children of children to find matches!
/*
/************** Element Creation
    In JS we typically create an el, add some value, classes, and append; 
    In jQuery we have a different work flow:
    $('el').append('<li class='accent'> I EXIST! </li>) -> BAM! li added to our el.
        ---> This even works with multiple matches and nested HTML;
    $('li').prepend('<input type='checkbox') -> adds a checkbox to the beginning of each li;
We can do this even simpler:
    $('<p class='accent'> I EXIST! </p>) 
        jQuery will make this element when it fails to find it;
    We add this el to the DOM by calling its appendTo method;
    appendTo works like append with reverse args:
         $(`<h1 class='accent'> New Title! </h1>`).appendTo('section');
         again it will append this to all matching  
    $('el').remove() -> call remove method on jQuery obj we want to remove;
    */
