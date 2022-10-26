const formatUserChat = (data, filterKey) => {
    let resData = [];
    let allChatKeys = Object.keys(data)?.filter((item) =>
        item?.includes(filterKey)
    );

    allChatKeys.forEach((key) =>
        resData.push({ chatId: key, ...(data[key] ?? {}) })
    );
    return resData;
};

export default formatUserChat;
