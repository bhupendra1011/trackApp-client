import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload }; // on  new sign up rebuilding state object
    default:
      return {};
  }
};

//fn to modify state
const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    // on sign up , modify state and say we are authenticated
    // if sign up fails, need to reflect an error msg
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went woring with sign in ",
      });
      console.log(error);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle sucess by updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

// initialValue
const defaultValue = {
  token: null,
  errorMessage: "",
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  defaultValue
);
