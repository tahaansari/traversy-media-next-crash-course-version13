import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'

import Link from 'next/link'

const RepoPage = ({params:{name}}) => {
  return (
    <div>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Link href="/code/repos">Go Back..</Link>
        <Repo name={name}></Repo>
      </Suspense>
      <Suspense fallback={<div>Loading repo dirs...</div>}>
        <RepoDirs name={name}></RepoDirs>
      </Suspense>
    </div>
  )
}

export default RepoPage
