import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const EnterpriseLayout = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <aside style={{ width: '250px', background: '#2c3e50', color: '#ecf0f1', position: 'fixed', height: '100%' }}>
                <h2 style={{ padding: '20px', fontWeight: 'bold' }}>Company Name</h2>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
                            <FaHome style={{ marginRight: '10px' }} />
                            Home
                        </li>
                        <li style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
                            <FaUser style={{ marginRight: '10px' }} />
                            Profile
                        </li>
                        <li style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
                            <FaCog style={{ marginRight: '10px' }} />
                            Settings
                        </li>
                    </ul>
                </nav>
            </aside>
            <main style={{ marginLeft: '250px', padding: '20px', flexGrow: 1 }}>
                <header style={{ background: '#34495e', color: '#ecf0f1', padding: '20px', position: 'sticky', top: 0 }}>
                    <h1>Dashboard</h1>
                </header>
                <section style={{ marginTop: '20px' }}>
                    {/* Main content goes here */}
                    <p>Welcome to the enterprise layout!</p>
                </section>
            </main>
        </div>
    );
};

export default EnterpriseLayout;