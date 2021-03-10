import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import React, { useState, useEffect } from "react";
import { FiCheckSquare } from "react-icons/fi";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
  }
}

export function RepositoryList() {
  const [repositories, setRapositories] = useState<Repository[]>([]);
  const [newRepository, setnewRepository] = useState("");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("https://api.github.com/orgs/abr3dev/repos")
  //     .then((response) => response.json())
  //     .then((data) => setRapositories(data));
  // }, []);

  function handleCreatenewRepository() {
    setMessage("");
    newRepository
    ? fetch(`https://api.github.com/orgs/${newRepository}/repos`)
        .then((response) => response.json())
        .then((data) => setRapositories(data))
    : setMessage("Repositório não existe.");
  }

  function validateRepository() {}

  return (
    <section className="repository-list">
      <header>
        { newRepository
          ? <h1>Lista de Repositórios da <a href={`https://github.com/orgs/${newRepository}`}>{ newRepository }</a></h1>
          : <h1>Pesquise a organização no <span>GitHub</span></h1> }
        <div className="input-group">
          <input
            type="text"
            placeholder="Pesquisar repositório"
            onChange={(e) => setnewRepository(e.target.value)}
            value={newRepository}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreatenewRepository}
          >
            <FiCheckSquare size={16} />
          </button>
          { message
            ? <p>{ message }</p>
            : <p></p>
          }
        </div>
      </header>
      <ul>
        { repositories.length > 0
          ? repositories.map((repository) => {
            return <RepositoryItem key={repository.name} repository={repository} />;
          })
          : repositories.length <= 0 ? <p></p> : <p>Organização não encontrada</p>
        }
      </ul>
    </section>
  );
}
