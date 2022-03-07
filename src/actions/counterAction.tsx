export const actionTypes = {
  FETCH_PROJECTS: 'FETCH_PROJECTS',
  FETCH_PROJECTS_SUCCESS: 'FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_ERROR: 'FETCH_PROJECTS_ERROR',
  FETCH_PROJECTS_DETAILS: 'FETCH_PROJECTS_DETAILS',
  FETCH_PROJECTS_DETAILS_SUCCESS: 'FETCH_PROJECTS_DETAILS_SUCCESS',
  FETCH_PROJECTS_DETAILS_ERROR: 'FETCH_PROJECTS_DETAILS_ERROR',
}

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
