import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screen, setScreen] = useState(undefined);
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (mode) => {
		setCurrentMode(mode);

		localStorage.setItem('themeMode', mode);

		setThemeSettings(false);
	};

	const setColor = (newColor) => {
		setCurrentColor(newColor);

		localStorage.setItem('themeColor', newColor);

		setThemeSettings(false);
	};

	const handleClick = (component) =>
		setIsClicked({ ...initialState, [component]: true });

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screen,
				setScreen,
				currentColor,
				currentMode,
				setColor,
				setMode,
				setThemeSettings,
				themeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
