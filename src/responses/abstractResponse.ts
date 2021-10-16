export default abstract class AbstractResponse {
    rawResponse: any;

    constructor(rawResponse: any) {
        this.rawResponse = rawResponse;
    }

    getRawResponse() {
        return this.rawResponse;
    }
}