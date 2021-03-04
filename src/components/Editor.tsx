import React, { Component } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

// use from source
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Pagination from '@ckeditor/ckeditor5-pagination/src/pagination';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

const editorConfiguration = {
    plugins: [ Essentials, Bold, Italic, Paragraph, PageBreak, Pagination ],
    toolbar: [ 'bold', 'italic', 'pagebreak', 'previouspage', 'nextpage', 'pageNavigation' , '|'],
    pagination: {
        // A4
        pageWidth: '21cm',
        pageHeight: '29.7cm',

        pageMargins: {
            top: '20mm',
            bottom: '20mm',
            right: '12mm',
            left: '12mm'
        }
    },
    licenseKey: ''
};

class Editor extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 0,

        }
    }


    render() {
        return (
            <div className="App">
                <h2>CKEditor 5 using a custom build - decoupled editor</h2>

                <div className="document-editor">
                    <div className="document-editor__toolbar"></div>
                    <div className="document-editor__editable-container">
                        <CKEditor
                            onReady={ (editor: any) => {
                                console.log( 'Editor is ready to use!', editor );


                                (window as any).editor = editor;

                                // Add these two lines to properly position the toolbar
                                const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
                                toolbarContainer!.appendChild( editor.ui.view.toolbar.element );

                                // // Insert the toolbar before the editable area.
                                // editor.ui.getEditableElement().parentElement.insertBefore(
                                //     editor.ui.view.toolbar.element,
                                //     editor.ui.getEditableElement()
                                // );
                            } }
                            onError={ ( { willEditorRestart }: {willEditorRestart: any} ) => {
                                // If the editor is restarted, the toolbar element will be created once again.
                                // The `onReady` callback will be called again and the new toolbar will be added.
                                // This is why you need to remove the older toolbar.
                                if ( willEditorRestart ) {
                                    (window as any).editor.ui.view.toolbar.element.remove();
                                }
                            } }
                            onChange={ ( event: any, editor: any ) => {
                                const data = editor.getData({ pagination: true });
                                console.log( { event, editor, data } )
                            }
                            }
                            editor={ DecoupledEditor }
                            data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                            config={ editorConfiguration }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
