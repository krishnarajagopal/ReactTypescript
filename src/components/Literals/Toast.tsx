import React from 'react'
type VerticalPosition = 'top' | 'bottom' | 'center'
type HorizontalPosition = 'left' | 'right' | 'center'
type PositionProps = {
        Position: Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'> | 'center'
}
const Toast = ({ Position }: PositionProps) =>
{
        return (
                <div>

                        The Position is {Position}
                </div>
        )
}

export default Toast