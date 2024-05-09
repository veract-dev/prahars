export default interface BlogCreateRequestI {
    title: string;
    content: string;
    category?: string;
    thumbnail: string;
    createdBy: string;
    author: string;

};