import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'RaphaelAlumni' && password === 'Ruiz@123') {
      localStorage.setItem('authToken', 'userAuthenticated');
      router.push('/');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: 'url("/images/background/alumni-studant.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de sobreposição com opacidade
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco com transparência
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2, // Coloca o conteúdo acima da sobreposição
        }}
      >
        {/* Logo da Alumni */}
        <Box mb={4}>
          <Image
            src="/images/logos/alumni_logo-blue.png"
            alt="Alumni Logo"
            width={120}
            height={40}
          />
        </Box>

        {/* Título */}
        <Typography variant="h5" gutterBottom>
          Painel do Aluno
        </Typography>

        {/* Campos de login */}
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}

        {/* Botão de login */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            marginTop: 2,
            background: 'linear-gradient(90deg, #0517ce, #e62434)', // Gradiente no botão
            color: 'white',
            height: '50px',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              opacity: 0.9,
              background: 'linear-gradient(90deg, #0517ce, #e62434)', // Manter o gradiente no hover
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
