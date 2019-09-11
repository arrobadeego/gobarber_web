import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logopurple.svg';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="gobarber" />
                    <Link to="/dashboard">DASHBOARD</Link>

                    <aside>
                        <Profile>
                            <div>
                                <strong>Diego</strong>
                                <Link to="/profile">Meu perfil</Link>
                            </div>
                            <img
                                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                                alt="avatar"
                            />
                        </Profile>
                    </aside>
                </nav>
            </Content>
        </Container>
    );
}
