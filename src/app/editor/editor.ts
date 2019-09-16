require('./editor.addons');
require('./editor.modes');

const CodeMirror = require('codemirror/lib/codemirror');
CodeMirror.modeURL = 'codemirror/mode/%N/%N.js';
export class Editor {
    fileName: string;
    textArea: Element | null;
    editor: any;
    constructor(textArea: Element | null, fileName: string) {
        this.fileName = fileName;
        this.textArea = textArea;
        console.log(this.textArea);
        this.init();
    }
    init() {
        const extension = this.fileName.slice(this.fileName.lastIndexOf('.') + 1);
        const extensionInfo = CodeMirror.findModeByExtension(extension);

        this.editor = CodeMirror.fromTextArea(this.textArea, {
            lineNumbers: true,
            theme: 'ambiance',
            autofocus: true,
            autoCloseBrackets: true,
            autoCloseTags: true,
            matchTags: true,
            matchBrackets: true,
            showTrailingSpace: true,
            extraKeys: {
                "Ctrl-Space": "autocomplete",
                "Ctrl-Q": (cm: any) =>  cm.foldCode(cm.getCursor())
            },
            mode: {name: extensionInfo.mode, globalVars: true},
            lineWrapping: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            styleActiveLine: {nonEmpty: true},
            lint: true
        });
        this.registerAutocompleteListener();
    }
    registerAutocompleteListener() {
        const keysToIgnore = [13, 8, 16, 37, 38, 39, 40, 17, 18, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 219, 221, 186, 27];
        this.editor.on('keyup', (cm: any, ev: KeyboardEvent) => {
            if (!cm.state.completionActive && keysToIgnore.indexOf(ev.keyCode) === -1) {
                cm.showHint({'completeSingle': false});
            } else if (cm.state.completionActive) {
                // cm.hideHint();
            }

        })
    }
}
