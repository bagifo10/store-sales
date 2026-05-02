import { useState, useRef } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30000; // 30 seconds

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [locked, setLocked] = useState(false);
    const attemptsRef = useRef(0);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (locked) return;

        // Rate limiting: lock after MAX_ATTEMPTS failed attempts
        attemptsRef.current += 1;
        if (attemptsRef.current > MAX_ATTEMPTS) {
            setLocked(true);
            setError(`Demasiados intentos fallidos. Esperá 30 segundos.`);
            setTimeout(() => {
                setLocked(false);
                attemptsRef.current = 0;
                setError('');
            }, LOCKOUT_MS);
            return;
        }

        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            attemptsRef.current = 0; // Reset on success
            navigate('/admin');
        } catch (err) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ml-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="ml-card" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Panel de Acceso</h2>
                {error && <p style={{ color: 'red', textAlign: 'center', fontSize: '14px' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Email</label>
                        <input
                            type="email"
                            className="ml-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            maxLength={100}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="ml-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            maxLength={128}
                        />
                    </div>
                    <button
                        type="submit"
                        className="ml-button"
                        style={{ width: '100%', opacity: locked || loading ? 0.6 : 1, cursor: locked || loading ? 'not-allowed' : 'pointer' }}
                        disabled={locked || loading}
                    >
                        {loading ? 'Ingresando...' : locked ? 'Bloqueado temporalmente' : 'Ingresar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
