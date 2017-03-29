var App;
(function (App) {
    var login = (function () {
        function login() {
            $('#loginzz').click(function () {
                $('#txtEmail').val('hi');
            });
        }
        return login;
    }());
    App.login = login;
    var ContactUs = (function () {
        function ContactUs() {
            $('#btnContactUs').click(function () {
                alert('submit success');
            });
        }
        return ContactUs;
    }());
    App.ContactUs = ContactUs;
    var UserSettings = (function () {
        function UserSettings() {
            this.init();
        }
        UserSettings.prototype.init = function () {
            var app = (function () {
                var apiCalles = {
                    getItems: function () {
                        return $.ajax({
                            url: 'http://localhost:58261/api/some/getValues',
                            contentType: 'application/json',
                        });
                    }
                };
                function listItems() {
                    var viewModel = kendo.observable({
                        name: "chamith saranga",
                        email: "iamchamith@gmail.com",
                        genders: [{ text: 'Male', value: 0 }, { text: 'Female', value: 1 },],
                        gender: 0,
                        selectedDate: new Date(1988, 1, 24),
                        save: function (e) {
                            alert('done');
                        }
                    });
                    kendo.bind($("#settings"), viewModel);
                }
                return {
                    init: function () { listItems(); }
                };
            })();
            app.init();
        };
        return UserSettings;
    }());
    App.UserSettings = UserSettings;
    var Cart = (function () {
        function Cart() {
            this.init();
        }
        Cart.prototype.init = function () {
            var app = (function () {
                var apiCalles = {
                    getItems: function () {
                        return [
                            { id: 1, name: 'item one', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 2, name: 'item two', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 3, name: 'item three', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 4, name: 'item four', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 5, name: 'item five', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 6, name: 'item six', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' },
                            { id: 7, name: 'item seven', price: 12, image: 'http://www.e-cloth.com/admin/uploads/1/images/products/main/4GC3.png' }
                        ];
                    }
                };
                function listItems() {
                    var template = kendo.template($("#cartItem").html());
                    var result = template(apiCalles.getItems());
                    $("#cartContent").html(result);
                }
                return {
                    init: function () { listItems(); }
                };
            })();
            app.init();
        };
        return Cart;
    }());
    App.Cart = Cart;
    var Item = (function () {
        function Item(id) {
            this.init(id);
        }
        Item.prototype.init = function (e) {
            var viewModel = kendo.observable({
                id: 'item ' + e
            });
            kendo.bind($("#item"), viewModel);
        };
        return Item;
    }());
    App.Item = Item;
})(App || (App = {}));
//# sourceMappingURL=app.js.map