import Link from 'next/link';
import React from 'react'

const fetchRepos = async () =>{
    const req = await fetch("https://api.github.com/users/bradtraversy/repos");
    const repos = await req.json();
    // await new Promise((resolve)=>setTimeout(resolve,5000))
    return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div>
      {
        repos.map((repo)=>{
            return(
                <Link href={`/code/repos/${repo.name}`}>
                    <div style={{border:"1px solid red",padding:"1rem",marginBottom:"1rem"}}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default ReposPage;