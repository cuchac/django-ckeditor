/*
* Embed Media Dialog based on http://www.fluidbyte.net/embed-youtube-vimeo-etc-into-ckeditor
*
* Plugin name:      mediaembed
* Menu button name: MediaEmbed
*
* Youtube Editor Icon
* http://paulrobertlloyd.com/
*
* @author Fabian Vogelsteller [frozeman.de]
* @version 0.5
*/
( function() {
    CKEDITOR.plugins.add( 'mediaembed',
    {
        icons: 'mediaembed', // %REMOVE_LINE_CORE%
        hidpi: true, // %REMOVE_LINE_CORE%
        init: function( editor )
        {
           var me = this;
           CKEDITOR.dialog.add( 'MediaEmbedDialog', function (instance)
           {
              return {
                 title : editor.lang.mediaembed.title,
                 minWidth : 550,
                 minHeight : 200,
                 contents :
                       [
                          {
                             id : 'iframe',
                             expand : true,
                             elements :[{
                                id : 'embedArea',
                                type : 'textarea',
                                label : editor.lang.mediaembed.pasteCode,
                                'autofocus':'autofocus',
                                setup: function(element){
                                },
                                commit: function(element){
                                }
                             },{
                                id : 'example',
                                type : 'html',
                                html : editor.lang.mediaembed.example,
                                setup: function(element){
                                },
                                commit: function(element){
                                }
                              }]
                          }
                       ],
                  onOk: function() {
                        var div = instance.document.createElement('div');
                        div.setHtml(this.getContentElement('iframe', 'embedArea').getValue());
                        instance.insertElement(div);
                  }
              };
           } );

            editor.addCommand( 'MediaEmbed', new CKEDITOR.dialogCommand( 'MediaEmbedDialog',
                { allowedContent: 'iframe[*]' }
            ) );

            editor.ui.addButton( 'MediaEmbed',
            {
                label: editor.lang.mediaembed.title,
                command: 'MediaEmbed',
                toolbar: 'mediaembed'
            } );
        }
    } );
} )();
