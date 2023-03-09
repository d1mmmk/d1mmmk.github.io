
export default class HttpRequest<T> {
    readonly controller: AbortController = new AbortController();
    readonly signal: AbortSignal = this.controller.signal;
    readonly request: Promise<Response>;

    constructor(input: RequestInfo | URL, init?: RequestInit) {
        const params = Object.assign(
            init || {},
            { signal: this.signal }
            // you can add custom headers here
        );
        this.request = fetch(input, params);
    }

    public abort(): void {
        this.controller.abort();
    }

    public async getResponse(): Promise<any> {
        return await this.request;
    }

    public async getJson(): Promise<T> {
        const response =  await this.request;
        const json = await response.json();
        return json;
    }

}