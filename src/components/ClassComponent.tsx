import React, { Component } from 'react'
import { Button } from 'antd'

type ClassProps = {
    name: string
}

type ClassState = {
    count: number
}

class ClassComponent extends Component<ClassProps, ClassState> {
    constructor(props: ClassProps) {
        super(props)
    }
    readonly state: ClassState = {
        count: 0
    }
    handleClick = (): void => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return  (
            <div>
                ClassComponent:
                <h5>name: {this.props.name}</h5>
                <h5>count: {this.state.count}</h5>
                <Button children="点击" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default ClassComponent