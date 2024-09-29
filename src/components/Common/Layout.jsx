// src/components/Common/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main style={{ marginTop: '64px', marginLeft: '240px', padding: '24px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
