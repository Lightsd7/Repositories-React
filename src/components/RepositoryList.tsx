import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    fetch("https://api.github.com/orgs/abr3dev/repos")
      .then((response) => response.json())
      .then((data) => setRapositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios da <a href="https://github.com/orgs/Abr3Dev">Abr3Dev</a></h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
