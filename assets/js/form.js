;
(function (window, document, $, undefined) {
    'use strict';

    let formApp = (function () {

        let $private = {};
        let $public = {};
        
        $public.validateMyForms = function() {
            let $form = $('.form-validate');

            let validator = $form.submit(function() {

            }).validate({
                ignore: "",
                errorPlacement: function(label, element) {
                    label.insertAfter(element);
                }
            });
        };

        $public.dateMask = function() {
           
            if ($private.elementExists('date-mask')) {
                let datemask = new Cleave('.date-mask', {
                    date: true,
                    delimiter: '-',
                    datePattern: ['Y', 'm', 'd']
                });
            }

            if ($private.elementExists('date-mask-ptbr')) {
                let datemask_ptbr = new Cleave('.date-mask-ptbr', {
                    date: true,
                    delimiter: '/',
                    datePattern: ['d', 'm', 'Y']
                });
            }

            if ($private.elementExists('time-mask')) {
                let timemask = new Cleave('.time-mask', {
                    time: true,
                    timePattern: ['h', 'm', 's']
                }); 
            }           
        };

        $public.phoneMask = function() {
            
            if ($private.elementExists('phone-mask-ptbr')) {
                let phone_ptbr = new Cleave('.phone-mask-ptbr', {
                    phone: true,
                    phoneRegionCode: 'BR'
                });
            }
        };

        $public.creditCardMask = function() {

            if ($private.elementExists('credit-card-mask')) {
                let cleave = new Cleave('.credit-card-mask', {
                    creditCard: true,
                    onCreditCardTypeChanged: function (type) {
                        // update UI ...
                        console.log(type);
                    }
                });
            }
        };

        $public.cpfMask = function() {
            if ($private.elementExists('cpf-mask')) {
                let cpfs = document.getElementsByClassName('cpf-mask');

                Array.from(cpfs).forEach(function(cpf) {
                    cpf.addEventListener('keyup', function(e) {
                        let value = e.target.value;

                        //Remove tudo o que não é dígito
                        value = value.replace(/\D/g,"");

                        //retira os caracteres se tiver passado de 11 itens
                        if (value.length > 11) {
                            value = value.substring(0, 11);
                        }
                        //Coloca um ponto entre o terceiro e o quarto dígitos
                        value = value.replace(/(\d{3})(\d)/,"$1.$2");
                        //Coloca um ponto entre o terceiro e o quarto dígitos
                        //de novo (para o segundo bloco de números)
                        value = value.replace(/(\d{3})(\d)/,"$1.$2");  
                        //Coloca um hífen entre o terceiro e o quarto dígitos    
                        value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); 

                        cpf.value = value;
                    });
                });
            }
        };


        $public.cnpjMask = function() {
            if ($private.elementExists('cnpj-mask')) {
                let cnpjs = document.getElementsByClassName('cnpj-mask');

                Array.from(cnpjs).forEach(function(cpf) {
                    cnpj.addEventListener('keyup', function(e) {
                        let value = e.target.value;

                        //Remove tudo o que não é dígito
                        value = value.replace(/\D/g,"");

                        //retira os caracteres se tiver passado de 14 itens
                        if (value.length > 14) {
                            value = value.substring(0, 14);
                        }

                        //Coloca ponto entre o segundo e o terceiro dígitos
                        value = value.replace(/^(\d{2})(\d)/,"$1.$2");
                        //Coloca ponto entre o quinto e o sexto dígitos            
                        value = value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); 
                        //Coloca uma barra entre o oitavo e o nono dígitos
                        value = value.replace(/\.(\d{3})(\d)/,".$1/$2"); 
                        //Coloca um hífen depois do bloco de quatro dígitos          
                        value = value.replace(/(\d{4})(\d)/,"$1-$2");

                        cnpj.value = value;
                    });
                });
            }
        };

        $public.moneyMask = function() {
           $('.money-mask-euro').maskMoney({thousands:'', decimal:'.', allowZero:true, suffix: ' €'});
           $('.money-mask-real').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
           $('.money-mask').maskMoney();
        };
        

        $private.elementExists = function(className) {
            let myElement = document.getElementsByClassName(className);
            
            if (myElement.length > 0)
            return true;
            else 
            return false;
        };

        return $public;
    })();

    // Global
    window.formApp = formApp;
    formApp.validateMyForms();
    formApp.dateMask();
    formApp.phoneMask();
    formApp.creditCardMask();
    formApp.cpfMask();
    formApp.cnpjMask();
    formApp.moneyMask();

})(window, document, jQuery);
