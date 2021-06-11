const initialState = {
    name: '',
    email: '',
    trail: true,

}

const userRefucer = (prvState, { payload, type }) => {
    switch (type) {
        case 'CREATE_USER':

            return { ...payload.user }

        default:
            break;
    }
}

export default userRefucer;