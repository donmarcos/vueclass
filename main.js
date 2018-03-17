new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!',
      link: 'www.google.com'
    }
  },
   methods: {

       sayHello: function (){
       	 return 'My Hello world';
       },
    }
})