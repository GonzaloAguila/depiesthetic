import React, { useEffect, useState } from 'react';
import styles from './HomeLayout.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RadioButton } from 'primereact/radiobutton';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import { locations, plans, promotions, MujerCaba } from '../../utils/data';
import { Item, Location, Plan, Zone } from '../../models/data.model';
import PromotionCard from '../PromotionCard/PromotionCard';

const HomeLayout = () => {
    const [selectedZones, setSelectedZones] = useState<string[]>([]);
    const [selectedPromos, setSelectedPromos] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number | number[]>(0);
    const [selectedLocation, setSelectedLocation] = useState<Location>(Location.PALERMO);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(Plan.SIX);
    const [selectedGender, setSelectedGender] = useState<'M' | 'F'>('F');
    const [zones, setZones] = useState(MujerCaba);

    useEffect(() => {
        let discountFactor = 1;

        // Verificar si se han seleccionado 2 o más zonas individuales
        if (selectedZones.length >= 2 && selectedPromos.length === 0) {
            discountFactor *= 0.9; // Aplicar un 10% de descuento
        }

        // Verificar si se ha elegido la opción de 1 sesión
        if (selectedPlan === Plan.ONE) {
            discountFactor *= 0.9; // Aplicar un 10% de descuento adicional
        }

        // Verificar si se ha elegido 3 o 6 sesiones
        if (selectedPlan === Plan.THREE || selectedPlan === Plan.SIX) {
            discountFactor *= 0.9; // Aplicar un 10% de descuento adicional
        }

        // Aplicar descuento a los precios de todas las zonas
        const updatedZones = zones.map((zoneGroup) => ({
            ...zoneGroup,
            items: zoneGroup.items.map((item) => ({
                ...item,
                price: Math.round(item.price * discountFactor), // Aplicar descuento al precio
            })),
        }));

        setZones(updatedZones);
    }, [selectedZones, selectedPromos, selectedPlan]);

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
            <div className='w-full flex justify-end mt-2 mb-2 relative'>
                <div className={`${styles.contentContainer} ml-2 mr-2`}>
                    <div className={styles.logoContainer}>
                        <Image className={styles.logo} alt='logo' src={logo} />
                    </div>
                    <div>
                        <h1 className='mt-2 relative'>¡Armá tu combo ahora!</h1>
                    </div>
                    <div className='mt-2 w-full'>
                        <div className='mt-2 flex flex-col justify-center items-center'>
                            <p className='text-md font-semibold'>Género</p>
                            <div className='flex w-full  mt-2 justify-center   md:flex-row'>
                                <div className={`flex justify-center items-center mr-2`}>
                                    <RadioButton
                                        key={'F'}
                                        value={'F'}
                                        className={`${styles.radiobutton} ${'F' === selectedGender ? styles.selectedRadiobutton : ''}`}
                                        onChange={(e) => setSelectedGender(e.value)}
                                        checked={selectedGender === 'F'}
                                    />
                                    <label htmlFor={'F'}>Femenino</label>
                                </div>
                                <div className={`flex items-center mr-2`}>
                                    <RadioButton
                                        key={'M'}
                                        value={'M'}
                                        className={`${styles.radiobutton} ${'M' === selectedGender ? styles.selectedRadiobutton : ''}`}
                                        onChange={(e) => setSelectedGender(e.value)}
                                        checked={selectedGender === 'M'}
                                    />
                                    <label htmlFor={'M'}>Masculino</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 w-full flex justify-around'>
                        <div className='mt-2 flex flex-col'>
                            <p className='text-md font-semibold'>Sucursal</p>
                            <div className='flex w-full  mt-2  flex-col md:flex-row'>
                                {locations.map((location: Location, index: number) => {
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
                            <p className='text-md font-semibold	'>Sesiones</p>
                            <div className='flex w-full  mt-2  flex-col md:flex-row'>
                                {plans.map((plan: Plan, index: number) => {
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
