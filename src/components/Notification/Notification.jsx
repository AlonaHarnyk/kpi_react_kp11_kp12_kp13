import styles from './Notification.module.css'
 
export const Notification = ({text, error=false}) => <h1 className={error ? styles.superText : styles.text}>{text}</h1>