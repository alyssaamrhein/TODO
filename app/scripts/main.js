_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};

//Dear diary, today was not productive


var todoTemplate   = _.template( $('#todo-template').html() );
var footerTemplate = _.template( $('#footer-template').html() );
// Don't remove anything above this line ----------------------- //


// These are examples, please remove and replace with your own code



// These are examples, please remove and replace with your own code


var time = $( "#todo-list li" ).length;

 $('#todoapp footer').html(footerTemplate({
     activeTodoCount: 0,
     completedTodos: 0,
     completedClass: 'hide'
 }));

 $('#todoapp footer').html(footerTemplate({
    activeTodoCount: itemsActive,
    completedTodos: itemsCompleted,
    completedClass: ifCompleted
  }));
}, 1000);

// this pulls the input in the main input putter

$('#new-todo').keypress(function(event) {
  var todo = $('#new-todo').val();
   if ( event.which == 13 ) {
     $('#todo-list').append(todoTemplate({
         id: 1,
         title: todo,
         completed: '',
         checked: ''
     }));
      $(this).val('');
    }
});


$('#todo-list').on('click', 'li input.toggle', function (event) {
  $(this).closest('li').toggleClass('completed');
});


$('#todo-list').on('click', 'li button.destroy', function (event) {
  $(this).parent().remove();
});

$( "#toggle-all" ).click(function() {
  if ($( "li" ).hasClass( "completed" ) === true) {
    $( "li" ).removeClass("completed");
    $(".toggle").prop("checked", false);
  } else {
    $( "li" ).addClass("completed");
    $(".toggle").prop("checked", true);
  }
});

// if else for toggley
// write update footer instead of set interval
// remove class add class for footer using hide
