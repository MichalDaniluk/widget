import { Fetcher } from '../utils/Fetcher'

export const toggleOption = (status:boolean):boolean => {
	return status ? false : true
}

export const getLevels = ():Array<number> => {
	return [0,1,3,10,50,100]
}

export const getApiPath = (): string => {
	return 'https://backend.dev'
}

export const setSwitchStatusFromDevice = (status:boolean, apiUrl:string, dispatch:Function, action:Function, actionError:Function) => {

		getData(`apiUrl/${status}`)
		.then(() => {
			dispatch(action(status))
			clearTimeout(time)
		})
		.catch(() => {
			dispatch(actionError())
		})

		const time = setTimeout(() => {
			dispatch(actionError())
		},5000)
}

export const simulateResponse = () => {
	return new Promise((resolve, reject) => {
		resolve({
			response: 'OK'
		})
	})
}

export const getData = (param:string) => {
	//const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	//const data = fetch( `${apiUrl}/${param}` )
	const data = simulateResponse()
	return data
}
