// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const TelaPainel = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* Painel Esquerdo */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }} src='/path-to-image.jpg' />
                    <Box>
                      <Typography variant='h6'>Olá, Luciana Maria Vaz Allan</Typography>
                      <Typography variant='body2' color='textSecondary'>Apex 3 (Advanced 3)</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body2' color='textSecondary'>
                      status da conta
                    </Typography>
                    <Typography variant='body2' color='success.main'>
                      plano ativo
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              {/* Aumentar o tamanho do Perfil Acadêmico */}
              <Card sx={{ minHeight: '300px', padding: '20px' }}> {/* Aumentei a altura e o espaçamento interno */}
                <CardContent>
                  <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 4 }}> {/* Aumentei o tamanho do título */}
                    Perfil Acadêmico
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                      <CircularProgress variant="determinate" value={45} size={120} thickness={6} /> {/* Aumentei o tamanho e a espessura do CircularProgress */}
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant='h3' component='div' color='textPrimary' sx={{ ml: -5 }}> {/* Aumentei a porcentagem para h3 */}
                          75%
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ ml: 5 }}> {/* Aumentei o espaçamento entre o círculo e o texto */}
                      <Typography variant='h5' sx={{ fontWeight: 'bold' }}> {/* Aumentei o título para h5 */}
                        Apex 3 (Advanced 3)
                      </Typography>
                      <Typography variant='body1' color='textSecondary'> {/* Aumentei o subtítulo para body1 */}
                        15 aulas restantes
                      </Typography>
                    </Box>
                    <Button variant='contained' sx={{ ml: 'auto', fontSize: '1.1rem', padding: '10px 30px' }}> {/* Aumentei o botão */}
                      ACESSAR
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant='h6'>Agendamentos</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant='h6'>Dados da Conta</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Painel Direito */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box component='img' src='/path-to-image.jpg' sx={{ width: '100%', borderRadius: 1 }} />
              <Box sx={{ mt: 2 }}>
                <Typography variant='h6'>Apex 3 (Advanced 3)</Typography>
                <Typography variant='body2' color='textSecondary'>
                  Inglês Avançado
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant='body2' color='textSecondary'>
                    Progresso
                  </Typography>
                  <LinearProgress variant='determinate' value={90} sx={{ mt: 1 }} />
                  <Typography variant='caption'>15 aulas restantes</Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant='body2' color='textSecondary'>
                    Duração: 6 meses
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    data de renovação: 10/02/2025
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </ApexChartWrapper>
  )
}

export default TelaPainel
