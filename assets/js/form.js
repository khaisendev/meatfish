$(document).ready(function() {
  $('#name').on('input', function() {
    var $this = $(this);
    var inputVal = $this.val();
    if (inputVal.length > 0) {
      var firstChar = inputVal.charAt(0).toUpperCase();
      var restOfString = inputVal.slice(1).toLowerCase();
      $this.val(firstChar + restOfString);
    }
  });
});
$(document).ready(function() {
  $('.application__form-input').keydown(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var inputs = $(this).closest('form').find(':input');
      var nextIndex = inputs.index(this) + 1;
      if (nextIndex < inputs.length) {
        inputs[nextIndex].focus();
      }
    }
  });
});

const form = document.querySelector('.application__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.application__form');
validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите email',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    // console.log('Validation passes and form submitted', event);
    let formData = new FormData(event.target);
    console.log(...formData);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }
    xhr.open('POST', '../../mail.php', true);
    xhr.send(formData);
    event.target.reset();
  });

