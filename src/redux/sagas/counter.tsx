import {put, call, takeEvery, all} from 'redux-saga/effects';
import {
  fetchProjectsError,
  fetchProjectDetailsError
} from '@redux/actions';
import {actionTypes} from "@redux/actionType";


function* increaseCount() {
  try {
    console.log('increaseCount')
    // const res = yield call(apiHelper.fetchProjects, 'facebook')
    // yield put(fetchProjectsSuccess(res.data))
  } catch (error) {
    yield put(fetchProjectsError(error))
  }
}

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
    takeEvery(actionTypes.INCREASE_COUNT, increaseCount),
    takeEvery(actionTypes.DECREASE_COUNT, increaseCount),
    takeEvery(actionTypes.RESET_COUNT, increaseCount),
    takeEvery(actionTypes.FETCH_PROJECTS, fetchProjects),
    // takeEvery(FETCH_PROJECTS_DETAILS, fetchProjectDetails)
  ])
}
