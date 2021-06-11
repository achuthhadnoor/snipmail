const initialState = {
    name: '',
    email: '',
    trail: true,

}

const userRefucer = (prvState = initialState, { payload, type }) => {
    switch (type) {
        case 'CREATE_USER':

            return { ...payload.user }

        default:
            return prvState
    }
}

export default userRefucer;