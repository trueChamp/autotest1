function filter(list, whiteList) {
    return list.filter((mail) => !whiteList.includes(mail));
}


export default filter;