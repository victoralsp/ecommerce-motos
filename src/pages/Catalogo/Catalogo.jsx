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
import HeroBannerImagem from '../../assets/imagens/heroBannerImg.png';

export default function Catalogo() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");
  const [produtosExibidos, setProdutosExibidos] = useState(DadosProdutos.produtos);

  // Filtros enviados pelo menu lateral
  const [filtroNovas, setFiltroNovas] = useState(false);
  const [filtroUsadas, setFiltroUsadas] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatarValor = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(valor);
  };

useEffect(() => {
  const filtrados = DadosProdutos.produtos.filter((produto) => {
    // FILTRO POR BUSCA
    const nomeProduto = produto.nome_produto.toLowerCase();
    const marcaProduto = produto.marca.toLowerCase();
    const busca = termoBusca.toLowerCase();
    const passouBusca = nomeProduto.includes(busca) || marcaProduto.includes(busca);

    const estado = produto.estado_produto.toLowerCase();

    // 🔥 LÓGICA CERTA PARA NOVA / USADA
    if (!filtroNovas && !filtroUsadas) {
      return passouBusca; // Nenhum filtro ativo → mostra tudo da busca
    }

    if (filtroNovas && filtroUsadas) {
      return passouBusca; // Ambos ativos → mostra tudo da busca
    }

    if (filtroNovas) {
      return passouBusca && estado === "novo";
    }

    if (filtroUsadas) {
      return passouBusca && estado === "usado";
    }

    return true;
  });

  setProdutosExibidos(filtrados);
}, [termoBusca, filtroNovas, filtroUsadas]);


  const produtosLength = produtosExibidos.length;

  return (
    <div className={styles.bodyCatalogo}>
      <Header scrolled={scrolled} />
      <main className={styles.mainCatalogo}>
        <div className={styles.heroBannerContainer}>
          <img src={HeroBannerImagem} alt="hero banner" className={styles.heroBannerImagem} />
        </div>

        <section className={styles.containerPageMain}>
          <Breadcrumbs scrolled={scrolled} />

          <div className={styles.containerSectionMenuCatalogo}>

            <ContainerMenuLateral
              menuAberto={menuAberto}
              setMenuAberto={setMenuAberto}
              alternarMenu={alternarMenu}
              dadosProdutos={DadosProdutos}
              setFiltroNovas={setFiltroNovas}
              setFiltroUsadas={setFiltroUsadas}
            />

            <section className={styles.containerCatalogo}>
              <div className={styles.containerFiltroCards}>

                <section className={styles.catalogoControles}>
                  <div className={styles.qtdEncontradosEFiltrarPor}>
                    <div className={styles.containerFiltrosEsquerda}>
                      <ResultadosEncontrados lengthDadosProdutos={produtosLength} />
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
                    <p className={styles.erroNenhumAnuncioEncontrado}>
                      Nenhum anúncio encontrado
                    </p>
                  )}
                </section>

              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
