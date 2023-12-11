import { useEffect, useState } from "react";
import styles from "./home.module.css";

import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

interface CoinProps {
  name: string;
  delta_24h: string;
  price: string;
  symbol: string;
  volume_24h: string;
  market_cap: string;
  formatedPrice: string;
  formatedMarket: string;
}

interface DataProps {
  coins: CoinProps[];
}

export function Home() {
  const [coins, setCoins] = useState<CoinProps[]>([]);

  useEffect(() => {
    function getData() {
      fetch(
        "https://sujeitoprogramador.com/api-cripto/?key=72c205de2350a35c&pref=BRL"
      )
        .then((response) => response.json())
        .then((data: DataProps) => {
          const coinsData = data.coins.slice(0, 15);

          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          })

          const formatResult = coinsData.map((item) => {
            const formated = {
              ...item,
              formatedPrice: price.format(Number(item?.price)),
              formatedMarket: price.format(Number(item?.market_cap))
            }

            return formated;
          })

          setCoins(formatResult);
        })
        .catch((err) => console.log(err));
    }

    getData();
  }, []);

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input placeholder="Digite o símbolo da moeda: BTC..." />

        <button type="submit">
          <BiSearch size={30} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <Link className={styles.link} to="/detail/btc">
                <span>Bitcoin</span> | BTC
              </Link>
            </td>

            <td className={styles.tdLabel} data-label="Mercado">
              R$ 19293
            </td>

            <td className={styles.tdLabel} data-label="Preço">
              R$ 40.456
            </td>

            <td className={styles.tdProfit} data-label="Volume">
              <span>-5.3</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
