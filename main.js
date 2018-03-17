new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!',
      link: 'http://www.google.com',
      finishedLink: '<a href="http://google.com">Google</a>'
    }
  },
   methods: {

       sayHello: function (){
         this.msg = "Hello! dude";
       	 return this.msg;
       },

    }
})