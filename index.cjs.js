'use strict';

var vue = require('vue');

var script = {
  name: 'vue-component',
  data() {
    return {
      message:'hello vue component & rollup!'
    }
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", null, vue.toDisplayString($data.message), 1 /* TEXT */))
}

script.render = render;
script.__file = "vue-component/vue-component.vue";

var index = {
    install(Vue,options){
        Vue.component("vue-component",script);
    }
};

module.exports = index;
