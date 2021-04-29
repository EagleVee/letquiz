import mockStore from "redux-mock-store";
import AuthActions from "Redux/Actions/AuthActions";
import { INITIAL_STATE } from "../App/Redux/Reducers/AuthReducer";
const store = mockStore({
  auth: INITIAL_STATE,
});

describe("Testing the sign in authentication", () => {
  it("test login", async () => {
    await store.dispatch(
      AuthActions.login("thanhdatba12@gmail.com", "password123"),
    );
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("Testing reducers after user LOG OUT", () => {
  it("test logout", () => {
    expect(store.auth).toMatchSnapshot();
  });
});
