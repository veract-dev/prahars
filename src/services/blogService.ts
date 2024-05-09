import { IResponse } from "@/types/response";
import { apiService } from "./apiService";
import FetchMethod from "@/types/api";
import { getItem, setItem } from "./dataService";
import BlogCreateRequestI from "@/types/blogCreateRequest";
import axios from "axios";


export const getAllBlogs = async (): Promise<IResponse> => {
    try {

        let res = await apiService(FetchMethod.POST, "blog/getall", { pageNumber: 1, pageSize: 1000 }, null);
        return res;

    } catch (e) {

        console.log("Error While Fetching Data" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e,

        }
        return response;
    }

};
export const getBlog = async (id: string): Promise<IResponse> => {
    try {

        console.log("id", id);
        const pattern: RegExp = /^\[id]$/;

        console.log("match", pattern.test(id))
        if (pattern.test(id) || id == null) {
            let response: IResponse = {
                status: 400,
                message: "Invalid Id",


            }
            return response;
        }
        let res = await apiService(FetchMethod.GET, `blog/get/${id}`, null, null);
        console.log("RES")
        console.log(res);
        return res;

    } catch (e) {

        console.log("Error While Fetching Data" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e,

        }
        return response;
    }

};

export const saveBlog = async (blogRequest: BlogCreateRequestI): Promise<IResponse> => {
    try {
        let res = await apiService(FetchMethod.POST, `blog/create`, blogRequest, null);
        return res;

    } catch (e) {

        console.log("Error While Fetching Data" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e,

        }
        return response;
    }
}


export const uploadImage = async (file: any) => {
    try {

        const formData = new FormData();
        formData.append('file', file);
        let res = await axios.post("https://api.praharssolution.in/api/file/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(res);
        return res
        // let res =  await apiService(FetchMethod.POST,"file/upload",file,{'Content-Type':'multipart/form-data;'});
        // return res;

    } catch (error) {
        console.log("Error While Fetching Data" + error);
        let response: IResponse = {
            status: 500,
            message: "" + error,

        }
        return response;

    }


};