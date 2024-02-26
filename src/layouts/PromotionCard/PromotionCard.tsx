import React from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Item } from '../../models/data.model';
import styles from './PromotionCard.module.css'; // Importar los estilos del módulo CSS

type CardProps = {
    promotion: Item;
    onChange(value: string): void;
    isChecked: boolean;
};

const PromotionCard = ({ promotion, onChange, isChecked }: CardProps) => {
    return (
        <div className={`${styles.card} ${styles.shadow}`}>
            <div className={`${styles.flex} ${styles.alignCenter} ${styles.marginRight}`}>
                <Checkbox className={styles.checkbox} onChange={() => onChange(promotion.value)} checked={isChecked} />
            </div>
            <div className={`${styles.flex} ${styles.alignCenter} ${styles.marginRight} ${styles.flex1}`}>
                <h3>{promotion.label}</h3>
            </div>
            <div className={`${styles.flex} ${styles.alignCenter}`}>
                <span className={styles.price}>${promotion.price}</span>
            </div>
        </div>
    );
};

export default PromotionCard;
