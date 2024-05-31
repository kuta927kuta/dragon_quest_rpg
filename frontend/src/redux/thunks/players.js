import axios from "axios";
import {
  fetchPlayersRequest,
  fetchPlayersSuccess,
  fetchPlayersFailure,
  allLoadingOn,
  allLoadingOff,
} from "../actions";

export const getPlayers = () => async (dispatch) => {
  dispatch(fetchPlayersRequest());
  // dispatch(allLoadingOn());
  try {
    const response = await axios.get("/api/players");
    dispatch(fetchPlayersSuccess(response.data));
    // dispatch(allLoadingOff());
  } catch (error) {
    dispatch(fetchPlayersFailure(error.message));
    // dispatch(allLoadingOff());
  }
};
