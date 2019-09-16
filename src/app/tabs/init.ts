import './tabs.scss';
import './tabs-dark.scss';
import './tab-content.scss';
import stateManager from '../storage/state/state-manager';
import {generateId, tabKeyStore} from "./tab-store";
import alerts from '../alerts/alerts';
import {Tab} from "./tab";
import fileExtentions from '../files/file-extentions';
// const loadTab = import(/*webpackChunkName: "tab"*/'./tab');
const ChromeTabs: any = require('chrome-tabs');
const tabs = new ChromeTabs();
let newFile = false;

function readConfig(config: any) {
    console.log('tab-config', [config]);
}

function tabChangeHandler(e: any) {
    const id: string = e.detail.tabEl.getAttribute("data-tab-id");
    if (tabKeyStore[id]) {
        tabKeyStore[id].activate();
    }
}
function newTabHandler(e: any) {
    const id = generateId();
    if (newFile) {
        let filename = 'Untitled';
        alerts.promptFileName(
            (ev: Event, val: string) => {
                if (checkFile(val)) instantiateNewTab(e.detail.tabEl, id, val);
                else {
                    tabs.removeTab(e.detail.tabEl);
                    alerts.showErrorNotification('Invalid File / Not supported file-extension');
                }
            },
            (ev: Event) => tabs.removeTab(e.detail.tabEl)
        );
        newFile = false;
    }
    hideDefaultContent();
}
function instantiateNewTab(tab: Element, id: string, fileName: string) {
    tabs.updateTab(tab, {title: fileName, favicon: null, id: id});
    tabKeyStore[id] = new Tab(id, tab, fileName);
/*    loadTab.then((module: any) => {
        let Tab = module.Tab;
        console.log(Tab);
    });*/
}
function removeTabHandler(e: any) {
    const tabEl: Element = e.detail.tabEl;
    if (tabEl.getAttribute("data-tab-id")) {
        tabKeyStore[tabEl.getAttribute("data-tab-id") as string].deactivate();
    }
}
function tabReorderHandler(e: any) {
    console.log(e);
}
function hideDefaultContent() {
    // @ts-ignore
    document.querySelector('.water-mark').classList.add('display-none');
}
function showDefaultContent() {
    // @ts-ignore
    document.querySelector('.water-mark').classList.remove('display-none');
}

function checkFile(fileName: string): boolean {
    let val = fileName, m, mode, spec;
    if (m = /.+\.([^.]+)$/.exec(val)) {
        return fileExtentions.indexOf(m[1]) !== -1;
    }
    return false;
}

export default {
    initTabs: (el: Element, success?: any, error?: any) => {
        try {
            // Listen if a new file is created by this way so as to prompt for the file name
            el.addEventListener('dblclick', (event: Event) => newFile = true);
            tabs.init(el);
            readConfig(stateManager.getStateConfig('tabs'));
            el.addEventListener("activeTabChange", tabChangeHandler);
            el.addEventListener("tabAdd", newTabHandler);
            el.addEventListener("tabRemove", removeTabHandler);
            el.addEventListener("tabReorder", tabReorderHandler);
        } catch (e) {
            return error(e);
        }
        return success({});
    }
}
