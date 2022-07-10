import React from 'react'
import '../../Styles/FormPosts.css'
import { Form, Button, FloatingLabel } from 'react-bootstrap';


const FormPosts = () => {
  return (
    <section className='formcreate-container'>
      <div className='formcreate-wrapper'>
        <h4 className='formcreate-title'>Publica tu receta</h4>
        <Form>
        <Form.Group>
          <Form.Label className='formcreate-label'>
            Título de la publicación:
          </Form.Label>
          <Form.Control className="formcreate-control" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label className='formcreate-label'>
            Autor:
          </Form.Label>
          <Form.Control className="formcreate-control" type="text" />
        </Form.Group>

        <Form.Label className='formcreate-label'>
          Escoge la categoría:
        </Form.Label>
          <Form.Select className="formcreate-select" aria-label="Default select example">
            <option className='formcreate-option'>
              Categorías
            </option>
            <option className='formcreate-option' value="1">
              Celiáticos
            </option>
            <option className='formcreate-option' value="2">
              Diabéticos
            </option>
            <option className='formcreate-option' value="3">
              Vegetarianos
            </option>
            <option className='formcreate-option' value="4">
              Veganos
            </option>
            <option className='formcreate-option' value="5">
              Fitness
            </option>
            <option className='formcreate-option' value="6">
              Bajo en Calorías
            </option>
          </Form.Select>

          <Form.Group>
            <Form.Label className='formcreate-label'>
              Descripción:
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea">
              <Form.Control className='formcreate-control2' as="textarea"/>
            </FloatingLabel>

            <Form.Label className='formcreate-label'>
              Pasos e ingredientes:
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control className='formcreate-control2' as="textarea"/>
            </FloatingLabel>
          </Form.Group>

          <Button className='btn-crear' type="submit">
            Crear
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default FormPosts