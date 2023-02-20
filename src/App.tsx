import { useEffect, useState } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import './App.scss';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import image001 from './assets/images/episodes/1.png';
import image002 from './assets/images/episodes/2.png';
import image003 from './assets/images/episodes/3.png';
import image004 from './assets/images/episodes/4.png';
import image005 from './assets/images/episodes/5.png';
import image006 from './assets/images/episodes/6.png';
import image007 from './assets/images/episodes/7.png';
import image008 from './assets/images/episodes/8.png';
import image009 from './assets/images/episodes/9.png';

type MyEpisodes = {
    ep: string;
    interviewee: string;
    id: string;
    img: string;
    date: string;
};

export default function App() {
    const [episodes, setEpisodes] = useState<MyEpisodes[]>(
        [
            {
                ep: '001',
                interviewee: 'Hugh Pulaski',
                id: '1',
                img: image001,
                date: '28/07/2021',
            },
            {
                ep: '002',
                interviewee: 'Alex Tepito',
                id: '2',
                img: image002,
                date: '29/07/2021',
            },
            {
                ep: '003',
                interviewee: 'Shayna Lakshi',
                id: '3',
                img: image003,
                date: '30/07/2021',
            },
            {
                ep: '004',
                interviewee: 'Chase Nevins',
                id: '4',
                img: image004,
                date: '31/07/2021',
            },
            {
                ep: '005',
                interviewee: 'Alejandra Cruz',
                id: '5',
                img: image005,
                date: '01/08/2021',
            },
            {
                ep: '006',
                interviewee: 'Collette noll',
                id: '6',
                img: image006,
                date: '02/08/2021',
            },
            {
                ep: '007',
                interviewee: 'Craig Classon',
                id: '7',
                img: image007,
                date: '04/08/2021',
            },
            {
                ep: '008',
                interviewee: 'Sofia Pazari',
                id: '8',
                img: image008,
                date: '05/08/2021',
            },
            {
                ep: '009',
                interviewee: 'Hollie Beamount',
                id: '9',
                img: image009,
                date: '06/08/2021',
            },
        ].reverse()
    );

    const { pathname } = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div id="App">
            <Navbar />
            <Outlet context={{ episodes }} />
            <Footer />
        </div>
    );
}

export function useEpisodes() {
    return useOutletContext<MyEpisodes>();
}
