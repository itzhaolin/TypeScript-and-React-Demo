import React, { useEffect, useCallback, useState } from 'react'

interface HelloProps {
    name: string // 没有问号 表示必传
    age?: number // 有问号表示可选
}

function HookComponent({name, age}: HelloProps) {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        setCount(1)
    }, [])

    return (
    <div>
        HookComponent:
        <span>{name}:{age}</span>
        <br/>
        <span>count: {count}</span>
    </div>
    )
}

export default HookComponent