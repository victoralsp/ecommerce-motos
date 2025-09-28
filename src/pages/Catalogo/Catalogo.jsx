import React from "react";
import { useState, useEffect } from "react";
import styles from "./Catalogo.module.scss";
import Header from "../../components/Shared/Header/Header.jsx";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs.jsx";
import ContainerMenuLateral from "./components/ContainerMenuLateral/ContainerMenuLateral.jsx";
import ResultadosEncontrados from "./components/ResultadosEncontrados/ResultadosEncontrados.jsx";
import InputBuscarMotos from "./components/InputBuscarMotos/InputBuscarMotos.jsx";
import CardProdutos from "./components/CardProdutos/CardProdutos.jsx";
import OrdenarPor from "./components/OrdenarPor/OrdenarPor.jsx";
import DadosProdutos from "../../data/produtos.json";
import { GoHeartFill } from "react-icons/go";
import bannerHero from '../../assets/imagens/bannerHero.png';

export default function Catalogo() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");
  const [produtosExibidos, setProdutosExibidos] = useState(
    DadosProdutos.produtos
  );
//   console.log(produtosExibidos);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatarValor = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(valor);
  };

  // Lógica de filtro por termo de busca
  useEffect(() => {
    const produtosFiltrados = DadosProdutos.produtos.filter((produto) => {
      const nomeProduto = produto.nome_produto.toLowerCase();
      const marcaProduto = produto.marca.toLowerCase();
      const busca = termoBusca.toLowerCase();
      return nomeProduto.includes(busca) || marcaProduto.includes(busca);
    });
    setProdutosExibidos(produtosFiltrados);
  }, [termoBusca]);

  return (
    <div className={styles.bodyCatalogo}>
      <Header scrolled={scrolled} />
      <img src={bannerHero} alt="banner de uma moto" className={styles.bannerHero}/>
      <main className={styles.mainCatalogo}>
        <Breadcrumbs scrolled={scrolled} />
        <div className={styles.containerSectionMenuCatalogo}>
          <ContainerMenuLateral
            menuAberto={menuAberto}
            setMenuAberto={setMenuAberto}
            alternarMenu={alternarMenu}
          />
          <section className={styles.containerCatalogo}>
            <section className={styles.catalogoControles}>
              <div className={styles.qtdEncontradosEFiltrarPor}>
                <div className={styles.containerFiltrosEsquerda}>
                  <ResultadosEncontrados
                    lengthDadosProdutos={DadosProdutos.produtos.length}
                  />
                  <span>/</span>
                  <OrdenarPor />
                </div>
                <div className={styles.containerFiltrosDireita}>
                  <InputBuscarMotos setTermoBusca={setTermoBusca} />
                  <div className={styles.containerFavoritos}>
                    <GoHeartFill className={styles.iconeFavoritos} />
                    <p>1</p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.containerCardProdutos}>
              {produtosExibidos.length > 0 ? (
                produtosExibidos.map((produto) => (
                  <CardProdutos
                    key={produto.id}
                    infosProduto={produto}
                    formatarValor={formatarValor}
                  />
                ))
              ) : (
                <p className={styles.erroNenhumAnuncioEncontrado}>Nenhum anúncio encontrado</p>
              )}
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
