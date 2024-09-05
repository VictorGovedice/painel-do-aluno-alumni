// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types


const TotalEarning = () => {
  return (
    <Card>
      <CardHeader
        title='Aluno Alumni'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
            Raphael Ruiz
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
            <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
          </Box>
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 10 }}>
          Nivel do curso
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TotalEarning
