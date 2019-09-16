import ElectronStore from "electron-store";
const store = new ElectronStore();

export default {
    getStateConfig: (configName: string): any => {
        return store.get(`states.${configName}`, null);
    },
    setStateConfig: (configName: string, config: Object) => {
        store.set(`states.${configName}`, config);
    }
}
