new Vue({
  el: '#root',
    data() {
    return {
      counter: 0,
      secondCounter: 0,
      name: 'Max',
    }
  },
   computed: {
      output: function (){
        console.log('computed call here ')
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
      }
   },
   methods: {
       result: function (){
         console.log('result method call here')
         return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
       }
       
    },
    watch: {
    	counter: function(newVal, oldVal) {
    		// we set the vvue instance = vm
    		// since this is closure 
        console.log('watcher counter new:'+newVal+' oldVal:' + oldVal) 
    		var vm = this;
        var _self  = this ;
    		//setTimeout(function(){
        //      vm.counter = 0 ;
    		//} ,17000)

    	}
    }
})