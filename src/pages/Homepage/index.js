import React from 'react'

import banner from '../../assets/banner.jpg'
import sobre from '../../assets/sobre.jpg'
import novidades from '../../assets/novidades.png'
import novidades2 from '../../assets/novidades2.png'
import novidades3 from '../../assets/novidades3.png'

import Title from '../../components/Title'

import styles from './styles.module.css'

export default function(){
    return (
        <>
            <div className="text-center">
                <img className="img-fluid" src={banner} alt="Peças para todos estilos e gostos." />
            </div>

            <div className="container-xl">
                <div className="row">
                    <div className="col">
                        <Title color="dark">Sobre a loja</Title>
                    </div>
                </div>
                <div className={"row justify-content-center " + styles.containerContent}>
                    <div className="col-8 col-md-6 mb-5 mb-sm-0 text-center">
                        <img className={"img-fluid " + styles.imgRounded} src={sobre} alt="Loja" />
                    </div>
                    <div className="col-8 col-md-6">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>

                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.bgYellow}>
                <div className="container-xl">
                    <div className="row mb-4 ">
                        <div className="col">
                            <Title color="dark">Sempre com novidades</Title>
                        </div>
                    </div>
                    <div className="row mt-4 text-center justify-content-center">
                        <div className="col-8 col-md-4">
                            <img className={"img-fluid " + styles.novidade} src={novidades} alt="Novidade" />
                        </div>
                        <div className="col-8 col-md-4">
                            <img className={"img-fluid " + styles.novidade} src={novidades2} alt="Novidade" />
                        </div>
                        <div className="col-8 col-md-4">
                            <img className={"img-fluid " + styles.novidade} src={novidades3} alt="Novidade" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bgDark}>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3>Venha nos fazer uma visita!</h3><br />
                            <p>Rodovia JK, 3213, Ipuiuna - MG</p>
                            <p>(35) 99807-5521</p>
                            <p>(35) &nbsp;&nbsp;3473-1314</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bgYellow}>
                <div className="container-xl">
                    <div className="row">
                        <div className={"col text-center " + styles.copyright}>
                            &copy; Copyright. Todos os direitos reservados. 2020.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}