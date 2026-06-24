import React, {FC, memo, ReactNode, useState} from 'react'

interface IProps {
    children?: ReactNode
}

const Release: FC<IProps> = memo(props => {
    const {children} = props
    const [msg, setMessage] = useState<string>('Release')

    return (
        <div className="">
            <h1>{msg}</h1>
        </div>
    )
})

export default Release
