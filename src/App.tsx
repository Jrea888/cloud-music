import React, {useCallback} from 'react'
import {Link, useRoutes} from 'react-router-dom'
import routerConfig from '@/router'
import {appShallowEqual, useAppDispatch, useAppSelector} from './store'
import {updateCount} from './store/modules/counter'

function App() {
    const {counter} = useAppSelector(
        state => ({
            counter: state.counter.count
        }),
        appShallowEqual
    )

    const dispatch = useAppDispatch()
    const addCountHandle = useCallback(() => {
        dispatch(updateCount(counter + 1))
    }, [counter, dispatch])

    return (
        <div className="App">
            <div>
                <h1>当前计数：{counter}</h1>
                <button onClick={addCountHandle}>点击增加</button>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div>
                    <Link to="/discover">发现音乐</Link>
                </div>
                <div>
                    <Link to="/music">我的音乐</Link>
                </div>
                <div>
                    <Link to="/focus">关注</Link>
                </div>
                <div>
                    <Link to="/download">下载客户端</Link>
                </div>
            </div>

            <div className="main">{useRoutes(routerConfig)}</div>
        </div>
    )
}

export default App
