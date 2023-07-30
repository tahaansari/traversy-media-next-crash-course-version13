// FETCH A REPO BY NAME

const Repo = () => {
    const fetch = fetch("https://api.github.com/users/bradtraversy/repos/50projects50days")
  return (
    <div>
      <h2>Repo component</h2>
    </div>
  )
}

export default Repo
