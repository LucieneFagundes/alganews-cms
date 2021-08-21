import * as FD from './FieldDescriptor.style'

export interface FieldDescriptorProps{
    field: string
    value: React.ReactNode
}

export default function FieldDescriptor({field, value}: FieldDescriptorProps){
    return <FD.Wrapper>
        <FD.Field>{field}:</FD.Field>
        <FD.Value>{value}</FD.Value>    
    </FD.Wrapper>
}