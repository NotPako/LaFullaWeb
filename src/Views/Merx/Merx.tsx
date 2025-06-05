import React from 'react';
import './Merx.css';
import { Carousel, Form, Input, Select, Typography, Button, message } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  product: string;
  size: string;
  email: string;
  phone: string;
  comments?: string;
}

export default function Merx() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: FormValues) => {
    console.log('Form data:', values);

    messageApi.open({
      type: 'success',
      content: "S'ha enviat la teva comanda correctament! Rebràs un correu de confirmació aviat.",
    });

    form.resetFields();
  };

  return (
    <div className='merxStyle'>
      {/* Carrusel */}
      <div className='carouselContainer'>
        <Carousel autoplay arrows>
          {['merxan1', 'merxan2', 'merxan3', 'merxan4'].map((img, idx) => (
            <div key={idx}>
              <img
                src={`/media/${img}.jpeg`}
                alt={`Imagen ${idx + 1}`}
                className="carouselImage"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Formulario */}
      {contextHolder}
      <div className='formContainer'>
        <Title level={3} style={{ color: '#ffcc00' }}>Fes la teva comanda</Title>
        <Paragraph style={{ color: '#ffffff' }}>
          Escull el producte, talla i introdueix les teves dades:
        </Paragraph>

        <Form form={form} layout="vertical" onFinish={onFinish}>
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
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <Option key={size} value={size}>{size}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Correu electrònic" name="email" rules={[{ type: 'email', required: true }]}>
            <Input placeholder="Ex: tu@email.com" />
          </Form.Item>

          <Form.Item label="Telèfon mòbil" name="phone" rules={[{ required: true }]}>
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
