import { LOGIN, LOGOUT, CHANGE_LANGUAGE } from "../types";
import { storage } from "../../../helpers/storage";
import {language} from '___mocks__/languages';
const reducers = (state, action) => {
    switch (action.type) {
        case LOGIN:
            if (!storage.get("user")) {
                storage.set({...action.payload}, "user", true)
                storage.set({localization:language["tr"], language:"tr"}, "userSettings", true)
            }

            return {
                ...state,
                currentUser: storage.get("user"),
                userSettings: storage.get("userSettings"),
                isLoggedIn: true,
            };
        case CHANGE_LANGUAGE:
            storage.set({userSettings: { localization:language[action.payload.language], language:action.payload.language }}, "userSettings", true)
            return {
                ...state,
                ...storage.get("userSettings"),
            };
        case LOGOUT:
            storage.clearAppStorage();

            return {
                ...state,
                currentUser: null,
                userSettings: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default reducers;
