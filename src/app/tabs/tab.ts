import {tabKeyStore} from "./tab-store";
import {Editor} from "../editor/editor";

const template = `
   <textarea></textarea>
`;
function deactivateAllTabs() {
    for (let key in tabKeyStore) {
        tabKeyStore[key].deactivate();
    }
}

const parentElm = document.getElementsByClassName('tab-content-container')[0];
export class Tab {
    fileName: string;
    tabEl: Element;
    id: string;
    open: boolean = true;
    active: boolean = true;
    editor: Editor | undefined;
    contentElm: Element = document.createElement("div");
    constructor(id: string, tabEl: Element, fileName: string) {
        this.tabEl = tabEl;
        this.id = id;
        this.fileName = fileName;
        this.createTabContainer();
        this.initEditor();
    }
    createTabContainer() {
        this.contentElm.innerHTML = template;
        this.contentElm.setAttribute("id", this.id);
        this.contentElm.classList.add('tab-content');
        parentElm.appendChild(this.contentElm);
        this.activate();
    }
    activate() {
        deactivateAllTabs();
        this.contentElm.classList.remove('display-none');
    }
    deactivate() {
        this.contentElm.classList.add('display-none');
    }
    setFileName(filename: string) {
        this.fileName = filename;
        this.initEditor();
    }
    initEditor() {
        this.editor = new Editor(this.contentElm.querySelector('textarea'), this.fileName);
        // @ts-ignore
        this.contentElm.querySelector('textarea').focus();
    }
    kill () {

    }
}
