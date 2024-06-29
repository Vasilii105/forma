const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const datetime = document.getElementById('datetime');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const isValidName = (name) => {
    const nameRegex = /^[а-яА-ЯёЁ]+$/;
    return nameRegex.test(name);
  }; 

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isDateTimeValid = (datetime) => {
    const selectedDateTime = new Date(datetime);
    const currentDateTime = new Date();
    return selectedDateTime >= currentDateTime;
};
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const datetimeValue = datetime.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Обязательно для заполнения');
    } else {
        setSuccess(username);
    }


    if(phoneValue === '') {
        setError(phone, 'обязательно для заполнения');
    } else if (!/^(\+7|8)\d{10}$/.test(phoneValue)) {
        setError(phone, 'Введите номер телефона в формате +7XXXXXXXXXX или 8XXXXXXXXXX');
    } else {
        setSuccess(phone);
    }

    if(datetimeValue === '') {
        setError(datetime, 'Дата и время обязательны для заполнения');
    } else if (!isDateTimeValid(datetimeValue)) {
        setError(datetime, 'Выберите дату и время из настоящего или будущего');
    } else {
        setSuccess(datetime);
    }

    if (usernameValue === '') {
    setError(username, ' обязательно для заполнения');
  } else if (!isValidName(usernameValue)) {
    setError(username, 'Имя должно состоять только из кириллицы');
  } else {
    setSuccess(username);
  }
  

};