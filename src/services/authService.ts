import { IResponse } from "@/types/response";
import { apiService } from "./apiService";
import FetchMethod from "@/types/api";
import { getItem, setItem } from "./dataService";


export const login = async (email: string, password: string): Promise<IResponse> => {
    try {
        if (!email) {
            let response: IResponse = {
                status: 400,
                message: "invalid email"
            }
            return response;
        }
        if (!email) {
            let response: IResponse = {
                status: 400,
                message: "invalid password"
            }
            return response;
        }
        let res = await apiService(FetchMethod.POST, "auth/login", { email: email, password: password }, null);
        return res;
    } catch (e) {

        console.log("Error While Login" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e
        }
        return response;
    }

};

export const verifyLogin = (): boolean => {
    return getUser() ? true : false;
};



export const logout = (): void => {

};

export const setUser = (user: UserI): void => {
    let userId = process.env.USER_ID ?? "testUser"
    setItem(userId, user);

};

export const getUser = (): UserI | null => {
    let userId = process.env.USER_ID ?? "testUser"
    let user = getItem<UserI>(userId);
    return user;

};
export const getToken = (): string | null => {
    let tokenId = process.env.TOKEN_ID ?? "testToken"
    let token = getItem<string>(tokenId);
    return token;
};


export const setToken = (token: string): void => {
    let tokenId = process.env.TOKEN_ID ?? "testToken"
    setItem(tokenId, token);

};
