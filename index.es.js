import { openBlock, createBlock, toDisplayString } from 'vue';

var script = {
  name: 'vue-component',
  data() {
    return {
      message:'hello vue component & rollup!'
    }
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, toDisplayString($data.message), 1 /* TEXT */))
}

script.render = render;
script.__file = "vue-component/vue-component.vue";

var index = {
    install(Vue,options){
        Vue.component("vue-component",script);
    }
};

export default index;
