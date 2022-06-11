import { Image } from "./model/image.model";

export default class Utils {
    static fixMissingFields(img: Image): Image {
        img.created_at = this.fixDate(img.created_at);
        img.description = img.description || 'No description found';
        img.alt_description = img.alt_description || 'No description found';
        img.urls.raw = img.urls.raw + '&fit=crop&w=500&h=500';
        img.urls.regular = img.urls.regular + '&fit=crop&w=500&h=700';
        return img;
    }

    static fixDate(date: string): string {
        let tmpDate = new Date(date);
        let day: any = tmpDate.getDate();
        let month: any = tmpDate.getMonth() + 1;
        if (day < 10) {
            day = `0${tmpDate.getDate()}`;
        }
        if (month < 10) {
            month = `0${tmpDate.getMonth()}`;
        }

        return `${day}/${month}/${tmpDate.getFullYear()}`;
    }

    static getYearFromDate(date: string): string {
      if (!date) { return ''; }
      return date.split('/')[date.split('/').length - 1];
    }
}