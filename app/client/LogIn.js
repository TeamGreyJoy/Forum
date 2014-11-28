function logIn() {

    var url = "https://api.parse.com/1/login";
    var method = "GET";
    var username = $('#username').val();
    var passwd = $('#passwd').val();
    var dataObj = {'username': username, 'password': passwd};
    var data = JSON.stringify(dataObj).replace(/:/g, "=").replace(/["'{}]/g, "").replace(/,/g, "&");
    console.log(data);
    Ajax.call(url, method, data, loadCategories());
}