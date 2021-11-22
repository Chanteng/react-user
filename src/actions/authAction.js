export const registerWithEmail = (email, password) => {
    return (dispatch, state, {getFirebase}) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}