import * as I from './Info.styles'
import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js'

export interface InfoProps {
    title: string
    description: string
}

export default function Info(props: InfoProps){
    return <I.Wrapper>
        <I.InnerContent>
            <I.Icon>
                <Icon
                    color="#09f"
                    size = "48px"
                    path={mdiInformation}
                />
            </I.Icon>
            <I.Messages>
                <I.Title>{props.title}</I.Title>
                <p>{props.description}</p>
            </I.Messages>
        </I.InnerContent>
    </I.Wrapper>
}

