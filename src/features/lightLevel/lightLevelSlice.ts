import { createSlice } from "@reduxjs/toolkit";

export const lightLevelSlice = createSlice({
  name: "lightLevel",
  initialState: {
	index:0,
	nightVision:false,
	nightVisionError:false,
	duskTillDawn:false,
	duskTillDawnError:false,
	flashing:false,
	flashingError:false,
	timeLeft:0,
	timeLeftError:false,
	apiUrl:'https://backend.dev'
  },
  reducers: {
    increaseLevel: (state) => {
		state.index += 1
    },
	deacreaseLevel: (state) => {
		state.index -= 1
    },
	setNightVision: (state, action) => {
		state.nightVision = action.payload
	},
	setDuskTillDawn: (state, action) => {
		state.duskTillDawn = action.payload
	},
	setDuskTillDawnError: (state) => {
		state.duskTillDawnError = true
	},
	setFlashing: (state, action) => {
		state.flashing = action.payload
	},
	setFlashingError: (state) => {
		state.flashingError = true
	},
	setTimeLeft: (state, action) => {
		state.timeLeft = action.payload
	},
	setTimeLeftError: (state) => {
		state.timeLeftError = true
	},
	setNightVisionError: (state) => {
		state.nightVisionError = true
	}
  },
});

export const { increaseLevel, deacreaseLevel, setNightVision, setDuskTillDawn, setDuskTillDawnError, setFlashing, setFlashingError, setTimeLeft, setTimeLeftError, setNightVisionError } = lightLevelSlice.actions;

export default lightLevelSlice.reducer;
