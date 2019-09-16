import './alertify.scss';
import './alertify-default-theme.scss';
const alerts: any = require('alertifyjs/build/alertify');
function parseMessage(message: string | any): string {
    return typeof message === 'string' ? message : JSON.stringify(message);
}
export default {
    showSuccessNotification: (message: string | any) => {
        alerts.success(parseMessage(message));
    },
    showErrorNotification: (message: string | any) => {
        alerts.error(parseMessage(message));
    },
    showNotification: (message: string | any) => {
        alerts.notify(parseMessage(message));
    },
    promptFileName: (success: Function, fail: Function) => {
        alerts.prompt('Enter File Name', '', success, fail).setting({
            'frameless': true,
            'basic': false,
            'transition': 'fade',
            'closableByDimmer': false
        });
    }
}
