// localStorageService.ts

export const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = <T>(key: string): T | null => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
        return JSON.parse(storedValue) as T;
    }
    return null;
};

export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
};

export const clearData = (): void => {
    localStorage.clear();
};