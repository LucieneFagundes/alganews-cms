import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { ComponentMeta } from '@storybook/react';
import { useMemo } from 'react';
import { Column, useTable } from 'react-table';
import Table, { } from '../components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

type Post = {
  id: number
  title: string
  views: number
  author: {
    name: string
    avatar: string
  }
  conversions: {
    thousands: number
    percentage: number
  }
}

export function Default() {

  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      },
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'React.js vs. React Native: a REAL diferença entre os dois',
        views: 985415
      },
      {
        author: {
          name: 'Daniel Bonifacio',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      }
    ],
    []
  )

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: '',
        accessor: 'id',
        Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09F'} />
      },
      {
        Header: () => <div style={{textAlign: 'left'}}>Artigo</div>,
        accessor: 'title',
        width: 320,
        Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img width={24} height={24} src={props.row.original.author.avatar} alt={props.row.original.author.name} />
          {props.value}</div>
      },
      {
        Header: () => <div style={{textAlign: 'right'}}>Views</div>,
        accessor: 'views',
        Cell: (props) => <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          {props.value.toLocaleString('pt-br')}
        </div>
      },
      {
        Header: () => <div style={{textAlign: 'left'}}>Conversões</div>,
        accessor: 'conversions',
        Cell: (props) => <div style={{ display: 'flex', gap: 8, fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          <span>{props.value.thousands}k</span>
          <span style={{ color: '#09F' }}>{props.value.percentage}%</span>
        </div>
      },
      {
        id: Math.random().toString(),
        Header: () => <div style={{textAlign: 'right'}}>Ações</div>,
        Cell: () => <div style={{ display: 'right' }}>
          todo: ações
        </div>
      },
    ],
    []
  )

  const instance = useTable<Post>({ data, columns })
  return <Table<Post> instance={instance} />
}

export function WithoutData() {

  const data = useMemo<Post[]>(
    () => [],
    []
  )

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: '',
        accessor: 'id',
      },
      {
        Header: () => <div style={{textAlign: 'left'}}>Artigo</div>,
        accessor: 'title',
      },
      {
        Header: () => <div style={{textAlign: 'right'}}>Views</div>,
        accessor: 'views',
      },
      {
        Header: () => <div style={{textAlign: 'left'}}>Conversões</div>,
        accessor: 'conversions',
      },
      {
        id: Math.random().toString(),
        Header: () => <div style={{textAlign: 'right'}}>Ações</div>,
      },
    ],
    []
  )

  const instance = useTable<Post>({ data, columns })
  return <Table<Post> instance={instance} />
}