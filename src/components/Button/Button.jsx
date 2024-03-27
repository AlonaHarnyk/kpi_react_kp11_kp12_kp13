import styles from './Button.module.css'

export const Button = ({text, clickHandler}) => <button type='button' onClick={clickHandler} className={styles.text}>{text}</button>