app.models.Todo = function(text, id, isCompleted){
    this.id = id || new Date().valueOf();
    this.text = text;
    this.isCompleted = isCompleted || false;
    //edit
}

app.models.Todo.prototype.editTodo = function(text){
    this.text = text;
}

app.models.Todo.prototype.setCompleted = function(isCompleted) {
    this.isCompleted = isCompleted;
}
app.models.Todo.prototype.getCompleted = function(){
    return this.isCompleted;
}

