import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/home">Home</Link>
      <Link href="/add-client" style={{backgroundColor:'green'}}>Inserir Cliente</Link>
    </nav>
  );
};

export default Navbar;
