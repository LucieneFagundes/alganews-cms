import Button from '../Button/Button'
import * as C from './Confirm.styles'

export interface ConfirmProps {
    title: string
    onCancel: () => any
    onConfirm: () => any
}

export default function Confirm(props: ConfirmProps){
    return <C.Wrapper>
            <C.Title>{props.title}</C.Title>
            <C.Choice>
                <Button variant='danger' label='Não' onClick={props.onCancel}></Button>
                <Button variant='primary' label='Sim' onClick={props.onConfirm}></Button>
            </C.Choice>
    </C.Wrapper>
}