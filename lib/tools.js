import moment from "moment";

export default class Tools {

    static datetimeNow() {
        return moment().toDate();
    }
}

