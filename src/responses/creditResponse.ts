import AbstractResponse from "./abstractResponse";

export default class CreditResponse extends AbstractResponse {
    getDailyCreditsRemaining(): number {
        return this.getRawResponse().dailyCreditsRemaining;
    }

    getDailyCreditsLimit(): number {
        return this.getRawResponse().dailyCreditsLimit;
    }
}