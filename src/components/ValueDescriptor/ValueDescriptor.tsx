import { HTMLAttributes } from 'react'
import * as VD from './ValueDescriptor.styled'

export interface ValueDescriptorProps extends HTMLAttributes<HTMLDivElement>{
    description: string
    value: number
    color: 'primary' | 'default'
    isCurrency?: boolean

}

export default function ValueDescriptor(props:ValueDescriptorProps){
    return <VD.Wrapper color={props.color}>
        <span className="Description">{ props.description }:</span>
        <div>
            {
                props.isCurrency &&
                    <span className="Currency">{'R$'}</span>
            }
            
            <span className="Value">
                {props.value.toLocaleString('pt-br')}
            </span>
        </div>
    </VD.Wrapper>
}