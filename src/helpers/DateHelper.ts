import Moment from 'moment';
import 'moment/locale/pt-br';

Moment.locale('pt-br');

function getTimeFromNow(date:string) {
    return Moment(date).fromNow();
}

function formatTimeAsString(date:string) {
    return Moment(date).format('DD/MM/YYYY');
}

function formatDateTimeAsString(date:string) {
    return Moment(date).format('DD/MM/YYYY HH:mm:ss');
}

export {
    getTimeFromNow,
    formatTimeAsString,
    formatDateTimeAsString,
};
