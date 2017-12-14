app.views.TodoView = function() { 
    this.handleEvent("Hover");
    this.handleEvent("Select");
    this.handleEvent("Edit");
    this.handleEvent("ClickLi");
    this.handleEvent("ClickCheckbox");
    this.handleEvent("Delete");
}
app.views.TodoView.prototype.getTodo = function(self) {
    var text = self.val();
    var id = self.closest('li').data("id");
    return {text,id};
}
app.views.TodoView.prototype.selectTodo = function() {    
    $('body').on('dblclick','.label-li', function(){
        $(this).prev('.input-li').show();
        $(this).prev('.input-li').prop("size", 42);
        $(this).hide();
        $(this).next('.button-li').hide();
        $(this).prev('del').hide();
    })
    $('body').on('dblclick','del', function(){
        $(this).next('.input-li').show();
        $(this).next('.input-li').prop("size", 42);
        $(this).hide();
        $(this).next('.button-li').hide();
        $(this).next('.label-li').hide();
    })
}
app.views.TodoView.prototype.ClickCheckboxTodo = function () {
    $('body').on('click', '.check-todo', function () {
        var length = app.todoList.todos.length;
        if ($(this).closest('li').children('.input-li').prop("size") === 30) {
            for (var i = 0; i < length; i++) {
                var id = $(this).closest('li').data("id");
                if (app.todoList.todos[i].id === id && app.todoList.todos[i].isCompleted === false) {
                    app.a--;
                    app.todoList.todos[i].isCompleted = true;
                }
                else if (app.todoList.todos[i].id === id && app.todoList.todos[i].isCompleted === true) {
                    app.a++;
                    app.todoList.todos[i].isCompleted = false;
                }
            }
            // var self = $(this).closest('li');
            // console.log(self.data("id"));
            // $('li').children('.check-todo').hide();
            // $('li').children('.label-li').hide();
            // for (var i = 0; i < length; i++) { 
            //     if(self.data('id') != app.todoList.todos[0].id) {
            //         self = self.prev('li');  
            //     }
            //     else break;
            // }
            // console.log(self.data("id"));
            // for (var i = 0; i < length; i++) { 
            //     if (app.todoList.todos[i].isCompleted === true){ 
            //         console.log(self.data("id"));
            //         $(self).children('.check-todo').show();
            //         $(self).children('.label-li').hide();
            //         $(self).children('del').show();
            //     }
            //     if(app.todoList.todos[i].isCompleted === false){
            //         $(self).children('.check-todo').show();
            //         $(self).children('.label-li').show();
            //         $(self).children('del').hide();
            //         console.log(self.data("id"));
            //     }
            //     if(i != length-1) self = self.next('li');
            // }
        }
        $("span").html(app.a);
    })
}
app.views.TodoView.prototype.removeSelect = function(self1) {
    if ($(self1).children('.input-li').prop("size") === 30) {
        var length = app.todoList.todos.length;
        //console.log(self.data("id"));
        var self = $(self1);
        $(self1).next('li').children('.input-li').hide();
        $(self1).prev('li').children('.input-li').hide();
        $('li').children('.check-todo').hide();
        $('li').children('.label-li').hide();
        for (var i = 0; i < length; i++) {
            if (self.data('id') != app.todoList.todos[0].id) {
                self = self.prev('li');
            }
            else break;
        }
        console.log(self.data("id"));
        for (var i = 0; i < length; i++) {
            if (app.todoList.todos[i].isCompleted === true) {
                console.log(self.data("id"));
                $(self).children('.check-todo').show();
                $(self).children('.label-li').hide();
                $(self).children('del').show();
            }
            if (app.todoList.todos[i].isCompleted === false) {
                $(self).children('.check-todo').show();
                $(self).children('.label-li').show();
                $(self).children('del').hide();
                console.log(self.data("id"));
            }
            if (i != length - 1) self = self.next('li');
        }
    }    
}
app.views.TodoView.prototype.ClickLi = function() {
    var self = this;
    $('body').on('click','li', function() {
        self.removeSelect(this);
    })
    $('body').on('dblclick','li', function() {
        self.removeSelect(this);
    })
}
app.views.TodoView.prototype.hoverButtonTodo = function() {
    $('body').on('mouseenter','li', function() {
        if($(this).children('.input-li').attr("size")==30){
            $(this).children('.button-li').show();
        }
    });
    $('body').on('mouseleave','li', function() {
        if($(this).children('.input-li').attr("size")==30){
            $(this).children('.button-li').hide();
        }
    });
}
app.views.TodoView.prototype.editTodo = function() {
    var self = this;
    $('body').on('keyup','.input-li', function(e) {
        if( e.keyCode === 13){
            var id = $(this).closest('li').data("id");
            var length = app.todoList.todos.length;
            var a;
            for(var i=0;i<length;i++){
                if(app.todoList.todos[i].id===id) {
                    app.todoList.todos[i].text=self.getTodo($(this)).text;
                    a=i;
                }
            }
            var text = self.getTodo($(this)).text;
            console.log(app.todoList.todos);
            var todo = new app.models.Todo(id,text,app.todoList.todos[a].isCompleted);
            if(todo.getCompleted() === true){
                $(this).prop("size", 30);
                $(this).prev('del').html(text).show();  
                $(this).next('.label-li').html(text);
            }
            else {
                $(this).prop("size", 30);
                $(this).next('.label-li').html(text).show();
                $(this).prev('del').html(text);
            }
            $(this).hide();
        }
    })
}
app.views.TodoView.prototype.deleteTodo = function() {
    var self = this;
    $('body').on('click','.button-li', function() {
        var id = $(this).closest('li').data("id");
        var length = app.todoList.todos.length;
        for(var i = 0; i<length; i++)
        if(app.todoList.todos[i].isCompleted === false) {app.a--;}
        app.todoList.deleteTodo(id);
        $(this).closest("li").hide();
        $(".span").html(app.a);
    });
}

app.views.TodoView.prototype.renderTodo = function() {
    var todo = new Todo();
    return todo.text;
}
app.views.TodoView.prototype.handleEvent = function(event) {
    switch(event){
        case "Select":{
            this.selectTodo();
            break;
        }
        case "Edit":{
            this.editTodo();
            break;
        }
        case "ClickLi":{
            this.ClickLi();
            break;
        }
        case "Hover":{
            this.hoverButtonTodo();
            break;
        }
        case "Delete":{
            this.deleteTodo();
            break;
        }
        case "ClickCheckbox":{
            this.ClickCheckboxTodo();
            break;
        }
    }
}