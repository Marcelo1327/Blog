CKEDITOR.editorConfig = function( config ) {
    config.extraPlugins = 'base64image';
    config.toolbar = [
        { name: 'insert', items: ['Image'] }
    ];
};
