import {put, call, takeEvery, all} from 'redux-saga/effects';
import {actionTypes} from "../actions";

import {
  fetchProjectsError,
  fetchProjectDetailsError
} from '../actions';

function* fetchProjects() {
  try {
    // const res = yield call(apiHelper.fetchProjects, 'facebook')
    // yield put(fetchProjectsSuccess(res.data))
  } catch (error) {
    yield put(fetchProjectsError(error))
  }
}

// function* fetchProjectDetails({payload}) {
function* fetchProjectDetails() {
  try {
    // const contributorList = yield call(apiHelper.fetchContributors, payload.contributors_url)
    // yield put(fetchProjectDetailsSuccess({
    //   name: payload.name,
    //   description: payload.description,
    //   contributorList: contributorList.data
    // }))
  } catch (error) {
    yield put(fetchProjectDetailsError(error))
  }
}

export default function* projectsSaga() {
  yield all([
    takeEvery(actionTypes.FETCH_PROJECTS, fetchProjects),
    // takeEvery(FETCH_PROJECTS_DETAILS, fetchProjectDetails)
  ])
}
