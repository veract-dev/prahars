export interface IResponse {
    status: number,
    message: string,
    data?: any
    statusCode?: number;
    description?: string;
    code?: string;
    dev_error?: any
}
