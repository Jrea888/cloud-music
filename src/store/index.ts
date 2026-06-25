import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import {shallowEqual, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

type DispatchType = typeof store.dispatch
type GetStateType = typeof store.getState
type RootState = ReturnType<GetStateType>

export const useAppDispatch: () => DispatchType = useDispatch
// 函数调用签名，指定state类型为RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const appShallowEqual = shallowEqual

export default store
