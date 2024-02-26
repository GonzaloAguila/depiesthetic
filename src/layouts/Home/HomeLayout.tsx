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

    useEffect(() => {
        let totalPrice = 0;
        selectedPromos.forEach((promo) => {
            const selectedPromo = promotions.find((item) => item.value === promo);
            if (selectedPromo) {
                totalPrice += selectedPromo.price;
            }
        });
        selectedZones.forEach((zone) => {
            zones.forEach((zoneGroup) => {
                const selectedZone = zoneGroup.items.find((item) => item.value === zone);
                if (selectedZone) {
                    totalPrice += selectedZone.price;
                }
            });
        });
        setTotalPrice(totalPrice);
    }, [selectedZones, selectedPromos]);

    const handleSelectionChange = (itemValue: string, selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        const isChecked = selectedItems.includes(itemValue);
        let updatedSelectedItems: string[];
        if (isChecked) {
            updatedSelectedItems = selectedItems.filter((value) => value !== itemValue);
        } else {
            updatedSelectedItems = [...selectedItems, itemValue];
        }
        setSelectedItems(updatedSelectedItems);
    };

    const handleCheckboxChange = (itemValue: string) => {
        handleSelectionChange(itemValue, selectedZones, setSelectedZones);
    };

    const handlePromotionsChange = (itemValue: string) => {
        handleSelectionChange(itemValue, selectedPromos, setSelectedPromos);
    };

    return (
        <div className={styles.container}>
            <div className='w-full flex justify-end mt-4 relative'>
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
                            <AccordionTab contentClassName={styles.promotionsAccordionContent} headerClassName={styles.accordionTab} header={'Promociones'}>
                                {promotions.map((promotion: Item, index: number) => {
                                    const isChecked = selectedPromos.includes(promotion.value);
                                    return (
                                        <PromotionCard
                                            onChange={() => handlePromotionsChange(promotion.value)}
                                            isChecked={isChecked}
                                            key={index}
                                            promotion={promotion}
                                        />
                                    );
                                })}
                            </AccordionTab>
                            {zones.map((zone: Zone, index: number) => {
                                return (
                                    <AccordionTab headerClassName={styles.accordionTab} header={zone.label} key={index}>
                                        <div className={styles.accordionContent}>
                                            {zone.items.map((item: Item, index: number) => {
                                                const isChecked = selectedZones.includes(item.value);
                                                return (
                                                    <PromotionCard
                                                        onChange={() => handleCheckboxChange(item.value)}
                                                        isChecked={isChecked}
                                                        key={index}
                                                        promotion={item}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </AccordionTab>
                                );
                            })}
                        </Accordion>
                    </div>

                    <div className={styles.totalPriceContainer}>
                        <p>TOTAL:</p>
                        <span>${totalPrice},00</span>
                    </div>
                    <div className={styles.cotizarButtonContainer}>
                        <button className={styles.cotizarButton}>
                            <FaWhatsapp className={styles.whatsappIcon} size={18} />
                            Cotizar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
