import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
import styles from './card.module.scss';

const Card = (props): JSX.Element => {
    return (
        <section className={styles.card}>
            <div className={styles.cardWrapper}>
                <Text
                    className={styles.cardHeading}
                    tag="h3"
                    field={props.fields.heading}
                />
                <RichText
                    className={styles.cardContent}
                    tag="p"
                    field={props.fields.content}
                />
            </div>
        </section>
    );
};

export default Card;
