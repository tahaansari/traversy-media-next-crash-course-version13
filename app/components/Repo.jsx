// FETCH A REPO BY NAME

const Repo = async ({name}) => {
  const request = await fetch(`https://api.github.com/repos/bradtraversy/${name}`,{
    next:{
      revalidate:60
    }
  })
  const repo = await request.json();
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <span>{repo.forks_count} | {repo.stargazers_count} | {repo.watchers_count}</span>
    </div>
  )
}

export default Repo
