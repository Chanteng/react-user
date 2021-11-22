export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({ ...user, timestamp: getFirestore().FieldValue.serverTimestamp() })
      .then(() => {});
  };
};

// export const addUser = (newUser) => {

//     return {
//         type: "ADD_USER",
//         payload: newUser
//     };
// };

export const deleteUser = (userId) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {});
  };
};

// export const deleteUser = (userId) => {
//   return {
//     type: "DELETE_USER",
//     payload: userId,
//   };
// };

export const editUser = (userId, updatedUsers) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(userId)
      .update(updatedUsers)
      .then(() => {});
  };
};

// export const editUser = (userId, updatedUsers) => {
//   return {
//     type: "EDIT_USER",
//     payload: { userId, updatedUsers },
//   };
// };

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy("timestamp", "asc")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          console.log(users);
          dispatch({ type: "SET_ALL_USERS", payload: users });
        },
        (error) => {}
      );
  };
};