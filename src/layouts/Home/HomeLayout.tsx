import React, { useEffect, useState } from 'react';
import styles from './HomeLayout.module.css';
import { ListBox } from 'primereact/listbox';
import { FaWhatsapp } from 'react-icons/fa';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import { locations, plans, promotions, zones } from '../../utils/data';
import { Item, Zone } from '../../models/data.model';
import PromotionCard from '../PromotionCard/PromotionCard';

const HomeLayout = () => {
    const [selectedZones, setSelectedZones] = useState<string[]>([]);
    const [selectedPromos, setSelectedPromos] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number | number[]>(0);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedPlan, setSelectedPlan] = useState<string>('');

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

    const handleCheckboxChange = (zoneCode: string, itemValue: string) => {
        const isChecked = selectedZones.includes(itemValue);
        let updatedSelectedZones: string[];

        if (isChecked) {
            updatedSelectedZones = selectedZones.filter((value) => value !== itemValue);
        } else {
            updatedSelectedZones = [...selectedZones, itemValue];
        }

        setSelectedZones(updatedSelectedZones);
    };

    useEffect(() => {
        setTotalPrice(() => {
            const total = selectedZones.reduce((acc, zone) => acc + prices[zone], 0);
            return total;
        });
    }, [selectedZones]);

    const longestLabelLength = Math.max(
        ...zones.map((zone) => {
            return Math.max(...zone.items.map((item) => item.label.length));
        })
    );
    return (
        <div className={styles.container}>
            <div className='w-full flex justify-end mt-10 relative'>
                <div className={`${styles.contentContainer} ml-2 mr-2`}>
                    <Image alt='logo' height={40} width={150} src={logo} />
                    <div>
                        <h1 className='mt-2 relative'>¡Armá tu combo ahora!</h1>
                        <h2>Aboná en hasta 3 cuotas sin interés</h2>
                    </div>
                    <div className='mt-2 w-full flex justify-around'>
                        <div className='mt-2 flex flex-col'>
                            <p className='text-lg font-semibold'>Sucursal</p>
                            <div className='flex w-full  mt-2  flex-col md:flex-row'>
                                {locations.map((location, index: number) => {
                                    return (
                                        <div key={index} className={`flex items-center mr-2`}>
                                            <RadioButton
                                                name={location}
                                                key={index}
                                                value={location}
                                                className={`${styles.radiobutton} ${location === selectedLocation ? styles.selectedRadiobutton : ''}`}
                                                onChange={(e) => setSelectedLocation(e.value)}
                                                checked={location === selectedLocation}
                                            />
                                            <label htmlFor={location}>{location}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='mt-2  flex flex-col'>
                            <p className='text-lg font-semibold	'>Sesiones</p>
                            <div className='flex w-full  mt-2  flex-col md:flex-row'>
                                {plans.map((plan, index: number) => {
                                    return (
                                        <div key={index} className='flex items-center mr-2 '>
                                            <RadioButton
                                                name={plan}
                                                key={index}
                                                value={plan}
                                                className={`${styles.radiobutton} ${plan === selectedPlan ? styles.selectedRadiobutton : ''}`}
                                                onChange={(e) => setSelectedPlan(e.value)}
                                                checked={plan === selectedPlan}
                                            />
                                            <label htmlFor={plan}>{plan}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='w-full l mt-4'>
                        <Accordion className='w-full md:w-14rem' multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                            <AccordionTab
                                contentClassName={styles.promotionsAccordionContent}
                                headerClassName={styles.promotionsAccordionTab}
                                header={'Promociones'}
                            >
                                {promotions.map((promotion: Item, index: number) => {
                                    const isChecked = selectedPromos.includes(promotion.value);
                                    return (
                                        <PromotionCard
                                            onChange={() => handleCheckboxChange('', promotion.value)}
                                            isChecked={isChecked}
                                            key={index}
                                            promotion={promotion}
                                        />
                                    );
                                })}
                            </AccordionTab>
                            {zones.map((zone: Zone, index: number) => {
                                return (
                                    <AccordionTab
                                        contentClassName={styles.accordionContent}
                                        headerClassName={styles.accordionTab}
                                        header={zone.label}
                                        key={index}
                                    >
                                        {zone.items.map((item: Item, index: number) => {
                                            const isChecked = selectedZones.includes(item.value);
                                            return (
                                                <PromotionCard
                                                    onChange={() => handleCheckboxChange('', item.value)}
                                                    isChecked={isChecked}
                                                    key={index}
                                                    promotion={item}
                                                />
                                            );
                                        })}
                                    </AccordionTab>
                                );
                            })}
                        </Accordion>
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
