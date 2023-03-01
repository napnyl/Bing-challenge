import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Result = ({ result }) => {
    return (
        <div style={{padding:2}}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                <a href={result.url}>{result.name}</a>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {result.snippet}
            </Typography>
          </CardContent>
        </Box>
        {result.thumbnailUrl!=null &&
            <CardMedia
            component="img"
            sx={{ width: 100, height:100 }}
            image={result.thumbnailUrl}
            style={{padding: 10}}
            />
        }
      </Card>
      </div>
    )
}
export default Result