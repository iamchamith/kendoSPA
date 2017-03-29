module App {
    export class login {
        constructor() {
            $('#loginzz').click(() => {
                $('#txtEmail').val('hi');
            });
        }
    }

    export class ContactUs {

        constructor() {
            $('#btnContactUs').click(() => {
                alert('submit success');
            });
        }
    }

    export class UserSettings {

        private init() {
            var app = (() => {
                var apiCalles = {
                    getItems: () => {
                        return $.ajax({
                            url: 'http://localhost:58261/api/some/getValues',
                            contentType: 'application/json',
                        });
                    }
                }
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
                    init: () => { listItems(); }
                }
            })();
            app.init();
        }

        constructor() {
            this.init();
        }
    }

    export class Cart {

        private init() {
            var app = (() => {
                var apiCalles = {
                    getItems: () => {
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
                }
                function listItems() {
                    var template = kendo.template($("#cartItem").html());
                    var result = template(apiCalles.getItems());
                    $("#cartContent").html(result); 
                }
                return {
                    init: () => { listItems(); }
                }
            })();
            app.init();
        }
        constructor() {
            this.init();
        }
    }
    export class Item {

        private init(e: number) {
            var viewModel = kendo.observable({
                id: 'item '+e
            });
            kendo.bind($("#item"), viewModel);
        }

        constructor(id: number) {
            this.init(id);
        }
    }
}