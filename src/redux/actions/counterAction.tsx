import {actionTypes} from "@redux/actionType";

export const increaseCount = (count: number) => ({
  type: actionTypes.INCREASE_COUNT,
  payload: count
})

export const decreaseCount = (count: number) => ({
  type: actionTypes.DECREASE_COUNT,
  payload: count
})

export const resetCount = (count: number) => ({
  type: actionTypes.RESET_COUNT,
  payload: count
})

export const fetchProjects = () => ({
  type: actionTypes.FETCH_PROJECTS
})

export const fetchProjectsSuccess = (data: any) => ({
  type: actionTypes.FETCH_PROJECTS_SUCCESS,
  payload: data
})

export const fetchProjectsError = (data: any) => ({
  type: actionTypes.FETCH_PROJECTS_ERROR,
  payload: data
})


export const fetchProjectDetails = (data: any) => ({
  type: actionTypes.FETCH_PROJECTS_DETAILS,
  payload: data
})

export const fetchProjectDetailsSuccess = (data: any) => ({
  type: actionTypes.FETCH_PROJECTS_DETAILS_SUCCESS,
  payload: data
})

export const fetchProjectDetailsError = (data: any) => ({
  type: actionTypes.FETCH_PROJECTS_DETAILS_ERROR,
  payload: data
})
