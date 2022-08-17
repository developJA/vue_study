/** 
 * 3장. 인스턴스 & 컴포넌트 실습 예제
 * 1. 전역 컴포넌트와 지역 컴포넌트 등록하기
 * */ 


var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components : {
        // '컴포넌트이름' : 컴포넌트 내용,
        'todo-list' : {
            template : '<p>this is another local child comoponent</p>'
        },
    }

});

Vue.component('todo-footer', {
    template : '<p>This is another globbal child component</p>'
})

