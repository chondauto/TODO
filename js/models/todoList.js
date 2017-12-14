app.models.TodoList = function(){
    this.todos = [];
    //delete
    //add
    //filter
    //clearCompleted
    //toggleAllTodos
}
app.models.TodoList.prototype.deleteTodo = function(id){
    var indexDeleteTodo = '';
    var index = this.todos.find(function(todo,index){
        indexDeleteTodo = index;
        return todo.id === id;
    })
    this.todos.splice(indexDeleteTodo,1);
}
app.models.TodoList.prototype.addTodo = function(todo) {
    this.todos.push(todo);
}
app.models.TodoList.prototype.filter = function(){
    return this.todos.filter(function(todo){
        return todo.isCompleted === true;
    });
}
app.models.TodoList.prototype.findTodoByID = function(id){
    return this.todos.find(function(todo){
        return todo.id = id;
    })
}
app.models.TodoList.prototype.clearCompleted = function(){
    var length = this.todos.length;
    for(var i = 0; i<lendth;i++){
        if(this.todos[i].isCompleted === true) this.todos.splice(i,1);
    }
}
