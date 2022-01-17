;
(function(window, document) {
    'use strict';

    let imageEditor = (function () {

        let $public = {};
        let $private = {};

        $public.init = function() {
            if (window.app.elementExists('image-editor')) {
                
                let elements = document.getElementsByClassName('image-editor');
                let loop = 0;

                Array.from(elements).forEach(function(editor) {
                    let id = editor.getAttribute('id');
                    let path = editor.getAttribute('data-path');
                    let button = editor.getAttribute('data-button-save');
                    let imageName = 'Imagem ' + loop;
                    
                    $private.editor(id, path, imageName, button);

                    loop++;
                });
            }
        };

        $private.editor = function(id, path, imageName, button) {
            let imageEditor = new tui.ImageEditor('#' + id, {
                includeUI: {
                    loadImage: {
                        path: path,
                        name: imageName
                    },
                    menuBarPosition: 'left'
                },
                cssMaxHeight: 900,
                usageStatistics: false
            });
            window.onresize = function() {
                imageEditor.ui.resizeEditor();
            }

            $private.buttonSave(imageEditor, button, path);
        };

        $private.buttonSave = function(editor, button, path) {
            let buttonElement = document.getElementById(button);
            
            buttonElement.addEventListener("click", function(e) {
                e.preventDefault();
                let dataUri = editor.toDataURL();
                let blob = $private.dataURItoBlob(dataUri);
                let file = $private.createFileWithBlob(blob, path, blob.type);
                let url = e.target.getAttribute('href');

                $private.upload(url, file);
            });
        };

        $private.upload = function(url, file) {
            const formData = new FormData();
            formData.append("file", file);

            let headers = {};
            let csrf = document.querySelector('meta[name="csrf-token"]');
            
            if (csrf !== null) {
                headers = {
                    'X-CSRF-TOKEN': csrf.content
                };
            }

            axios.post(url, formData, { headers })
                .then(response => Swal.fire({title: 'Sucesso!',text: 'Arquivo enviado!'}));
        };

        $private.dataURItoBlob = function(dataURI) {
            var byteString = atob(dataURI.split(",")[1]);
            var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

            var arrayBuffer = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(arrayBuffer);
            
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([arrayBuffer], {type: mimeString });
        };

        $private.createFileWithBlob = function(blob, path, type) {
            return new File([blob], path, {
                type: type,
                lastModified: new Date(),
            });
        };

        return $public;
    })();

window.imageEditor = imageEditor;


})(window, document);