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
           
            if (window.app.elementExists('date-mask')) {
                let datemask = new Cleave('.date-mask', {
                    date: true,
                    delimiter: '-',
                    datePattern: ['Y', 'm', 'd']
                });
            }

            if (window.app.elementExists('date-mask-ptbr')) {
                let datemask_ptbr = new Cleave('.date-mask-ptbr', {
                    date: true,
                    delimiter: '/',
                    datePattern: ['d', 'm', 'Y']
                });
            }

            if (window.app.elementExists('time-mask')) {
                let timemask = new Cleave('.time-mask', {
                    time: true,
                    timePattern: ['h', 'm', 's']
                }); 
            }           
        };

        $public.phoneMask = function() {
            
            if (window.app.elementExists('phone-mask-ptbr')) {
                let phone_ptbr = new Cleave('.phone-mask-ptbr', {
                    phone: true,
                    phoneRegionCode: 'BR'
                });
            }
        };

        $public.creditCardMask = function() {

            if (window.app.elementExists('credit-card-mask')) {
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
            if (window.app.elementExists('cpf-mask')) {
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
            if (window.app.elementExists('cnpj-mask')) {
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

        $public.editorInit = function() {
            tinymce.init({
                selector:'.text-editor',
                theme: 'silver',
                height: 500,
                mobile: { theme: 'mobile' },
                plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
                toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
                image_advtab: true,                
            });
        };

        $public.uploadInit = function() {

            let headers = {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            };

            if (window.app.elementExists('single-upload')) {

                let singleUploads = document.getElementsByClassName('single-upload');

                Array.from(singleUploads).forEach(function(single) {
                    
                    let url = single.getAttribute('data-url');
                    new Dropzone('.single-upload', { 
                        url: url,
                        method: "post",
                        paramName: "file",
                        maxFiles: 1,
                        headers: headers
                    });

                });
            }

            if (window.app.elementExists('multiple-upload')) {

                let multipleUploads = document.getElementsByClassName('single-upload');

                Array.from(multipleUploads).forEach(function(multiple) {
                    
                    let url = multiple.getAttribute('data-url');
                    new Dropzone('.multiple-upload', { 
                        url: url,
                        method: "post",
                        paramName: "file",
                        uploadMultiple: true,
                        headers: headers
                    });

                });
            }
        };

        $public.tagInputInit = function() {
            if (window.app.elementExists('tag-input')) {
                let elements = document.querySelectorAll('input.tag-input');
                Array.from(elements).forEach(function(input) {
                    let tagify = new Tagify(input);
                });
            }
        };

        $public.selectCombo = function() {
            $('.select-combo').select2();
            $('.select-multiple').select2({
                multiple: true
            });
        };

        $public.showYouTubePlayer = function() {
            let youtubeUrlInputs = document.querySelectorAll('input.youtube-url');
            Array.from(youtubeUrlInputs).forEach(function(input) {
                
                ['blur','keyup','keydown'].forEach(function(event) {
                    
                    input.addEventListener(event, function( event ) {
                        $private.constructYouTubePlayer(event.target);
                    }, true);

                });

                window.onload = function(e) { 
                    $private.constructYouTubePlayer(input);
                };

            });
        };

        $private.constructYouTubePlayer = function(input) {
            let url = input.value;
            let embed = input.getAttribute('data-embed');
            let iframe = document.getElementById(embed);

            if (url != undefined || url != '') {        
                let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                let match = url.match(regExp);
                
                if (match && match[2].length == 11) {
                    let url = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1';
                    let youtube = `<iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation" src="${url}"  width="500" height="265" frameborder="0" allowfullscreen></iframe>`;
                    iframe.innerHTML = youtube;
                }
            } else {
                iframe.innerHTML = '';
            }
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
    formApp.editorInit();
    formApp.uploadInit();
    formApp.tagInputInit();
    formApp.selectCombo();
    formApp.showYouTubePlayer();

})(window, document, jQuery);
