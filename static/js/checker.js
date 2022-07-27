function validateForm(alerts = false) {
    // function returns either 0 if all checks passed or a number of 1 to 10
    // with each number corresponding to each field.

    let symbol_allow_list = "ӘәҒғҚқҢңqwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбю";
    let number_allow_list = "1234567890";
    let special_allow_list = "«»,.\\-#№@&() ";
    let overall_allow_list = symbol_allow_list + number_allow_list + special_allow_list;
    let photo_types_allow_list = [".png", ".jpg", ".jpeg"]

    // defining what to put into alerts
    let empty_field_response = "Необходимо заполнить ";
    let name_input_empty_response = empty_field_response + "ФИО руководителя";
    let school_name_input_empty_response = empty_field_response + "название организации";
    let address_input_empty_response = empty_field_response + "юридический адрес";
    let email_input_empty_response = empty_field_response + "электронную почту";
    let phone_number_input_empty_response = empty_field_response + "номер телефона";
    let bank_name_input_empty_response = empty_field_response + "название банка";
    let bin_input_empty_response = empty_field_response + "БИН организации";
    let bik_input_empty_response = empty_field_response + "БИК организации";
    let iik_input_empty_response = empty_field_response + "ИИК организации";
    let file_empty_response = "Необходимо приложить фотографию фасада";

    let name_input_wrong_response = "Значение поля \"Фамилия Имя Отчество\"неверно. Поле может содержать только цифровые символы символы латиницы, кирилицы, казахские символы и символы «» , . \\ - # № @ & (). Пример: ТОО RS Solutions";
    let school_name_input_wrong_response = "Значение поля \"Название организации\"неверно. Поле может содержать только цифровые символы символы латиницы, кирилицы, казахские символы и символы «» , . \\ - # № @ & (). Пример: ТОО RS Solutions";
    let address_input_wrong_response = "Значение поля \"Юридический Адрес\"неверно. Поле может содержать только цифровые символы символы латиницы, кирилицы, казахские символы и символы «» , . \\ - # № @ & (). Пример: ТОО RS Solutions";
    let email_input_wrong_response = "Значение «Эл. почта *» не является правильным email адресом.";
    let phone_number_input_wrong_response = "номер телефона";
    let bank_name_input_wrong_response = "Значение поля \"Имя Банка\" неверно. Поле может содержать только символы латиницы, кирилицы, казахские символы";
    let bin_input_wrong_response = "Значение «БИН» должно быть числом и иметь 12 цифер.";
    let bik_input_wrong_response = "Значение «БИК» должно содержать минимум 8 символа.";
    let iik_input_wrong_response = "Значение «ИИК» должно содержать минимум 20 символов.";
    let file_wrong_response = "Только файлы .png .jpg и .jpeg разрешены";

  // getting values from the form into javascript
    let name_input = document.getElementById("name-input").value;
    let school_name_input = document.getElementById("school-name-input").value;
    let address_input = document.getElementById("address-input").value;
    let email_input = document.getElementById("email-input").value;
    let phone_number_input = document.getElementById("phone-number-input").value;
    let bank_name_input = document.getElementById("bank-name-input").value;
    let bin_input = document.getElementById("bin-input").value;
    let bik_input = document.getElementById("bik-input").value;
    let iik_input = document.getElementById("iik-input").value;
    let file_input = document.getElementById("file-uploader").value;
    
    wrong_ids = [];
    
    // running checks for empty fields
    if (name_input == "") {
        if (alerts == true) {
            alert(name_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(1);
    }
    if (school_name_input == "") {
        if (alerts == true) {
            alert(school_name_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(2);
    }
    if (address_input == "") {
        if (alerts == true) {
            alert(address_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(3);
    }
    if (email_input == "") {
        if (alerts == true) {
            alert(email_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(4);
    }
    if (phone_number_input == "") {
        if (alerts == true) {
            alert(phone_number_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(5);
    }
    if (bank_name_input == "") {
        if (alerts == true) {
            alert(bank_name_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(6);
    }
    if (bin_input == "") {
        if (alerts == true) {
            alert(bin_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(7);
    }
    if (bik_input == "") {
        if (alerts == true) {
            alert(bik_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(8);
    }
    if (iik_input == "") {
        if (alerts == true) {
            alert(iik_input_empty_response);
            alerts = false;
        }
        wrong_ids.push(9);
    }
    if (file_input == "") {
        if (alerts == true) {
            alert(file_empty_response);
            alerts = false;
        }
        wrong_ids.push(10);
    }

    // checking that everything is put in correctly to the format specified
    // name_input
    if (!validateWith(name_input, overall_allow_list)) {
        if (alerts == true) {
            alert(name_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(1);
    };

    // school_name_input
    if (!validateWith(school_name_input, overall_allow_list)) {
        if (alerts == true) {
            alert(school_name_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(2);
    };

    // address_input
    if (!validateWith(address_input, overall_allow_list)) {
        if (alerts == true) {
            alert(address_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(3);
    };

    // email_input
    if (!validateEmail(email_input)){
        if (alerts == true) {
            alert(email_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(4);
    };

    // phone_number_input
    if (!validateWith(phone_number_input, number_allow_list)) {
        if (alerts == true) {
            alert(phone_number_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(5);
    };

    // bank_name_input
    if (!validateWith(bank_name_input, symbol_allow_list)) {
        if (alerts == true) {
            alert(bank_name_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(6);
    };

    // bin_input
    if (!validateWith(bin_input, number_allow_list) || bin_input.length != 12) {
        if (alerts == true) {
            alert(bin_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(7);
    };

    // bik_input
    if (!validateWith(bik_input, number_allow_list + symbol_allow_list) || bik_input.length < 8) {
        if (alerts == true) {
            alert(bik_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(8);
    };

    // iik_input
    if (!validateWith(iik_input, number_allow_list + symbol_allow_list) || iik_input.length < 20) {
        if (alerts == true) {
            alert(iik_input_wrong_response);
            alerts = false;
        }
        wrong_ids.push(9);
    };

    // file input
    let file_extension = file_input.substr(file_input.length - 4);
    if (photo_types_allow_list.filter(e => e === file_extension).length == 0 || file_input.files.length > 1 || file_input.files[0].size > 2097152) {
        if (alerts == true) {
            alert(file_wrong_response);
            alerts = false;
        }
        wrong_ids.push(10);
    };
    return wrong_ids;
}

function validateWith (data, allow_list){
    for (var i = 0; i < data.length; i++) {
        if ( allow_list.indexOf(data.charAt(i)) == -1) {
            return false;
        };
    };
    return true;
}

// regex email validation
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// color input fields red or green depending on their correctness
function colorInputs(wrong_ids){
    let red = "#ff887d";
    let green = "#7dff9b";

    let ids = [ "dummy-entry",
                "name-input",
                "school-name-input",
                "address-input",
                "email-input",
                "phone-number-input",
                "bank-name-input",
                "bin-input",
                "bik-input",
                "iik-input",
                "file-uploader"];

    // we paint everything green
    for (var i = 1; i < ids.length; i++) {
        let id_to_change = ids[i];
        document.getElementById(id_to_change).style.backgroundColor = green;
    };
    // then take all the wrong ones and paint them red
    for (var i = 0; i < wrong_ids.length; i++) {
        let id_to_change = ids[wrong_ids[i]];
        document.getElementById(id_to_change).style.backgroundColor = red;
    };
    
};

// called when pressing "register" button
function register() {
    checkresult = validateForm(true);
    colorInputs(checkresult);
};

document.getElementById("registration-button").addEventListener("click", register);