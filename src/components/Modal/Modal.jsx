import styles from './Modal.module.css'

import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    if (code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const {
      currentPoster: { src, alt },
      closeModal,
    } = this.props;

    return (
      <div>
        <div>
          <button onClick={closeModal} className={styles.text}>Close</button>
          <img alt={alt} src={`https://image.tmdb.org/t/p/w500${src}`} />
        </div>
      </div>
    );
  }
}

export default Modal;
