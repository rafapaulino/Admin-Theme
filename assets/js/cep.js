;
(function(window, document) {
    'use strict';

    let cepApp = (function () {

        let $private = {};
        let $public = {};

        $public.maskAndSearch = function() {
            let zipInput = document.querySelectorAll('.zip-input');

            zipInput.forEach(zip => {
                let address = zip.getAttribute('data-address');
                let neighborhood = zip.getAttribute('data-neighborhood');
                let state = zip.getAttribute('data-state');
                let city = zip.getAttribute('data-city');

                //mask
                zip.addEventListener('input',function( event ) {
                    let value = event.target.value;
                    let newValue = value.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2");
                    
                    if (newValue.length > 9) {
                        newValue = newValue.substring(0,9,newValue);
                    }
                    event.target.value = newValue;
                });
                
                //ajax cep
                zip.addEventListener('blur',function( event ) {
                    let value = event.target.value;
                    $private.search(address, neighborhood, state, city, value);
                }, true);
            });
        };

        $private.search = function(address, neighborhood, state, city, zip) {
            let onlyNumbers = zip.replace(/\D/g, '');
            var regexZip = /^[0-9]{8}$/;

            if (onlyNumbers !== '' && regexZip.test(onlyNumbers)) {
                let url = 'https://viacep.com.br/ws/' + onlyNumbers + '/json/';

                axios.get(url)
                .then(function (response) {
                    let result = JSON.stringify(response.data);
                    let obj = JSON.parse(result);
                    
                    if (typeof obj === 'object') {
                        $private.setValue(address,obj.logradouro);
                        $private.setValue(neighborhood,obj.bairro);
                        $private.setValue(state,obj.localidade);
                        $private.setValue(city,obj.uf);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        };

        $private.setValue = function(target, value) {
            let element = document.getElementById(target);
            if (typeof(element) != 'undefined' && element != null) {
                element.value = value;
            }
        };

        return $public;
    })();

window.cepApp = cepApp;
cepApp.maskAndSearch();


})(window, document);