export function RepositoryItem(props) {
  return (
    <li>
      <a href={props.repository.owner.html_url}>
        <img src={props.repository.owner.avatar_url} />
        <strong>{props.repository.name}</strong>
        { props.repository.description
          ? (
            <p>{props.repository.description}</p>
          )
          : (
            <i>Repositório sem descrição</i>
          )}

        {/* <p>{props.repository.description ?? 'Repositório sem descrição'}</p> */}

      </a>
    </li>
  );
}