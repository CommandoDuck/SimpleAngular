/**
 * Created by Eric on 4/11/2016.
 */
angular.module("simpleApp", []).controller("AppController", function(){
    console.log('hi');
    var s_app = this;

    s_app.listItems = [
        {name: "Eric", done: true},
        {name: "Bob", done: false},
        {name: "Joe", done: true},
        {name: "Guy", done: false}
    ];

    s_app.upDateList = function(item){
        console.log(item);
    };

    s_app.addTodo = function () {
        var checkMark = false;
        if(s_app.markDone == true)
        {
            checkMark = true;
        } else
        {
            checkMark = false;
        }
        s_app.listItems.push({name:s_app.todoText, done: checkMark});
        s_app.todoText = '';
    };

    console.log(s_app.listItems);
});