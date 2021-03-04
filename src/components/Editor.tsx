import React, {Component} from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

// use from source
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import {editorConfiguration} from "./editor.config";
import {EditorProps, EditorState, Props} from "./EditorContainer";

class Editor extends Component<Props, EditorState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 0,
        };
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

                                // properly position the toolbar
                                const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
                                toolbarContainer!.appendChild( editor.ui.view.toolbar.element );

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