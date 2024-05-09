interface UserI {
    id: string;
    password: string;
    email: string;
    phone: string | null;
    role: string;
    userId: string;
    firstLogin: string | null;
    active: boolean;
    createdAt: string;
    createdBy: string;
}

interface ResponseDataI {
    user: UserI;
    token: string;
}
