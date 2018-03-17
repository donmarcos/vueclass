new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!'
    }
  },
   methods: {

       sayHello: function (){
       	 return this.msg;
       },
    }
})