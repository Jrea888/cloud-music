import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'

// 样式引入
import 'normalize.css'
import './assets/css/index.less'

import App from '@/App'
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallbackRender={() => <div>页面加载错误了！</div>}>
                {/* 懒加载路由 所以使用Suspense组件 */}
                <Suspense
                    fallback={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                fontSize: '16px'
                            }}
                        >
                            加载中...
                        </div>
                    }
                >
                    <Provider store={store}>
                        <App />
                    </Provider>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>
)
