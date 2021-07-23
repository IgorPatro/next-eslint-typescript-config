import React from 'react'

interface Props {
  prop?: string
}

const Home: React.FC<Props> = ({ prop }: Props) => <h1>Hello world {prop}</h1>

Home.defaultProps = { prop: 'hello' }

export default Home
