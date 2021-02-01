import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload }; // on  new sign up rebuilding state object
    case "signout":
      return { token: null, errorMessage: "" };
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
        type: "signin",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went woring with sign up ",
      });
      console.log(error);
    }
  };
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // try to sign in
    // handle sucess by updating state
    // handle failure by showing error message
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went woring with sign in ",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    // sign out
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("Signin");
  };
};

// initialValue
const defaultValue = {
  token: null,
  errorMessage: "",
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "signin",
      payload: token,
    });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  defaultValue
);
