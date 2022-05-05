export const getFromStorage = (key : string): string | null => {
    const topic: string | null = localStorage.getItem(key)
    return topic
}

export const setToStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value)
}