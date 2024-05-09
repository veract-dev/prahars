import FetchMethod from "@/types/api";
import { IResponse } from "@/types/response";

export const apiService = async (apiMethod: FetchMethod, path: string, body: any | null, header: any | null): Promise<IResponse> => {
    let url = process.env.BASE_URL + path;
    if (body) {
        let res = await fetch(url, {
            method: apiMethod, headers: header ?? { 'Content-Type': 'application/json' },
            body: JSON.stringify(body), cache: "no-cache"

        });

        let data = await res.json() as IResponse;
        return data;
    } else {
        let res = await fetch(url, {
            method: apiMethod, headers: header ?? { 'Content-Type': 'application/json' },
            cache: "no-cache"
        });

        let data = await res.json() as IResponse;
        return data;
    }

}