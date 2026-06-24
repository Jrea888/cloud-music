import React, {FC, memo, ReactNode, useState} from 'react'

interface IProps {
    children?: ReactNode
}

const Singer: FC<IProps> = memo(props => {
    const {children} = props
    const [msg, setMessage] = useState<string>('Singer')

    return (
        <div className="">
            <h1>{msg}</h1>
        </div>
    )
})

export default Singer
