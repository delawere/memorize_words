import React from 'react';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles.module.css';

type Props = {
  title: string;
  examples?: string[];
  open: boolean;
  onClose: () => void;
};

const Definition: React.FC<Props> = ({ title, examples, open, onClose }) => {
  if (!examples) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={styles.container}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        <span className={styles.title}>{title}</span>
        <ul className={styles.list}>
          {examples.map((example) => (
            <li key={example} className={styles.item}>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Definition;
