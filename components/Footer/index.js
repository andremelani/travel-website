import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  const helps = [
    {
      nome: "Sale Terms & Conditions",
    },
    {
      nome: "Returns & Refunds",
    },
    {
      nome: "Privacy Notice",
    },
    {
      nome: "Shopping FAQs",
    },
  ];

  const populars = [
    {
      nome: "Home",
    },
    {
      nome: "Tours",
    },
    {
      nome: "Explore",
    },
    {
      nome: "About Us",
    },
    {
      nome: "Contact",
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.informacoes}>
        <div className={styles.contact}>
          <div className={styles.title}>Contact Info</div>
          <div className={styles.phone}>
            <b>Phone:</b> +55 (11) 94106-6927
          </div>
          <div className={styles.address}>
            <b>Address:</b> Av.Silva Jardim, 2014 - from Curitiba.
          </div>
        </div>
        <div className={styles.help}>
          <div className={styles.title}>Get Help</div>
          {helps.map((help) => (
            <>
              <div className={styles.subtitle}>{help.nome}</div>
            </>
          ))}
        </div>
        <div className={styles.menu}>
          <div className={styles.title}>Popular Categories</div>
          {populars.map((popular) => (
            <>
              <div className={styles.subtitle}>{popular.nome}</div>
            </>
          ))}
        </div>
        <div className={styles.stay}>
          <div className={styles.title}>Lets Stay in Contact</div>
          <div className={styles.inputArea}>
            <input type="email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.separador}></div>

      <div className={styles.direito}>
          <div className={styles.reservado}>&copy;2022, All Right Reserved - www.andremelani.com.br</div>
          <div className={styles.url}>www.andremelani.com.br</div>
      </div>
    </div>
  );
}
