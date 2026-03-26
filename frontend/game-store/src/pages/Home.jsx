import { useState, useEffect } from 'react';
import crashImage from '../assets/banner-1-crash.png'
import Highlight from '../components/Highlight'

const Home = () => {
    const [games, setGames] = useState();
    const [lancamentos,setLancamentos] = useState();
    const [maisVendidos, setMaisVendidos] = useState();
    const [retroDestaque, setRetroDestaque] = useState();
    const [pacoteSemanal, setPacoteSemanal] = useState();
    useEffect(() => {
        fetch('http://localhost:8000/api/store/')
            .then((response) => response.json())
            .then((data) => {
                setGames(data.games);

                let sorted = [...data.games];
                sorted.sort(function (a, b) {
                    return new Date(b.release_date) - new Date(a.release_date);
                });
                sorted.splice(5)
                setLancamentos(sorted)

                
                sorted = [...data.games];
                sorted.sort(function(a,b){
                    return b.quantity_sold - a.quantity_sold
                });
                sorted.splice(5)
                setMaisVendidos(sorted)



                sorted = [...data.games]
                let index_to_remove = []
                sorted.forEach((value, index) => {
                    let year = value.release_date.split('-')[0]
                    if (year>2000){
                        index_to_remove.unshift(index)
                    }
                });
                index_to_remove.forEach((value)=>{
                    sorted.splice(value,1);
                });
                sorted.sort(function(a,b){
                    return a.quantity_sold - b.quantity_sold
                });
                sorted.reverse();
                setRetroDestaque(sorted);
                
                sorted = [...data.games];
                let name = 'Mega Man';
                name = name.toLowerCase()
                let filtered = sorted.filter(value => value.title.toLowerCase().includes(name));
                setPacoteSemanal(filtered);
                console.log(filtered)

            })
    }, []);
    
    return (lancamentos && 
    maisVendidos && 
    pacoteSemanal ? <>
        <section className='hero'>
            <img src={crashImage}  alt="" />
        </section>


        <div className='w-screen bg-primary h-14'></div>


        <section className='lancamentos mt-5'>
            <Highlight
            title={'Lançamentos'}
            items={lancamentos}
            />
            <Highlight
            title={'Mais vendidos'}
            items={maisVendidos}
            />
            <Highlight
            title={'Destaques retro'}
            items={retroDestaque}
            />
        </section>



        <section className='pacote flex-col flex justify-center items-center'>
            <h2>Pacote retrô da semana</h2>
            <p>MEGAMAN LEGACY COLLECTION</p>
            <div>
                <img src="https://ssb.wiki.gallery/images/a/a0/Mega_Man.png" alt="Mega Man" className='hidden'/>
                <div className='flex flex-wrap justify-center gap-2'>
                {pacoteSemanal.map((item)=>{
                    return <div key={item.id} className='w-5/12 h-40'>
                        <img src={item.img_url} alt={item.title} className='h-full w-full' />
                    </div>
                })}
                </div>
            </div>
        </section>
    </> : ''
  )
}

export default Home