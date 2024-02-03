import React, { useEffect, useState } from 'react';
import styles from './HomeLayout.module.css';
import { ListBox } from 'primereact/listbox';
import { FaWhatsapp } from "react-icons/fa";

type Option = {
    label: string;
    code: string;
    items: { label: string; value: string }[];
};

const HomeLayout = () => {
    const [selectedZones, setSelectedZones] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const prices: Record<string, number> = {
        BOZ: 10, // Precio para 'BOZ'
        CUE: 15, // Precio para 'CUE'
        FRE: 20, // Precio para 'FRE'
        ABD: 25, // Precio para 'ABD'
        ANT: 30, // Precio para 'ANT'
        ARE: 35, // Precio para 'ARE'
        MPIE: 40, // Precio para 'MPIE'
        BIKC: 45, // Precio para 'BIKC'
        BIKE: 50, // Precio para 'BIKE'
    };

    useEffect(() => {
        setTotalPrice((prevState) => {
            const total = selectedZones.reduce((acc, zone) => acc + prices[zone], 0);
            return total;
        });
    }, [selectedZones]);

    console.log(totalPrice);
    const zones = [
        {
            label: 'Zona alta',
            code: 'DE',
            items: [
                { label: 'Bozo', value: 'BOZ' },
                { label: 'Cuello', value: 'CUE' },
                { label: 'Frente', value: 'FRE' },
            ],
        },
        {
            label: 'Zona media',
            code: 'US',
            items: [
                { label: 'Abdomen', value: 'ABD' },
                { label: 'Antebrazos', value: 'ANT' },
                { label: 'Areolas', value: 'ARE' },
            ],
        },
        {
            label: 'Zona baja',
            code: 'JP',
            items: [
                { label: '1/2 Pierna', value: 'MPIE' },
                { label: 'Bikini comun', value: 'BIKC' },
                { label: 'Bikini extendida', value: 'BIKE' },
            ],
        },
    ];

    const groupTemplate = (option: Option) => {
        return (
            <div className='flex my-2 align-items-center gap-4'>
                <h4 className={`${styles.listTitle}`}>{option.label}</h4>
            </div>
        );
    };

    const itemTemplate = (option: any) => {
        const isSelected = selectedZones.includes(option.value);
        return <span className={isSelected ? `${styles.selected} ${styles.item}` : styles.item}>{option.label}</span>;
    };

    return (
        <div className={styles.container}>
            <div className='w-full flex justify-end mt-10 relative'>
                <div className={`${styles.contentContainer} mr-6`}>
                    <div>
                        <h1 className='mt-2 relative'>Arma tu pack</h1>
                        <h2>Plan 3 cuotas sin interés</h2>
                    </div>

                    <div className='w-full card flex justify-content-center'>
                        <ListBox
                            value={selectedZones}
                            onChange={(e) => setSelectedZones(e.value)}
                            options={zones}
                            optionLabel='label'
                            optionGroupLabel='label'
                            optionGroupChildren='items'
                            optionGroupTemplate={groupTemplate}
                            itemTemplate={itemTemplate}
                            multiple
                            className='w-full md:w-14rem'
                        />
                    </div>
                    <div className={styles.totalPriceContainer}>
                        <p>Total elegido:</p>
                        <span>${totalPrice},00</span>
                        <div className={styles.cotizarButtonContainer}>
                            <button className={styles.cotizarButton}>
                                <FaWhatsapp className={styles.whatsappIcon} size={18} />
                                Cotizar Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
