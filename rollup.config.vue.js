import path from "path";
import vue from 'rollup-plugin-vue'

export default {
    input :path.resolve(__dirname, "./vue-component/index.js"),
    output:{
        file:"index.es.js",
        format:"es",
    },
    plugins: [
        vue(),
    ],
}
