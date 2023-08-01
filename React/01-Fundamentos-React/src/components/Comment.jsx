import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="./eu.jpeg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Savio Nascimento</strong>
              <time title="28 de Julho as 15:09" dateTime="2023-08-28 15:07:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
