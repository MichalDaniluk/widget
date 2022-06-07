import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setDuskTillDawn, setDuskTillDawnError } from '../features/lightLevel/lightLevelSlice'
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

	Fetcher.fetchTimeout( `${apiUrl}/${status}`, 5000 )
	.then(response => response.json())
	.then(()=> dispatch(action(status)))
	.catch(() => {
		dispatch(actionError())
	});
}
