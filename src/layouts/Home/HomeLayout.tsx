import React, { useEffect, useState } from 'react';
import styles from './HomeLayout.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RadioButton } from 'primereact/radiobutton';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import { locations, plans, promotions, MujerCaba } from '../../utils/data';
import { Location, Plan, Zone, Item } from '../../models/data.model';
import PromotionCard from '../PromotionCard/PromotionCard';

interface RadioOptionProps {
    label: string;
    value: any;
    selectedValue: any;
    onChange: (e: any) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({ label, value, selectedValue, onChange }) => (
    <div className='flex items-center mr-2'>
        <RadioButton
            value={value}
            className={`${styles.radiobutton} ${value === selectedValue ? styles.selectedRadiobutton : ''}`}
            onChange={onChange}
            checked={value === selectedValue}
        />
        <label htmlFor={value}>{label}</label>
    </div>
);

const HomeLayout: React.FC = () => {
    const [selectedZones, setSelectedZones] = useState<string[]>([]);
    const [selectedPromos, setSelectedPromos] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number | number[]>(0);
    const [selectedLocation, setSelectedLocation] = useState<Location>(Location.PALERMO);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(Plan.SIX);
    const [selectedGender, setSelectedGender] = useState<'M' | 'F'>('F');
    const [zones, setZones] = useState<Zone[]>(MujerCaba);

    useEffect(() => {
        const promoTotal = selectedPromos.reduce((total, promo) => {
            const selectedPromo = promotions.find((item) => item.value === promo);
            return selectedPromo ? total + selectedPromo.price : total;
        }, 0);

        const zoneTotal = selectedZones.reduce((total, zone) => {
            zones.forEach((zoneGroup) => {
                const selectedZone = zoneGroup.items.find((item) => item.value === zone);
                if (selectedZone) {
                    total += selectedZone.price;
                }
            });
            return total;
        }, 0);

        let discount = 0;

        // Apply 10% discount if 2 or more individual zones are selected with the 1 session plan
        if (selectedPlan === Plan.ONE && selectedZones.length >= 2) {
            discount += 0.1;
        }

        // Apply 10% discount if 3 or 6 sessions are selected
        if (selectedPlan === Plan.THREE || selectedPlan === Plan.SIX) {
            discount += 0.1;
        }

        // Apply an additional 10% discount if both conditions are met
        if (selectedZones.length >= 2 && (selectedPlan === Plan.THREE || selectedPlan === Plan.SIX)) {
            discount += 0.1;
        }

        setTotalPrice((promoTotal + zoneTotal) * (1 - discount));
    }, [selectedZones, selectedPromos, selectedPlan, zones]);

    const handleSelectionChange = (itemValue: string, selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        setSelectedItems((prevSelectedItems) => {
            const isChecked = prevSelectedItems.includes(itemValue);
            return isChecked ? prevSelectedItems.filter((value) => value !== itemValue) : [...prevSelectedItems, itemValue];
        });
    };

    const handleCheckboxChange = (itemValue: string) => handleSelectionChange(itemValue, selectedZones, setSelectedZones);
    const handlePromotionsChange = (itemValue: string) => handleSelectionChange(itemValue, selectedPromos, setSelectedPromos);

    const handleWhatsAppClick = () => {
        const phone = process.env.NEXT_PUBLIC_PHONE;
        const message = ` Hola, me gustaría atenderme en la sucursal de ${selectedLocation}, y quisiera consultar por las siguientes opciones de zonas: ${selectedZones.join(
            ','
        )}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
                            <div className='flex w-full mt-2 justify-center md:flex-row'>
                                <RadioOption label='Femenino' value='F' selectedValue={selectedGender} onChange={(e) => setSelectedGender(e.value)} />
                                <RadioOption label='Masculino' value='M' selectedValue={selectedGender} onChange={(e) => setSelectedGender(e.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 w-full flex justify-around'>
                        <div className='mt-2 flex flex-col'>
                            <p className='text-md font-semibold'>Sucursal</p>
                            <div className='flex w-full mt-2 flex-col md:flex-row'>
                                {locations.map((location, index) => (
                                    <RadioOption
                                        key={index}
                                        label={location}
                                        value={location}
                                        selectedValue={selectedLocation}
                                        onChange={(e) => setSelectedLocation(e.value)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col'>
                            <p className='text-md font-semibold'>Sesiones</p>
                            <div className='flex w-full mt-2 flex-col md:flex-row'>
                                {plans.map((plan, index) => (
                                    <RadioOption
                                        key={index}
                                        label={plan}
                                        value={plan}
                                        selectedValue={selectedPlan}
                                        onChange={(e) => setSelectedPlan(e.value)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <Accordion className='w-full md:w-14rem' multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                            <AccordionTab contentClassName={styles.promotionsAccordionContent} headerClassName={styles.accordionTab} header='Promociones'>
                                {promotions.map((promotion, index) => {
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
                            {zones.map((zone, index) => (
                                <AccordionTab headerClassName={styles.accordionTab} header={zone.label} key={index}>
                                    <div className={styles.accordionContent}>
                                        {zone.items.map((item, index) => {
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
                            ))}
                        </Accordion>
                    </div>
                    <div className={styles.totalPriceContainer}>
                        <p>TOTAL:</p>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className={styles.cotizarButtonContainer}>
                        <button onClick={handleWhatsAppClick} className={styles.cotizarButton}>
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
