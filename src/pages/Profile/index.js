import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Form>
                <Input name="name" placeholder="Seu nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />

                <hr />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua nova senha"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button">Sair do GoBarber</button>
        </Container>
    );
}
