window.addEventListener("DOMContentLoaded", function () {
    var d = window.document,
        src = "../js/bower_components/requirejs/require.js",
        script = d.createElement('script');
    script.setAttribute("data-main", "../js/rjs_config/req_conf.js");
    script.src = src;
    d.body.appendChild(script);
});