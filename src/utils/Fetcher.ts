export class Fetcher {

	static request(url:string, data?:any) {
		return fetch(url, {body:JSON.stringify(data)}).then((r)=>r.json())
	}

	static fetchTimeout = ( url:string, ms:number ) => {
		const controller = new AbortController();
		const promise = fetch(url, { signal: controller.signal });
		const timeout = setTimeout(() => controller.abort(), ms);
		return promise.finally(() => clearTimeout(timeout));
	};

}
