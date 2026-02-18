'use client';
import React, { useState } from 'react';
import './Merx.css';
import { Carousel, Form, Input, Select, Button, message } from 'antd';

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
  const [sending, setSending] = useState(false);

  const onFinish = async (values: FormValues) => {
    setSending(true);
    try {
      const res = await fetch("/api/merx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        messageApi.open({
          type: "success",
          content: "S'ha enviat la teva comanda correctament! Rebràs un correu de confirmació aviat.",
        });
        form.resetFields();
      } else {
        messageApi.open({
          type: "error",
          content: "Hi ha hagut un error. Torna-ho a intentar.",
        });
      }
    } catch {
      messageApi.open({
        type: "error",
        content: "Hi ha hagut un error. Torna-ho a intentar.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="merxStyle">
      {contextHolder}
      <div className="merx-overlay" />
      <div className="merx-inner">
        <div className="merx-header">
          <h2 className="merx-title">Merxandatge</h2>
          <p className="merx-subtitle">Porta La Fulla amb tu</p>
        </div>

        <div className="merx-content">
          <div className="carouselContainer">
            <Carousel autoplay arrows>
              {['merxan1', 'merxan2', 'merxan3', 'merxan4'].map((img, idx) => (
                <div key={idx} className="carousel-slide-merx">
                  <img
                    src={`/media/${img}.jpeg`}
                    alt={`Producte ${idx + 1}`}
                    className="carouselImage"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="formContainer">
            <h3 className="form-title">Fes la teva comanda</h3>
            <p className="form-subtitle">Escull el producte, talla i introdueix les teves dades</p>

            <Form form={form} layout="vertical" onFinish={onFinish} className="merx-form">
              <Form.Item label="Producte" name="product" rules={[{ required: true, message: 'Selecciona un producte' }]}>
                <Select placeholder="Selecciona un producte">
                  <Option value="samarreta-nucs">Samarreta Nucs de Vidre — 15€</Option>
                  <Option value="dessuadora-nucs">Dessuadora Nucs de Vidre — 20€</Option>
                  <Option value="samarreta-pnhp">Samarreta PNHP — 20€</Option>
                  <Option value="disc-fisic">Disc físic — 8€</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Talla" name="size" rules={[{ required: true, message: 'Selecciona una talla' }]}>
                <Select placeholder="Selecciona una talla">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <Option key={size} value={size}>{size}</Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item label="Correu electrònic" name="email" rules={[{ type: 'email', required: true, message: 'Introdueix un correu vàlid' }]}>
                <Input placeholder="tu@email.com" />
              </Form.Item>

              <Form.Item label="Telèfon mòbil" name="phone" rules={[{ required: true, message: 'Introdueix el teu telèfon' }]}>
                <Input placeholder="612 345 678" />
              </Form.Item>

              <Form.Item label="Comentaris" name="comments">
                <TextArea rows={3} placeholder="Peticions especials, dedicatòries..." />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="submitButton"
                  block
                  loading={sending}
                  disabled={sending}
                >
                  {sending ? "Enviant..." : "Enviar comanda"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}