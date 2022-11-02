export const getChatId = (user1, user2) => {
    let user1Id = user1?.uid ?? user1?.id;
    let user2Id = user2?.uid ?? user2?.id;
    if (String(user1Id).length !== String(user2Id).length) {
        if (user1Id > user2Id) return `${user1Id}${user2Id}`;
        else return `${user2Id}${user1Id}`;
    } else if (String(user1Id).localeCompare(String(user2Id)) > 0) {
        return `${user1Id}${user2Id}`;
    } else return `${user2Id}${user1Id}`;
};
