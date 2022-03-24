import moment from "moment";
import { useMediaQuery } from "react-responsive";


export default class Tools {

    static datetimeNow() {
        return moment().toDate();
    }

    static isMobileBrowser() {
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
        return isTabletOrMobile;
    }

}

