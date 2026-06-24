import React, {FC, memo, ReactNode, useState} from 'react'

interface IProps {
    children?: ReactNode
}

const Download: FC<IProps> = memo(props => {
    const {children} = props
    const [msg, setMessage] = useState<string>('Download')

    return (
        <div className="">
            <h1>{msg}</h1>
        </div>
    )
})

export default Download
