import Vue from 'vue'
// import  VeuResource from 'vue-resourse'

// Vue.use(VeuResource);

Vue.directive('rainbow', {
  bind(el, binding, vnode){
    console.log(binding);
    if (binding.value) {
      el.style.backgroundColor = binding.value
    } else {
      el.style.backgroundColor = '#' + Math.random().toString().slice(2,8)
    }

  }
});
