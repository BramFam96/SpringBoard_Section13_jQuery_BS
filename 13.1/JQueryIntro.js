/*
jQuery replaces the document methods we learned in DOM manipulation;
While it isn't as trending as it once was, it is used a 91% of the top 10,000 websites;

/**********************    jQuery HTML -> text, attributes, values;

We call the the jQuery object with eithr jQuery, or '$';
    */
$('p') || $('#content-wrapper')
/*
    These will work like querySelector AND querySelectorAll, returning any matches;
Accessing the element itself is done with:
   */ $('el').get(0)
// get returns an array of actual elements;
/*Typically we don't need this as we have methods to change our selected elements;
/**********************************IMPORTANT***********************************
All jQuery methods work as getters AND setters; 

    'Intuitive methods'
        $().text('newText?'); -> 'can return or overide text content on element';
        $().attr('attribute','val?'); -> 'can return or overide attributes';
        $().val('newval?'); -> 'ie $(input).val('') -> clears ALL inputs';
        $().eq(index); -> 'selects specific elements in the el array;'
/*These methods are all capable of bulk loading data -> we simply pass the data as an object;
/*******************************jQuery CSS / Classes */
/*
We can easily style element with the .css method;
    $('a').css('color') -> wll return our computed color, including CSS sourced colors;

    The .css method also accepts bulk data loading, we just use the syntax below:
    const styleObj = { color: 'red', background: 'black' };
    $('p').css(styleObj);
    BAM! all the paragraphs are styled;

Its not a good practice to directly change colors like this in js;
    More often we'll be adding classes that have predefined styles;
    for this we would simply use*/
//.addClass('name'); => 'does NOT override prior classes;'
// .removeClass('name');
//most commonly:
//   .toggleClass('name')
/*
 */
