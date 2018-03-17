new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!',
      link: 'http://www.google.com'
    }
  },
   methods: {

       sayHello: function (){
       	 return 'My Hello world';
       },
    }
})