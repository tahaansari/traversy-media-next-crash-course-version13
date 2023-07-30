import React from 'react'
import Repo from '@/app/components/Repo'

const RepoPage = ({params:{name}}) => {
  return (
    <div>
      <h1>Repo page - {name}</h1>
      <Repo></Repo>
    </div>
  )
}

export default RepoPage
