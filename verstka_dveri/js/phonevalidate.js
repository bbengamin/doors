$.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    },
    " Поле заполнено не корректно!");
$.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    },
    " Заполните это поле!!!");

