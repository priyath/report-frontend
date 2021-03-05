import React, {Component} from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

// use from source
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import {editorConfiguration} from "./editor.config";
import {EditorState, Props} from "./EditorContainer";
import ReactJson from "react-json-view";

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

                <div className="main-container">
                    <div className="document-editor">
                        <h2>Report Creator Tool</h2>
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
                    <div>
                        <h2>Tract Information</h2>
                        <ReactJson src={this.props.dataSource} onSelect={(select) => {
                            (window as any).editor.execute( 'placeholder', { value: select.value} );
                            (window as any).editor.editing.view.focus();
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
