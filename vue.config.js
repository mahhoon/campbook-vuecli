module.exports = {
    //build時にファイルのパスを正しい場所にする https://cli.vuejs.org/config/#global-cli-config
    publicPath: './',

    css: {
        loaderOptions: {
            scss: {
                additionalData: `@use "@/assets/css/main.scss";`
            }
        }
    }
}