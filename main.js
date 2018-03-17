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
         this.msg = "Hello! dude";
       	 return this.msg;
       },

    }
})