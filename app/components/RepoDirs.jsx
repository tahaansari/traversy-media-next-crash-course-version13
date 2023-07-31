// GET REPO DIRS BY NAME

import Link from 'next/link';
import React from 'react'
import { resolve } from 'styled-jsx/css';
const RepoDirs = async ({name}) => {
    const request = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`)
    const repoContent = await request.json();
    await new Promise((resolve)=>setTimeout(resolve,5000))
    const dirs = repoContent.filter(content=>content.type === "dir");
  return (
    <div>
      <h2>Directories</h2>
      <ul>
        {dirs.map(dir=>{
            return <li>
                <Link href={`/code/repo/${name}/${dir.path}`}>
                    {dir.path}
                </Link>
            </li>
        })}
      </ul> 
    </div>
  )
}

export default RepoDirs
