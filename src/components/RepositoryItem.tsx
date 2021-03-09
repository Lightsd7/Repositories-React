interface RepositoryItemProps {
  repository: {
    description: string;
    name: string;
    html_url: string;
    owner: {
      avatar_url: string;
    }
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <a href={props.repository.html_url}>
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