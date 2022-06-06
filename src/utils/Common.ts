export const toggleOption = (status:boolean):boolean => {
	return status ? false : true
}

export const getLevels = ():Array<number> => {
	return [0,1,3,10,50,100]
}

export const getApiPath = (): string => {
	return 'https://backend.dev'
}
