app.views.TodoListView = function() {
  this.isClickCompleted = false;
  this.isClickAtive = false;
  this.isClickAll= true;
  this.handleEvent("insert");
  this.handleEvent("clickCompleted");
  this.handleEvent("clickAll");
  this.handleEvent("clickAtive");
  this.saveIntoLocal();
}
  // TodoListView.prototype.getTodo(){

  // }

app.views.TodoListView.prototype.insertTodo = function() {
  var self1 = this;
  $('body').on('keyup','.input', function(e) {
    if( e.keyCode === 13 && $(".input").val() != ""){
      app.a++;
      var todo = new app.models.Todo();
      //console.log(todo.id);
      $('.test').append($('.button').before('<li data-id="'+todo.id+'"style="display:block; font-size: 25px; border-bottom: 1px solid gray">'
      +'<input class="check-todo" type="checkbox">'
      +'<del>' +$('.input').val()+ '</del>'
      +'<input class="input-li" size="30" style = " height= 30px;diplay:flex; font-size: 25px;" type = "text" name = "" value="'+$('.input').val()+'">'
      +'<label class="label-li"  style="width:200px;">'+$('.input').val()+'</label>'
      +'<button class="button-li" style="position: absolute; right :10px;height= 30px; width=30">' + 'X' + '</button>'
      +'</li>')); 
      $('.input-li').hide();
      $('.button-li').hide();
      todo.text = $('.input').val();
      app.todoList.todos.push(todo);
      $('.input').val('');
      $(".span").html(app.a);
      var length = app.todoList.todos.length;
      //console.log(self.data("id"));
      var self = $(this).next('ul').children('li');
      //$(self).next('li').children('.input-li').hide();
      $('li').hide();
      // $(self).prev('li').children('.input-li').hide();
      // $('li').children('.check-todo').hide();
      // $('li').children('.label-li').hide();
      for (var i = 0; i < length; i++) {
          if (self.data('id') != app.todoList.todos[0].id) {
              self = self.prev('li');
          }
          else break;
      }
      console.log(self.data("id"));
      console.log(self1.isClickCompleted);
      console.log(self1.isClickAll);
      console.log(self1.isClickAtive);
      if(self1.isClickAll === true){
        //$('li').hide();
        for (var i = 0; i < length; i++) {
          if (app.todoList.todos[i].isCompleted === true) {
            $(self).show();
            console.log(self.data("id"));
            $(self).children('.check-todo').show();
            $(self).children('.label-li').hide();
            $(self).children('del').show();
          }
          if (app.todoList.todos[i].isCompleted === false) {
            $(self).show();
            $(self).children('.check-todo').show();
            $(self).children('.label-li').show();
            $(self).children('del').hide();
            console.log(self.data("id"));
          }
          if (i != length - 1) self = self.next('li');
        }
      }
      else if(self1.isClickAtive === true){
        //$('li').hide();
        for (var i = 0; i < length; i++) {
          if (app.todoList.todos[i].isCompleted === false) {
            $(self).show();
            $(self).children('.check-todo').show();
            $(self).children('.label-li').show();
            $(self).children('del').hide();
            console.log(self.data("id"));
          }
          if (app.todoList.todos[i].isCompleted === true) {
            $(self).hide();
          }
          if (i != length - 1) self = self.next('li');
        }
      }
      else if(self1.isClickCompleted === true){
        //$('li').hide();
        for (var i = 0; i < length; i++) {
          if (app.todoList.todos[i].isCompleted === true) {
            $(self).show();
            $(self).children('.check-todo').show();
            $(self).children('.label-li').hide();
            $(self).children('del').show();
            console.log(self.data("id"));
          }
          if (app.todoList.todos[i].isCompleted === false) {
            $(self).hide();
          }
          if (i != length - 1) self = self.next('li');
        }
      }
  }});
}
app.views.TodoListView.prototype.clickCompleted = function(){
  var self1 = this;
  $('body').on('click','.Completed', function() {
    self1.isClickCompleted = true;
    self1.isClickAll = false;
    self1.isClickAtive = false;
    var length = app.todoList.todos.length;
    //console.log(self.data("id"));
    var self = $(this).closest('.button').prev('li');
    //$(self).next('li').children('.input-li').hide();
    $('li').hide();
    // $(self).prev('li').children('.input-li').hide();
    // $('li').children('.check-todo').hide();
    // $('li').children('.label-li').hide();
    for (var i = 0; i < length; i++) {
        if (self.data('id') != app.todoList.todos[0].id) {
            self = self.prev('li');
        }
        else break;
    }
    console.log(self.data("id"));
    for (var i = 0; i < length; i++) {
      if (app.todoList.todos[i].isCompleted === true) {
        $(self).show();
        console.log(self.data("id"));
        $(self).children('.check-todo').show();
        $(self).children('.label-li').hide();
        $(self).children('del').show();
      }
      
      if (i != length - 1) self = self.next('li');
    }
  })
}
app.views.TodoListView.prototype.clickAll = function(){
  var self1 = this;
  $('body').on('click','.All', function() { 
    self1.isClickAll = true;
    self1.isClickCompleted = false;
    self1.isClickAtive = false; 
    var length = app.todoList.todos.length;
    //console.log(self.data("id"));
    var self = $(this).closest('.button').prev('li');
    //$(self).next('li').children('.input-li').hide();
    $('li').hide();
    // $(self).prev('li').children('.input-li').hide();
    // $('li').children('.check-todo').hide();
    // $('li').children('.label-li').hide();
    for (var i = 0; i < length; i++) {
        if (self.data('id') != app.todoList.todos[0].id) {
            self = self.prev('li');
        }
        else break;
    }
    console.log(self.data("id"));
    for (var i = 0; i < length; i++) {
      if (app.todoList.todos[i].isCompleted === true) {
        $(self).show();
        console.log(self.data("id"));
        $(self).children('.check-todo').show();
        $(self).children('.label-li').hide();
        $(self).children('del').show();
      }
      if (app.todoList.todos[i].isCompleted === false) {
        $(self).show();
        $(self).children('.check-todo').show();
        $(self).children('.label-li').show();
        $(self).children('del').hide();
        console.log(self.data("id"));
      }
      if (i != length - 1) self = self.next('li');
    }
  })
}
app.views.TodoListView.prototype.clickAtive = function(){
  var self1 = this;
  $('body').on('click','.Ative', function() {
    self1.isClickCompleted = false;
    self1.isClickAll = false;
    self1.isClickAtive = true; 
    var length = app.todoList.todos.length;
    //console.log(self.data("id"));
    var self = $(this).closest('.button').prev('li');
    //$(self).next('li').children('.input-li').hide();
    // $(self).prev('li').children('.input-li').hide();
    // $('li').children('.check-todo').hide();
    // $('li').children('.label-li').hide();
    // $('li').children('del').hide();
    $('li').hide();
    for (var i = 0; i < length; i++) {
        if (self.data('id') != app.todoList.todos[0].id) {
            self = self.prev('li');
        }
        else break;
    }
    console.log(self.data("id"));
    for (var i = 0; i < length; i++) {
      if (app.todoList.todos[i].isCompleted === false) {
        $(self).show();
        $(self).children('.check-todo').show();
        $(self).children('.label-li').show();
        $(self).children('del').hide();
        console.log(self.data("id"));
      }
      if (i != length - 1) self = self.next('li');
    }
  })
}
app.views.TodoListView.prototype.saveIntoLocal = function(){
  var todoListNew = JSON.stringify(app.todoList);
  localStorage.setItem('todoList', todoListNew);
  //var todoList = JSON.parse(localStorage.getItem('todoList'));

  console.log(localStorage.getItem('todoList'));
}

app.views.TodoListView.prototype.handleEvent = function(event) {
  switch(event){
    case "insert":{
      this.insertTodo();
      break;
    }
    case "clickCompleted":{
      this.clickCompleted();
      break;
    }
    case "clickAll":{
      this.clickAll();
      break;
    }
    case "clickAtive":{
      this.clickAtive();
      break;
    }
  }
}


