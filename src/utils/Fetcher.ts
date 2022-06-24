//interface DeviceStatus {
//	status:string
//}

export class Fetcher {

	static request(url:string, data?:any):Promise<Response> {
		return fetch(url, {body:JSON.stringify(data)}).then((r)=>r.json())
	}

	static fetchTimeout = ( url:string, ms:number ) => {
		const controller = new AbortController();
		const promise = fetch(url, { signal: controller.signal });
		//const promise = Fetcher.fakeFetch() // only for tests
		const timeout = setTimeout(() => controller.abort(), ms);
		clearTimeout(timeout);
		return promise;
	};

	//static fakeFetch() {
	//	return fetch('localhost:3000')
	//	//Promise.resolve({"status":"ok"})
	//}

}
