import { useState, useEffect } from 'react';
import crashImage from '../assets/banner-1-crash.png'
import promotionImage from '../assets/banner-promotion.jpg'
import promotionImageSmall from '../assets/banner-promotion-small.jpg'
import bannerInformatica from '../assets/banner-informatica.jpg'
import tecladoImage from '../assets/teclado.png'
import Highlight from '../components/Highlight'

const Home = () => {
    const [games, setGames] = useState();
    const [lancamentos, setLancamentos] = useState();
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
                sorted.sort(function (a, b) {
                    return b.quantity_sold - a.quantity_sold
                });
                sorted.splice(5)
                setMaisVendidos(sorted)



                sorted = [...data.games]
                let index_to_remove = []
                sorted.forEach((value, index) => {
                    let year = value.release_date.split('-')[0]
                    if (year > 2000) {
                        index_to_remove.unshift(index)
                    }
                });
                index_to_remove.forEach((value) => {
                    sorted.splice(value, 1);
                });
                sorted.sort(function (a, b) {
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
            <img src={crashImage} alt="" />
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



        <section className='pacote flex-col flex justify-center  h-screen text-white gap-2 
            bg-position-[70%]
            bg-no-repeat 
            bg-cover' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${promotionImageSmall})`
            }}>
            <div className='w-[calc(83.33%+0.5rem)] mx-auto tracking-wider text-md'>
                <h2>Pacote retrô da semana</h2>
                <p className='tracking-widest uppercase'>Megaman Legacy Collection</p>
            </div>
            <div>
                <img src="https://ssb.wiki.gallery/images/a/a0/Mega_Man.png" alt="Mega Man" className='hidden' />
                <div className='flex flex-wrap justify-center gap-2'>
                    {pacoteSemanal.map((item) => {
                        return <div key={item.id} className='w-5/12 h-40'>
                            <img src={item.img_url} alt={item.title} className='h-full w-full rounded-lg' />
                        </div>
                    })}

                </div>

            </div>
            <div className='flex justify-between w-[calc(83.33%+0.5rem)] font-light tracking-widest uppercase text-sm mx-auto'>
                <p>Jogos da semana</p>
                <p>R$ 19,90</p>
            </div>
        </section>

        <section>
                <h2 className='uppercase text-white font-bold text-xl h-20 mt-10 flex justify-center items-center mx-3 rounded-2xl text-shadow-lg ' style={{
                    backgroundImage: `url(${bannerInformatica})`
                }}>Conheça nossa informática</h2>

                <div className='p-3'>
                    <div>
                        <h3 className='text-lg my-3'>
                            Somente os melhores
                        </h3>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet pharetra nibh. Aenean venenatis felis ut tortor fermentum, ut tincidunt nisi commodo. Proin in metus at purus ornare ornare sed ut lacus. Fusce ut faucibus turpis. Praesent sollicitudin iaculis tincidunt. Nam metus turpis, tempor vitae tincidunt id.
                        </p>
                    </div>

                    <div className='border-1 rounded-md '>
                        <h2 className='text-xl uppercase'>Cougar</h2>
                        <img src={tecladoImage} className='rotate-350' alt="imagem de teclado" />
                    </div>
                </div>
        </section>
    </> : ''
    )
}

export default Home