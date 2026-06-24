import React, {FC, memo, ReactNode, useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = memo(props => {
    const {children} = props
    const [msg, setMessage] = useState<string>('Discover')

    return (
        <div>
            <h1>{msg}</h1>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Link to="/discover/recommend">推荐</Link>
                <Link to="/discover/ranking">排行榜</Link>
                <Link to="/discover/songs">歌曲</Link>
                <Link to="/discover/podcast">播客</Link>
                <Link to="/discover/singer">歌手</Link>
                <Link to="/discover/release">新碟上架</Link>
            </div>
            <div className="" style={{marginLeft: '12px'}}>
                <Outlet />
            </div>
        </div>
    )
})

export default Discover
