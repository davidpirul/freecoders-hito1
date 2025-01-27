import * as React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
//import '../assets/css/estilocrearperfil.css';

export default function CrearDatosPerfil() {
  const mainForm = useRef(null)
  const [rate, setRate] = useState(10000);

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(mainForm.current)
  }

  return (
    <Form ref={mainForm} onSubmit={handleSubmit}>
      <div className="maincontainer">
        <h2>Ingresa tus datos para crear tu perfil</h2>
      </div>

      <div className="maincontainer">
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Agregar nombre" name="nombre" />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Agregar apellido" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar contraseña" />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirmar contraseña" />
        </Form.Group>

        <Form.Group controlId="formRate">
          <Form.Label>Valor por hora: ${rate}</Form.Label>
          <RangeSlider
            value={rate}
            min={10000}
            max={500000}
            step={1}
            onChange={handleRateChange}
          />
          <Button variant="primary" type="submit" className="consolas-font">
            Guardar datos
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
}
