import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import OrderTab from './OrderTab';
const TeddyTab = () => {
    const [bears, setBears] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/teddy')
            .then(res => res.json())
            .then(data => setBears(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const HolidaySpecials = bears.filter(item => item.category === 'Holiday Specials');
    const ThemedTeddies = bears.filter(item => item.category === 'Themed Teddies');
    const ClassicTeddyBears = bears.filter(item => item.category === 'Classic Teddy Bears');
    const SpecialtyTeddies = bears.filter(item => item.category === 'Specialty Teddies');
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className=''>
                    <TabList className='mx-48 text-[#5C3D1E] font-bold py-20 text-2xl text-center'>
                        <Tab>Holiday Specials</Tab>
                        <Tab>Themed Teddies</Tab>
                        <Tab>Classic Teddy Bears</Tab>
                        <Tab>Specialty Teddies</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <OrderTab bears={HolidaySpecials}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab bears={ThemedTeddies}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab bears={ClassicTeddyBears}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab bears={SpecialtyTeddies}></OrderTab>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default TeddyTab;