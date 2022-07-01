import React from 'react'

const Switch = (props:any):JSX.Element => {
	return (
		<div className="grid grid-cols-2 form-check form-switch mt-4">
    		<div>
				<label className={`${props.error ? "error form-check-label inline-block text-white" : "form-check-label inline-block text-white"}`} htmlFor="flexSwitchCheckChecked">{props.title}</label>
			</div>
			<div>
				<input onChange={ () => props.setSwitch(props.currentStatus) } className="items-end ml-12 form-check-input appearance-none w-9  rounded-full float-left h-5 align-top bg-white bg-gray-300 bg-no-repeat bg-contain  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.currentStatus}/>
			</div>
		</div>
	)
}

export default Switch
