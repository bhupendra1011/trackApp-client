import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return {};
  }
};

//fn to modify state
const actionsObj = {};
// initialValue
const defaultValue = {
  isSignedIn: false,
};

export const { Provider, Context } = createDataContext(
  authReducer,
  actionsObj,
  defaultValue
);
