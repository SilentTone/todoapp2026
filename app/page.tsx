import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.card}>
      <h1>Malykin Aleksandr</h1>
      <p>出身：Siberia</p>
      <p>好きなもの：ネズミ、ペプシコーラ</p>
      <p>作ってみたいもの：LoRa ネットワーク</p>
    </main>
  )
}