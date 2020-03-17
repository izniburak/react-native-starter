export const APP_STATUS = 'APP_STATUS'
export const SET_DATA = 'SET_DATA'
export const APP_STATUS_TYPE = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
}

export const appStatus = status => ({
  type: APP_STATUS,
  status,
})

export const setData = payload => ({
  type: SET_DATA,
  payload,
})
