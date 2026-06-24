import React from 'react'
import {Link, useRoutes} from 'react-router-dom'
import routerConfig from '@/router'

function App() {
    return (
        <div className="App">
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
