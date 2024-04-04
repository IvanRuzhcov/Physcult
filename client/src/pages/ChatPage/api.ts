export const initChatFetch = async (obj:number) => {
    const response = await fetch(`/chat/${obj}`)
    return response.json()
};
