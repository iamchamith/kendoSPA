/// <reference path="app.ts" />
module base {
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
                    })
                tmplLoader.complete(function () {
                    $(host).trigger("TEMPLATE_LOADED", [path]);
                });
            }
        };
    })(jQuery, document);

    $(document).ready(() => {

        var router = new kendo.Router({
            init: function () {
                templateLoader.loadExtTemplate("template/login.template.html", () => {
                    new App.login();
                });
            }
        });

        router.route("/login", function () {
            templateLoader.loadExtTemplate("template/login.template.html", () => {
                new App.login();
            });
        });

        router.route("/about", function () {
            templateLoader.loadExtTemplate("template/settings.template.html", () => {
                new App.UserSettings();
            });
        });

        router.route("/contact", function () {
            templateLoader.loadExtTemplate("template/contact.template.html", () => {
                new App.ContactUs();
            });
        });

        router.route("/forgetpassword", () => {
            templateLoader.loadExtTemplate("template/forgetpassword.tamplate.html", () => {
            });
        });
        router.route("/cart", () => {
            templateLoader.loadExtTemplate("template/cart.template.html", () => {
              new App.Cart();
            });
        });
        router.route("/item/:id", (id: number) => {
            templateLoader.loadExtTemplate("template/viewitem.template.html", () => {
                new App.Item(id);
            });
        });
        router.start();
    });
}