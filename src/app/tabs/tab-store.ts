import {Tab} from "./tab";

interface ITabKeyStore {
    [key: string]: Tab
}
export const tabKeyStore: ITabKeyStore = {};
export function generateId() {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( let i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
