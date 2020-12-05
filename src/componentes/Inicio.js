import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ElPadrino from '../imagenes/carousel/el-padrino.jpg';
import ElPadrinoII from '../imagenes/carousel/el-padrino-II.jpg';
import ElPadrinoIII from '../imagenes/carousel/el-padrino-III.jpg';

const Inicio = () => {
    return <div className="mt-5">
            <Carousel className="bg-carousel">
                <Carousel.Item className="text-center">
                    <img src={ElPadrino}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>El Padrino</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <img src={ElPadrinoII}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>El Padrino II</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                    <img src={ElPadrinoIII}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>El Padrino III</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
}

export default Inicio;