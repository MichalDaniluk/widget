import React from "react";

import { render, screen } from "@testing-library/react";

import { getLevels, getApiPath } from '../utils/Common'

test("shoud have api path", () => {
	const apiPath = getApiPath();
	const goodApiPath ='https://backend.dev'
	expect(apiPath).toEqual(goodApiPath)
});

test("shoud have 6 light level", () => {
	const levels = getLevels();
	expect(levels.length).toBe(6)
});

test("shoud steps light level", () => {
	const levels = getLevels();
	const goodLevels = [0,1,3,10,50,100]
	expect(levels).toEqual(goodLevels)
});
