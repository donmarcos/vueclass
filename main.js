new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!',
      link: 'http://www.google.com',
      finishedLink: '<a href="http://google.com">Google</a>',
      counter: 0
    }
  },
   methods: {

       sayHello: function (){
         this.msg = "Hello! dude";
       	 return this.msg;
       },
       increase: function () {
       	 this.counter++;
       }

    }
})