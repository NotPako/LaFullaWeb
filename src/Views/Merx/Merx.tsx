import React from 'react';
import './Merx.css';
import { Carousel, Form, Input, Select, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function Merx() {
  const onFinish = (values: any) => {
    console.log('Form data:', values);
  };

  return (
    <div className='merxStyle'>
      {/* Carrusel a la izquierda */}
      <div className='carouselContainer'>
        <Carousel autoplay arrows>
          <div>
            <img src="/media/merxan1.jpeg" alt="Imagen 1" className="carouselImage" />
          </div>
          <div>
            <img src="/media/merxan2.jpeg" alt="Imagen 2" className="carouselImage" />
          </div>
          <div>
            <img src="/media/merxan3.jpeg" alt="Imagen 3" className="carouselImage" />
          </div>
          <div>
            <img src="/media/merxan4.jpeg" alt="Imagen 4" className="carouselImage" />
          </div>
        </Carousel>
      </div>

      {/* Formulario a la derecha */}
      <div className='formContainer'>
        <Title level={3} style={{ color: '#ffcc00' }}>Fes la teva comanda</Title>
        <Paragraph style={{ color: '#ffffff' }}>Escull el producte, talla i introdueix les teves dades</Paragraph>
         <Paragraph style={{ color: '#ffffff' }}>Es ficarem en contacte amb tú per tramitar el pagament i l'enviament</Paragraph>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Producte" name="product" rules={[{ required: true }]}>
            <Select placeholder="Selecciona un producte">
              <Option value="samarreta-nucs">Samarreta Nucs de Vidre - 15€</Option>
              <Option value="dessuadora-nucs">Dessuadora Nucs de Vidre - 20€</Option>
              <Option value="samarreta-pnhp">Samarreta PNHP - 20€</Option>
              <Option value="disc-fisic">Disc físic - 8€</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Talla" name="size" rules={[{ required: true }]}>
            <Select placeholder="Selecciona una talla">
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Correu electrònic" name="Correu" rules={[{ type: 'email', required: true }]}>
            <Input placeholder="Ex: tu@email.com" />
          </Form.Item>

          <Form.Item label="Telèfon mòbil" name="Telèfon" rules={[{ required: true }]}>
            <Input placeholder="Ex: 612345678" />
          </Form.Item>

          <Form.Item label="Comentaris extres" name="comments">
            <TextArea rows={3} placeholder="Afegeix comentaris o peticions especials..." />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className="submitButton">
              Enviar comanda
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
