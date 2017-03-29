/// <reference path="app.ts" />
var base;
(function (base) {
    var templateLoader = (function ($, host) {
        return {
            loadExtTemplate: function (path, callback) {
                var tmplLoader = $.get(path)
                    .success(function (result) {
                    $("#content").html(result);
                    callback();
                })
                    .error(function (result) {
                    alert("Error Loading Templates -- TODO: Better Error Handling");
                });
                tmplLoader.complete(function () {
                    $(host).trigger("TEMPLATE_LOADED", [path]);
                });
            }
        };
    })(jQuery, document);
    $(document).ready(function () {
        var router = new kendo.Router({
            init: function () {
                templateLoader.loadExtTemplate("template/login.template.html", function () {
                    new App.login();
                });
            }
        });
        router.route("/login", function () {
            templateLoader.loadExtTemplate("template/login.template.html", function () {
                new App.login();
            });
        });
        router.route("/about", function () {
            templateLoader.loadExtTemplate("template/settings.template.html", function () {
                new App.UserSettings();
            });
        });
        router.route("/contact", function () {
            templateLoader.loadExtTemplate("template/contact.template.html", function () {
                new App.ContactUs();
            });
        });
        router.route("/forgetpassword", function () {
            templateLoader.loadExtTemplate("template/forgetpassword.tamplate.html", function () {
            });
        });
        router.route("/cart", function () {
            templateLoader.loadExtTemplate("template/cart.template.html", function () {
                new App.Cart();
            });
        });
        router.route("/item/:id", function (id) {
            templateLoader.loadExtTemplate("template/viewitem.template.html", function () {
                new App.Item(id);
            });
        });
        router.start();
    });
})(base || (base = {}));
//# sourceMappingURL=base.js.map