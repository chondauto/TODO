
// var date1 = new Date();
// var date2 = new Date();
// date1.setMonth(10);
// date1.setDate(1);
// date2.setMonth(10);
// date2.setDate(14);
// var ds = new Array();
// function dates(date1, date2){
//     if((date2.getDate()-date1.getDate())>=7){
//         for(i=0;i<7;i++){
//             var date =new Date();
//             debugger;
//             date.setMonth(date2.getMonth());
//             date.setDate(date2.getDate()-i);
//             ds.push(date);
//         }
//     }
//     else if((date2.getDate()-date1.getDate())<7){
//         for(i=0;i<(date2.getDate()-date1.getDate());i++){
//             var date =new Date();
//             date.setMonth(date2.getMonth());
//             date.setDate(date2.getDate()-i);
//             ds.push(date); 
//         }
//     }
//     for(i=0;i<ds.length;i++){
//         console.log('thang: '+ ds[i].getMonth()+ ' ngay: '+ds[i].getDate());
//     }
// }
// dates(date1, date2);

// var getDatesBackToDate=function(date){
//     var arrDates = [],
//         today = new Date().valueOf(),
//         milliSecsDate = 1000 * 60 * 60 * 24,
//         timeDiff = Math.abs(today - date.valueOf()),
//         numOfDatesBetween = Math.ceil(timeDiff / milliSecsDate),
//         numOfDates = numOfDatesBetween > 7 ? 7 : numOfDatesBetween;
//         for(var i = 0; i < numOfDates; i++){
//             arrDates.push(formatDate(new Date(today - milliSecsDate * i)).date);
//         };
//     return arrDates;
// };
// var formatDate = function(date){
//     var splittedDate = date.toDateString().split(' ');
//     return {
//         date:splittedDate[1]+' '+splittedDate[2],
//         value: date
//     };
// };
// var isValidDate=function(date){
//     var dateOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
//         year = new Date(date).getYear();
//         month = new Date(date).getMonth();
//         date = new Date(date).getDate();
//         isLeapYear = false;
//         isValid = false;
//     //leap year
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         isLeapYear = true;
//         if(date <= 29 && month === 2) {
//             return true;
//         };
//     };
//     if(date <= dateOfMonth[month]) return true;
//     return false;
// };
// var dateInValid = 'Oct 32 2017';
// var dateValid = 'Nov 13 2017';

// var checkIfInValidDate = isValidDate(dateInValid);
// if(checkIfInValidDate){
//     console.log('list date ', getDatesBackToDate(new Date(dateInValid)));
// };
// var checkIfInValidDate = isValidDate(dateValid);
// if(checkIfInValidDate){
//     console.log('list date ', getDatesBackToDate(new Date(dateValid)));
// };

// var cat = {
//     id : new Date().valueOf(),
//     name : 'nali',
//     born : 2005,
//     getAge: function (currentYear){
//         return (currentYear-this.born);
//     }
// }
// var cats ={
//     cats: [],
//     addCat: function(newCat){
//         this.cats.push(newCat);
//         // return this.cats; 
//     },
//     findCatByName: function (name){
//         return this.cats.find(function(cat) {
//             return cat.name === name
//         });
//         // for(var i = 0; i < this.cats.length; i++){
//         //     if(this.cats[i].name=name){
//         //         return 'co con meo do';
//         //     }
//         // }
//     }
// }
// var a=cat;
// a.name='nali';
// a.born=2005;
// a.id=01;
// console.log(a.getAge(2017));
// var dscat= cats;
// dscat.addCat(a);
// console.log(dscat.findCatByName('nali'));

// click login => focus username
// onLoad => alert('Loading')
// onchange on username => - length <= 4 => so weak
//                      => - 4 < length <= 8 => normal
//                      => - length > 8 => so strong


// var loginBtn = document.getElementsByClassName('btn-login')[0];
// var username = document.getElementsByClassName('form')[0];
// console.log(loginBtn);
// loginBtn.addEventListener('focus', function() {
//     username.value = 'Insal';
//  })

// var doc = document;
// doc.addEventListener('onload',function(){
//     alert('Loading');
//  })
// var doc = document.getElementsByClassName('body')[0];
// doc.addEventListener('onLoad',function(){
//     doc.alert('Loading');
// })

// var loading = function(){
//     alert('loading...');
// }

// var usernameMsg = document.getElementsByClassName('username-msg')[0];
// username.addEventListener('keyup', function() {
//     var textLength = this.value.length;
//     var usernameErr = '';
//     if(textLength <= 4){
//         usernameErr = 'So weak';
//     }
//     else if(textLength < 8 && textLength >4){
//         usernameErr = 'Normal';
//     }
//     else {
//         usernameErr = 'So strong';
//     }
//     usernameMsg.innerHTML = usernameErr;
// })

$( document ).ready(function(){
    var loginBtn = $('.btn-login');
    var formContainer = $('.login');
    formContainer.on('click','.btn-login',function(){
        $(this).html('insal');
    })
    // loginBtn.click(function(){
    //     $(this).html('insal');
    // })
    var username = $('.form');
    formContainer.on('focus','.form', function() {
        $(this).val('Insal');
    })
    var usernameMsg = $('.username-msg');
    formContainer.on('keyup','.form', function() {
        var textLength = $(this).val().length;
        console.log(textLength);
        var usernameErr = $('');
        if(textLength <= 4){
            usernameErr = $('So weak');
        }
        else if(textLength < 8 && textLength >4){
            usernameErr = $('Normal');
        }
        else {
            usernameErr = $('So strong');
        }
        usernameMsg.innerHTML(usernameErr);
    })
})












