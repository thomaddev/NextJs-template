import {HYDRATE} from "next-redux-wrapper";
import {actionTypes} from "../actionType";

const initialState = {
  count: 0,
  projectList: [],
  projectDetails: null
}

export default function reducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }
    case actionTypes.INCREASE_COUNT:
      return {
        ...state,
        count: action.payload
      }
    case actionTypes.DECREASE_COUNT:
      return {
        ...state,
        count: action.payload
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
