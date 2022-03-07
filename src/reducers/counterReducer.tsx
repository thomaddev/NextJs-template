import {HYDRATE} from "next-redux-wrapper";
import {actionTypes} from "../actions";

const initialState = {
  projectList: [],
  projectDetails: null
}

export default function reducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: action.payload
      }
    case actionTypes.FETCH_PROJECTS_DETAILS_SUCCESS:
      return {
        ...state,
        projectDetails: action.payload
      }
    default:
      break;
  }

  return state
}
