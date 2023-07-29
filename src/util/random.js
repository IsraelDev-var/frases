export const getRandonPhrases = (list) => {
    const randonPhrases = Math.floor(Math.random() * list.length)
    return list[randonPhrases]
}