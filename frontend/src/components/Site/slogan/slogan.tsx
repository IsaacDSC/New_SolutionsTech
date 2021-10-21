import { SloganStyle } from "./slogan.style"

export const Slogan = () => {
    return (
        <SloganStyle>
            <section id="fh5co-home" data-section="home" data-stellar-background-ratio="0.5">
                <div className="gradient"></div>
                <div className="container">
                    <div className="text-inner">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <h1 className="to-animate">Softwares by Solutions Tech</h1>
                                <h2 className="to-animate">Não vendemos produtos ou serviços, vendemos soluções que agregam
                                valores para sua empresa. Desenvolvendo Soluções para sua Empresa com Tecnologia de
                        ponta. </h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-wrap">

                    </div>
                </div>
            </section>
        </SloganStyle>
    )
}

// #fh5co-home {
//     background-color: blueviolet;
// }